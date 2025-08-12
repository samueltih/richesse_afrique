export interface ProductOption {
  key: string;
  name: string;
  isColor?: boolean;
  values: Array<string | number>;
}

export interface ProductVariant {
  optionId: number;
  title: string;
  images: string;
  price: number;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id?: number;
  title: string;
  description: string;
  reference: string;
  price: number;
  images: Array<ProductImage>;
  variants?: Array<ProductVariant>;
  options?: Array<ProductOption>;
}

// -- Settings
interface SiteSettings {
  name: string;
  title: string;
  slogan: string;
  metaDescription: string;
  metaKeywords: string[];
  logo: string; // url
  emailLogo: string; // url
  favicon: string; // url
}

interface MobileAppLink {
    platform: 'ios' | 'android',
    link: string // url
}

interface Address {
    city: string,
    country: string,
    street: string,
    zipCode: string
}

export type SocialPlatform = 'instagram' | 'facebook' | 'twitter-x' | 'linkedin' | 'tiktok' | 'google+';

interface SocialLink {
    platform: SocialPlatform,
    link: string
}

type MapProvider = 'google' | 'openstreetmap';

export interface AppSettings {
  site: SiteSettings
  app: Array<MobileAppLink>;
  address: Array<Address>;
  social: Array<SocialLink>;
  mapProvider: MapProvider; // Can be leaflet
}