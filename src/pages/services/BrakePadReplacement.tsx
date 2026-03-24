import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const BrakePadReplacement = () => {
  const service = getServiceBySlug('brake-pad-replacement')!;
  return <ServicePageTemplate service={service} />;
};
