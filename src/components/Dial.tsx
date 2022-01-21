import { useState, useContext } from "react";
import { context } from "../context/mainContext";
export default function Dial(props : any) {
  const ctx = useContext(context);

  return (
    <div className="flex sm:w-auto sm:justify-end sm:scale-50 dial-container lg:w-full relative my-16">
      <div className="dial relative rounded-full">
        <div
          className="d-0 dials"
          onClick={() => {
            ctx.setSelected(
              ctx.selected - 1 < 0 ? ctx.products.length - 1 : ctx.selected - 1
            );
          }}
          style={{
            backgroundImage: `url(${
              ctx.products[
                ctx.selected - 1 < 0
                  ? ctx.products.length - 1
                  : ctx.selected - 1
              ].background
            })`,
          }}
        ></div>
        <div
          className="d-1 dials active"
          
        >
        <img src={ctx.products[ctx.selected].background}/>
        </div>
        <div
          className="d-2 dials"
          onClick={() => {
            ctx.setSelected(
              ctx.selected + 1 > ctx.products.length - 1 ? 0 : ctx.selected + 1
            );
          }}
          style={{
            backgroundImage: `url(${
              ctx.products[
                ctx.selected + 1 > ctx.products.length - 1
                  ? 0
                  : ctx.selected + 1
              ].background
            })`,
          }}
        ></div>

      </div>

      <div className="img-circle absolute">
        <div className="shadow chair-shadow rounded-full  absolute"></div>
        <img src={ctx.products[ctx.selected].chair} alt="" className="" />
      </div>
    </div>
  );
}
