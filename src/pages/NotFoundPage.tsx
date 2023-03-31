import { useTranslation } from "react-i18next";
import { Container } from "../components";

import "../styles/pages/not_found_style.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="not_found">
        <h4>404</h4>
        <p>{t("home.chooseCountry")}</p>
      </div>
    </Container>
  );
};
