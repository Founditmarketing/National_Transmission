import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const DriveshaftRepair = () => {
  const service = getServiceBySlug('driveshaft-repair')!;
  return <ServicePageTemplate service={service} />;
};
