import React from "react";
import { useState, useCallback } from "react";

const Callback = () => {
  const [color, setColor] = useState("red");

  const onChangeColor = useCallback(() => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [color]);

  return (
    <>
      <div>useCallback</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>변경</button>
    </>
  );
};

export default Callback;
