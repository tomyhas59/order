import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { path: "/", label: "한식" },
    { path: "/chinese", label: "중식" },
    { path: "/japanese", label: "일식" },
    { path: "/western", label: "양식" },
  ];

  const signItems = [{ path: "/sign", label: "로그인" }];

  return (
    <div className="header-container">
      <div className="logo">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        요기요요
      </div>
      <ul className="country">
        {menuItems.map((item, index) => (
          <li key={index} className="category">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <ul className="sign">
        {signItems.map((item, index) => (
          <li key={index} className="category">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
