import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TireRotationBalancing = () => {
  const service = getServiceBySlug('tire-rotation-balancing')!;
  return <ServicePageTemplate service={service} />;
};
