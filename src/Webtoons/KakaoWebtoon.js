import React from "react";
import { kakaoToon } from "./WebtoonInfo";
import "./webtoon.css";

const KakaoWebtoon = () => {
  return (
    <div>
      {kakaoToon.map((kakao) => {
        return (
          <div key={kakao.id} className="webtoon-wrapper">
            <div className="left-column">
              <img src={kakao.imageUrl} />
            </div>
            <div className="right-column">
              <div className="title-day">
                <div className="title">{kakao.title}</div>
                <div className="day">{kakao.day}</div>
              </div>
              <div className="genre">{kakao.genre}</div>
              <div className="description">{kakao.description}</div>
              <a target="_blank" href={kakao.link}>
                지금 보러가기!(클릭시 이동)
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KakaoWebtoon;
