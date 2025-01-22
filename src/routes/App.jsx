import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Utamas from "../pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Utamas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
