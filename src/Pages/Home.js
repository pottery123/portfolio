import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
}, 300000); // every 5 minutes (300000) http://sekane-projec.herokuapp.com

function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className=" mb-4 mt-10 text-primary font-semibold">
      <div className="bg-transparent absolute flex right-12 top-10  z-50 ">
        {" "}
        <div className=" flex gap-10">
          {" "}
          <Link
            className="rounded bg-primary text-white px-2 py-1 hover:bg-secondary"
            to="/contact-about"
          >
            Contact
          </Link>{" "}
          <Link
            className="rounded bg-primary text-white px-3 py-1 hover:bg-secondary"
            to="/contact-about"
          >
            About
          </Link>{" "}
        </div>
      </div>
      <div class="">
        <div className="lg:text-eight md:text-eight lg:pl-16 md:pl-16 text-primary ">
          Sarah Kane
        </div>
        <div className=" text-six">
          <p className="text-six md:ml-48 lg:ml-48 md:mt-24 lg:mt-24 lg:mr-48 md:mr-48 lg:text-center md:text-center">
            {" "}
            I am a product designer with a background in front-end engineering.
            My work ethos can be expressed in one phrase,{" "}
            <span className="text-secondary">
              {" "}
              design with care, build with integrity.
            </span>
          </p>
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
