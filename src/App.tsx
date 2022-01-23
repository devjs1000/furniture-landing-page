import  { useEffect, useState, useContext, lazy, Suspense } from "react";
import Loading from './components/Loading'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { context } from "./context/mainContext";
import Home from "./components/Home";
const Internship=lazy(()=>import('./components/Internship'))
const Menubar=lazy(()=>import('./components/Menubar'))
const Comment=lazy(()=>import('./components/Comment'))
const Training=lazy(()=>import('./components/Training'))
const Capital=lazy(()=>import('./components/Capital'))
const Footer=lazy(()=>import('./components/Footer'))
const Notfound=lazy(()=>import('./components/Notfound'))

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
        </Routes>
      </main>
      <Suspense fallback={<Loading/>}>
      <Menubar />
      </Suspense>
      <div>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" exact element={<Internship />} />
        <Route path="/internship" exact element={<Internship />} />
        <Route path="/capital" exact element={<Capital />} />
        <Route path="/training" exact element={<Training />} />
        <Route path=":notfound/*" exact element={<Notfound />} />

      </Routes>
      </Suspense>




        <Suspense fallback={<Loading/>}>
        <Comment />
        </Suspense>

      </div>
      <Suspense fallback={<Loading/>}>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
