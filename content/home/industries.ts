import { Industry } from "@/types/industry";

export const industriesContent = {
  eyebrow: "Critical Industries",
  title: "Built for High-Precision Manufacturing Sectors",
  subtitle: "Engineering support for production environments where reliability, repeatability, and control matter.",
  industries: [
    { name: "Medical Devices", description: "Automation and tooling for high-compliance device assembly.", tag: "ISO 13485 Support" },
    { name: "Aerospace", description: "Precision components and workstations for critical systems.", tag: "High-Tolerance" },
    { name: "Electronics", description: "Custom cells for PCBA handling and precision testing.", tag: "ESD Controlled" },
    { name: "Advanced Mfg", description: "Nearshoring-ready automation for US/MX cross-border operations.", tag: "Efficiency" }
  ] as Industry[]
};