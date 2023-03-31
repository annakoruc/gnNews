import i18next from "i18next";
import i18n from "../i18n";

const countries: Array<{
  name: string;
  code: string;
}> = [];

function updateTranslations() {
  countries[0] = { name: i18n.t("countries.poland"), code: "pl" };
  countries[1] = { name: i18n.t("countries.germany"), code: "de" };
  countries[2] = { name: i18n.t("countries.usa"), code: "us" };
  countries[3] = { name: i18n.t("countries.france"), code: "fr" };
  countries[4] = { name: i18n.t("countries.brazil"), code: "br" };
  countries[5] = { name: i18n.t("countries.czechia"), code: "cz" };
  countries[6] = { name: i18n.t("countries.portugal"), code: "pt" };
  countries[7] = { name: i18n.t("countries.ukraine"), code: "ua" };
}

if (i18n.isInitialized) {
  updateTranslations();
}

i18next.on("languageChanged", function () {
  updateTranslations();
});

export default countries;
