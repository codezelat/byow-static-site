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
      title: "Web Design Services",
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
      "id": "development-services",
      "title": "Web Development Services",
      "services": [
        {
          "id": "frontend development",
          "title": "Frontend Development",
          "description": "HTML5, CSS3, and JavaScript integration. Framework-based development using React.js, Vue.js, or Angular. Cross-browser compatibility and pixel-perfect execution.",
          "icon": "/images/Code_Runtime.svg"
        },
        {
          "id": "backend development",
          "title": "Backend Development",
          "description": "Server-side coding with PHP, Python, or Node.js. Database integration with MySQL, MongoDB, or PostgreSQL. API development and seamless integration.",
          "icon": "/images/developer.svg"
        },
        {
          "id": "full-stack development",
          "title": "Full-Stack Development",
          "description": "Complete development of both frontend and backend components. Using modern frameworks like MERN or MEAN stack. Server-side rendering for faster performance.",
          "icon": "/images/full-stack-developer.svg"
        },
        {
          "id": "applications (SPAs)",
          "title": "Single Page Applications (SPAs)",
          "description": "React.js or Angular-based single-page sites. Faster load times with dynamic content. Ideal for interactive and lightweight websites.",
          "icon": "/images/cloud-computing.svg"
        }
      ]
    },
    {
      "id": "ecommerce",
      "title": "E-Commerce Solutions",
      "services": [
        {
          "id": "e-commerce website development",
          "title": "E-Commerce Website Development",
          "description": "Custom shopping cart and checkout systems. Integration of payment gateways like Stripe and PayPal. Product catalogue management and inventory tracking.",
          "icon": "/images/commerce.svg"
        },
        {
          "id": "CMS development",
          "title": "CMS Development",
          "description": "Custom WordPress website creation. Joomla and Drupal customization. Development of bespoke content management systems.",
          "icon": "/images/software01.svg"
        },
        {
          "id": "progressive web applications",
          "title": "Progressive Web Applications (PWAs)",
          "description": "Building apps that behave like native mobile applications. Offline capabilities with cached assets. Optimized for speed and user engagement.",
          "icon": "/images/pwas.svg"
        }
      ]
    },
    {
      "id": "maintenance",
      "title": "Website Maintenance and Security",
      "services": [
        {
          "id": "website maintenance",
          "title": "Website Maintenance Services",
          "description": "Ongoing updates to maintain security and compatibility. Bug fixing and error resolution. Backup management and site restoration.",
          "icon": "/images/web-repair.svg"
        },
        {
          "id": "website security",
          "title": "Website Security Enhancements",
          "description": "Implementation of firewalls and malware protection. Regular security audits.",
          "icon": "/images/lock.svg"
        },
        {
          "id": "performance-optimization",
          "title": "Performance Optimization",
          "description": "Code minification and image compression. CDN integration for faster global access. Database indexing and query optimization.",
          "icon": "/images/cogwheel.svg"
        },
        {
          "id": "core web vitals optimisation",
          "title": "Core Web Vitals Optimisation",
          "description": "Speed enhancements for fast loading. Optimized user interaction metrics. Ensuring stable layout shifts (CLS).",
          "icon": "/images/globe.svg"
        }
      ]
    },
    {
      "id": "hosting",
      "title": "Hosting and Integrations",
      "services": [
        {
          "id": "web-hosting-setup",
          "title": "Web Hosting Setup",
          "description": "Assistance in choosing hosting providers. Configuring servers for optimal performance. Setup of domains and SSL certificates.",
          "icon": "/images/setting.svg"
        },
        {
          "id": "third-party-integration",
          "title": "Third-Party Integrations",
          "description": "API connections for services like maps, weather, or data. Embedding widgets and custom plugins. Integration with databases and external software.",
          "icon": "/images/teamwork.svg"
        },
        {
          "id": "microservices-architecture",
          "title": "Microservices Architecture",
          "description": "Modular service design for scalability. Independent deployment of services for flexibility. Integration of microservices into existing systems.",
          "icon": "/images/cloud.svg"
        }
      ]
    },
    {
      "id": "other-services",
      "title": "Other Services",
      "services": [
        {
          "id": "seo-optimization",
          "title": "SEO-Ready Development",
          "description": "Implementation of schema markup for structured data. Clean, semantic coding for better crawlability. Meta tags and heading structure optimisation.",
          "icon": "/images/seo.svg"
        },
        {
          "id": "custom-web-applications",
          "title": "Custom Web Applications",
          "description": "Development of industry-specific applications. Integration of business tools and software. Scalable and modular architecture.",
          "icon": "/images/project3 1.svg"
        }
      ]
    }
    
  ];