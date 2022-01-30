import capitalImg from "../../img/feelingProud.svg";
import foundationImg from "../../img/foundation.svg";
import trainingImg from "../../img/training.svg";
import internshipImg from "../../img/barrierBreaking.svg";
import designImg from "../../img/design.svg";
import policyImg from "../../img/terms.svg";
import DialBox from "../components/DialBox";
import Card from "../components/Card";
import Team from '../pages/Team'
export default () => {
  return (
    <>
      <section className=" w-[100%]">
        <div className=" ">
          {/* <div className="absolute right-0">
          <DialBox/>
          </div> */}

          <div className="bg-slate-50 flex-wrap mx-auto px-10 sm:px-32 pt-[20px] bg-no-repeat ">
            <h1 className="text-center flex justify-center  w-full  text-4xl sm:text-6xl mt-12  font-semibold font-sans text-slate-700">
              <span className="">
                {" "}
                Welcome to
                <span className="text-blue-500"> Xcitedu!</span>
              </span>
            </h1>
            <h4 className="text-center mb-0 w-full text-[1.5rem] font-semibold py-4 text-slate-500">
              India's most innovative value based corporation{" "}
            </h4>
            <h2 className="text-lg sm:2xl   mb-12 sm:mb-20 lg:mb-30 text-justify   text-gray-500 mt-[3px]">
              Conceptualised as a Startup, and now an emerging global
              enterprise, We are driven by passion for education and aim to
              deliver effective & efficient service with integrity and
              accountability using proven and innovative methods. With an
              unprecedented zeal, our team is working in five different
              verticals –
            </h2>

            <div className="flex pb-4 text-lg w-auto sm:2xl  justify-center animate-blink ">
              <a
                href="#first-about-card"
                className="rounded shadow-xl   hover:shadow text-white px-2 py-1 bg-blue-500"
              >
                learn more
              </a>
            </div>
          </div>
          <div
            className="bg-white  py-[4rem] flex flex-wrap justify-center"
            id="first-about-card"
          >
            <Card
              title="Internships"
              img={internshipImg}
              hColor="#f97316"
              description="Get a real time experience in different fields with us ."
            />
            <Card
              title="Trainings"
              img={trainingImg}
              hColor="#10b981"
              description="  
              Got a sensation to learn something new or upskill yourself ? Try us !"
            />
            <Card
              title="Capitals"
              img={capitalImg}
              hColor="#111827"
              description="One-stop solution for your startup incubation .
             "
            />
            <Card
              title="Foundations"
              img={foundationImg}
              hColor="#facc15"
              description="  Helping Unprivileged  students gain access to education."
            />
            <Card
              title="House Of Design"
              hColor="#ef4444"
              img={designImg}
              description=" Add a flavor of design at your workplace or life!"
            />
            <Card
              title="Blogging"
              img={policyImg}
              description=" Have an Innate desire to write what you feel, just pen it down with us!"
            />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-center text-gray-700">Our Team</h1>
        <Team />
      </section>
    </>
  );
};
