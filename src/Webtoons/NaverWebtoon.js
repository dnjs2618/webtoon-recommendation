import React from "react";
import { naverToon } from "./WebtoonInfo";
import "./naverwebtoon.css";

const NaverWebtoon = () => {
  return (
    <div>
      {naverToon.map((naver) => {
        return (
          <div key={naver.id} className="naver-webtoon-wrapper">
            <div className="left-column">
              <img src={naver.imageUrl} />
            </div>
            <div className="right-column">
              <div className="title-day">
                <div className="naver-title">{naver.title}</div>
                <div className="naver-day">{naver.day}</div>
              </div>
              <div className="naver-genre">{naver.genre}</div>
              <div className="naver-description">{naver.description}</div>
              <a target="_blank" href={naver.link}>
                지금 보러가기!(클릭시 이동)
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NaverWebtoon;
