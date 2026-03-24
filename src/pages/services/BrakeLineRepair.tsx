import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const BrakeLineRepair = () => {
  const service = getServiceBySlug('brake-line-repair')!;
  return <ServicePageTemplate service={service} />;
};
