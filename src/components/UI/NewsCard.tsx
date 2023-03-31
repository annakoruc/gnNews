import React from "react";
import { useDispatch } from "react-redux";
import { ADD_ARTICLE, CHANGE_IS_OPEN_NEWS } from "../../store/modal/modalSlice";

import "../../styles/components/UI/news_card_style.scss";
import gnNews from "../../assets/icons/gnNews.svg";

type Props = {
  url: string;
  title: string;
  urlToImage?: File | string | undefined;
  author: string;
  content: string | null;
};

export const NewsCard = ({
  title,
  urlToImage,
  url,
  author,
  content,
}: Props) => {
  const dispatch = useDispatch();

  const icon = urlToImage ? String(urlToImage) : gnNews;
  const imgClass = !urlToImage ? "gnNews" : "";

  const openModal = () => {
    dispatch(CHANGE_IS_OPEN_NEWS());
    dispatch(
      ADD_ARTICLE({
        title: title,
        author: author,
        url: url,
        content: content,
        img: icon,
      })
    );
  };

  return (
    <div className="card" onClick={openModal}>
      <img src={icon} alt="icon" className={imgClass} />
      <p>{title} </p>
    </div>
  );
};
