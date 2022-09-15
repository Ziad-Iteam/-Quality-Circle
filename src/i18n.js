import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
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
    resources: {
      en: {
        translation: {
          MainNav: {
            whoWeAre: "Who We Are",
            services: "Services",
            contactUs: "Contact Us",
          },
          HomeSection: {
            h1: "Lorem Ipsum",
            p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
            venenatis dui, non pellentesque turpis. Pellentesque scelerisque orci
            quis rutrum volutpat. Ut ac enim pulvinar, bibendum erat id, volutpat
            mauris. Curabitur ut dui quis enim euismod vulputate. Nunc nec auctor
            urna, id ornare erat. Pellentesque blandit dapibus ligula,`,
          },
        },
      },
      ar: {
        translation: {
          MainNav: {
            whoWeAre: "من نحن",
            services: "خدماتنا",
            contactUs: "تواصل معنا",
          },
          HomeSection: {
            h1: "لوريم ايبسوم",
            p: `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
            
            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
            
            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
            
            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.`,
          },
        },
      },
    },
  });

export default i18n;
