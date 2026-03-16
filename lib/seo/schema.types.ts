export interface SchemaProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contact: {
    telephone: string;
    contactType: string;
  };
}