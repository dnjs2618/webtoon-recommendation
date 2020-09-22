import React from "react";
import Home from "./Home";
import About from "./About";
import Webtoons from "./Webtoons";
import { Link, Route } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <ul className="header">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="about">
          <Link to="/about">홈페이지 소개</Link>
        </li>
        <li className="webtoons">
          <Link to="/webtoons">웹툰 소개페이지</Link>
        </li>
      </ul>

      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/webtoons" component={Webtoons} />
    </div>
  );
};

export default Header;
