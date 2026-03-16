/**
 * Helper to ensure CTA objects maintain a consistent shape
 */
export interface CTAData {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isExternal?: boolean;
}

export const createCTA = (
  label: string, 
  href: string, 
  variant: CTAData["variant"] = "primary",
  isExternal: boolean = false
): CTAData => {
  return {
    label,
    href,
    variant,
    isExternal
  };
};

export const getLinkProps = (cta: CTAData) => {
  if (cta.isExternal || cta.href.startsWith("http") || cta.href.startsWith("https")) {
    return {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }
  return {};
};