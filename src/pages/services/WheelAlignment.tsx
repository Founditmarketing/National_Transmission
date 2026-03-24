import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const WheelAlignment = () => {
  const service = getServiceBySlug('wheel-alignment')!;
  return <ServicePageTemplate service={service} />;
};
