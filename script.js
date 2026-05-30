// =========================================
// GLOBALS
// =========================================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const preloader = document.getElementById('preloader');
const preloaderFill = document.getElementById('preloaderFill');
const preloaderPercent = document.getElementById('preloaderPercent');
const scrollProgressEl = document.getElementById('scrollProgressEl');
const backToTop = document.getElementById('backToTop');
const langBtn = document.getElementById('langBtn');
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const serviceModal = document.getElementById('serviceModal');
const pmBackdrop = document.getElementById('pmBackdrop');
const contactForm = document.getElementById('contactForm');
const hwwTrack = document.getElementById('hwwTrack');

let currentLang = 'ar';
let testimonialIndex = 0;
let isMenuOpen = false;

// =========================================
// SERVICES DATA
// =========================================
const servicesData = [
     {
          id: 1, category: "dev", icon: "bi-wordpress", number: "01",
          img: "./img/services1.png",
          title_ar: "تصميم وبناء مواقع ووردبريس", title_en: "WordPress Website Design & Build",
          desc_ar: "نصمم ونطور مواقع ووردبريس احترافية وسريعة الاستجابة مع تخصيص كامل.",
          desc_en: "Professional, responsive WordPress websites fully customized to match your brand.",
          tags_ar: ["ووردبريس", "تصميم", "SEO"], tags_en: ["WordPress", "Design", "SEO"],
          desc_full_ar: "نقدم خدمة شاملة لتصميم وبناء مواقع ووردبريس تتضمن التخصيص الكامل للقالب، إضافة الصفحات، تحسين السرعة، وضمان التوافق مع جميع الأجهزة.",
          desc_full_en: "Comprehensive WordPress service including full template customization, adding pages, speed optimization, and cross-device compatibility.",
          includes_ar: ["تصميم واجهة مخصصة بالكامل", "تركيب وتكوين ووردبريس", "إضافة الصفحات والأقسام", "تحسين السرعة والأداء", "ضمان التوافق مع الجوال", "تركيب إضافات الأمان", "ربط مع Google Analytics", "تدريب على إدارة المحتوى"],
          includes_en: ["Fully custom interface design", "WordPress installation & configuration", "Add pages & sections", "Speed & performance optimization", "Mobile compatibility", "Security plugins setup", "Google Analytics integration", "Content management training"],
          skills: [{ name_ar: "ووردبريس", name_en: "WordPress", level: 95 }, {
               name_ar: "PHP",
               name_en: "PHP",
               level: 90
          }, { name_ar: "CSS/HTML", name_en: "CSS/HTML", level: 92 }, {
               name_ar: "JavaScript",
               name_en: "JavaScript",
               level: 85
          }],
          tech: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "Yoast SEO"],
     },
    {
     id: 2,
     category: "dev",
     icon: "bi-globe2",
     number: "02",

     img: "./img/services8.png",

     title_ar: "تطوير منصات الويب",
     title_en: "Web Platform Development",

     desc_ar: "نبني منصات ويب احترافية وقابلة للتوسع باستخدام Laravel وأحدث التقنيات.",
     desc_en: "We build professional and scalable web platforms using Laravel and modern technologies.",

     tags_ar: ["Laravel", "PHP", "منصات"],
     tags_en: ["Laravel", "PHP", "Platforms"],

     desc_full_ar:
          "نطور منصات ويب احترافية من الصفر باستخدام Laravel مع التركيز على الأداء، الأمان وتجربة المستخدم.",

     desc_full_en:
          "We develop professional web platforms from scratch using Laravel with a focus on performance, security, and user experience.",

     includes_ar: [
          "تطوير الواجهة الخلفية باستخدام Laravel",
          "تصميم قواعد البيانات وربطها",
          "إنشاء RESTful APIs",
          "نظام تسجيل دخول وصلاحيات",
          "لوحة تحكم احترافية",
          "ربط أنظمة الدفع والخدمات الخارجية",
          "تحسين الأداء والحماية",
          "رفع المشروع على السيرفر"
     ],

     includes_en: [
          "Backend development using Laravel",
          "Database design and integration",
          "RESTful API development",
          "Authentication and roles system",
          "Professional admin dashboard",
          "Payment gateways and third-party integrations",
          "Performance and security optimization",
          "Project deployment on server"
     ],

     skills: [
          {
               name_ar: "Laravel",
               name_en: "Laravel",
               level: 95
          },

          {
               name_ar: "PHP",
               name_en: "PHP",
               level: 92
          },

          {
               name_ar: "MySQL",
               name_en: "MySQL",
               level: 90
          },

          {
               name_ar: "API Development",
               name_en: "API Development",
               level: 88
          }
     ],

     tech: [
          "Laravel",
          "PHP",
          "MySQL",
          "Blade",
          "Bootstrap",
          "cPanel"
     ]
},
     {
          id: 3, category: "dev", icon: "bi-phone", number: "03",
          img: "./img/services11.png",
          title_ar: "تطوير التطبيقات", title_en: "Mobile App Development",
          desc_ar: "نطور تطبيقات موبايل أصلية وهجينة لأنظمة iOS و Android.",
          desc_en: "We develop native and hybrid mobile apps for iOS and Android.",
          tags_ar: ["Flutter", "iOS", "Android"], tags_en: ["Flutter", "iOS", "Android"],
          desc_full_ar: "نطور تطبيقات موبايل احترافية عالية الأداء باستخدام Flutter، مع تصميم عصري وتجربة مستخدم سلسة تدعم أنظمة Android و iOS بكود موحد، مع التركيز على السرعة، الأمان، وقابلية التوسع."
          , desc_full_en: "We develop high-performance mobile apps using Flutter and React Native.",
          includes_ar: ["تصميم واجهة المستخدم", "تطوير التطبيق بـ Flutter", "ربط مع APIs الخلفية", "إشعارات ذكية", "تتبع الموقع GPS", "نشر على المتاجر", "دعم فني بعد الإطلاق", "تحديثات دورية"],
          includes_en: ["UI/UX design", "App development with Flutter", "Backend API integration", "Smart notifications", "GPS tracking", "App Store publishing", "Post-launch support", "Regular updates"],
          skills: [{ name_ar: "Flutter", name_en: "Flutter", level: 93 }, {
               name_ar: "Dart",
               name_en: "Dart",
               level: 90
          }, {
               name_ar: "Firebase",
               name_en: "Firebase",
               level: 88
          }],
          tech: ["Flutter", "Firebase", "REST APIs", "Google Maps", "Push Notifications"],

     },
     {
          id: 4, category: "dev", icon: "bi-shop", number: "04",
          img: "./img/services2.png",
          title_ar: "تصميم وإدارة المتاجر في سلة", title_en: "Salla Store Design & Management",
          desc_ar: "نصمم وندير متاجر إلكترونية احترافية على منصة سلة مع تحسين كامل.",
          desc_en: "We design and manage professional e-commerce stores on Salla platform with full optimization.",
          tags_ar: ["سلة", "تجارة إلكترونية", "إدارة"], tags_en: ["Salla", "E-Commerce", "Management"],
          desc_full_ar: "خدمة شاملة لإنشاء وإدارة المتاجر على سلة تشمل التصميم، إضافة المنتجات، ربط بوابات الدفع، SEO، وشركات الشحن.",
          desc_full_en: "Comprehensive service for creating and managing stores on Salla. Includes design, product addition, payment gateway integration, SEO, and shipping integration.",
          includes_ar: ["تصميم المتجر بالكامل", "إضافة المنتجات وتصنيفها", "ربط بوابات الدفع", "ربط شركات الشحن", "تحسين SEO للمتجر", "إدارة المخزون والطلبات", "تقارير مبيعات دورية", "دعم فني مستمر"],
          includes_en: ["Full store design", "Product addition & categorization", "Payment gateway integration", "Shipping & delivery integration", "Store SEO optimization", "Inventory & order management", "Periodic sales reports", "Ongoing technical support"],
          skills: [{ name_ar: "سلة", name_en: "Salla", level: 97 }, {
               name_ar: "إدارة متاجر",
               name_en: "Store Management",
               level: 95
          }, { name_ar: "تحسين مبيعات", name_en: "Sales Optimization", level: 90 }, {
               name_ar: "SEO",
               name_en: "SEO",
               level: 85
          }],
          tech: ["Salla", "Payment Gateways", "Shipping APIs", "Analytics Tools"],

     },
     {
          id: 5, category: "marketing", icon: "bi-graph-up-arrow", number: "05",
          img: "./img/services10.png",
          title_ar: "تحسين محركات البحث SEO", title_en: "Search Engine Optimization",
          desc_ar: "نحسّن ظهور موقعك في نتائج بحث Google لزيادة الزيارات العضوية.",
          desc_en: "We improve your website's visibility in Google search results to increase organic traffic.",
          tags_ar: ["SEO", "Google", "تسويق"], tags_en: ["SEO", "Google", "Marketing"],
          desc_full_ar: "خدمات SEO شاملة تشمل تحليل الكلمات المفتاحية، تحسين المحتوى، العوامل التقنية، وبناء الروابط الخلفية.",
          desc_full_en: "Comprehensive SEO services including keyword analysis, content optimization, technical optimization, and backlink building.",
          includes_ar: ["تحليل الكلمات المفتاحية", "تحسين المحتوى والصفحات", "تحسين العوامل التقنية", "بناء روابط خلفية عالية الجودة", "ربط مع Google Search Console", "تقارير أداء شهرية", "تحسين Core Web Vitals", "ربط مع منصات خارجية"],
          includes_en: ["Keyword analysis", "Content & page optimization", "Technical SEO optimization", "High-quality backlink building", "Google Search Console integration", "Monthly performance reports", "Core Web Vitals optimization", "External platform integration"],
          skills: [{ name_ar: "SEO تقني", name_en: "Technical SEO", level: 95 }, {
               name_ar: "تحليل كلمات",
               name_en: "Keyword Analysis",
               level: 92
          }, { name_ar: "تحليل بيانات", name_en: "Data Analysis", level: 88 }, {
               name_ar: "كتابة محتوى",
               name_en: "Content Writing",
               level: 85
          }],
          tech: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "Screaming Frog", "Schema Markup"],

     },
     {
          id: 6, category: "design", icon: "bi-code-slash", number: "06",
          img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
          title_ar: "تحويل تصاميم UI/UX إلى كود", title_en: "UI/UX Design to Code Conversion",
          desc_ar: "نحول تصاميم Figma و Adobe XD إلى كود نظيف وسريع الاستجابة.",
          desc_en: "We convert Figma and Adobe XD designs into clean, responsive code.",
          tags_ar: ["Figma", "Tailwind", "HTML/CSS"], tags_en: ["Figma", "React", "HTML/CSS"],
          desc_full_ar: "نحول تصاميم UI/UX بدقة عالية إلى كود نظيف وقابل للصيانة مع ضمان تطابق 100%.",
          desc_full_en: "We convert UI/UX designs with high precision into clean, maintainable code ensuring 100% match.",
          includes_ar: ["تحويل تصاميم Figma/Adobe XD", "كود نظيف ومنظم", "تصميم متجاوب 100%", "تحسين الأداء والسرعة", "توافق مع جميع المتصفحات", "تسليم الكود مع توثيق", "مراجعات حتى الرضا", "دعم ما بعد التسليم"],
          includes_en: ["Figma/Adobe XD conversion", "Clean & organized code", "100% responsive design", "Performance optimization", "Cross-browser compatibility", "Code with documentation", "Revisions until satisfaction", "Post-delivery support"],
          skills: [
               { name_ar: "HTML/CSS", name_en: "HTML/CSS", level: 98 },
               { name_ar: "JavaScript", name_en: "JavaScript", level: 94 },
               { name_ar: "Tailwind", name_en: "Tailwind", level: 92 },
               { name_ar: "Figma", name_en: "Figma", level: 95 },
               { name_ar: "تصميم واجهات", name_en: "UI Design", level: 93 }
          ],

          tech: ["Tailwind CSS", "Figma", "Adobe XD", "Bootstrap", "SCSS"],
     },

     {
          id: 8, category: "dev", icon: "bi-building", number: "08",
          img: "./img/services5.png",
          title_ar: "أنظمة إدارة الشركات ERP", title_en: "Enterprise ERP Systems",
          desc_ar: "نبني أنظمة ERP متكاملة لإدارة الموارد والموظفين والعملاء.",
          desc_en: "We build integrated ERP systems for managing resources, employees, and clients.",
          tags_ar: ["ERP", "إدارة", "محاسبة"], tags_en: ["ERP", "Management", "Accounting"],
          desc_full_ar: "نطور أنظمة ERP مخصصة تشمل إدارة الموارد البشرية، CRM، الأنظمة المحاسبية، إدارة المخزون، والتقارير الإدارية.",
          desc_full_en: "We develop customized ERP systems including HR management, CRM, accounting, inventory management, and administrative reports.",
          includes_ar: ["إدارة الموارد البشرية", "إدارة علاقات العملاء", "إدارة المخزون والمشتريات", "لوحة تحكم إدارية", "تقارير وإحصائيات متقدمة", "صلاحيات متعددة المستويات", "ربط مع الأنظمة الخارجية"],
          includes_en: ["Human Resources Management", "Customer Relationship Management", "Inventory & procurement", "Administrative dashboard", "Advanced reports", "Multi-level permissions", "External systems integration"],
          skills: [{ name_ar: "ERP Systems", name_en: "ERP Systems", level: 95 }, {
               name_ar: "PHP/Laravel",
               name_en: "PHP/Laravel",
               level: 90
          }, { name_ar: "قواعد بيانات", name_en: "Databases", level: 92 }, {
               name_ar: "تحليل أعمال",
               name_en: "Business Analysis",
               level: 88
          }],
          tech: ["Laravel", "MySQL", "REST APIs", "PHP", "Git", "Redis"]
     },
     {
          id: 9, category: "infra", icon: "bi-link-45deg", number: "09",
          img: "./img/services9.png",
          title_ar: "الربط والتكامل بين الأنظمة API", title_en: "API Integration & System Connectivity",
          desc_ar: "نربط بوابات الدفع، واتساب، وأنظمة الإشعارات مع تكامل الأنظمة.",
          desc_en: "We integrate payment gateways, WhatsApp, notification systems with system connectivity.",
          tags_ar: ["API", "Webhooks", "تكامل"], tags_en: ["API", "Webhooks", "Integration"],
          desc_full_ar: "خدمات الربط والتكامل تشمل ربط بوابات الدفع، واتساب للأعمال، أنظمة الإشعارات، وتكامل الأنظمة.",
          desc_full_en: "Integration services including payment gateway, WhatsApp Business API, notification systems, and system integration.",
          includes_ar: ["ربط بوابات الدفع الإلكتروني", "ربط واتساب للأعمال", "أنظمة الإشعارات الذكية", "ربط ERP مع الأنظمة الخارجية", "بناء RESTful APIs مخصصة", "Webhooks للأحداث الفورية", "توثيق شامل للـ APIs", "اختبار ومراقبة التكامل"],
          includes_en: ["Payment gateway integration", "WhatsApp Business API", "Smart notification systems", "ERP integration with external systems", "Custom RESTful APIs", "Webhooks for real-time events", "Comprehensive API documentation", "Integration testing & monitoring"],
          skills: [{ name_ar: "REST APIs", name_en: "REST APIs", level: 95 }, {
               name_ar: "Webhooks",
               name_en: "Webhooks",
               level: 90
          }, { name_ar: "OAuth", name_en: "OAuth", level: 88 }, { name_ar: "JSON/XML", name_en: "JSON/XML", level: 92 }],
          tech: ["REST APIs", "GraphQL", "Webhooks", "OAuth 2.0", "Postman"],
     },
     // {
     //      id: 10, category: "infra", icon: "bi-hdd-rack", number: "10",
     //      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
     //      title_ar: "الاستضافة وإدارة السيرفرات", title_en: "Hosting & Server Management",
     //      desc_ar: "نعدّ السيرفرات، نوفر الحماية والنسخ الاحتياطي، ونحسن الأداء.",
     //      desc_en: "We set up servers, provide protection and backups, and optimize performance.",
     //      tags_ar: ["سيرفرات", "AWS", "DevOps"], tags_en: ["Servers", "AWS", "DevOps"],
     //      desc_full_ar: "خدمات استضافة وإدارة سيرفرات تشمل إعداد السيرفرات، الحماية المتقدمة، النسخ الاحتياطي، ومراقبة الأداء.",
     //      desc_full_en: "Hosting and server management including server setup, advanced protection, backups, and 24/7 performance monitoring.",
     //      includes_ar: ["إعداد السيرفرات من الصفر", "تثبيت وتكوين أنظمة التشغيل", "الحماية المتقدمة", "النسخ الاحتياطي التلقائي", "مراقبة الأداء 24/7", "تحسين السرعة والاستقرار", "إدارة قواعد البيانات", "تقارير أداء شهرية"],
     //      includes_en: ["Server setup from scratch", "OS installation & configuration", "Advanced protection", "Daily automatic backups", "24/7 performance monitoring", "Speed & stability optimization", "Database management", "Monthly performance reports"],
     //      skills: [{ name_ar: "Linux", name_en: "Linux", level: 95 }, {
     //           name_ar: "AWS",
     //           name_en: "AWS",
     //           level: 90
     //      }, { name_ar: "Docker", name_en: "Docker", level: 92 }, { name_ar: "Nginx", name_en: "Nginx", level: 88 }],
     //      tech: ["AWS", "DigitalOcean", "Docker", "Nginx", "Linux", "Vercel"],
     //      examples: [{
     //           img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "إعداد سيرفر سحابي",
     //           title_en: "Cloud Server Setup"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "إدارة سيرفرات",
     //           title_en: "Server Management"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "تحسين أداء",
     //           title_en: "Performance Optimization"
     //      }]
     // },
     // {
     //      id: 11, category: "infra", icon: "bi-shield-lock", number: "11",
     //      img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
     //      title_ar: "الأمن السيبراني وحماية المواقع", title_en: "Cybersecurity & Website Protection",
     //      desc_ar: "نحمي المواقع والتطبيقات، نفحص الثغرات، ونؤمن قواعد البيانات.",
     //      desc_en: "We protect websites and applications, scan vulnerabilities, and secure databases.",
     //      tags_ar: ["أمن", "حماية", "اختبار اختراق"], tags_en: ["Security", "Protection", "Penetration Testing"],
     //      desc_full_ar: "خدمات أمن سيبراني شاملة تشمل فحص الثغرات، اختبار الاختراق، حماية من DDoS، وتأمين قواعد البيانات.",
     //      desc_full_en: "Comprehensive cybersecurity including vulnerability scanning, penetration testing, DDoS protection, and database security.",
     //      includes_ar: ["فحص الثغرات الأمنية", "اختبار الاختراق", "حماية من هجمات DDoS", "تأمين قواعد البيانات", "تأمين الخوادم والـ APIs", "إعداد شهادات SSL/TLS", "مراقبة التهديدات 24/7", "تقارير أمنية دورية"],
     //      includes_en: ["Vulnerability scanning", "Penetration Testing", "DDoS attack protection", "Database security", "Server & API security", "SSL/TLS certificate setup", "24/7 threat monitoring", "Periodic security reports"],
     //      skills: [{ name_ar: "أمن سيبراني", name_en: "Cybersecurity", level: 95 }, {
     //           name_ar: "اختبار اختراق",
     //           name_en: "Penetration Testing",
     //           level: 90
     //      }, { name_ar: "تشفير", name_en: "Encryption", level: 92 }, {
     //           name_ar: "تحليل تهديدات",
     //           name_en: "Threat Analysis",
     //           level: 88
     //      }],
     //      tech: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "OWASP", "Cloudflare"],
     //      examples: [{
     //           img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "حماية موقع",
     //           title_en: "Site Protection"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "اختبار اختراق",
     //           title_en: "Penetration Test"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "تأمين قاعدة بيانات",
     //           title_en: "Database Security"
     //      }]
     // },
     // {
     //      id: 12, category: "infra", icon: "bi-life-preserver", number: "12",
     //      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
     //      title_ar: "الدعم الفني والصيانة", title_en: "Technical Support & Maintenance",
     //      desc_ar: "متابعة دورية، إصلاح المشاكل، وتحديثات وتحسينات مستمرة.",
     //      desc_en: "Regular follow-up, issue resolution, and continuous updates and improvements.",
     //      tags_ar: ["دعم فني", "صيانة", "تحديثات"], tags_en: ["Support", "Maintenance", "Updates"],
     //      desc_full_ar: "خدمات دعم فني وصيانة شاملة تشمل متابعة دورية، إصلاح سريع، تحديثات أمنية، ومراقبة الأداء.",
     //      desc_full_en: "Comprehensive technical support and maintenance including regular follow-up, quick fixes, security updates, and performance monitoring.",
     //      includes_ar: ["متابعة دورية للمشاريع", "إصلاح المشاكل التقنية", "تحديثات أمنية ووظيفية", "مراقبة الأداء والسرعة", "نسخ احتياطي دوري", "تقارير حالة شهرية", "فريق دعم 24/7", "تحسينات مستمرة"],
     //      includes_en: ["Regular project follow-up", "Quick technical issue resolution", "Security & feature updates", "Performance monitoring", "Regular backups", "Monthly status reports", "24/7 support team", "Continuous improvements"],
     //      skills: [{ name_ar: "دعم فني", name_en: "Technical Support", level: 97 }, {
     //           name_ar: "حل مشاكل",
     //           name_en: "Troubleshooting",
     //           level: 95
     //      }, { name_ar: "مراقبة أنظمة", name_en: "System Monitoring", level: 90 }, {
     //           name_ar: "تحسين أداء",
     //           name_en: "Performance Tuning",
     //           level: 88
     //      }],
     //      tech: ["Monitoring Tools", "Logging Systems", "Backup Solutions", "Ticketing Systems", "Analytics"],
     //      examples: [{
     //           img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "دعم فني لمشروع",
     //           title_en: "Project Support"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "صيانة نظام",
     //           title_en: "System Maintenance"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "تحديث موقع",
     //           title_en: "Website Update"
     //      }]
     // },
     {
          id: 13, category: "dev", icon: "bi-window-desktop", number: "13",
          img: "./img/services6.png",
          title_ar: "الأنظمة المخصصة للشركات", title_en: "Custom Enterprise Systems",
          desc_ar: "نصمم أنظمة خاصة حسب الطلب مع لوحات تحكم وحلول رقمية.",
          desc_en: "We design custom on-demand systems with dashboards and digital solutions.",
          tags_ar: ["أنظمة مخصصة", "لوحات تحكم", "حلول"], tags_en: ["Custom Systems", "Dashboards", "Solutions"],
          desc_full_ar: "نبني أنظمة مخصصة بالكامل تشمل لوحات تحكم احترافية، أنظمة إدارة مخصصة، وحلول رقمية متكاملة.",
          desc_full_en: "We build fully customized systems including professional dashboards, custom management systems, and integrated digital solutions.",
          includes_ar: ["تحليل متطلبات مفصل", "تصميم النظام المخصص", "لوحات تحكم احترافية", "نظام صلاحيات متقدم", "تقارير وإحصائيات مخصصة", "ربط مع الأنظمة الحالية", "تدريب الفريق", "دعم وصيانة مستمرة"],
          includes_en: ["Detailed requirements analysis", "Custom system design", "Professional dashboards", "Advanced permissions system", "Custom reports & statistics", "Integration with existing systems", "Team training", "Ongoing support & maintenance"],
          skills: [{ name_ar: "تحليل متطلبات", name_en: "Requirements Analysis", level: 95 }, {
               name_ar: "تصميم أنظمة",
               name_en: "System Design",
               level: 92
          }, {
               name_ar: "قواعد بيانات",
               name_en: "Databases",
               level: 88
          }],
          tech: ["Laravel", "PostgreSQL", "Redis", "Docker", "GraphQL"],

     },
     // {
     //      id: 14, category: "dev", icon: "bi-robot", number: "14",
     //      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
     //      title_ar: "الأتمتة والذكاء الاصطناعي", title_en: "Automation & Artificial Intelligence",
     //      desc_ar: "أتمتة المهام، شات بوت ذكي، وحلول AI مخصصة للشركات.",
     //      desc_en: "Task automation, smart chatbots, and custom AI solutions for businesses.",
     //      tags_ar: ["AI", "أتمتة", "شات بوت"], tags_en: ["AI", "Automation", "Chatbot"],
     //      desc_full_ar: "حلول الأتمتة والذكاء الاصطناعي تشمل أتمتة المهام، شات بوت ذكي، تحليل البيانات، وأنظمة التوصية.",
     //      desc_full_en: "Automation and AI solutions including task automation, smart chatbots, AI data analysis, and recommendation systems.",
     //      includes_ar: ["أتمتة المهام المتكررة", "شات بوت ذكي للخدمة العملاء", "تحليل البيانات بالذكاء الاصطناعي", "أنظمة توصية ذكية", "معالجة اللغات الطبيعية", "تدريب نماذج AI مخصصة", "تكامل مع الأنظمة الحالية", "تقارير ذكية"],
     //      includes_en: ["Repetitive task automation", "Smart customer service chatbot", "AI-powered data analysis", "Smart recommendation systems", "Natural Language Processing", "Custom AI model training", "Integration with existing systems", "Smart reports & analytics"],
     //      skills: [{ name_ar: "Python", name_en: "Python", level: 95 }, {
     //           name_ar: "Machine Learning",
     //           name_en: "Machine Learning",
     //           level: 90
     //      }, { name_ar: "NLP", name_en: "NLP", level: 88 }, { name_ar: "TensorFlow", name_en: "TensorFlow", level: 85 }],
     //      tech: ["Python", "TensorFlow", "OpenAI API", "LangChain", "Pinecone", "FastAPI"],
     //      examples: [{
     //           img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "شات بوت ذكي",
     //           title_en: "Smart Chatbot"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "تحليل بيانات AI",
     //           title_en: "AI Data Analysis"
     //      }, {
     //           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
     //           title_ar: "أتمتة عمليات",
     //           title_en: "Process Automation"
     //      }]
     // },
     {
          id: 15, category: "design", icon: "bi-brush", number: "15",
          img: "./img/services4.png",
          title_ar: "الهوية الرقمية والعلامة التجارية", title_en: "Digital Identity & Branding",
          desc_ar: "تصميم الهوية البصرية، البروفايل، الشعارات، وبناء الهوية الرقمية.",
          desc_en: "Visual identity design, profiles, logos, and building digital identity.",
          tags_ar: ["هوية بصرية", "شعارات", "بروفايل"], tags_en: ["Visual Identity", "Logos", "Profiles"],
          desc_full_ar: "نصمم هوية بصرية رقمية متكاملة تشمل الشعار، الألوان، الخطوط، البروفايل، وتصاميم السوشال ميديا.",
          desc_full_en: "We design comprehensive digital visual identity including logo, colors, fonts, company profile, and social media designs.",
          includes_ar: ["تصميم الشعار", "دليل الهوية البصرية", "تصميم البروفايل", "بطاقات العمل", "تصاميم السوشال ميديا", "قوالب العروض", "تصميم الأوراق الرسمية", "هوية رقمية متسقة"],
          includes_en: ["Logo design", "Visual identity guide", "Company profile design", "Business cards", "Social media designs", "Presentation templates", "Letterhead & envelope design", "Consistent digital identity"],
          skills: [{ name_ar: "تصميم شعارات", name_en: "Logo Design", level: 95 }, {
               name_ar: "Adobe Illustrator",
               name_en: "Adobe Illustrator",
               level: 92
          }, { name_ar: "Photoshop", name_en: "Photoshop", level: 90 }, {
               name_ar: "InDesign",
               name_en: "InDesign",
               level: 85
          }],
          tech: ["Adobe Illustrator", "Photoshop", "InDesign", "Canva Pro"],

     },
     {
          id: 16,
          category: "infrastructure",
          icon: "bi-envelope-at",
          number: "16",
          img: "./img/services7.png",
          title_ar: "إنشاء وإدارة البريد الإلكتروني للشركات",
          title_en: "Business Email Setup & Management",
          desc_ar: "إنشاء وإدارة الإيميلات الرسمية للشركات وربطها بالدومين مع تنظيم الحسابات وضمان الأمان والاستقرار.",
          desc_en: "Create and manage professional business emails, connect them to domain, and ensure security and stability.",

          tags_ar: ["إيميلات شركات", "بريد احترافي", "دومين"],
          tags_en: ["Business Email", "Professional Email", "Domain"],

          desc_full_ar: "نقوم بإنشاء بريد إلكتروني احترافي خاص بالشركة باستخدام الدومين الرسمي (مثل info@company.com)، مع إعداد الحسابات وربطها بالأجهزة، وضبط الأمان، وإدارة المستخدمين والصلاحيات، بالإضافة إلى دعم واستمرارية الخدمة.",
          desc_full_en: "We set up professional business emails using the company domain (e.g., info@company.com), configure accounts, connect devices, manage users and permissions, and ensure security and reliability.",

          includes_ar: [
               "إنشاء إيميلات رسمية باسم الدومين",
               "ربط الإيميلات على الجوال والكمبيوتر",
               "إدارة الحسابات والصلاحيات",
               "حماية البريد من الاختراق",
               "إعداد التوقيع الرسمي",
               "استرجاع وإدارة كلمات المرور"
          ],

          includes_en: [
               "Create domain-based business emails",
               "Setup on mobile and desktop",
               "Manage users and permissions",
               "Email security configuration",
               "Official email signature setup",
               "Password recovery and management"
          ],

          skills: [
               { name_ar: "إدارة البريد الإلكتروني", name_en: "Email Administration", level: 93 },
               { name_ar: "أمن المعلومات", name_en: "Email Security", level: 90 },
               { name_ar: "إدارة الدومينات", name_en: "Domain Management", level: 88 }
          ],

          tech: ["Google Workspace", "Microsoft 365", "Domain DNS", "Email Hosting"]
     }
];

