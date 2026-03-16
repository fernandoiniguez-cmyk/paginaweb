import { Capability } from "@/types/capability";

export const capabilitiesContent = {
  eyebrow: "Technical Capabilities",
  title: "Core Engineering and Automation Capabilities",
  subtitle: "From workstation design and tooling to PLC/HMI integration and system implementation.",
  capabilities: [
    { name: "Custom Automated Workstations", description: "Ergonomic and process-controlled assembly stations.", tag: "Hardware" },
    { name: "PLC Integration", description: "Logic programming for complex industrial sequences.", tag: "Control" },
    { name: "HMI Integration", description: "Intuitive operator interfaces for monitoring and control.", tag: "UI/UX" },
    { name: "Precision Tooling", description: "Custom jigs and fixtures for repeatable manufacturing.", tag: "Precision" },
    { name: "System Integration", description: "Connecting isolated processes into a cohesive production line.", tag: "Execution" },
    { name: "Manufacturing Engineering", description: "Process optimization through technical support.", tag: "Solutions" }
  ] as Capability[]
};