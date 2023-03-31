import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import "../styles/components/footer_style.scss";

export const Footer = () => {
  const { t } = useTranslation();
  const [realTime, setRealTime] = useState(new Date());
  const numberOfArticles = useSelector(
    (state: RootState) => state.news.articles.length
  );

  useEffect(() => {
    setInterval(() => setRealTime(new Date()), 1000);
  }, [realTime]);

  return (
    <footer className="footer">
      <p className="footer_author">
        {t("footer.created")}{" "}
        <a href="https://github.com/annakoruc">annakoruc</a> |{" "}
        {t("footer.task")} <a href="https://www.gnstudio.dev/">gnStudio</a>
      </p>
      <div className="footer_data">
        <span className="clock">{realTime.toLocaleTimeString()}</span>
        <p>|</p>
        <p>
          {t("footer.numArticles")} {numberOfArticles}{" "}
        </p>
      </div>
    </footer>
  );
};
