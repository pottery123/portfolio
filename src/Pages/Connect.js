import { React } from "react";
import NavBar from "../Components/NavBar";

function Connect() {
  return (
    <div className="bg-heroBlue font-Quicksand">
      <div className="relative z-10 ">
        <NavBar />
        <img
          className="w-96 top-0 absolute  z-0 right-0 "
          src={"/images/accent-half-moon-right.svg"}
          alt="half moon accent"
        ></img>
      </div>
      
     
        <img
          className=" h-96 bottom-0 left-0 absolute z-30 "
          src={"/images/image-self-about.svg"}
          alt="self"
        ></img>
        <div className="bg-heroBlue pt-32 pl-52 h-screen"> 
        <div className="text-five ml-20  text-white w-3/5 leading-loose ">
        <div className="text-heroPink text-eight font-bold">Connect</div>
        <div className=" text-five">
             <div className=" gap-7  flex ">
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
