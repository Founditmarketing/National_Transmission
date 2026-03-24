import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const PowerSteeringRepair = () => {
  const service = getServiceBySlug('power-steering-repair')!;
  return <ServicePageTemplate service={service} />;
};
