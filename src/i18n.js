import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      MainNav: {
        whoWeAre: "Who We Are",
        services: "Services",
      },
      HomeSection: {
        h1: "Quality Circle for BUSINESS ANALYSIS",
        p: `We provide business analysis and design services to make your software match with your specific business goals and cover all the gaps`,
      },
      WhoWeAreSection: {
        h1: "What we do?  “Think twice to cut once”",
        p: `We help you jump from idea to execution and launch on time, on budget and on specification, our team studies your business needs, goals, and objectives. The outcome is clear, actionable specifications, wireframes, requirements, and more to guide the development phase.`,
      },
      ServicesSection: {
        h1: "Our Services",
        services: [
          {
            subH2: `1. Project discovery`,
            subP: "To verify your idea, and focus more on the problem space.",
            ser: [
              "Set business needs",
              "Conduct market analysis",
              "product feasibility analysis",
              "Determine the high-level solution",
            ],
          },
          {
            subH2: `2. Business analysis & design`,
            subP: `Detailed analysis and documentation of the solution requirements and prioritize product features. 
            Analyze how the system would function (non-functional requirements)`,
            ser: [
              "Narrow down the project scope",
              "Create product roadmap",
              "Document solution requirements",
              "Provide a detailed cost estimation",
              "Create mockups and wireframes",
            ],
          },
          {
            subH2: `3. IT Product ownership`,
            subP: "Saving your time by representing the business in front of the software development team",
            ser: [
              "responsible for the project's outcomes.",
              "understand of customers' needs",
              "manage product backlog ",
              "prioritize requirements to maximize the value ",
              "manage product success metrics",
            ],
          },
        ],
      },
      copyWrite: "Copyright Quality Circle",
    },
  },
  ar: {
    translation: {
      MainNav: {
        whoWeAre: "من نحن",
        services: "خدماتنا",
      },
      HomeSection: {
        h1: "كوالتى سيركل لتحليل الأعمال",
        p: `قدم خدمات تحليل الأعمال وتصميم البرمجيات حتى يكون منتجك متوافق مع احتياجاتك و فرص النمو لعملك.`,
      },
      WhoWeAreSection: {
        h1: "ماذا نفعل؟",
        p: `ساعدك على الانتقال من الفكرة وفى الوقت، والميزانية والمواصفات المحددة، يقوم فريقنا بدراسة احتياجات عملك وأهدافك. للحصول  على نتيجة واضحة ، ومواصفات قابلة للتنفيذ ، و نطاق عمل ومتطلبات و تصميم محدد وواضح لإرشاد مرحلة التطوير.`,
      },
      ServicesSection: {
        h1: "خدماتنا",
        services: [
          {
            subH2: `1. اكتشاف المشروع`,
            subP: "للتحقق من فكرتك، والتركيز أكثر على مساحة المشكلة.",
            ser: [
              "تحديد احتياجات العمل",
              "إجراء تحليل السوق",
              "تحليل جدوى المنتج",
              "تحديد الحل",
            ],
          },
          {
            subH2: `2. تحليل وتصميم النظام`,
            subP: "تحليل وتوثيق مفصل لمتطلبات المنتج وتحديد أولويات و خصائص النظام. تحديد متطلبات المنتج الوظيفية (وغير الوظيفية)",
            ser: [
              "تحديد مفصل لنطاق المشروع",
              "تحديد خارطة طريق المنتج",
              "إنشاء خارطة طريق للتنفيذ",
              "توثيق متطلبات الحل وتقديم تقدير تفصيلي للتكلفة",
              "تصميم واجهة التطبيق",
            ],
          },
          {
            subH2: `3. ادارة المنتج `,
            subP: "توفير وقتك عن طريق إدارة فريق تطوير البرمجيات الخاص بمنتجك ",
            ser: [
              "مسؤولون عن نتائج المشروع.",
              "فهم احتياجات العملاء",
              "إدارة المهام الخاصة بالمنتج",
              "تحديد أولويات المنتج لتعظيم القيمة",
              "إدارة مقاييس نجاح المنتج",
            ],
          },
        ],
      },
      copyWrite: "جميع الحقوق محفوظه - كواليتي سيركل",
    },
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: resources,
  });

export default i18n;
