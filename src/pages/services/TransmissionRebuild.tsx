import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TransmissionRebuild = () => {
  const service = getServiceBySlug('transmission-rebuild')!;
  return <ServicePageTemplate service={service} />;
};
