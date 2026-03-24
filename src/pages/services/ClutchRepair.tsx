import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const ClutchRepair = () => {
  const service = getServiceBySlug('clutch-repair')!;
  return <ServicePageTemplate service={service} />;
};