const portfolioItems = document.querySelectorAll('.portfolio-item');

// =========================================
// TRANSLATIONS
// =========================================
const T = {
     ar: {
          nav_home: "الرئيسية",
          nav_about: "عن الشركة",
          nav_services: "الخدمات",
          nav_portfolio: "أعمالنا",
          nav_hww: "كيف نعمل",
          nav_testimonials: "آراء العملاء",
          nav_contact: "تواصل معنا",
          nav_cta: "ابدأ مشروعك",
          hero_badge: "الجيل القادم من التحول الرقمي",
          hero_title_1: "نصنع مستقبل",
          hero_title_2: "البرمجيات المؤسسية",
          hero_desc: "نقدم حلول برمجية متكاملة، أنظمة ERP، ومنصات سحابية آمنة.",
          hero_cta1: "اكتشف خدماتنا",
          hero_cta2: "شاهد العرض",
          stat_projects: "مشروع منجز",
          stat_clients: "عميل عالمي",
          stat_years: "سنوات خبرة",
          card_live: "● مباشر",
          card_perf: "أداء النظام",
          card_security: "حماية البيانات",
          card_security_status: "محمي بالكامل ✓",
          card_growth: "نمو الإيرادات",
          about_badge: "من نحن",
          about_title: "شريكك الموثوق في <span>التحول الرقمي</span>",
          about_desc: "منذ بدايتنا، نساعد الشركات على تبني أحدث التقنيات.",
          about_exp: "سنوات من الخبرة",
          about_vision_title: "رؤيتنا ورسالتنا",
          about_vision_desc: "نسعى لتمكين المؤسسات العربية.",
          about_f1_title: "الابتكار",
          about_f1_desc: "أحدث تقنيات الذكاء الاصطناعي",
          about_f2_title: "أمان البيانات",
          about_f2_desc: "معايير تشفير عالمية",
          about_f3_title: "قابلية التوسع",
          about_f3_desc: "أنظمة تنمو مع أعمالك",
          about_f4_title: "دعم 24/7",
          about_f4_desc: "فريق دعم فني متخصص",
          counter_projects: "مشروع منجز",
          counter_clients: "عميل عالمي",
          counter_satisfaction: "رضا العملاء",
          counter_awards: "جائزة وتقدير",
          services_badge: "خدماتنا",
          services_title: "حلول تقنية <span>متكاملة</span>",
          services_desc: "15+ خدمة تقنية شاملة.",
          filter_all: "الكل",
          filter_dev: "التطوير",
          filter_design: "التصميم",
          filter_marketing: "التسويق",
          filter_infra: "البنية التحتية",
          portfolio_badge: "أعمالنا",
          portfolio_title: "قصص نجاح <span>ملهمة</span>",
          portfolio_desc: "أحدث المشاريع التي نفذناها.",
          filter_erp: "أنظمة ERP",
          filter_web: "تطبيقات الويب",
          filter_mobile: "تطبيقات موبايل",
          cat_erp: "نظام ERP",
          cat_web: "منصة ويب",
          cat_mobile: "تطبيق موبايل",
          proj1_title: "نظام إدارة الموارد",
          proj2_title: "منصة البيانات التحليلية",
          proj3_title: "تطبيق الخدمات اللوجستية",
          proj4_title: "بوابة التجارة الإلكترونية",
          proj5_title: "نظام إدارة المستشفيات",
          proj6_title: "تطبيق التعليم الإلكتروني",
          hww_badge: "منهجيتنا",
          hww_title: "كيف <span>نعمل</span>؟",
          hww_desc: "نتبع منهجية عمل منظمة تضمن تحقيق أفضل النتائج.",
          hww1_title: "التحليل والاكتشاف",
          hww1_desc: "نبدأ بفهم عميق لاحتياجات عملك وأهدافك والتحديات.",
          hww2_title: "التخطيط والتصميم",
          hww2_desc: "نصمم الحلول المثلى مع نماذج أولية ومخططات معمارية.",
          hww3_title: "التطوير والبناء",
          hww3_desc: "نبني الحل بأحدث التقنيات مع منهجية Agile.",
          hww4_title: "الاختبار والجودة",
          hww4_desc: "اختبارات شاملة - وظيفية، أداء، وأمان.",
          hww5_title: "الإطلاق والنشر",
          hww5_desc: "نطلق الحل مع مراقبة دقيقة وخطة نشر آمنة.",
          hww6_title: "الدعم والتحسين",
          hww6_desc: "دعم مستمر وتحسينات دورية لضمان نجاح المشروع.",
          tech_badge: "التقنيات",
          tech_title: "نستخدم أحدث <span>الأدوات</span>",
          test_badge: "آراء العملاء",
          test_title: "ماذا يقولون <span>عنا؟</span>",
          faq_badge: "الأسئلة الشائعة",
          faq_title: "إجابات <span>واضحة</span>",
          q1_q: "ما المدة المتوقعة لتطوير نظام ERP كامل؟",
          q1_a: "عادة تتراوح مدة تطوير نظام ERP بين 3 إلى 6 أشهر، وقد تزيد أو تقل حسب حجم الشركة وعدد الأقسام المطلوبة مثل الموارد البشرية، المبيعات، المخزون، والمحاسبة، بالإضافة إلى درجة التخصيص المطلوبة لكل قسم.",
          q2_q: "هل توفرون دعم وصيانة بعد إطلاق النظام؟",
          q2_a: "نعم، نقدم دعم فني مستمر بعد الإطلاق يشمل الصيانة، حل المشكلات، التحديثات الأمنية، وتحسين الأداء، مع إمكانية توفير دعم 24/7 حسب خطة الخدمة المتفق عليها لضمان استمرارية عمل النظام بدون توقف.",
          q3_q: "كيف يتم تأمين البيانات داخل نظام ERP؟",
          q3_a: "نطبق أعلى معايير الأمان مثل تشفير البيانات أثناء النقل والتخزين، إدارة صلاحيات المستخدمين بشكل دقيق، تسجيل العمليات (Logs)، بالإضافة إلى اتباع أفضل ممارسات الحماية لتقليل أي مخاطر اختراق أو فقدان بيانات.",
          q4_q: "هل يمكن ربط نظام ERP مع الأنظمة الحالية في الشركة؟",
          q4_a: "نعم، يمكن دمج نظام ERP بسهولة مع الأنظمة الحالية مثل أنظمة المحاسبة، المتاجر الإلكترونية، أو أنظمة الموارد البشرية عبر واجهات برمجية API مخصصة لضمان تدفق البيانات بشكل سلس بين جميع الأنظمة.",
          q5_q: "هل يمكن تخصيص نظام ERP حسب طبيعة نشاط الشركة؟",
          q5_a: "بالتأكيد، يتم تصميم النظام بطريقة مرنة تسمح بتخصيص كامل حسب نشاط الشركة سواء كانت تجارية، صناعية أو خدمية، مع إمكانية إضافة أو تعديل الوحدات بما يتناسب مع احتياجات العمل.",
          contact_badge: "تواصل معنا",
          contact_title: "ابدأ مشروعك <span>اليوم</span>",
          contact_desc: "املأ النموذج وسنتواصل خلال 24 ساعة.",
          contact_info_title: "معلومات الاتصال",
          contact_info_desc: "نحن هنا لمساعدتك.",
          c_address_label: "العنوان",
          c_address: "الرياض، السعودية",
          c_email_label: "البريد الإلكتروني",
          c_phone_label: "الهاتف",
          c_hours_label: "ساعات العمل",
          c_hours: "الأحد - الخميس: 9 ص - 6 م",
          c_cta_title: "هل تحتاج استشارة عاجلة؟",
          c_cta_desc: "احجز موعداً مع خبرائنا.",
          c_cta_btn: "احجز موعد الآن",
          form_name: "الاسم الكامل",
          form_email: "البريد الإلكتروني",
          form_company: "اسم الشركة",
          form_service: "نوع الخدمة",
          form_msg: "تفاصيل المشروع",
          form_submit: "إرسال الطلب",
          form_name_ph: "أدخل اسمك",
          form_email_ph: "example@company.com",
          form_company_ph: "اسم شركتك",
          form_msg_ph: "أخبرنا عن مشروعك...",
          footer_desc: "شريكك في التحول الرقمي.",
          f_links: "روابط سريعة",
          f_services: "الخدمات",
          f_news: "النشرة البريدية",
          f_news_desc: "اشترك لتصلك آخر الأخبار.",
          newsletter_ph: "بريدك الإلكتروني",
          f_privacy: "سياسة الخصوصية",
          f_terms: "شروط الاستخدام",
          footer_copy: "© 2026 مدارات تك. جميع الحقوق محفوظة.",
          modal_includes: "ماذا نقدم داخل الخدمة؟",
          modal_skills: "المهارات المستخدمة",
          modal_tech: "التقنيات والأدوات",
          modal_examples: "أمثلة أعمال",
          modal_cta_title: "جاهز لبدء مشروعك؟",
          modal_cta_desc: "تواصل معنا الآن واحصل على استشارة مجانية.",
          modal_cta_btn: "اطلب الخدمة الآن",
          scroll_hint: "مرر المؤشر فوق الصورة لاستعراض الموقع بالكامل",
          modal_duration: "مدة التنفيذ",
          modal_team: "حجم الفريق",
          modal_client: "العميل",
          btn_readmore: "قراءة المزيد"
     },
     en: {
          nav_home: "Home",
          nav_about: "About",
          nav_services: "Services",
          nav_portfolio: "Portfolio",
          nav_hww: "How We Work",
          nav_testimonials: "Testimonials",
          nav_contact: "Contact",
          nav_cta: "Start Project",
          hero_badge: "Next Gen Digital Transformation",
          hero_title_1: "Building the Future",
          hero_title_2: "of Enterprise Software",
          hero_desc: "Integrated software solutions, ERP systems, and secure cloud platforms.",
          hero_cta1: "Explore Services",
          hero_cta2: "Watch Demo",
          stat_projects: "Projects Done",
          stat_clients: "Global Clients",
          stat_years: "Years Experience",
          card_live: "● Live",
          card_perf: "System Performance",
          card_security: "Data Security",
          card_security_status: "Fully Protected ✓",
          card_growth: "Revenue Growth",
          about_badge: "About Us",
          about_title: "Your Trusted <span>Digital Partner</span>",
          about_desc: "We help enterprises adopt cutting-edge technology.",
          about_exp: "Years of Experience",
          about_vision_title: "Vision & Mission",
          about_vision_desc: "Empowering Arab enterprises.",
          about_f1_title: "Innovation",
          about_f1_desc: "Latest AI technologies",
          about_f2_title: "Data Security",
          about_f2_desc: "Global encryption standards",
          about_f3_title: "Scalability",
          about_f3_desc: "Systems that grow with you",
          about_f4_title: "24/7 Support",
          about_f4_desc: "Dedicated technical team",
          counter_projects: "Projects Done",
          counter_clients: "Global Clients",
          counter_satisfaction: "Client Satisfaction",
          counter_awards: "Awards",
          services_badge: "Services",
          services_title: "Integrated <span>Tech Solutions</span>",
          services_desc: "15+ comprehensive tech services.",
          filter_all: "All",
          filter_dev: "Development",
          filter_design: "Design",
          filter_marketing: "Marketing",
          filter_infra: "Infrastructure",
          portfolio_badge: "Portfolio",
          portfolio_title: "Inspiring <span>Success Stories</span>",
          portfolio_desc: "Latest projects across industries.",
          filter_erp: "ERP",
          filter_web: "Web Apps",
          filter_mobile: "Mobile",
          cat_erp: "ERP System",
          cat_web: "Web Platform",
          cat_mobile: "Mobile App",
          proj1_title: "Resource Management",
          proj2_title: "Analytics Platform",
          proj3_title: "Logistics App",
          proj4_title: "E-Commerce Gateway",
          proj5_title: "Hospital Management",
          proj6_title: "E-Learning App",
          hww_badge: "Our Process",
          hww_title: "How We <span>Work</span>?",
          hww_desc: "A structured methodology for best results.",
          hww1_title: "Discovery & Analysis",
          hww1_desc: "Deep understanding of your business needs and goals.",
          hww2_title: "Planning & Design",
          hww2_desc: "Optimal solution design with prototypes and architecture.",
          hww3_title: "Development & Build",
          hww3_desc: "Building with modern tech and Agile methodology.",
          hww4_title: "Testing & Quality",
          hww4_desc: "Comprehensive testing - functional, performance, security.",
          hww5_title: "Launch & Deploy",
          hww5_desc: "Production launch with careful monitoring.",
          hww6_title: "Support & Improve",
          hww6_desc: "Continuous support and improvements for project success.",
          tech_badge: "Tech Stack",
          tech_title: "Using Latest <span>Tools</span>",
          test_badge: "Testimonials",
          test_title: "What Clients <span>Say?</span>",
          faq_badge: "FAQ",
          faq_title: "Clear <span>Answers</span>",
          q1_q: "Timeline for ERP development?",
          q1_a: "Typically 3 to 6 months.",
          q2_q: "Post-launch support?",
          q2_a: "Yes, 24/7 maintenance contracts.",
          q3_q: "How do you ensure security?",
          q3_a: "ISO 27001 with end-to-end encryption.",
          q4_q: "Can you integrate with our systems?",
          q4_a: "Yes, via APIs.",
          contact_badge: "Contact Us",
          contact_title: "Start Your Project <span>Today</span>",
          contact_desc: "Fill the form and we'll contact you within 24 hours.",
          contact_info_title: "Contact Info",
          contact_info_desc: "We're here to help.",
          c_address_label: "Address",
          c_address: "Riyadh, Saudi Arabia",
          c_email_label: "Email",
          c_phone_label: "Phone",
          c_hours_label: "Working Hours",
          c_hours: "Sunday - Thursday: 9AM - 6PM",
          c_cta_title: "Need Urgent Consultation?",
          c_cta_desc: "Book a meeting.",
          c_cta_btn: "Book Now",
          form_name: "Full Name",
          form_email: "Email",
          form_company: "Company",
          form_service: "Service Type",
          form_msg: "Project Details",
          form_submit: "Submit",
          form_name_ph: "Enter your name",
          form_email_ph: "example@company.com",
          form_company_ph: "Your company",
          form_msg_ph: "Tell us about your project...",
          footer_desc: "Your strategic digital partner.",
          f_links: "Quick Links",
          f_services: "Services",
          f_news: "Newsletter",
          f_news_desc: "Subscribe for latest news.",
          newsletter_ph: "Your email",
          f_privacy: "Privacy Policy",
          f_terms: "Terms of Use",
          footer_copy: "© 2026 MADARAT TECH. All rights reserved.",
          modal_includes: "What's Included",
          modal_skills: "Skills Used",
          modal_tech: "Technologies & Tools",
          modal_examples: "Work Examples",
          modal_cta_title: "Ready to Start Your Project?",
          modal_cta_desc: "Contact us now for a free consultation.",
          modal_cta_btn: "Order Service Now",
          scroll_hint: "Hover over the image to scroll and view the full website",
          modal_duration: "Duration",
          modal_team: "Team Size",
          modal_client: "Client",
          btn_readmore: "Read More"
     }
};

