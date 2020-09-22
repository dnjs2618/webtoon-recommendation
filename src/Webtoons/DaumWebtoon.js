import React from "react";
import { daumToon } from "./WebtoonInfo";
import "./webtoon.css";

const DaumWebtoon = () => {
  return (
    <div>
      {daumToon.map((daum) => {
        return (
          <div key={daum.id} className="webtoon-wrapper">
            <div className="left-column">
              <img src={daum.imageUrl} />
            </div>
            <div className="right-column">
              <div className="title-day">
                <div className="title">{daum.title}</div>
                <div className="day">{daum.day}</div>
              </div>
              <div className="genre">{daum.genre}</div>
              <div className="description">{daum.description}</div>
              <a target="_blank" href={daum.link}>
                지금 보러가기!(클릭시 이동)
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DaumWebtoon;
