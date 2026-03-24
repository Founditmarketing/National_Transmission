import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const AbsDiagnosticsRepair = () => {
  const service = getServiceBySlug('abs-diagnostics-repair')!;
  return <ServicePageTemplate service={service} />;
};
