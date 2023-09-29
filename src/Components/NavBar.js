import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="relative font-Quicksand">
      <div className=" flex w-full absolute  justify-between pl-10 pr-10 pt-10 z-10">
        <div className="font-Quicksand">
          {" "}
          <Link
            className="rounded px-2 py-1 hover:bg-heroPurple font-Quicksand text-xl text-white "
            to="/"
          >
          <span className="text-heroPink mt-14">S</span>Kane
          </Link>
        </div>
        <div className="font-Quicksand mr-10 flex gap-4">
          <Link
            className="rounded text-heroPink   hover:bg-heroPurple font-Quicksand text-xl"
            to="/work"
          >
            Resume
          </Link>
          <Link
            className="rounded text-heroPink  hover:bg-heroPurple font-Quicksand text-xl"
            to="/contact-about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
