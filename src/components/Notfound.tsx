import { useParams } from "react-router-dom";
import notfoundImg from "../../img/notfound.svg";
export default () => {
  const { notfound } = useParams();
  return (
    <div
      className="flex m-auto justify-center items-center "
      style={{ minHeight: "85vh" }}
    >
      <div className="  flex flex-wrap justify-center px-5 items-center ">
        <h1 className="text-6xl text-center m-4 w-auto text-gray-800" style={{margin:'50px !important'}}>
          {notfound} <span className="text-indigo-500">notfound</span>
        </h1>
        <img src={notfoundImg} className='w-auto m-4  h-60'/>
      </div>
    </div>
  );
};
