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

          info: {
            fun: {
              title: "The most fun 💖:",
              first:
                "Design styling - creating each component based on the design.",
              second:
                "Working with Redux-toolkit - despite few attempts with this library, this time I managed to connect it and the application without any problem.",
            },
            difficulty: {
              title: "The biggest difficulty 😢:",
              first: `through my oversight, initially instead of loading the page content downloaded from the API, I was looking for a way to bypass 'Access-Control-Allow-Origin' to display the entire page in an iFrame (unfortunately it didn't work 😉 ).`,
              second: `When I doing the retch API in the Redux-toolkit middleware, I had not yet fully understood the promises issued by it, I was making unnecessary additional .then() by which the fetched data was not displayed.`,
              third: `It also took me some time to prepare the responsive design of the site under phones - mostly the appropriate width of the view so that it not to scroll.`,
            },
            inAddition: {
              title: "In addition:",
              first:
                "I tried to do a deploy of the site - unfortunately it is impossible by blocking the API on hosts other than local.",
              second:
                "Unfortunately, I can't make the repository private. Github blocks this possibility when the repository from which the fork is made is public ",
            },
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
          info: {
            fun: {
              title: "Największa frajda 💖:",
              first:
                "stylowanie projektu - tworzenie każdego komponentu na podstawie designu.",
              secound:
                "praca z Redux-toolkit - mimo niewielu prób z tą biblioteką, tym razem bez żadnego problemu udało mi się go połączyć a aplikacją.",
            },
            difficulty: {
              title: "Największa trudność 😢:",
              first: `przez moje niedopatrzenie początkowo zamiast wczytać treść strony pobraną z API, szukałam sposobu na obejście 'Access-Control-Allow-Origin' aby wyświetlić całą strone w iFrame (niestety się nie udalo 😉 ).`,
              second: `podczas robienia retch API w middleware Redux-toolkit, nie do końca ogarniałam jeszcze promise przez nie wydawane, robiłam niepotrzebnie dodatkowe .then() przez które pobrane dane nie były wyświetlane.`,
              third: `troche zajeło mi również przygotowanie responsywności strony pod telefony- przede wszystkim odpowiednia szerokość widoku tak aby sie nie skrolowała.`,
            },
            addacionally: {
              title: "Dodakowo:",
              first:
                "Próbowałam zrobić deploy strony - niestety jest to niemożliwe przez blokadę API na innych hostach niż local",
              second:
                "Niestety nie moge zrobić aby rezpozytorium było prywatne. Github blokuje tą możliwość w momencie gdy repozytorium z którego jest robiony fork jest publiczne ",
            },
          },
        },
      },
    },
  });

export default i18n;
