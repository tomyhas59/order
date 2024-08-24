import React, { useState, useRef, useEffect } from "react";

const MenuListRenderer = ({ data }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setClickedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setClickedIndex(null);
  };

  return (
    <div className="menu-list-container" ref={menuRef}>
      {data.map((item, i) => (
        <div
          key={i}
          className={`menu ${clickedIndex === i ? "clicked" : ""}`}
          onClick={() => setClickedIndex(i)}
        >
          <div className={`menu-inner ${clickedIndex === i ? "clicked" : ""}`}>
            <div className="menu-front"></div>
            <div className="menu-back">
              {clickedIndex === i && (
                <button
                  className="close-button"
                  onClick={(e) => handleButtonClick(e)}
                >
                  x
                </button>
              )}
              <p className={`food-name ${clickedIndex === i ? "clicked" : ""}`}>
                메뉴: {item.menu}
              </p>
              <p className={`price ${clickedIndex === i ? "clicked" : ""}`}>
                가격: {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuListRenderer;
