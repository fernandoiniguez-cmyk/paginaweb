export interface SiteConfig {
  name: string;
  founder: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    address: string;
    serviceArea: string;
  };
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
  };
  schedule: {
    hours: string;
    days: string;
  };
  branding: {
    colors: {
      primary: string;
      secondary: string;
    };
  };
}