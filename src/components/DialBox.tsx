import { useEffect, useContext, useLayoutEffect } from "react";
export default function DialBox(props: any) {
  return (
        <div className="dial-container overflow-hidden rounded-xl">

      <div
        className="rect-outer bg-red-400 rounded-xl shadow-lg"
        id="outer-rect"
      >
        {/* <div className=" rect-inner bg-gray-50 shadow-lg  rounded-xl">
          <img src={props.img} alt={props.title} className="object-contains" />
        </div> */}
        <div></div>
      </div>
      </div>
  );
}
