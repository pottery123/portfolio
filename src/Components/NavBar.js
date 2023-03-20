import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="relative">

          <div  className=" flex w-full absolute  justify-between pl-10 pr-10 pt-10 z-10">
            <div>
              {" "}
              <Link
                className="rounded px-2 py-1 hover:bg-heroPurple font-Poppins text-xl text-white "
                to="/"
              >
                <span className="text-heroPink">S</span>Kane
              </Link>
            </div>
            <div>
              <Link
                className="rounded text-heroPink px-2 py-1 hover:bg-heroPurple font-Poppins text-xl"
                to="/contact-about"
              >
                About
              </Link>{" "}
              <Link
                className="rounded text-heroPink px-3 py-1 hover:bg-heroPurple font-Poppins text-xl"
                to="/work"
              >
                Work
              </Link>{" "}
              <Link
                className="rounded text-heroPink px-3 py-1 hover:bg-heroPurple font-Poppins text-xl"
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

