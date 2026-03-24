import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const CvJointRepair = () => {
  const service = getServiceBySlug('cv-joint-repair')!;
  return <ServicePageTemplate service={service} />;
};
