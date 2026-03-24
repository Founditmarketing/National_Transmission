import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TransmissionFlush = () => {
  const service = getServiceBySlug('transmission-flush')!;
  return <ServicePageTemplate service={service} />;
};
