import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AppLayout from "./pages/Layout/AppLayout";
import Korean from "./pages/Korean";
import Chinese from "./pages/Chinese";
import Japanese from "./pages/Japanese";
import Western from "./pages/Western";
import "./App.css";
import Sign from "./pages/Sign";

const App = () => {
  const data = {
    korean: [
      {
        menu: "김치찌개",
        price: "7000원",
      },
      {
        menu: "된장찌개",
        price: "6000원",
      },
      {
        menu: "닭볶음탕",
        price: "26000원",
      },
      {
        menu: "소불고기",
        price: "9000원",
      },
    ],
    japanese: [
      {
        menu: "초밥",
        price: "17000원",
      },
      {
        menu: "우동",
        price: "5000원",
      },
    ],
    chinese: [
      {
        menu: "짜장면",
        price: "7000원",
      },
      {
        menu: "짬뽕",
        price: "8000원",
      },
    ],
    western: [
      {
        menu: "햄버거",
        price: "4000원",
      },
      {
        menu: "피자",
        price: "18000원",
      },
    ],
  };

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Korean data={data.korean} />} />
          <Route path="/chinese" element={<Chinese data={data.chinese} />} />
          <Route path="/japanese" element={<Japanese data={data.japanese} />} />
          <Route path="/western" element={<Western data={data.western} />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
