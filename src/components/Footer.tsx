import { Link } from "react-router-dom";
export default function () {
  const goToTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }
  return (
    <footer id="footer" className=" text-gray-600 w-full">
      <div className="p-2 bg-[#090b04]
       grid grid-flow-rows md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7  text-sm footer-nav">
        <Link className="text-gray-100 text-center link" to="/about" onClick={goToTop}>
          ABOUT US
        </Link>
        <Link to="/careers" onClick={goToTop} className="text-center text-gray-100 link">
          CAREERS
        </Link>
        <Link to="/blogs" onClick={goToTop} className="text-center text-gray-100 link">
          BLOGS
        </Link>
        <Link to="/privacy-policy" onClick={goToTop} className="text-center text-gray-100 link">
          PRIVACY POLICY
        </Link>
        <Link to="/terms-and-conditions" onClick={goToTop} className="text-center text-gray-100 link">
          
          TERMS & CONDITIONS

        
        </Link>
        <Link  to="/refund-policy" onClick={goToTop} className="text-center text-gray-100 link ">
          REFUND POLICY
        </Link>
        <Link  to="/equal-opportunity" onClick={goToTop} className="text-center text-gray-100 link ">
         EQUAL OPPORTUNITY
        </Link>
      </div>

      <div className=" bg-gray-50 flex items-center flex-wrap justify-around ">
        <div className="bg-gray-800  text-center text-gray-50 w-full">
          Xcitedu Software Solutions Pvt. Ltd, Delhi
        </div>
        <div>© Copyright 2022. All Rights Reserved.</div>
      </div>
    </footer>

  );
}
