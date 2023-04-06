import { React } from "react";
import NavBar from "../Components/NavBar";

function ContactAbout() {
  return (
    <div className="bg-heroBlue font-Quicksand " >
      <div className="relative z-10">
        <NavBar />
        <img
          className="w-96 top-0 absolute  z-0 right-0"
          src={"/images/accent-half-moon-right.svg"}
          alt="half moon accent"
        ></img>
      </div>

      <img
          className=" h-96 bottom-0 left-0 absolute z-30 "
          src={"/images/image-self-about.svg"}
          alt="self"
        ></img>
      
   
       <div className="ml-44 h-screen">

        <div className="text-heroPink text-eight font-bold pt-32 pr-52 pl-52  ">About</div>
        <div className="text-five pl-20 ml-32 w-2/3  text-white  leading-loose">
          Sarah Kane is product designer with many hobbies. She enjoys deep
          conversations, pottery, history, coding (including this website),
          photography and travel. She lives in Seattle...in the Rainier Valley.
       </div>
          

      </div>
    </div>
    
  );
}

export default ContactAbout;
