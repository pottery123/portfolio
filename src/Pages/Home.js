import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aprender from "./Aprender";
import StateFair from "./StateFair";
import Somo from "./Somo";

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
}, 300000); // every 5 minutes (300000) http://sekane-projec.herokuapp.com

function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className=" ">
      <div className=" absolute flex left-16 top-5  z-50 ">
        {" "}
        <div className=" flex gap-10">
          {" "}
          <Link
            className="rounded text-heroPink px-2 py-1 hover:bg-heroPurple font-Poppins "
            to="/contact-about"
          >
            Contact
          </Link>{" "}
          <Link
            className="rounded text-heroPink px-3 py-1 hover:bg-heroPurple font-Poppins"
            to="/contact-about"
          >
            About
          </Link>{" "}
        </div>
      </div>
      <div className="flex gap-32 font-Poppins ">
        <div className="mt-28 ml-20 ">
          <img width={700} src={"/images/self.svg"} alt="background"></img>
        </div>

        <div className="mt-24">
          <div className="z-10 font-extralight text-heroPink  ">
            <div className="text-seven pb-8 font-extralight text-heroPink  ">
              Sarah Kane
            </div>
            <div className=" text-xl">
              I am a product designer with a background in front-end
              engineering. My work ethos can be expressed in two phrases,{" "}
              <span className="text-heroBlue font-medium ">
                {" "}
                design with care, build integrity.
              </span>{" "}
              Checkout my work below.
            </div>
          </div>
        </div>
        <img
          className="w-56 -translate-y-32"
          src={"/images/accent-image.svg"}
          alt={"accent"}
        ></img>
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
