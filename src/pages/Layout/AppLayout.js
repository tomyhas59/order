import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default AppLayout;
