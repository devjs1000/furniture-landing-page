import { useContext} from "react";
import { context } from "../context/mainContext";
export default function () {
  const ctx = useContext(context);

  return (
    <div
      className={`${
        ctx.menuNav ? "show-menu  sm-flex" : "hide-menu "
      }  menubar fixed  flex-wrap  justify-center items-center top-0 text-gray-700 bg-gray-100`}
      id='menubar'
    >
      <div
        className={`  ${
          ctx.menuNav ? "fixed" : "relative "
        } top-0 right-0 m-20 `}
        onClick={() => {
          ctx.setMenuNav(0);
          document.body.style.overflow='scroll'

        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-12 h-12 "
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>

      <div className="flex  text-2xl  justify-center mx-12 items-center flex-wrap text-gray-800">
        <button className="text-left my-2 p-1  w-full hover:bg-gray-100 px-4 ">
          HOUSE OF DESIGN
        </button>
        <button className="text-left my-2 p-1 w-full hover:bg-gray-100 px-4   ">
          TRAININGS
        </button>
        <button className="text-left my-2 p-1  w-full  px-4 hover:bg-gray-100">INTERNSHIP</button>
        <button className="text-left my-2  p-1  w-full px-4 hover:bg-gray-100">CAPITALS</button>
        <button className="text-left my-2 p-1 w-full px-4 hover:bg-gray-100">FOUNDATIONS</button>
      </div>
    </div>
  );
}
