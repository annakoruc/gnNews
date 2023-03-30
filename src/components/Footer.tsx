import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "../styles/components/footer_style.scss";

export const Footer = () => {
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
        created by <a href="https://github.com/annakoruc">annakoruc</a> |
        recruitment task <a href="https://www.gnstudio.dev/">gnStudio</a>
      </p>
      <div className="footer_data">
        <span className="clock">{realTime.toLocaleTimeString()}</span>
        <p>|</p>
        <p>number of articles: {numberOfArticles} </p>
      </div>
    </footer>
  );
};