const arTest = [
     {
          text: "مدارات تك حولت عملياتنا بشكل جذري. النظام ساعدنا على تقليل التكاليف بنسبة 40%.",
          name: "أحمد الشمري",
          role: "الرئيس التنفيذي - مجموعة الفجر",
          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
     },
     {
          text: "فريق محترف برؤية واضحة. التصميم فاق توقعاتنا والدعم ممتاز.",
          name: "سارة العتيبي",
          role: "مديرة التقنية - شركة نوفا",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
     },
     {
          text: "أفضل استثمار هذا العام. النظام سهل إدارة الفروع بشكل مركزي.",
          name: "خالد المطيري",
          role: "المدير المالي - سريع",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
     }
];
const enTest = [
     {
          text: "MADARAT TECH transformed our operations. Costs reduced by 40%.",
          name: "Ahmed Al-Shammari",
          role: "CEO - Al-Fajr Group",
          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
     },
     {
          text: "Professional team. Design exceeded expectations, support is excellent.",
          name: "Sara Al-Otaibi",
          role: "CTO - Nova Corp",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
     },
     {
          text: "Best investment this year. Centralized branch management made easy.",
          name: "Khaled Al-Mutairi",
          role: "CFO - Sareea Logistics",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
     }
];
let testimonials = arTest;

