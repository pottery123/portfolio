import { React } from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

function ContactAbout() {
  return (
    <div className=" bg-heroBlue h-screen font-Quicksand ">
      <div>
        <div className="relative z-10">
          <NavBar />
          <img
            className="w-96 top-0 absolute  z-0 right-0"
            src={"/images/accent-half-moon-right.svg"}
            alt="half moon accent"
          ></img>
        </div>
        <div className="flex">
          <img
            className=" h-[23rem] bottom-0 right-0 absolute z-30 "
            src={"/images/portrait4.png"}
            alt="self"
          ></img>
          <div className="ml-10 mt-24">
            <div className="text-heroPink text-eight font-bold ">About</div>
            <div className="text-2xl  w-2/3  text-white  leading-loose mb-16">
              Sarah Kane is product designer with many hobbies. She enjoys deep
              conversations, pottery, history, coding (including this website),
              photography and travel. She lives in Seattle...in the Rainier
              Valley.
            </div>
            <div className="text-2xl">
              <div className="mb-3 flex gap-9">
                <span className="text-aprenderPink">email:</span>{" "}
                <span className="text-white">sarah-kane@outlook.com</span>
              </div>
              <span className="flex gap-3 text-aprenderPink">
                linkedin:{" "}
                <a
                  href="http://www.linkedin.com/in/sarah-e-kane"
                  target='_blank'
                  rel="noreferrer"
                  className="underline decoration-solid text-white hover:text-heroPink">
                  www.linkedin.com/in/sarah-e-kane
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAbout;
