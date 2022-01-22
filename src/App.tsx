import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter, Router, Routes} from 'react-router-dom'
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from './components/Card'
import Comment from './components/Comment'
import {context} from './context/mainContext'
import Internship from "./components/Internship";
import Training from "./components/Training";
import Capital from "./components/Capital";
import DialContainer from './components/DialContainer'
import CounterContainer from './components/CounterContainer'



function App() {
  const [cardData, setCardData]=useState([])
  const ctx=useContext(context)
  useEffect(()=>{
    fetch('/src/data/cards.json').then(res=>res.json()).then(data=>{
    setCardData(data)
    })
  },[])
  return (
    <div className="App  py-2 my-3 mx-auto">
      <Navbar />

      <main className="flex sm-wrap  m-6">
      <CounterContainer />

        <DialContainer />
      </main>
<Menubar />
<div>

<Internship />
<Capital />
<Training />


<Comment />
</div>
<Footer />
    </div>
  );
}

export default App;
