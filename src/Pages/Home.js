import { React, Link } from "react";
import Header from "./Test.js";

import axios from "axios";
import NavBar from "../Components/NavBar";
import OpenStudy from "../Components/OpenCaseStudyButton.js";
import Aprender from "./Aprender";
import StateFair from "./StateFair";
import SOMO from "./Somo.js";

setInterval(function () {
  axios
    .get("http://sekane-project.herokuapp.com")
    .then(function (response) {
      // handle success
      console.log("it's working");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}, 300000);

function Home() {
  return (
    <div className=" font-Quicksand">
      <div className="bg-heroBlue">
        <div className="relative">
          <NavBar />
          <img
            className="w-80 top-0 right-0  z-0 relative"
            src={"/images/accent-half-moon.svg"}
            alt="half moon accent"
          ></img>
        </div>
        <div className="text-heroPink lg:text-eight lg:ml-10 lg:font-bold lg:mt-16 text-6xl ml-5 mt-20 font-bold">
          Sarah Kane
        </div>
        <div className="flex justify-between ">
          <div className="lg:text-five lg:ml-10 text-white lg:w-3/5 lg:leading-loose ml-5 mr-5 mb-10 text-five mt-5">
            I am a product designer with a background in front-end engineering.
            My work ethos can be expressed in two phrases,{" "}
            <span className="text-heroPink">
              design with care, build with integrity.{" "}
            </span>
            Check out my work below. Enjoy!
          </div>
          <img
            className="h-[26rem] hidden lg:block"
            src={"/images/portrait3.png"}
            alt="self"
          ></img>
        </div>
      </div>
      <div>
        <div>
          <div className=" md:flex justify-around bg-aprenderPink w-auto overflow-hidden relative block z-20 ">
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
              width={500}
              height={500}
              src={"/images/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
            <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-seven lg:text-eight text-seven ">
                Aprender
              </div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
                <span className="font-bold"> Type of project:</span> Personal,
                Concept
              </p>

              <div className="mt-24">
                <OpenStudy link={"/aprender"} text={'aprenderPink'} />
              </div>
            </div>
          </div>
          {/* <div className=" md:flex justify-around bg-heroSomoBlue w-auto overflow-hidden relative block z-20 ">
            <div className=" font-poppins font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-eight text-seven ">SOMO</div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <div className="mt-24">
                <OpenStudy link={"/somo"} />
              </div>
            </div>
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
              width={500}
              height={500}
              src={"/images/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
          </div> */}
          <div className=" md:flex justify-around bg-stateFairBurgandy w-auto overflow-hidden relative block z-20">
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5 hidden lg:block md:block"
              width={500}
              height={500}
              src={"/images/state-fair-images.svg"}
              alt="Aprender Screens"
            ></img>
            <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-eight lg:text-eight text-six ">
                State Fair
              </div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
                <span className="font-bold"> Type of project:</span> Personal,
                Concept
              </p>
              <div className="mt-24">
                {" "}
                <OpenStudy link={"/state-fair"} text={"stateFairBurgandy"} />
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div>{/* <Aprender /> */}</div>
      <div>{/* <StateFair /> */}</div>
    </div>
  );
}

export default Home;
