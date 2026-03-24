import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TireSalesInstallation = () => {
  const service = getServiceBySlug('tire-sales-installation')!;
  return <ServicePageTemplate service={service} />;
};
