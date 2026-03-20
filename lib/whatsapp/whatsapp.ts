/**
 * Stellar Manufacturing & Automation
 * WhatsApp Utility - MAPS 2.0 Standard
 * Location: /lib/whatsapp/whatsapp.ts
 */

// ¡AQUÍ ESTÁ EL CAMBIO DEL NÚMERO NUEVO!
const STELLAR_PHONE = "526648505801";

export type WhatsAppIntent = 'generic' | 'rfq' | 'workstation' | 'engineering' | 'location';

/**
 * Generates a localized WhatsApp link based on user intent.
 * (Idea 2: Saber qué sección generó el lead | Idea 3: Soporte multi-idioma)
 */
export const getWhatsAppLink = (intent: WhatsAppIntent = 'generic', lang: 'en' | 'es' = 'en'): string => {
  
  const messages = {
    en: {
      generic: "Hello, I'm interested in Stellar's engineering services.",
      rfq: "Hello, I would like to request a quote (RFQ) for an automation project.",
      workstation: "Hi, I saw your custom workstations and would like to know more technical specs.",
      engineering: "Hello, I need engineering support for a critical manufacturing process.",
      location: "Hi, I'm interested in your cross-border services in the Tijuana/San Diego region."
    },
    es: {
      generic: "Hola, me interesan los servicios de ingeniería de Stellar.",
      rfq: "Hola, me gustaría solicitar una cotización (RFQ) para un proyecto de automatización.",
      workstation: "Hola, vi sus estaciones de trabajo personalizadas y me gustaría conocer más especificaciones.",
      engineering: "Hola, necesito soporte de ingeniería para un proceso crítico de manufactura.",
      location: "Hola, me interesan sus servicios cross-border en la región Tijuana/San Diego."
    }
  };

  const selectedMessage = messages[lang][intent] || messages[lang].generic;
  const encodedMessage = encodeURIComponent(selectedMessage);
  
  // Esto genera el link final con el número y el texto listo para enviar
  return `https://wa.me/${STELLAR_PHONE}?text=${encodedMessage}`;
};

/**
 * Legacy support for previous implementations
 */
export const getStellarContactLink = () => {
  return getWhatsAppLink('rfq', 'en');
};

/**
 * Base utility for raw links
 */
export const createWhatsAppLink = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};