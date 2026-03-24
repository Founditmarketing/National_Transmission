import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TransmissionRepair = () => {
  const service = getServiceBySlug('transmission-repair')!;
  return <ServicePageTemplate service={service} />;
};
