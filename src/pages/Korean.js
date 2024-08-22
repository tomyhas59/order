import React from "react";
import MenuListRenderer from "../components/MenuListRenderer";
const Korean = ({ data }) => {
  return (
    <div>
      <h2>한식</h2>
      <MenuListRenderer data={data.korean} />
    </div>
  );
};

export default Korean;
