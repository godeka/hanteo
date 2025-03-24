import { useState } from "react";

import Appbar from "./components/layout/Appbar/Appbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Content from "./components/layout/Content/Content.jsx";

import ChartPage from "./pages/ChartPage.jsx";
import WhookPage from "./pages/WhookPage.jsx";
import EventPage from "./pages/EventPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import StorePage from "./pages/StorePage.jsx";
import ChargingPage from "./pages/ChargingPage.jsx";

import "./App.css";

const categories = [
  { id: 0, title: "차트", page: <ChartPage /> },
  { id: 1, title: "Whook", page: <WhookPage /> },
  { id: 2, title: "이벤트", page: <EventPage /> },
  { id: 3, title: "뉴스", page: <NewsPage /> },
  { id: 4, title: "스토어", page: <StorePage /> },
  { id: 5, title: "충전소", page: <ChargingPage /> },
];

function App() {
  const [currCategory, setCurrCategory] = useState(0);

  return (
    <div className="App">
      <Appbar
        categories={categories}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
      <Content>{categories.find((c) => c.id === currCategory).page}</Content>
      <Footer />
    </div>
  );
}

export default App;
