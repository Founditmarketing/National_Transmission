import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const OilChangeService = () => {
  const service = getServiceBySlug('oil-change-service')!;
  return <ServicePageTemplate service={service} />;
};
