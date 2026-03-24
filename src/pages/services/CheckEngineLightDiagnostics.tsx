import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const CheckEngineLightDiagnostics = () => {
  const service = getServiceBySlug('check-engine-light-diagnostics')!;
  return <ServicePageTemplate service={service} />;
};
