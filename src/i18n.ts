import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          countries: {
            poland: "Poland",
            germany: "Germany",
            usa: "USA",
            france: "France",
            brazil: "Brazil",
            czechia: "Czechia",
            portugal: "Portugal",
            ukraine: "Ukraine",
          },
          home: {
            info: "Your source of information from the world !",
            chooseCountry: "Select a country to view the latest articles",
          },

          footer: {
            created: "created by",
            task: "recruitment task",
            numArticles: "number of articles:",
          },

          button: {
            info: "INFO",
            select: "Select Country",
          },
        },
      },
      pl: {
        translation: {
          countries: {
            poland: "Polska",
            germany: "Niemcy",
            usa: "USA",
            france: "Francja",
            brazil: "Brazylia",
            czechia: "Czechy",
            portugal: "Portugalia",
            ukraine: "Ukraina",
          },
          home: {
            info: "Twoje źródło informacji ze świata !",
            chooseCountry: "Wybierz kraj aby wyświetlić najświeższe artykuły",
          },

          footer: {
            created: "utworzone przez",
            task: "zadanie rekrutacyjne",
            numArticles: "liczba artykułów:",
          },

          button: {
            info: "INFORMACJE",
            select: "Wybierz kraj",
          },
        },
      },
    },
  });

export default i18n;
