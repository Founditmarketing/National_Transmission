import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const ShocksStrutsReplacement = () => {
  const service = getServiceBySlug('shocks-struts-replacement')!;
  return <ServicePageTemplate service={service} />;
};
