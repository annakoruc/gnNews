import React from "react";
import { useDispatch } from "react-redux";
import { ADD_ARTICLE, CHANGE_IS_OPEN_NEWS } from "../../store/modal/modalSlice";

import "../../styles/components/UI/news_list_element_style.scss";
import gnNews from "../../assets/icons/gnNews.svg";

type Props = {
  title: string;
  author: string;
  date: Date;
  url: string;
  content: string | null;
  urlToImage?: File | string | undefined;
};

export const NewsListElement = ({
  title,
  author,
  date,
  url,
  content,
  urlToImage,
}: Props) => {
  const dispatch = useDispatch();
  const icon = urlToImage ? String(urlToImage) : gnNews;
  const stringToDate = new Date(date);
  // const month = stringToDate.getMonth() + 1;

  const newsDate = stringToDate.toLocaleDateString();
  const newsTime = stringToDate.toLocaleTimeString();

  // const articleDate = {
  //   year: stringToDate.getFullYear(),
  //   month: month.toString().padStart(2, "0"),
  //   day: stringToDate.getDate().toString().padStart(2, "0"),
  //   hour: stringToDate.getHours().toString().padStart(2, "0"),
  //   minutes: stringToDate.getMinutes().toString().padStart(2, "0"),
  // };

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
    <div className="element" onClick={openModal}>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="date">
        {`${newsDate} | ${newsTime}`}
        {/* {`${articleDate.day}.${articleDate.month}.${articleDate.year}  |  ${articleDate.hour}:${articleDate.minutes}`} */}
      </p>
    </div>
  );
};
