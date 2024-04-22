import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Sport from "./pages/Sport";
import Innovation from "./pages/Innovation";
import Culture from "./pages/Culture";
import Travel from "./pages/Travel";
import Earth from "./pages/Earth";
import Live from "./pages/Live";
import Video from "./pages/Video";
import Business from "./pages/Business";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/business" element={<Business />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Earth" element={<Earth />} />
        <Route path="/video" element={<Video />} />
        <Route path="/live" element={<Live />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
