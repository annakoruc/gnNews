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

  // const url =
  //   "https://wydarzenia.interia.pl/kraj/news-donald-tusk-wskazuje-na-szpitale-prawie-wszedzie-slyszelismy,nId,6682781";

  // const onLoadIframe = () => {
  //   const iframe = document.getElementById("iframe");

  //   return iframe.innerHTML;
  // };

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
            />
          ))
        )}
        {isOpen && (
          <Modal>
            <p>{article?.author}</p>
            <p>{article?.title}</p>
            <a href={article?.url}>Link</a>
          </Modal>
        )}
      </div>
      {/* <iframe
        id="iframe"
        src={url}
        width={1000}
        height={500}
        sandbox="allow-same-origin"
        // sandbox="allow-scripts allow-modal"
        loading="eager"
        title="urlPage"
      /> */}
    </Container>
  );
};
