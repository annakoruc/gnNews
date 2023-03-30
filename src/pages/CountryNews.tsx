import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../components";
import { Modal, NewsCard, NewsListElement, Loader } from "../components/UI";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/countryNews/CountryNewsSlice";

import "../styles/pages/country_news.scss";

type Props = {
  code: string;
};

export const CountryNews = ({ code }: Props) => {
  const news = useSelector((state: RootState) => {
    return state.news;
  });
  const article = useSelector((state: RootState) => {
    return state.modal.article;
  });
  const switchBoolean = useSelector((state: RootState) => state.switch.isList);
  const isOpen = useSelector((state: RootState) => {
    return state.modal.isOpenNews;
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataFromApi(code));
  }, [code, dispatch]);

  return (
    <Container>
      <div className={switchBoolean ? "all_news_list" : "all_news_cards"}>
        {news.loading ? (
          <Loader />
        ) : switchBoolean ? (
          news.articles.map((element) => (
            <NewsListElement
              key={element.title}
              title={element.title}
              author={element.author}
              date={element.publishedAt}
              url={element.url}
              content={element.content}
              urlToImage={element.urlToImage}
            />
          ))
        ) : (
          news.articles.map((element) => (
            <NewsCard
              key={element.title}
              title={element.title}
              url={element.url}
              urlToImage={element.urlToImage}
              author={element.author}
              content={element.content}
            />
          ))
        )}
        {isOpen && (
          <Modal>
            <h2>{article?.title}</h2>
            <img src={article?.img} alt="icon" />
            <p>{article?.content}</p>

            <h3>Autor: {article?.author}</h3>
            <a href={article?.url}>Zobacz całość</a>
          </Modal>
        )}
      </div>
    </Container>
  );
};