// =========================================
// PRELOADER
// =========================================
let pProgress = 0;
const pInterval = setInterval(() => {
     pProgress += Math.random() * 12 + 3;
     if (pProgress >= 100) {
          pProgress = 100;
          clearInterval(pInterval);
          setTimeout(() => {
               preloader.classList.add('hidden');
               document.body.style.overflow = 'auto';
               initGSAP();
          }, 400);
     }
     preloaderPercent.textContent = Math.floor(pProgress) + '%';
     preloaderFill.style.width = pProgress + '%';
     const idx = Math.min(Math.floor(pProgress / 25), 4);
}, 150);

// =========================================
// CURSOR
// =========================================
let mX = 0, mY = 0, cX = 0, cY = 0;
document.addEventListener('mousemove', e => {
     mX = e.clientX;
     mY = e.clientY;
     cursorDot.style.left = mX + 'px';
     cursorDot.style.top = mY + 'px';
});

function animCursor() {
     cX += (mX - cX) * 0.12;
     cY += (mY - cY) * 0.12;
     cursorRing.style.left = cX + 'px';
     cursorRing.style.top = cY + 'px';
     requestAnimationFrame(animCursor);
}

animCursor();
document.querySelectorAll('a, button, .service-card, .portfolio-item, .faq-question, input, textarea, select, .slider-btn, .hamburger, .svc-filter-btn, .filter-btn, .hww-scroll-btn').forEach(el => {
     el.addEventListener('mouseenter', () => {
          cursorDot.classList.add('hover');
          cursorRing.classList.add('hover');
     });
     el.addEventListener('mouseleave', () => {
          cursorDot.classList.remove('hover');
          cursorRing.classList.remove('hover');
     });
});

