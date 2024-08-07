import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AppLayout from "./pages/Layout/AppLayout";
import Korean from "./pages/Korean";
import Chinese from "./pages/Chinese";
import Japanese from "./pages/Japanese";
import Western from "./pages/Western";
const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Korean />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/western" element={<Western />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
