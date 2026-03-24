import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const CoolingSystemRepair = () => {
  const service = getServiceBySlug('cooling-system-repair')!;
  return <ServicePageTemplate service={service} />;
};
