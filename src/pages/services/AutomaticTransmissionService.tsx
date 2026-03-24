import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const AutomaticTransmissionService = () => {
  const service = getServiceBySlug('automatic-transmission-service')!;
  return <ServicePageTemplate service={service} />;
};