// =========================================
// SCROLL
// =========================================
window.addEventListener('scroll', () => {
     const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
     scrollProgressEl.style.width = pct + '%';
     navbar.classList.toggle('scrolled', window.scrollY > 50);
     backToTop.classList.toggle('visible', window.scrollY > 500);
     let current = '';
     document.querySelectorAll('section[id]').forEach(s => {
          if (window.scrollY >= s.offsetTop - 200) current = s.id;
     });
     document.querySelectorAll('.nav-link-item').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + current);
     });
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =========================================
// MOBILE MENU
// =========================================
hamburgerBtn.addEventListener('click', () => {
     isMenuOpen = !isMenuOpen;
     hamburgerBtn.classList.toggle('active');
     mobileMenu.classList.toggle('open');
     mobileOverlay.classList.toggle('open');
     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
});
mobileOverlay.addEventListener('click', () => {
     isMenuOpen = false;
     hamburgerBtn.classList.remove('active');
     mobileMenu.classList.remove('open');
     mobileOverlay.classList.remove('open');
     document.body.style.overflow = 'auto';
});
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
     isMenuOpen = false;
     hamburgerBtn.classList.remove('active');
     mobileMenu.classList.remove('open');
     mobileOverlay.classList.remove('open');
     document.body.style.overflow = 'auto';
}));

