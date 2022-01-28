import capitalImg from "../../img/feelingProud.svg";
import foundationImg from "../../img/foundation.svg";
import trainingImg from "../../img/training.svg";
import internshipImg from "../../img/barrierBreaking.svg";
import designImg from "../../img/design.svg";
import policyImg from "../../img/terms.svg"
export default () => {

  return (
    <div className="">
      <section
        className="bg-gray-100 w-[100%]"
        style={{
          backgroundImage:
            "url(https://c.tenor.com/p5aPf47OAeoAAAAC/aesthetic-colors.gif)",
        }}
      >
        <div className="backdrop-blur-[30px]">
          <div className="w-[90%] mx-auto md:w-[75%] pt-[20px] ">
            <h1 className="text-center text-5xl md:text-6xl font-semibold font-sans text-slate-100">
              Our vision
            </h1>
            <h4 className="text-center text-lg md:text-xl font-semibold py-4 md:py-6 text-slate-800">
              XcitEducation is a educational institue with all kind of
              opportunites.
            </h4>
            <p className="px-3 text-left sm:text-center font-semibold text-sm md:text-base text-gray-700 mt-[5px]">
              We are a educational institue on a mission to equip students with
              relevant skills & practical exposure to help them get the best
              possible start to their careers. Imagine a world full of freedom
              and possibilities. A world where you can discover your passion and
              turn it into your career. A world where you graduate fully
              assured, confident, and prepared to stake a claim on your place in
              the.
            </p>
            <div className="  py-[4rem] flex flex-wrap justify-center">
              <div className="  md:mr-[32px] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={internshipImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className=" min-h-[100px] bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl  md:text-xl lg:text-2xl lg:mb-[8px] font-semibold text-orange-400 mb-[2px] mt-0 md:my-[8px] text-left">
                    Internships
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                    Find 10,000+ internships from great companies to give a
                    kickstart to your career
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="fas fa-arrow-right pl-1"></i>
                  </a>
                </div>
              </div>
              <div className=" backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] bg-white flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={trainingImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className="min-h-[100px]  bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-[2px] mt-0 md:my-[8px] text-left">
                    Trainings
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                    Learn new-age skills on the go with our short-term online
                    trainings
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="pl-1 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className=" backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] md:mr-[32px] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] bg-white flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={capitalImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className="min-h-[100px]  bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#111827] mb-[2px] mt-0 md:my-[8px] text-left">
                    Capitals
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                    Specialize in industry-oriented programs that get you ready
                    for a career in your
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="pl-1 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className=" backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] bg-white flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={foundationImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className=" min-h-[100px] bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-[2px] mt-0 md:my-[8px] text-left">
                    Foundations
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                    Get premium fresher jobs with a minimum CTC of 3LPA on your
                    fingertips
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="pl-1 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className=" md:mr-[32px] backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] bg-white flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={designImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className=" min-h-[100px] bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-[2px] mt-0 md:my-[8px] text-left">
                    House Of Design
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                    Get premium design for your dream House
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="pl-1 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className=" backdrop-blur-[30px] bg-[rgba(255,255,255,.1)] p-3 md:p-4 w-[90%] lg:w-[368px] xl:w-[464px] lg:h-[235px] bg-white flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
                <img
                  src={policyImg}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div className=" min-h-[100px] bg-[rgba(255,255,255,.2)] w-[80%] p-1 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-[2px] mt-0 md:my-[8px] text-left">
                    T & C
                  </h3>
                  <p className="text-left mb-0 mt-0 text-sm md:text-base font-semibold text-gray-800">
                 Learn more about us in Terms and Conditions page.
                  </p>
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="pl-1 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
