import { useEffect, useContext, useLayoutEffect } from "react";
import { context } from "../context/mainContext";
import barrierBreakingImg from "../../img/barrierBreaking.svg";
import trainingImg from "../../img/training.svg";
import feelingProudImg from "../../img/feelingProud.svg";
import foundationImg from "../../img/foundation.svg";
import designImg from "../../img/design.svg";

export default function Dial(props: any) {
  const backgrounds: any[] = [barrierBreakingImg, trainingImg, feelingProudImg, foundationImg, designImg];
  const ctx = useContext(context);
const select=(themeNumber:number)=>{
  ctx.setSelected(themeNumber)
}
  return (
    <div className="dial-container overflow-hidden rounded-xl">
      <div className="rect-outer bg-red-400 rounded-xl shadow-lg" id='outer-rect'>
        <div className=" rect-inner bg-gray-50 shadow-lg  rounded-xl">
          <img
            src={backgrounds[ctx.products[ctx.selected].background]}
            alt={ctx.products[ctx.selected].title}
            className="object-contains"
          />
        </div>
        <div className=" h-12 flex justify-start  items-center rect-title">
          <button className="bg-orange-500 ml-1 animate-up rounded-full border-4 border-white shadow p-2 h-8 w-8" onClick={()=>{select(0)}}></button>
          <button className="bg-teal-400 ml-1 animate-up rounded-full border-4 border-white shadow p-2 h-8 w-8" onClick={()=>{select(1)}}></button>
          <button className="bg-gray-800 ml-1 animate-up rounded-full border-4 border-white shadow p-2 h-8 w-8" onClick={()=>{select(2)}}></button>
          <button className="bg-yellow-200 ml-1 animate-up 1 rounded-full border-4 border-white shadow p-2 h-8 w-8" onClick={()=>{select(3)}}></button>
          <button className="bg-red-400 ml-1 animate-up rounded-full border-4 border-white shadow p-2 h-8 w-8" onClick={()=>{select(4)}}></button>


        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
