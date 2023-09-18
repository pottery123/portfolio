import { React } from "react";

import axios from "axios";
import NavBar from "../Components/NavBar";
import Aprender from "./Aprender";
import StateFair from "./StateFair";

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
              design with care, build with integrity. {" "}
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
        <Aprender />
      </div>
      <div>
        <StateFair />
      </div>
    </div>
  );
}

export default Home;
