import { useTranslation } from "react-i18next";

import { Container } from "../components";

import "../styles/pages/home_page.scss";
import gnNews from "../assets/icons/gnNews.svg";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="home_page">
        <img src={gnNews} alt="logo.png" />
        <div>
          <h1>{t("home.info")}</h1>
          <h3>{t("home.chooseCountry")}</h3>
        </div>
      </div>
    </Container>
  );
};
