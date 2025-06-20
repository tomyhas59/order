import { BrowserRouter, Route, Routes } from "react-router-dom";

import Gsap from "./pages/Gsap";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gsap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
