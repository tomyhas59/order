import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <ul className="country">
        <li>
          <Link to="/">한식</Link>
        </li>
        <li>
          <Link to="/chinese">중식</Link>
        </li>
        <li>
          <Link to="/japanese">일식</Link>
        </li>
        <li>
          <Link to="/western">양식</Link>
        </li>
      </ul>
      <ul className="sign">
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