// =========================================
// LANGUAGE
// =========================================
langBtn.addEventListener('click', () => {
     currentLang = currentLang === 'ar' ? 'en' : 'ar';
     langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
     document.documentElement.lang = currentLang;
     document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
     const bs = document.getElementById('bootstrap-css');
     bs.href = currentLang === 'ar' ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css' : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
     updateLang(currentLang);
     renderServices();
     populateServiceSelect();
});

function updateLang(lang) {
     const d = T[lang];
     testimonials = lang === 'ar' ? arTest : enTest;
     testimonialIndex = 0;
     // updateTestimonial();
     document.querySelectorAll('[data-i18n]').forEach(el => {
          const k = el.getAttribute('data-i18n');
          if (d[k]) el.innerHTML = d[k];
     });
     document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
          const k = el.getAttribute('data-i18n-placeholder');
          if (d[k]) el.placeholder = d[k];
     });
     // buildDots();
}

// =========================================
// RENDER SERVICES
// =========================================
function renderServices(filter = 'all') {
     const grid = document.getElementById('servicesGrid');
     grid.innerHTML = '';
     const filtered = filter === 'all' ? servicesData : servicesData.filter(s => s.category === filter);
     filtered.forEach((svc, i) => {
          const isAr = currentLang === 'ar';
          const card = document.createElement('div');
          card.className = 'service-card';
          card.innerHTML = `
<div class="service-card-header">
<span class="service-number">${svc.number}</span>
<div class="service-icon"><i class="bi ${svc.icon}"></i></div>
</div>
<div class="service-title">${isAr ? svc.title_ar : svc.title_en}</div>
<div class="service-desc">${isAr ? svc.desc_ar : svc.desc_en}</div>
<div class="service-tags">${(isAr ? svc.tags_ar : svc.tags_en).map(t => `<span class="service-tag">${t}</span>`).join('')}</div>
<div class="service-card-actions">
<button class="btn-read-more" onclick="openSvcModal(${svc.id})">${isAr ? 'قراءة المزيد' : 'Read More'} <i class="bi bi-arrow-left"></i></button>
</div>
`;
          grid.appendChild(card);
          setTimeout(() => {
               gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
          }, i * 80);
     });
}

