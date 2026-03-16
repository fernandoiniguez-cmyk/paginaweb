import { SchemaProps } from "./schema.types";

export const generateOrganizationSchema = (data: SchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "logo": data.logo,
    "image": data.logo,
    "address": {
      "@type": "PostalAddress",
      ...data.address
    },
    "telephone": data.contact.telephone,
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.5149",
      "longitude": "-117.0382"
    },
    "sameAs": [
      "https://wa.me/526643755043"
      // Agregar LinkedIn aquí cuando exista
    ]
  };
};