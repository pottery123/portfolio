import { React } from "react";
import NavBar from "../Components/NavBar";

function ContactAbout() {
  return (
    <div className="bg-heroBlue font-Quicksand">
      <div className="relative z-10">
        <NavBar />
        <img
          className="w-96 top-0 absolute  z-0 right-0"
          src={"/images/accent-half-moon-right.svg"}
          alt="half moon accent"
        ></img>
      </div>

      <div className="flex">
        <div className="text-five ml-20  text-slate-300 w-3/5 leading-loose -mt">
          <div className="text-heroPink lg:text-eight lg:font-bold lg:mt-32 mt-32">Resume</div>
          <a download href="./Resume.pdf" className="text-heroPink text-base">
            {/* <div className="flex gap-3">
            <span>Download Resume Here </span>{" "}
            <span>
              <img alt="download icon" src={"./images/download-icon.svg"} />
            </span>
            </div> */}
          </a>
          <div className="text-xl mt-8">
            <div className="font-bold">
            Murdock Trust{" "}
              <span className="font-light">Feb 2024 – Present</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Website Designer 
              </div>
              <ul className="list-disc">
                <li className=" text-slate-300">
                Partnered with the CEO to align the website’s design with the company’s strategic vision and
                branding, enhancing the trust’s online presence and engagement.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl mt-8">
            <div className="font-bold">
            Colby Instruments{" "}
              <span className="font-light">Aug 2023 – Jan 2024</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Lead UX/UI Designer 
              </div>
              <ul className="list-disc">
                <li className=" text-slate-300">
                Collaborated with the president and engineers to design a digital UI for their high-precision programmable delay line instruments terminals.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-xl mt-8">
            <div className="font-bold">
              Build2Lead,{" "}
              <span className="font-light">Sept 2022 - Sept 2023</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Lead UX/UI Designer | Product Designer
              </div>
              <ul className="list-disc">
                <li className=" text-slate-300">
                  Collaborated with the CEO to design and create an e-learning
                  platform for middle school and high school students.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl mt-8">
            <div className="font-bold">
              SOMO, <span className="font-light">May 2022 - Dec</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Lead UX/UI Designer | Product Designer
              </div>
              <ul className="list-disc">
                <li className=" text-slate-300">
                  Collaborated with the CEO to design an e-commerce mobile app
                  for small buyers in rural Kenyan. Conducted usability tests
                  and user interviews and integrated feedback into design.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl mt-8">
            <div className="font-bold">
              Autographa, <span className="font-light">Jan 2021-Oct</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Front-End Developer
              </div>
              <ul className="list-disc">
                <li className="text-slate-300">
                  Collaborated with the UX team and other key stakeholders to
                  construct and integrate design features for the company’s
                  desktop bible translation application.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl mt-8">
            <div className="font-bold">
              NextStep, <span className="font-light">Mar 2019-Feb 2020</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Front-End Developer
              </div>
              <ul className="list-disc">
                <li className="text-slate-300">
                  Collaborated with the UX team and other key stakeholders to
                  construct and integrate design features for the company’s
                  mobile application.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl mt-8 mb-32">
            <div className="font-bold">
              Maven.io,{" "}
              <span className="font-light">Dec 2017 - March 2019</span>{" "}
            </div>
            <div className="text-black">
              <div className="font-light italic text-aprenderPink">
                Front-End Developer
              </div>
              <ul className="list-disc">
                <li className="text-slate-300">
                  Collaborated with the UX team and other key stakeholders to
                  construct and integrate design features for the Mavent.io
                  desktop application.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAbout;
