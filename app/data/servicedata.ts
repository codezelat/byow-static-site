// Create this as serviceData.ts
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface ServiceCategory {
    id: string;
    title: string;
    services: Service[];
  }
  
  export const serviceCategories: ServiceCategory[] = [
    {
      id: "web-development",
      title: "Web Development Services",
      services: [
        {
          id: "custom-design",
          title: "Custom Website Design",
          description: "Tailored designs based on client requirements. Fully responsive layout for desktop, tablet, and mobile devices.",
          icon: "/images/Browser.svg"
        },
        {
          id: "ux-ui-design",
          title: "UX/UI Design",
          description: "User interface prototyping and wireframing. Heuristic and user behavior analysis to enhance usability.",
          icon: "/images/ui_ux1.svg"
        },
        {
          id: "responsive-design-1",
          title: "Responsive Web Design",
          description: "Adaptive layouts optimized for various screen sizes. Mobile-first design approach.",
          icon: "/images/share.svg"
        },
        {
          id: "responsive-design-2",
          title: "Responsive Web Design",
          description: "Adaptive layouts optimized for various screen sizes. Mobile-first design approach.",
          icon: "/images/share.svg"
        }
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      services: [
        {
          id: "online-store",
          title: "Online Store Development",
          description: "Custom e-commerce platforms tailored to your business needs. Integration with payment gateways and shipping solutions.",
          icon: "/images/Browser.svg"
        },
        {
          id: "shopping-cart",
          title: "Shopping Cart Integration",
          description: "Seamless checkout experiences with multiple payment options. Cart abandonment recovery features.",
          icon: "/images/ui_ux1.svg"
        },
        {
          id: "product-catalog",
          title: "Product Catalog Management",
          description: "Easy-to-manage product listings with categories and filters. Inventory management system integration.",
          icon: "/images/share.svg"
        },
        {
          id: "payment-gateway",
          title: "Payment Gateway Integration",
          description: "Secure payment processing with multiple provider options. PCI compliance and fraud prevention.",
          icon: "/images/share.svg"
        }
      ]
    },
    {
      id: "maintenance",
      title: "Website Maintenance and Security",
      services: [
        {
          id: "regular-updates",
          title: "Regular Updates & Backups",
          description: "Scheduled maintenance to keep your site running smoothly. Automated backup systems to protect your data.",
          icon: "/images/Browser.svg"
        },
        {
          id: "security-audits",
          title: "Security Audits & Protection",
          description: "Vulnerability scanning and penetration testing. Implementation of security best practices and monitoring.",
          icon: "/images/ui_ux1.svg"
        },
        {
          id: "performance-optimization",
          title: "Performance Optimization",
          description: "Speed optimization and caching implementation. Core Web Vitals improvements for better SEO.",
          icon: "/images/share.svg"
        },
        {
          id: "content-updates",
          title: "Content Updates",
          description: "Regular content refreshes and additions. CMS training for your team to manage content independently.",
          icon: "/images/share.svg"
        }
      ]
    },
    {
      id: "hosting",
      title: "Hosting and Integrations",
      services: [
        {
          id: "cloud-hosting",
          title: "Cloud Hosting Solutions",
          description: "Scalable and reliable hosting on leading cloud platforms. Load balancing and CDN implementation for global reach.",
          icon: "/images/Browser.svg"
        },
        {
          id: "third-party-integration",
          title: "Third-Party Integrations",
          description: "Seamless connection with CRMs, marketing tools, and analytics. API development and implementation.",
          icon: "/images/ui_ux1.svg"
        },
        {
          id: "domain-management",
          title: "Domain Management",
          description: "Domain registration, transfer, and DNS management. SSL certificate implementation and renewal.",
          icon: "/images/share.svg"
        },
        {
          id: "email-setup",
          title: "Email Setup & Configuration",
          description: "Professional email setup with your domain. Anti-spam measures and email deliverability optimization.",
          icon: "/images/share.svg"
        }
      ]
    },
    {
      id: "other-services",
      title: "Other Services",
      services: [
        {
          id: "seo-optimization",
          title: "SEO Optimization",
          description: "On-page and technical SEO implementation. Keyword research and content optimization strategies.",
          icon: "/images/Browser.svg"
        },
        {
          id: "analytics-setup",
          title: "Analytics Setup",
          description: "Implementation of tracking tools and dashboards. Custom reporting for business insights.",
          icon: "/images/ui_ux1.svg"
        },
        {
          id: "content-strategy",
          title: "Content Strategy",
          description: "Development of content plans aligned with business goals. Content creation and optimization for conversion.",
          icon: "/images/share.svg"
        },
        {
          id: "accessibility-compliance",
          title: "Accessibility Compliance",
          description: "WCAG compliance implementation and testing. Ensuring your website is usable by people of all abilities.",
          icon: "/images/share.svg"
        }
      ]
    }
  ];