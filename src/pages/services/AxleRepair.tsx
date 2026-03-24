import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const AxleRepair = () => {
  const service = getServiceBySlug('axle-repair')!;
  return <ServicePageTemplate service={service} />;
};
