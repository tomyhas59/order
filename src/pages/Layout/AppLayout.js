import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="appLayout">
      <Header />
      <div className="contentContainer">{children}</div>
    </div>
  );
};

export default AppLayout;
