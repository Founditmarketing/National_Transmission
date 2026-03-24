import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TransmissionDiagnostics = () => {
  const service = getServiceBySlug('transmission-diagnostics')!;
  return <ServicePageTemplate service={service} />;
};
