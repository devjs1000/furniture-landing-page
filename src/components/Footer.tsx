import { Link } from "react-router-dom";
export default function () {
  return (
    <footer id="footer" className=" text-gray-600 w-full">
      <div className="p-2 bg-gray-900 grid grid-flow-rows md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-7  text-sm footer-nav">
        <Link className="text-gray-100 text-center link" to="/about">
          ABOUT US
        </Link>
        <Link to="/careers" className="text-center text-gray-100 link">
          CAREERS
        </Link>
        <Link to="/blogs" className="text-center text-gray-100 link">
          BLOGS
        </Link>
        <Link to="/privacy-policy" className="text-center text-gray-100 link">
          PRIVACY POLICY
        </Link>
        <Link to="/terms-and-conditions" className="text-center text-gray-100 link">
          TERMS & CONDITIONS
        </Link>
        <Link to="/refund-policy" className="text-center text-gray-100 link ">
          REFUND POLICY
        </Link>

        <Link to="legal-notice" className="text-center text-gray-100 link">
          LEGAL NOTICE
        </Link>
      </div>

      <div className=" bg-gray-50 flex items-center flex-wrap justify-around ">
        <div className="bg-gray-900  text-center text-gray-50 w-full">
          Xcitedu Software Solutions Pvt. Ltd
        </div>
        <div>© Copyright 2022. All Rights Reserved.</div>
      </div>
    </footer>

  );
}
