import React, { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Comment from "./components/Comment";
import { context } from "./context/mainContext";
import Internship from "./components/Internship";
import Training from "./components/Training";
import Capital from "./components/Capital";
import Home from "./components/Home";
import Notfound from "./components/Notfound";

function App() {
  const [cardData, setCardData] = useState([]);
  const ctx = useContext(context);
  useEffect(() => {
    fetch("/src/data/cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);
  return (
    <div className="App  py-2 my-3 mx-auto">
      <Navbar />
      <main className="flex sm-wrap  m-6">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<Notfound />} />
        </Routes>
      </main>
      <Menubar />
      <div>
        <Routes>
          <Route path="/" exact element={<Internship />} />
          <Route path="/internship" exact element={<Internship />} />
          <Route path="/capital" exact element={<Capital />} />
          <Route path="/training" exact element={<Training />} />
        </Routes>

        <Comment />
      </div>
      <Footer />
    </div>
  );
}

export default App;
