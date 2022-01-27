import { useState, useContext, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { context } from "./context/mainContext";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Notfound from "./components/Notfound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
const Menubar = lazy(() => import("./components/Menubar"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const ctx = useContext(context);

  return (
    <div className="App mx-auto ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />

      </Routes>

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
