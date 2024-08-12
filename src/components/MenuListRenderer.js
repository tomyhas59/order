import React from "react";

const MenuListRenderer = ({ data }) => {
  return (
    <div className="menu-list-container">
      {data.map((item, i) => (
        <div key={i} className="menu">
          <div className="menu-inner">
            <div className="menu-front"></div>
            <div className="menu-back"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuListRenderer;
