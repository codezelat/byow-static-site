export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  audience: string[];
  mobileImage: string;
  logo: string;
  ctaText: string;
  appStore: boolean;
  googlePlay: boolean;
  subtitle?: string;
  extraDescription?: string;
}