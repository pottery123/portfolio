import { React, useState, } from "react";
import { Link } from "react-router-dom";



function OpenStudy({link, text}) {
 
    return (
      <Link
        className={ `border-2 border-white rounded-full text-center px-3 py-2 bg-white text-${text} hover:bg-slate-100`}
        to={link}
   
      >
        { "Open Case Study" }
      </Link>
    );
  }

  export default OpenStudy;



