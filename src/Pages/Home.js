import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Aprender from "./Aprender";
import StateFair from "./StateFair";

import NavBar from "../Components/NavBar";


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
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="">
      <div className="bg-heroBlue">
        <div className="relative">
          <NavBar />
          <img
            className="w-80 top-0  z-0 relative"
            src={"/images/accent-half-moon.svg"}
            alt="half moon accent"
          ></img>
        </div>
        <div className="text-heroPink text-eight ml-10 font-bold mt-16">
          Sarah Kane
        </div>
        <div className="flex justify-between">
          <div className="text-five ml-10 text-white w-3/5 leading-loose">
            I am a product designer with a background in front-end engineering.
            My work ethos can be expressed in two phrases,{" "}
            <span className="text-heroPink">
              design with care, build integrity.
            </span>{" "}
            Check out my work below. Enjoy!
          </div>
          <img
            className=" h-80"
            src={"/images/self-image.png"}
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
      <div>
     
      </div>

    </div>
  );
}

export default Home;