document.addEventListener('click', e => {
     if (e.target.classList.contains('svc-filter-btn')) {
          document.querySelectorAll('.svc-filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          renderServices(e.target.getAttribute('data-filter'));
     }
});

// =========================================
// SERVICE MODAL
// =========================================
function openSvcModal(id) {
     const svc = servicesData.find(s => s.id === id);
     if (!svc) return;
     const isAr = currentLang === 'ar';
     // document.getElementById('svcModalImg').src = svc.img;
     document.getElementById('svcModalCat').textContent = isAr ? svc.title_ar : svc.title_en;
     document.getElementById('svcModalTitle').textContent = isAr ? svc.title_ar : svc.title_en;
     document.getElementById('svcModalDesc').textContent = isAr ? svc.desc_full_ar : svc.desc_full_en;
     const includesList = document.getElementById('svcModalIncludes');
     includesList.innerHTML = '';
     (isAr ? svc.includes_ar : svc.includes_en).forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${item}`;
          includesList.appendChild(li);
     });
     const skillsGrid = document.getElementById('svcModalSkills');
     skillsGrid.innerHTML = '';
     svc.skills.forEach(skill => {
          const div = document.createElement('div');
          div.className = 'svc-skill-item';
          div.innerHTML = `<div class="svc-skill-name">${isAr ? skill.name_ar : skill.name_en}</div><div class="svc-skill-bar"><div class="svc-skill-fill" style="width:${skill.level}%"></div></div>`;
          skillsGrid.appendChild(div);
     });
     const techGrid = document.getElementById('svcModalTech');
     techGrid.innerHTML = '';
     svc.tech.forEach(t => {
          const span = document.createElement('span');
          span.className = 'svc-tech-badge';
          span.textContent = t;
          techGrid.appendChild(span);
     });
     serviceModal.classList.add('active');
     document.body.style.overflow = 'hidden';
}

function closeSvcModal() {
     serviceModal.classList.remove('active');
     document.body.style.overflow = 'auto';
}

document.getElementById('svcModalClose').addEventListener('click', closeSvcModal);
serviceModal.addEventListener('click', e => {
     if (e.target === serviceModal) closeSvcModal();
});

function populateServiceSelect() {

     const sel = document.getElementById('serviceSelect');

     sel.innerHTML = '';

     servicesData.forEach(svc => {

          const opt = document.createElement('option');

          opt.value = currentLang === 'ar'
               ? svc.title_ar
               : svc.title_en;

          opt.textContent = currentLang === 'ar'
               ? svc.title_ar
               : svc.title_en;

          sel.appendChild(opt);

     });

}

// =========================================
// PORTFOLIO MODAL - IMAGE SCROLL ON HOVER
// =========================================
const pmImgContainer = document.getElementById('pmImgContainer');
const pmImage = document.getElementById('pmImage');
const pmScrollProgress = document.getElementById('pmScrollProgress');
const pmHoverHint = document.getElementById('pmHoverHint');
let pmIsHovering = false;
let pmScrollAnimFrame = null;
let pmCurrentY = 0;
let pmMaxScroll = 0;
let pmImageLoaded = false;

portfolioItems.forEach(item => {
     item.addEventListener('click', () => {
          const title = item.getAttribute('data-title');
          const desc = item.getAttribute('data-desc');
          const longImg = item.getAttribute('data-img');
          const tech = item.getAttribute('data-tech');
          // const duration = item.getAttribute('data-duration');
          // const team = item.getAttribute('data-team');
          // const client = item.getAttribute('data-client');

          document.getElementById('pmTitle').textContent = title;
          document.getElementById('pmDesc').textContent = desc;
          pmCurrentY = 0;
          pmMaxScroll = 0;
          pmImageLoaded = false;
          pmImage.style.transform = 'translateY(0px)';
          pmScrollProgress.style.width = '0%';
          pmHoverHint.classList.remove('hidden');
          pmImage.src = longImg;

          const techStack = document.getElementById('pmTechStack');
          techStack.innerHTML = '';
          tech.split(',').forEach(t => {
               const badge = document.createElement('span');
               badge.className = 'pm-tech-badge';
               badge.textContent = t.trim();
               techStack.appendChild(badge);
          });
          // document.getElementById('pmDuration').textContent = duration;
          // document.getElementById('pmTeam').textContent = team;
          // document.getElementById('pmClient').textContent = client;

          pmBackdrop.classList.add('active');
          document.body.style.overflow = 'hidden';

          pmImage.onload = function () {
               pmImageLoaded = true;
               const containerHeight = pmImgContainer.clientHeight;
               const imgNaturalHeight = pmImage.naturalHeight;
               const imgWidth = pmImgContainer.clientWidth;
               const imgNaturalWidth = pmImage.naturalWidth;
               const scaleRatio = imgWidth / imgNaturalWidth;
               const displayedHeight = imgNaturalHeight * scaleRatio;
               pmMaxScroll = Math.max(0, displayedHeight - containerHeight);
               pmImage.style.width = '100%';
               pmImage.style.height = 'auto';
               if (pmMaxScroll <= 10) {
                    pmHoverHint.classList.add('hidden');
               }
          };
     });
});

pmImgContainer.addEventListener('mouseenter', () => {
     if (!pmImageLoaded) return;
     pmIsHovering = true;
     pmHoverHint.classList.add('hidden');
     startPmScroll();
});
pmImgContainer.addEventListener('mouseleave', () => {
     pmIsHovering = false;
     pmHoverHint.classList.remove('hidden');
     stopPmScroll();
     resetPmScroll();
});

function startPmScroll() {
     function animate() {
          if (!pmIsHovering) return;
          if (pmMaxScroll <= 0) {
               stopPmScroll();
               return;
          }
          pmCurrentY += 1.2;
          if (pmCurrentY >= pmMaxScroll) {
               pmCurrentY = pmMaxScroll;
               stopPmScroll();
          }
          pmImage.style.transform = `translateY(${-pmCurrentY}px)`;
          const pct = (pmCurrentY / pmMaxScroll) * 100;
          pmScrollProgress.style.width = pct + '%';
          pmScrollAnimFrame = requestAnimationFrame(animate);
     }

     pmScrollAnimFrame = requestAnimationFrame(animate);
}

function stopPmScroll() {
     if (pmScrollAnimFrame) {
          cancelAnimationFrame(pmScrollAnimFrame);
          pmScrollAnimFrame = null;
     }
}

function resetPmScroll() {
     pmCurrentY = 0;
     pmImage.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
     pmScrollProgress.style.transition = 'width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
     pmImage.style.transform = 'translateY(0px)';
     pmScrollProgress.style.width = '0%';
     setTimeout(() => {
          pmImage.style.transition = '';
          pmScrollProgress.style.transition = '';
     }, 900);
}

document.getElementById('pmClose').addEventListener('click', closePmModal);
pmBackdrop.addEventListener('click', e => {
     if (e.target === pmBackdrop) closePmModal();
});

function closePmModal() {
     pmBackdrop.classList.remove('active');
     document.body.style.overflow = 'auto';
     stopPmScroll();
     pmCurrentY = 0;
     pmImage.style.transform = 'translateY(0px)';
     pmScrollProgress.style.width = '0%';
     pmHoverHint.classList.remove('hidden');
     pmImageLoaded = false;
}

// =========================================
// HOW WE WORK SCROLL
// =========================================
document.getElementById('hwwNext').addEventListener('click', () => {
     hwwTrack.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('hwwPrev').addEventListener('click', () => {
     hwwTrack.scrollBy({ left: 300, behavior: 'smooth' });
});

// =========================================
// GSAP
// =========================================
function initGSAP() {
     gsap.registerPlugin(ScrollTrigger);
     gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
     gsap.to('.hero-heading', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 });
     gsap.to('.hero-text', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
     gsap.to('.hero-btns', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 });
     gsap.to('.hero-metrics', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 });
     document.querySelectorAll('.reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0, y: 50 }, {
               opacity: 1,
               y: 0,
               duration: 0.8,
               ease: 'power3.out',
               scrollTrigger: { trigger: el, start: 'top 85%' }
          });
     });

     // Counter bars animation
     document.querySelectorAll('.counter-enhanced-bar-fill').forEach(bar => {
          ScrollTrigger.create({
               trigger: bar, start: 'top 85%', once: true, onEnter: () => {
                    bar.style.width = bar.getAttribute('data-width') + '%';
               }
          });
     });

     // Counter numbers
     document.querySelectorAll('.counter').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          ScrollTrigger.create({
               trigger: counter, start: 'top 85%', once: true, onEnter: () => {
                    gsap.to(counter, {
                         innerText: target,
                         duration: 2,
                         snap: { innerText: 1 },
                         ease: 'power2.out',
                         onUpdate: function () {
                              counter.innerText = Math.ceil(counter.innerText);
                         }
                    });
               }
          });
     });

     document.querySelectorAll('.btn-primary-hero, .nav-cta').forEach(btn => {
          btn.addEventListener('mousemove', e => {
               const r = btn.getBoundingClientRect();
               gsap.to(btn, {
                    x: (e.clientX - r.left - r.width / 2) * 0.2,
                    y: (e.clientY - r.top - r.height / 2) * 0.2,
                    duration: 0.3
               });
          });
          btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.3 }));
     });
}

// =========================================
// TESTIMONIALS
// =========================================
function buildDots() {
     const dc = document.getElementById('sliderDots');
     dc.innerHTML = '';
     testimonials.forEach((_, i) => {
          const dot = document.createElement('div');
          dot.className = 'slider-dot' + (i === testimonialIndex ? ' active' : '');
          dot.addEventListener('click', () => {
               testimonialIndex = i;
               // updateTestimonial();
          });
          dc.appendChild(dot);
     });
}

function updateTestimonial() {
     const t = testimonials[testimonialIndex];
     gsap.to('#testimonialCard', {
          opacity: 0, y: 15, duration: 0.3, onComplete: () => {
               document.getElementById('testimonialText').textContent = `"${t.text}"`;
               document.getElementById('testimonialName').textContent = t.name;
               document.getElementById('testimonialRole').textContent = t.role;
               document.getElementById('testimonialImg').src = t.img;
               gsap.to('#testimonialCard', { opacity: 1, y: 0, duration: 0.5 });
          }
     });
     // buildDots();
}

// document.getElementById('nextTest').addEventListener('click', () => {
//      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
//      updateTestimonial();
// });
// document.getElementById('prevTest').addEventListener('click', () => {
//      testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
//      updateTestimonial();
// });
setInterval(() => {
     testimonialIndex = (testimonialIndex + 1) % testimonials.length;
     // updateTestimonial();
}, 7000);
// buildDots();

// =========================================
// FAQ
// =========================================
document.querySelectorAll('.faq-question').forEach(q => q.addEventListener('click', () => {
     const item = q.parentElement;
     const isActive = item.classList.contains('active');
     document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
     if (!isActive) item.classList.add('active');
}));

// =========================================
// CONTACT FORM
// =========================================
contactForm.addEventListener('submit', e => {
     e.preventDefault();
     const btn = contactForm.querySelector('.btn-submit');
     const orig = btn.textContent;
     btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
     btn.disabled = true;
     setTimeout(() => {
          btn.textContent = currentLang === 'ar' ? 'تم الإرسال ✓' : 'Sent ✓';
          btn.style.background = 'linear-gradient(135deg, #10B981, #06B6D4)';
          setTimeout(() => {
               btn.textContent = orig;
               btn.style.background = '';
               btn.disabled = false;
               contactForm.reset();
          }, 2000);
     }, 1500);
});
document.getElementById('newsletterForm').addEventListener('submit', e => {
     e.preventDefault();
     const btn = e.target.querySelector('button');
     btn.innerHTML = '<i class="bi bi-check"></i>';
     btn.style.background = '#10B981';
     setTimeout(() => {
          btn.innerHTML = '<i class="bi bi-send"></i>';
          btn.style.background = '';
          e.target.reset();
     }, 2000);
});

// =========================================
// PARTICLES
// =========================================
function initParticles() {
     const canvas = document.getElementById('particles-canvas');
     const ctx = canvas.getContext('2d');
     let particles = [];

     function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
     }

     window.addEventListener('resize', resize);
     resize();

     class P {
          constructor() {
               this.x = Math.random() * canvas.width;
               this.y = Math.random() * canvas.height;
               this.s = Math.random() * 2 + 0.5;
               this.vx = (Math.random() - 0.5) * 0.4;
               this.vy = (Math.random() - 0.5) * 0.4;
               this.o = Math.random() * 0.4 + 0.1;
          }

          update() {
               this.x += this.vx;
               this.y += this.vy;
               if (this.x > canvas.width) this.x = 0;
               if (this.x < 0) this.x = canvas.width;
               if (this.y > canvas.height) this.y = 0;
               if (this.y < 0) this.y = canvas.height;
          }

          draw() {
               ctx.fillStyle = `rgba(6,182,212,${this.o})`;
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
               ctx.fill();
          }
     }

     for (let i = 0; i < 50; i++) particles.push(new P());

     function drawLines() {
          for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
               const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y,
                    dist = Math.sqrt(dx * dx + dy * dy);
               if (dist < 140) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(37,99,235,${0.08 * (1 - dist / 140)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
               }
          }
     }

     function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => {
               p.update();
               p.draw();
          });
          drawLines();
          requestAnimationFrame(animate);
     }

     animate();
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
     a.addEventListener('click', e => {
          e.preventDefault();
          const t = document.querySelector(a.getAttribute('href'));
          if (t) window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
     });
});

// Keyboard
document.addEventListener('keydown', e => {
     if (e.key === 'Escape') {
          closeSvcModal();
          closePmModal();
          if (isMenuOpen) {
               isMenuOpen = false;
               hamburgerBtn.classList.remove('active');
               mobileMenu.classList.remove('open');
               mobileOverlay.classList.remove('open');
               document.body.style.overflow = 'auto';
          }
     }
});

// Init
renderServices();
populateServiceSelect();
initParticles();
