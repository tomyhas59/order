import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { path: "/", label: "한식" },
    { path: "/chinese", label: "중식" },
    { path: "/japanese", label: "일식" },
    { path: "/western", label: "양식" },
  ];

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
          <Link to={item.path} className="category">
            {item.label}
          </Link>
        ))}
      </ul>
      <Link to="/sign" className="sign">
        로그인
      </Link>
    </div>
  );
};

export default Header;
