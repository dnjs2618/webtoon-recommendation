import React from "react";
import { Link, Route } from "react-router-dom";
import KakaoWebtoon from "./Webtoons/KakaoWebtoon";
import DaumWebtoon from "./Webtoons/DaumWebtoon";
import NaverWebtoon from "./Webtoons/NaverWebtoon";

const Webtoons = () => {
  return (
    <div>
      <h1>Webtoon 소개 페이지</h1>
      <hr />
      <ul>
        <li>
          <Link to="/webtoons/naver">네이버 웹툰 소개</Link>
        </li>
        <li>
          <Link to="/webtoons/daum">다음 웹툰 소개</Link>
        </li>
        <li>
          <Link to="/webtoons/kakao">카카오페이지 웹툰 소개</Link>
        </li>
      </ul>

      <Route
        path="/webtoons"
        exact={true}
        render={() => <div>원하시는 웹툰 소개를 선택해주세요</div>}
      />
      <Route path="/webtoons/naver" component={NaverWebtoon} />
      <Route path="/webtoons/daum" component={DaumWebtoon} />
      <Route path="/webtoons/kakao" component={KakaoWebtoon} />
    </div>
  );
};

export default Webtoons;
