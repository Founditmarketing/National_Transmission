import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const TransferCaseRepair = () => {
  const service = getServiceBySlug('transfer-case-repair')!;
  return <ServicePageTemplate service={service} />;
};
