import { BrowserRouter, Route, Routes } from "react-router-dom";

import Poker from "./pages/Poker";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Poker />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
