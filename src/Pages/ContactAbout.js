import { React } from "react";
import NavBar from "../Components/NavBar";


function ContactAbout() {
  return (
    <div className=" bg-heroBlue lg:h-screen font-Quicksand h-screen ">
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
            className=" lg:h-[23rem] lg:bottom-0 lg:right-0 lg:absolute lg:z-30 lg:block hidden "
            src={"/images/portrait4.png"}
            alt="self"
          ></img>
          <div className="lg:ml-10 lg:mt-40 ml-10 mt-32 mx-10">
            <div className="text-heroPink lg:text-eight lg:font-bold text-3xl lg:mb-20 mb-5">About</div>
            <div className="lg:text-2xl  lg:w-2/3  text-white  lg:leading-loose lg:mb-16 mb-10">
              Sarah Kane is product designer with many hobbies. She enjoys deep
              conversations, pottery, history, coding (including this website),
              photography and travel. She lives in Seattle...in the Rainier
              Valley.
            </div>
            <div className="lg:text-2xl">
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
