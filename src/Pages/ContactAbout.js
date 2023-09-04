import { React } from "react";
import NavBar from "../Components/NavBar";

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
            className=" h-[25rem] bottom-0 right-0 absolute z-30 "
            src={"/images/portrait4.png"}
            alt="self"
          ></img>
          <div className="ml-10 mt-24">
            <div className="text-heroPink text-eight font-bold ">About</div>
            <div className="text-3xl  w-2/3  text-white  leading-loose">
              Sarah Kane is product designer with many hobbies. She enjoys deep
              conversations, pottery, history, coding (including this website),
              photography and travel. She lives in Seattle...in the Rainier
              Valley.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAbout;

{
  /* // <div className="bg-heroBlue font-Quicksand ">
    //   <div className="relative z-10">
    //     <NavBar />
    //     <img
    //       className="w-96 top-0 absolute  z-0 right-0"
    //       src={"/images/accent-half-moon-right.svg"}
    //       alt="half moon accent"
    //     ></img>
    //   </div>
    //   <div>
    //     <div>
    //       <div className="flex bg-heroBlue ">
    //       <img
    //         className=" h-[23rem] bottom-0 right-0 absolute z-30 "
    //         src={"/images/portrait4.png"}
    //         alt="self"
    //       ></img>

    //       <div className="ml-10 mt-32 bg-heroBlue  ">
    //         <div className="text-heroPink text-eight font-bold ">
    //           About
    //         </div>
    //         <div className="text-five  w-2/3  text-white  leading-loose">
    //           Sarah Kane is product designer with many hobbies. She enjoys deep
    //           conversations, pottery, history, coding (including this website),
    //           photography and travel. She lives in Seattle...in the Rainier
    //           Valley.
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */
}
