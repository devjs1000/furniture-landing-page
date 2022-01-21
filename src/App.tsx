import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter, Router, Routes} from 'react-router-dom'
import Counter from "./components/Counter";
import Dial from "./components/Dial";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from './components/Card'
import Comment from './components/Comment'
import {context} from './context/mainContext'
import InternshipByLocation from './components/InternshipByLocation'
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
        <div className="w-full">
          <Counter />
          <div className="px-4 py-2">
            <h2 className="text-6xl text-gray-400">{ctx.products[ctx.selected].title}</h2>
            <h2 className="text-6xl font-semibold text-gray-800">at home</h2>
            <h2 className="text-lg text-gray-400 ">
              Meet your new comfort zone!
            </h2>
          </div>
        </div>

        <div className=" ">
          <div className="w-full"></div>
          <div className="w-full ">
            <Dial />
          </div>
        </div>
      </main>
<Menubar />
<div>
<InternshipByLocation />



<Comment />
</div>
<Footer />
    </div>
  );
}

export default App;
