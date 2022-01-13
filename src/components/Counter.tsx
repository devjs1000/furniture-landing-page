import { useState, useContext } from "react";
import { context } from "../context/mainContext";
export default function Counter() {
  const [theme, setTheme] = useState();
  const ctx = useContext(context);
  return (
    <div className="relative">
      <div
        className={`bg-${ctx.products[ctx.selected].color}-800 text-white flex justify-center items-center`}
        id="counter"
      >
        0{ctx.selected + 1}
      </div>
      <img
        className="absolute bg-dotted"
        src="http://www.clker.com/cliparts/8/e/a/b/1194989365666493578pattern-dots-square-grid-01.svg.med.png"
        alt="Dots Square Grid 01 Pattern Clip Art at Clker.com - vector clip art online,  royalty free &amp;amp; public domain"
      />
      <div className="down absolute">
        <div className="line bg-gray-400"></div>
        <div  onClick={()=>{
          ctx.setSelected((ctx.selected-1)<0?ctx.products.length-1:ctx.selected-1)
        }} className="btn-1 w-10 h-10 bg-white flex justify-center items-center rounded-full relative">
          <div className="hover-btn w-10 h-10 rounded-full"></div>
        </div>
        <div  onClick={()=>{
          ctx.setSelected((ctx.selected+1)>ctx.products.length-1?0:ctx.selected+1)}} className="btn-2 w-10 h-10 bg-white flex justify-center items-center rounded-full relative mt-3">
          <div className="hover-btn w-10 h-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
