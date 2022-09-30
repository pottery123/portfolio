import { React } from "react";
import { Link } from "react-router-dom";

function ContactAbout() {
  return (
    <div className="bg-aprenderGray h-screen text-primary">
      <Link
        to="/"
        className="bg-transparent absolute  right-12 top-10  z-50 font-Rubik"
      >
        Home
      </Link>

      <div className="p-32 text-six leading-relaxed text-primary">
        Sarah Kane is UX designer with many hobbies. She enjoys deep
        conversations, pottery, history, coding (including this website),
        photography and travel. She lives in Seattle...in the Rainier Valley.
        <div className="mt-24 text-four">
          <div className=" gap-7 -mt-16 flex ">
            {" "}
            <span>email:</span> <span>sarah-kane@outlook.com</span>
          </div>
          <span className="flex gap-3">
            linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/sarah-e-kane"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-solid"
            >
              www.linkedin.com/in/sarah-e-kane
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactAbout;
