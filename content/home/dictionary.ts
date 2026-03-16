import { getWhatsAppLink } from "@/lib/whatsapp/whatsapp";

export const homeDictionary = {
  en: {
    hero: {
      title: "Industrial Automation & Custom Workstations in Tijuana",
      subtitle: "Engineering solutions for critical manufacturing processes — from concept to full system integration.",
      primaryCta: { label: "Request Engineering Consultation", href: "#cta" },
      secondaryCta: { label: "Start an Automation Project", href: "#workstations" }
    },
    credibility: {
      items: [
        { label: "Medical Devices" },
        { label: "Aerospace" },
        { label: "Electronics" },
        { label: "Advanced Manufacturing" },
        { label: "PLC / HMI Integration" },
        { label: "Cross-Border Engineering" }
      ]
    },
    workstation: {
      eyebrow: "Flagship Solution",
      title: "Custom Automated Workstations Built for Your Process",
      subtitle: "Designed, built and integrated for critical manufacturing processes where precision, repeatability and control are non-negotiable.",
      highlights: [
        { title: "Custom Engineering", desc: "Custom-built for specific production requirements." },
        { title: "Control Architecture", desc: "PLC and HMI integration for real-time control." },
        { title: "Precision Tooling", desc: "Precision tooling for repeatable manufacturing." },
        { title: "Critical Industries", desc: "Built for medical, aerospace and electronics applications." }
      ],
      primaryCta: { label: "Request RFQ", href: "#cta" },
      hotspots: [
        { x: 80, y: 20, label: "PLC-Controlled Logic" },
        { x: 25, y: 30, label: "HMI Interface" },
        { x: 60, y: 45, label: "Custom Precision Tooling" },
        { x: 50, y: 60, label: "Integrated Structure" },
        { x: 40, y: 75, label: "Process Assembly Area" }
      ]
    },
    process: {
      eyebrow: "Engineering Workflow",
      title: "From Concept to Full System Integration",
      subtitle: "Every automation system we build follows a structured engineering process designed to ensure precision, reliability and seamless integration into your production environment.",
      steps: [
        { title: "Discovery", description: "Understanding your manufacturing process, production requirements and technical constraints." },
        { title: "Engineering Design", description: "Developing the mechanical, electrical and control architecture for the automated system." },
        { title: "Manufacturing", description: "Precision fabrication and assembly of the custom workstation and mechanical systems." },
        { title: "System Integration", description: "Programming PLC logic, configuring HMI interfaces and integrating all subsystems into a unified automation platform." },
        { title: "Deployment & Support", description: "Installation, commissioning and ongoing technical support to ensure your system performs reliably in production." }
      ]
    },
    industries: {
      eyebrow: "Industries We Support",
      title: "Automation Solutions for Critical Manufacturing Industries",
      subtitle: "Our engineering and automation systems are designed to meet the demanding requirements of high-precision manufacturing sectors.",
      industries: [
        { name: "Medical Devices", description: "Automation systems for precision medical device manufacturing where repeatability, validation and quality control are essential.", iconType: "medical" },
        { name: "Aerospace", description: "Engineering automation solutions for aerospace manufacturing environments requiring reliability and strict process control.", iconType: "aerospace" },
        { name: "Electronics", description: "Custom automated workstations for electronics assembly, testing and precision component handling.", iconType: "electronics" },
        { name: "Advanced Manufacturing", description: "Automation engineering solutions for complex production environments requiring custom tooling and integrated control systems.", iconType: "manufacturing" }
      ]
    },
    whyStellar: {
      eyebrow: "Why Stellar",
      title: "Engineering Partner for Critical Manufacturing",
      subtitle: "We combine engineering expertise, automation architecture and cross-border execution to deliver reliable systems for demanding manufacturing environments.",
      items: [
        { title: "Concept to Implementation", description: "From early engineering design to final system deployment, we develop automation solutions as a complete engineering partner.", iconType: "flowchart" },
        { title: "Critical Industries Focus", description: "Our systems are designed for manufacturing environments where precision, repeatability and process control are essential.", iconType: "shield" },
        { title: "Custom Automation Engineering", description: "Every workstation and system is engineered around your process requirements, production goals and technical constraints.", iconType: "blueprint" },
        { title: "Cross-Border Engineering Advantage", description: "Located in Tijuana, we support manufacturers across Baja California and Southern California with efficient cross-border collaboration.", iconType: "crossborder" }
      ]
    },
    capabilities: {
      eyebrow: "Technical Capabilities",
      title: "Engineering Capabilities for Industrial Automation",
      subtitle: "Our team combines mechanical, electrical and control engineering expertise to design and integrate automation systems for complex manufacturing environments.",
      capabilities: [
        { title: "PLC Integration", description: "Development and integration of programmable logic controllers to manage automation processes and machine logic.", iconType: "plc" },
        { title: "HMI Programming", description: "Operator interfaces designed for monitoring, configuration and control of automated systems.", iconType: "hmi" },
        { title: "Custom Tooling Engineering", description: "Design and fabrication of precision tooling tailored to the specific requirements of each manufacturing process.", iconType: "tooling" },
        { title: "System Integration", description: "Mechanical, electrical and control systems integrated into a unified automation platform.", iconType: "integration" },
        { title: "CAD / Mechanical Design", description: "Engineering design and development of automation equipment and workstation structures.", iconType: "cad" },
        { title: "Automation Architecture", description: "Design of scalable automation systems optimized for reliability, efficiency and production performance.", iconType: "architecture" }
      ]
    },
    projects: {
      eyebrow: "Applications & Projects",
      title: "Automation Systems Built for Real Manufacturing Challenges",
      subtitle: "Examples of automation workstations and systems developed to improve efficiency, precision and process reliability.",
      items: [
        { title: "Precision Assembly Workstation", description: "Automated workstation designed for high-precision assembly processes requiring repeatability and tight tolerances.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
        { title: "Automated Testing System", description: "Integrated testing workstation for quality control and validation of manufacturing components.", imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" },
        { title: "Custom Tooling Integration", description: "Automation workstation incorporating custom tooling designed around specific production requirements.", imageSrc: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1200" },
        { title: "Process Automation Cell", description: "Integrated automation cell developed to improve production efficiency and process stability.", imageSrc: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" }
      ]
    },
    crossBorder: {
      eyebrow: "Cross-Border Engineering",
      title: "Strategically Located in Tijuana’s Manufacturing Hub",
      subtitle: "Supporting manufacturers across Baja California and Southern California with engineering, automation and system integration services.",
      mainText: "Tijuana is one of North America’s most important manufacturing regions, with strong connections to the San Diego industrial ecosystem.",
      highlights: [
        { title: "Close to major manufacturing clusters", description: "Located in one of the largest manufacturing hubs in Mexico." },
        { title: "Cross-border collaboration", description: "Efficient communication and collaboration with engineering teams in the United States." },
        { title: "Rapid project execution", description: "Proximity allows faster iterations, support and deployment." }
      ]
    },
    faq: {
      eyebrow: "Technical FAQ",
      title: "Common Questions About Our Automation Systems",
      subtitle: "Answers to common technical questions about our engineering, automation and system integration services.",
      items: [
        { question: "Do you design fully custom automation systems?", answer: "Yes. All automation systems and workstations are engineered specifically for the production requirements of each client. We design mechanical structures, control systems and tooling based on the specific manufacturing process." },
        { question: "Do you integrate PLC and HMI systems?", answer: "Yes. Our automation systems include PLC programming and HMI interfaces to control and monitor the production process, ensuring reliability and operational visibility." },
        { question: "Which industries do you typically support?", answer: "Our engineering solutions are commonly applied in medical devices, aerospace, electronics and advanced manufacturing environments requiring precision and repeatability." },
        { question: "Can you collaborate with engineering teams in the United States?", answer: "Yes. Our location in Tijuana allows efficient collaboration with companies in Baja California and Southern California, enabling cross-border engineering support and project coordination." },
        { question: "Do you provide support after system deployment?", answer: "Yes. We support installation, commissioning and ongoing technical assistance to ensure the automation system performs reliably in the production environment." },
        { question: "Can your systems integrate with existing production equipment?", answer: "Yes. Our engineering approach focuses on integrating automation systems with existing production lines, equipment and workflows whenever possible." }
      ]
    },
    cta: {
      eyebrow: "Start Your Automation Project",
      title: "Let’s Build Your Next Automation System",
      subtitle: "Tell us about your manufacturing challenge and our engineering team will help you design the right automation solution.",
      primaryCta: { label: "Request Engineering Consultation", href: getWhatsAppLink('rfq', 'en') },
      secondaryCta: { label: "Discuss Your Automation Project", href: "mailto:info@stellarmfgautomation.com" },
      trustNote: "Initial engineering consultations are free and focused on understanding your automation needs."
    },
    navigation: {
      header: {
        links: [
          { name: "Workstations", href: "#workstations" },
          { name: "Process", href: "#process" },
          { name: "Industries", href: "#industries" },
          { name: "Projects", href: "#projects" }
        ],
        cta: "Request RFQ",
        ctaHref: "#cta"
      },
      footer: {
        description: "Advanced engineering and custom automated workstations for critical manufacturing industries in the Cali-Baja region.",
        solutionsTitle: "Solutions",
        companyTitle: "Company",
        operationsTitle: "Operations Hub",
        location: "Tijuana, BC — San Diego, CA",
        support: "Cross-Border Engineering Support",
        rights: "Stellar Manufacturing and Automation. All rights reserved.",
        madeWith: "Made with",
        by: "by"
      }
    }
  },
  es: {
    hero: {
      title: "Automatización Industrial y Estaciones de Trabajo Custom en Tijuana",
      subtitle: "Soluciones de ingeniería para procesos críticos de manufactura — desde el concepto hasta la integración completa del sistema.",
      primaryCta: { label: "Solicitar consulta de ingeniería", href: "#cta" },
      secondaryCta: { label: "Iniciar un proyecto de automatización", href: "#workstations" }
    },
    credibility: {
      items: [
        { label: "Dispositivos Médicos" },
        { label: "Aeroespacial" },
        { label: "Electrónica" },
        { label: "Manufactura Avanzada" },
        { label: "Integración PLC / HMI" },
        { label: "Ingeniería Binacional" }
      ]
    },
    workstation: {
      eyebrow: "Solución principal",
      title: "Estaciones de Trabajo Automatizadas Diseñadas para tu Proceso",
      subtitle: "Diseñadas, fabricadas e integradas para procesos críticos de manufactura donde la precisión, la repetibilidad y el control no son negociables.",
      highlights: [
        { title: "Diseño a la Medida", desc: "Diseño custom para requerimientos específicos de producción." },
        { title: "Arquitectura de Control", desc: "Integración PLC y HMI para control en tiempo real." },
        { title: "Tooling de Precisión", desc: "Tooling de precisión para manufactura repetible." },
        { title: "Industrias Críticas", desc: "Diseñadas para aplicaciones médicas, aeroespaciales y electrónicas." }
      ],
      primaryCta: { label: "Solicitar RFQ", href: "#cta" },
      hotspots: [
        { x: 80, y: 20, label: "Lógica controlada por PLC" },
        { x: 25, y: 30, label: "Interfaz HMI" },
        { x: 60, y: 45, label: "Tooling de precisión custom" },
        { x: 50, y: 60, label: "Estructura integrada" },
        { x: 40, y: 75, label: "Área de ensamble específica" }
      ]
    },
    process: {
      eyebrow: "Flujo de ingeniería",
      title: "Del Concepto a la Integración Completa del Sistema",
      subtitle: "Cada sistema de automatización que desarrollamos sigue un proceso de ingeniería estructurado para asegurar precisión, confiabilidad e integración fluida en tu entorno de producción.",
      steps: [
        { title: "Discovery", description: "Entendemos tu proceso de manufactura, requerimientos de producción y restricciones técnicas." },
        { title: "Diseño de ingeniería", description: "Desarrollamos la arquitectura mecánica, eléctrica y de control del sistema automatizado." },
        { title: "Manufactura", description: "Fabricación y ensamble de precisión de la workstation custom y sus sistemas mecánicos." },
        { title: "Integración del sistema", description: "Programación PLC, configuración HMI e integración de todos los subsistemas en una sola plataforma." },
        { title: "Deployment y soporte", description: "Instalación, puesta en marcha y soporte técnico continuo para asegurar desempeño confiable en producción." }
      ]
    },
    industries: {
      eyebrow: "Industrias que atendemos",
      title: "Soluciones de Automatización para Industrias Críticas de Manufactura",
      subtitle: "Nuestros sistemas de ingeniería y automatización están diseñados para cumplir con los requerimientos exigentes de sectores de manufactura de alta precisión.",
      industries: [
        { name: "Dispositivos Médicos", description: "Sistemas de automatización para manufactura médica de precisión donde la repetibilidad, validación y control de calidad son esenciales.", iconType: "medical" },
        { name: "Aeroespacial", description: "Soluciones de automatización para entornos de manufactura aeroespacial que requieren confiabilidad y control estricto del proceso.", iconType: "aerospace" },
        { name: "Electrónica", description: "Estaciones de trabajo automatizadas para ensamble electrónico, testing y manejo de componentes de precisión.", iconType: "electronics" },
        { name: "Manufactura Avanzada", description: "Soluciones de ingeniería para entornos productivos complejos que requieren tooling custom y sistemas de control integrados.", iconType: "manufacturing" }
      ]
    },
    whyStellar: {
      eyebrow: "Por qué Stellar",
      title: "Socio de Ingeniería para Manufactura Crítica",
      subtitle: "Combinamos experiencia en ingeniería, arquitectura de automatización y ejecución binacional para entregar sistemas confiables en entornos de manufactura exigentes.",
      items: [
        { title: "Del concepto a la implementación", description: "Desde el diseño inicial hasta el despliegue final del sistema, desarrollamos soluciones de automatización como un socio integral de ingeniería.", iconType: "flowchart" },
        { title: "Enfoque en industrias críticas", description: "Nuestros sistemas están diseñados para entornos donde la precisión, repetibilidad y control del proceso son esenciales.", iconType: "shield" },
        { title: "Ingeniería de automatización custom", description: "Cada workstation y sistema se diseña alrededor de tus requerimientos de proceso, metas de producción y restricciones técnicas.", iconType: "blueprint" },
        { title: "Ventaja binacional de ingeniería", description: "Ubicados en Tijuana, apoyamos fabricantes en Baja California y Southern California con colaboración eficiente cross-border.", iconType: "crossborder" }
      ]
    },
    capabilities: {
      eyebrow: "Capacidades técnicas",
      title: "Capacidades de Ingeniería para Automatización Industrial",
      subtitle: "Nuestro equipo combina experiencia en ingeniería mecánica, eléctrica y de control para diseñar e integrar sistemas de automatización en entornos de manufactura complejos.",
      capabilities: [
        { title: "Integración PLC", description: "Desarrollo e integración de controladores lógicos programables para gestionar procesos de automatización y lógica de máquina.", iconType: "plc" },
        { title: "Programación HMI", description: "Interfaces de operador diseñadas para monitoreo, configuración y control de sistemas automatizados.", iconType: "hmi" },
        { title: "Ingeniería de tooling custom", description: "Diseño y fabricación de tooling de precisión adaptado a los requerimientos específicos de cada proceso.", iconType: "tooling" },
        { title: "Integración de sistemas", description: "Sistemas mecánicos, eléctricos y de control integrados en una sola plataforma de automatización.", iconType: "integration" },
        { title: "Diseño CAD / mecánico", description: "Diseño y desarrollo de equipos de automatización y estructuras de workstations.", iconType: "cad" },
        { title: "Arquitectura de automatización", description: "Diseño de sistemas escalables optimizados para confiabilidad, eficiencia y desempeño en producción.", iconType: "architecture" }
      ]
    },
    projects: {
      eyebrow: "Aplicaciones y proyectos",
      title: "Sistemas de Automatización Diseñados para Retos Reales de Manufactura",
      subtitle: "Ejemplos de workstations y sistemas de automatización desarrollados para mejorar eficiencia, precisión y confiabilidad del proceso.",
      items: [
        { title: "Workstation de ensamble de precisión", description: "Estación automatizada diseñada para procesos de ensamble de alta precisión con repetibilidad y tolerancias cerradas.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
        { title: "Sistema automatizado de testing", description: "Workstation de prueba integrada para control de calidad y validación de componentes de manufactura.", imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" },
        { title: "Integración de tooling custom", description: "Workstation de automatización con tooling diseñado alrededor de requerimientos específicos de producción.", imageSrc: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1200" },
        { title: "Celda de automatización de proceso", description: "Celda integrada desarrollada para mejorar eficiencia productiva y estabilidad del proceso.", imageSrc: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" }
      ]
    },
    crossBorder: {
      eyebrow: "Ingeniería binacional",
      title: "Ubicación Estratégica en el Hub Manufacturero de Tijuana",
      subtitle: "Apoyamos fabricantes en Baja California y Southern California con servicios de ingeniería, automatización e integración de sistemas.",
      mainText: "Tijuana es una de las regiones de manufactura más importantes de Norteamérica, con fuertes conexiones al ecosistema industrial de San Diego.",
      highlights: [
        { title: "Cerca de clústeres clave de manufactura", description: "Ubicados en uno de los hubs manufactureros más importantes de México." },
        { title: "Colaboración cross-border", description: "Comunicación eficiente y colaboración con equipos de ingeniería en Estados Unidos." },
        { title: "Ejecución rápida de proyectos", description: "La cercanía permite iteraciones, soporte y deployment más ágiles." }
      ]
    },
    faq: {
      eyebrow: "FAQ técnico",
      title: "Preguntas Comunes sobre Nuestros Sistemas de Automatización",
      subtitle: "Respuestas a preguntas técnicas frecuentes sobre nuestros servicios de ingeniería, automatización e integración de sistemas.",
      items: [
        { question: "¿Diseñan sistemas de automatización completamente custom?", answer: "Sí. Todos los sistemas y workstations se diseñan específicamente para los requerimientos de producción de cada cliente. Desarrollamos estructuras mecánicas, sistemas de control y tooling según el proceso real de manufactura." },
        { question: "¿Integran sistemas PLC y HMI?", answer: "Sí. Nuestros sistemas incluyen programación PLC e interfaces HMI para controlar y monitorear el proceso productivo, asegurando confiabilidad y visibilidad operativa." },
        { question: "¿Qué industrias suelen atender?", answer: "Nuestras soluciones de ingeniería se aplican comúnmente en dispositivos médicos, aeroespacial, electrónica y manufactura avanzada donde la precisión y la repetibilidad son críticas." },
        { question: "¿Pueden colaborar con equipos de ingeniería en Estados Unidos?", answer: "Sí. Nuestra ubicación en Tijuana permite colaboración eficiente con empresas de Baja California y Southern California, facilitando soporte de ingeniería cross-border y coordinación de proyectos." },
        { question: "¿Ofrecen soporte después del deployment del sistema?", answer: "Sí. Apoyamos instalación, commissioning y asistencia técnica continua para asegurar que el sistema de automatización funcione de manera confiable en producción." },
        { question: "¿Sus sistemas pueden integrarse con equipo de producción existente?", answer: "Sí. Nuestro enfoque de ingeniería busca integrar nuevos sistemas de automatización con líneas, equipos y flujos de trabajo existentes siempre que sea viable." }
      ]
    },
    cta: {
      eyebrow: "Inicia tu proyecto de automatización",
      title: "Construyamos tu Próximo Sistema de Automatización",
      subtitle: "Cuéntanos tu reto de manufactura y nuestro equipo de ingeniería te ayudará a diseñar la solución de automatización adecuada.",
      primaryCta: { label: "Solicitar consulta de ingeniería", href: getWhatsAppLink('rfq', 'es') },
      secondaryCta: { label: "Hablar sobre tu proyecto de automatización", href: "mailto:info@stellarmfgautomation.com" },
      trustNote: "Las consultas iniciales de ingeniería son gratuitas y están enfocadas en entender tus necesidades de automatización."
    },
    navigation: {
      header: {
        links: [
          { name: "Sistemas", href: "#workstations" },
          { name: "Proceso", href: "#process" },
          { name: "Industrias", href: "#industries" },
          { name: "Proyectos", href: "#projects" }
        ],
        cta: "Solicitar RFQ",
        ctaHref: "#cta"
      },
      footer: {
        description: "Ingeniería avanzada y estaciones de trabajo automatizadas a la medida para industrias críticas de manufactura en la región Cali-Baja.",
        solutionsTitle: "Soluciones",
        companyTitle: "Empresa",
        operationsTitle: "Centro de Operaciones",
        location: "Tijuana, BC — San Diego, CA",
        support: "Soporte de Ingeniería Binacional",
        rights: "Stellar Manufacturing and Automation. Todos los derechos reservados.",
        madeWith: "Hecho con",
        by: "por"
      }
    }
  }
};