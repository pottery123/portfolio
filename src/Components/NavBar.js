import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="relative font-Quicksand">

          <div  className=" flex w-full absolute  justify-between pl-10 pr-10 pt-10 z-10">
            <div className="font-Quicksand">
              {" "}
              <Link
                className="rounded px-2 py-1 hover:bg-heroPurple font-Quicksand text-xl text-white "
                to="/"
              >
                <span className="text-heroPink">S</span>Kane
              </Link>
            </div>
            <div className="font-Quicksand">
              <Link
                className="rounded text-heroPink px-2 py-1 hover:bg-heroPurple font-Quicksand text-xl"
                to="/contact-about"
              >
                About
              </Link>{" "}
              <Link
                className="rounded text-heroPink px-3 py-1 hover:bg-heroPurple font-Quicksand text-xl"
                to="/work"
              >
                Work
              </Link>{" "}
              <Link
                className="rounded text-heroPink px-3 py-1 hover:bg-heroPurple font-Quicksand text-xl"
                to="/connect"
              >
                Connect
              </Link>{" "}
            </div>
          </div>

        </div>
    )
}

export default NavBar;

