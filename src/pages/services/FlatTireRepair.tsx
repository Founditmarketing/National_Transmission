import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const FlatTireRepair = () => {
  const service = getServiceBySlug('flat-tire-repair')!;
  return <ServicePageTemplate service={service} />;
};
