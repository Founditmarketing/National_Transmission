export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'National Tire & Auto <onboarding@resend.dev>',
        to: 'nattransmission@gmail.com',
        reply_to: email,
        subject: `New Estimate Request: ${service || 'General Inquiry'} — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1A1A1A; padding: 24px; text-align: center;">
              <h1 style="color: #C41E3A; margin: 0; font-size: 24px;">National Tire & Auto</h1>
              <p style="color: #D4D4D4; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px;">NEW ESTIMATE REQUEST</p>
            </div>
            <div style="background-color: #2D3436; padding: 32px; color: #F5F5F5;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #D4D4D4; width: 120px; vertical-align: top;">
                    <strong>Name</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #D4D4D4; vertical-align: top;">
                    <strong>Email</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <a href="mailto:${email}" style="color: #3D5A80;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #D4D4D4; vertical-align: top;">
                    <strong>Phone</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    ${phone || 'Not provided'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #D4D4D4; vertical-align: top;">
                    <strong>Service</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="background-color: #C41E3A; color: white; padding: 4px 12px; font-size: 12px;">${service || 'Not specified'}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #D4D4D4; vertical-align: top;">
                    <strong>Message</strong>
                  </td>
                  <td style="padding: 12px 0;">
                    ${message}
                  </td>
                </tr>
              </table>
            </div>
            <div style="background-color: #0A1628; padding: 16px; text-align: center;">
              <p style="color: #D4D4D4; margin: 0; font-size: 11px;">
                This message was sent from the National Tire & Auto website contact form.
                <br/>Reply directly to this email to respond to the customer.
              </p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', data);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: data }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Send email error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
