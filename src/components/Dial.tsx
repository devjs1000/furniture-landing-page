import { useEffect, useContext, useLayoutEffect } from "react";
import { context } from "../context/mainContext";
import barrierBreakingImg from "../../img/barrierBreaking.svg";
import trainingImg from "../../img/training.svg";
import feelingProudImg from "../../img/feelingProud.svg";
import foundationImg from "../../img/foundation.svg";

export default function Dial(props: any) {
  const backgrounds: any[] = [barrierBreakingImg, trainingImg, feelingProudImg, foundationImg];
  const ctx = useContext(context);

  // const changeSelectedUp = () => {
  //   ctx.setSelected(
  //     ctx.selected - 1 < 0 ? ctx.products.length - 1 : ctx.selected - 1
  //   );
  // };
  // const changeSelectedDown = () => {
  //   ctx.setSelected(
  //     ctx.selected + 1 > ctx.products.length - 1 ? 0 : ctx.selected + 1
  //   );
  // };

  return (
    <div className="dial-container overflow-hidden rounded-xl">
      <div className="rect-outer bg-red-400 rounded-xl shadow-lg" id='outer-rect'>
        <div className=" rect-inner bg-red-50 shadow-lg  rounded-xl">
          <img
            src={backgrounds[ctx.products[ctx.selected].background]}
            alt={ctx.products[ctx.selected].title}
          />
        </div>
      </div>
    </div>
  );
}
