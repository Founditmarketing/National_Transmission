import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const ManualTransmissionService = () => {
  const service = getServiceBySlug('manual-transmission-service')!;
  return <ServicePageTemplate service={service} />;
};
