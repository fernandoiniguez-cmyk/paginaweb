import { ProjectItem } from "@/types/project";

export const projectsContent = {
  eyebrow: "Applications",
  title: "Automation Applications for Critical Environments",
  subtitle: "Examples of workstation and automation solution types aligned with high-precision processes.",
  items: [
    { title: "Custom Assembly Workstation", industry: "Medical Devices", application: "High-precision manual/semi-auto assembly.", status: "Active" },
    { title: "Precision Tooling Integration", industry: "Aerospace", application: "Jig design for repeatable component alignment.", status: "Active" },
    { title: "PLC/HMI Operator Station", industry: "Electronics", application: "Controlled testing and assembly cycle management.", status: "Active" },
    { title: "Process-Specific Mfg Cell", industry: "General Advanced Mfg", application: "Integrated cell for high-volume part processing.", status: "Active" }
  ] as ProjectItem[]
};