import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const DifferentialService = () => {
  const service = getServiceBySlug('differential-service')!;
  return <ServicePageTemplate service={service} />;
};
