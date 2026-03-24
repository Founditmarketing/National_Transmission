import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../data/serviceData';

export const BrakeRotorResurfacing = () => {
  const service = getServiceBySlug('brake-rotor-resurfacing')!;
  return <ServicePageTemplate service={service} />;
};
