import { React } from "react";
import NavBar from "../Components/NavBar";

function Connect() {
  return (
    <div className="bg-heroBlue">
      <div className="relative">
        <NavBar />
        <img
          className="w-96 top-0 inset-x-2/4  z-0 relative ml-[230px] "
          src={"/images/accent-half-moon-right.svg"}
          alt="half moon accent"
        ></img>
      </div>
      
      <div className="flex">
        <img
          className=" h-96 mt-36 "
          src={"/images/image-self-about.svg"}
          alt="self"
        ></img>
        <div className="text-five ml-20  text-white w-3/5 leading-loose -mt">
        <div className="text-heroPink text-eight font-bold">Connect</div>
        <div className=" text-five">
             <div className=" gap-7  flex ">
               {" "}
               <span>email:</span> <span>sarah-kane@outlook.com</span>
             </div>
             <span className="flex gap-3">
               linkedin:{" "}
               <a
                 href="https:www.linkedin.com/in/sarah-e-kane"
                 target="_blank"
                 rel="noreferrer"
                 className="underline decoration-solid text-white hover:text-heroPink"
               >
                 www.linkedin.com/in/sarah-e-kane
               </a>{" "}
             </span>
           </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default Connect;
