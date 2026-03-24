import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

const BASE_URL = 'https://nationaltransmission.vercel.app';
const DEFAULT_OG_IMAGE = '/images/about.png';

export const SEOHead = ({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('name', 'description', description);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', `${BASE_URL}${canonicalPath}`);
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('property', 'og:site_name', 'National Tire & Auto');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${canonicalPath}`);

    // Geo meta tags
    setMeta('name', 'geo.region', 'US-LA');
    setMeta('name', 'geo.placename', 'Pineville, Louisiana');
    setMeta('name', 'geo.position', '31.3224;-92.4344');
    setMeta('name', 'ICBM', '31.3224, -92.4344');
  }, [title, description, canonicalPath, ogImage]);

  return null;
};
