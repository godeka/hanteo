import { useState } from "react";

import Appbar from "./components/Appbar/Appbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Content/Content.jsx";

import ChartPage from "./pages/ChartPage.jsx";

import "./App.css";

const categories = [
  { id: 0, title: "차트", page: <ChartPage /> },
  { id: 1, title: "Whook" },
  { id: 2, title: "이벤트" },
  { id: 3, title: "뉴스" },
  { id: 4, title: "스토어" },
  { id: 5, title: "충전소" },
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
