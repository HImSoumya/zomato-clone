import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import DiningOut from "./pages/dining/DiningOut";
import Footer from "./components/Footer";
import OrderOnline from "./pages/orderOnline/OrderOnline";
import NightLife from "./pages/nightLife/NightLife";
import TopLoadingBar from "./components/TopLoadingBar";

function App() {
  return (
    <>
      <TopLoadingBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dining-out" element={<DiningOut />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/drinks-nightlife" element={<NightLife />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
