import { useEffect, useState, useContext, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { context } from "./context/mainContext";
import Home from "./components/Home";
const Menubar = lazy(() => import("./components/Menubar"));
const Footer = lazy(() => import("./components/Footer"));

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
    <div className="App    mx-auto">
      <Navbar />
        <Home />
      <Suspense fallback={<Loading />}>
        <Menubar />
      </Suspense>

      <Suspense fallback={<Loading />}>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
