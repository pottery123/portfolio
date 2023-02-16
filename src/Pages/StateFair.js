import { React, useState, useEffect, useRef } from "react";
import ModalStateFair from "../Components/ModalStateFair";
import { TextObject } from "../Components/StateFairText";
import { Link } from "react-router-dom";

function StateFair() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [showHeuristicEvaluation, setShowHeuristicEvaluation] = useState(true);
  const [showOverView, setShowOverView] = useState(false);
  const [showBenchmarking, setShowBenchmarking] = useState(false);
  const [showDesignAndTest, setShowDesignAndTest] = useState(false);
  const [showFinalMockups, setShowFinalMockups] = useState(false);
  const [showNextSteps, setShowNextSteps] = useState(false);
  const [showTestScreen1, setShowTestScreen1] = useState(true);
  const [showTestScreen2, setShowTestScreen2] = useState(false);
  const [showTestScreen3, setShowTestScreen3] = useState(false);

  function Body() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showAppScreen1, setAppScreen1] = useState(true);
    const [showAppScreen2, setAppScreen2] = useState(false);
    const [showAppScreen3, setAppScreen3] = useState(false);
    const [showAppArrow1, setAppArrow1] = useState(false);
    const [showAppArrow2, setAppArrow2] = useState(false);
    const [showAppArrow3, setAppArrow3] = useState(false);
    const [showAppArrow4, setAppArrow4] = useState(false);
    const [showAppArrow5, setAppArrow5] = useState(false);
    const [showAppArrow6, setAppArrow6] = useState(false);
    const [showAppArrow7, setAppArrow7] = useState(false);
    const [showAppArrow8, setAppArrow8] = useState(false);
    const [showAppArrow10, setAppArrow10] = useState(false);
    const [showAppArrow11, setAppArrow11] = useState(false);

    useEffect(() => {
      if (
        showModal1 ||
        showModal2 ||
        showModal3 ||
        showModal4 ||
        showModal5 ||
        showModal6
      ) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [
      showModal1,
      showModal2,
      showModal3,
      showModal4,
      showModal5,
      showModal6,
    ]);

    function NextButton() {
      return (
        <img
          src={"/images/arrow-forward.svg"}
          alt="arrow forward"
          onClick={() => {
            if (showAppScreen1) {
              setAppScreen1(false);
              setAppScreen2(true);
              setAppScreen3(false);
            } else if (showAppScreen2) {
              setAppScreen1(false);
              setAppScreen2(false);
              setAppScreen3(true);
            } 
          }}
        >
        </img>
      );
    }

    function BackButton() {
      return (
        <img
          className="ml-96"
          src={"/images/arrow-back.svg"}
          alt="arrow back"
          onClick={() => {
            if (showAppScreen3) {
              setAppScreen1(false);
              setAppScreen2(true);
              setAppScreen3(false);
            } else if (showAppScreen2) {
              setAppScreen1(true);
              setAppScreen2(false);
              setAppScreen3(false);
            } 
          }}
        >
        </img>
      );
    }

   

    return (
      <div className="">
        {showHeuristicEvaluation && (
          <div className=" mt-28">
            <div className="text-lg font-black font-Quicksand">
              Usability Heuristic Evaluation
            </div>
            <div className="font-Quicksand absolute mt-7 leading-7">
              The project started off with a usability heuristic evaluation of
              the ticket purchasing process in the Washington State Fair mobile
              app. I used{" "}
              <a
                className="underline hover:text-aprenderBlue"
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
              >
                {" "}
                Jakob Nielsen's 10 general principles for interaction design.
              </a>
              Through this process I was able to identify some major usability
              issues users were having when they tried to purchase tickets for
              concerts and shows.

              <div className="my-12 font-bold text-aprenderBlue ">Click or press the images to see the evaluation details.</div>
            </div>
            
            <div className="grid grid-cols-4 gap-24 text-sm mt-56 font-Quicksand">
              <div className="w-36">
                <div className="mb-10 leading-7 mt-3">
                  This is the first screen users see after choosing the concert
                  they want to attend. 
                </div>
                <ModalStateFair
                  showModal={showModal1}
                  setShowModal={setShowModal1}
                  img={"/images/state-fair-screen-1.svg"}
                  object={TextObject.screen1object}
                ></ModalStateFair>

                <ModalStateFair
                  showModal={showModal2}
                  setShowModal={setShowModal2}
                  img={["/images/state-fair-screen-2.svg"]}
                  object={TextObject.screen2object}
                ></ModalStateFair>
              </div>
              <div className="w-36">
                <div className="mb-10 leading-7 mt-3">Second screen.</div>
                <ModalStateFair
                  showModal={showModal3}
                  setShowModal={setShowModal3}
                  img={["/images/state-fair-screen-3.svg"]}
                  object={TextObject.screen3object}
                ></ModalStateFair>
                <ModalStateFair
                  showModal={showModal4}
                  setShowModal={setShowModal4}
                  img={["/images/state-fair-screen-4.svg"]}
                  object={TextObject.screen4object}
                ></ModalStateFair>
              </div>
              <div className="w-32">
                <div className="mb-10 leading-7 mt-3">Third screen.</div>
                <ModalStateFair
                  showModal={showModal5}
                  setShowModal={setShowModal5}
                  greetings={"image 1"}
                  img={"/images/state-fair-screen-5.svg"}
                  video={[
                    "/images/state-fair-screen-10.svg",
                    "/images/state-fair-screen-11.svg",
                    "/images/state-fair-screen-12.svg",
                  ]}
                  arrow={["/images/arrow.svg"]}
                  object={TextObject.screen5object}
                ></ModalStateFair>
                <div className=" text-aprenderBlue font-bold text-lg mt-16 w-96 font-Quicksand">
                  This is long. For the highlights{" "}
                  {!showOverView ? (
                    <div
                      onClick={() => {
                        setShowOverView(true);
                      }}
                      className="underline underline-offset-4 text-stateFairRed"
                    >
                      Click here.
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShowOverView(false);
                      }}
                      className="underline underline-offset-4 text-stateFairRed"
                    >
                      Close
                    </div>
                  )}
                </div>
                {showOverView && (
                  <div className=" ">
                    <div className=" font-bold w-96 animate-wave2 mt-7 ">
                      Heuristic Evaluation Highlights
                    </div>
                    <ul className="w-96 pt-3 animate-wave2 leading-6 list-disc mt-5 font-bold">
                      {" "}
                      <li>
                        <span className="text-stateFairRed">Prices</span> for{" "}
                        <span className="text-stateFairRed">accessible</span>{" "}
                        and{" "}
                        <span className="text-stateFairRed">
                          non-accessible
                        </span>{" "}
                        seats were
                        <span className="text-stateFairRed">
                          {" "}
                          NOT clearly displayed
                        </span>
                      </li>
                    </ul>
                    <ul className="w-96 pt-5 animate-wave3 leading-8  list-disc font-bold">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        in all locations
                        <span className="text-stateFairRed">
                          {" "}
                          were NOT clearly
                        </span>
                        <span> marked on the section map.</span>
                      </li>
                    </ul>
                    <ul className="w-96 pt-3 animate-wave4 leading-7 list-disc font-bold mt-3">
                      <li>
                        The design
                        <span className="text-stateFairRed">
                          {" "}
                          DID NOT
                        </span> let{" "}
                        <span className="text-stateFairRed">
                          {" "}
                          users know
                        </span>{" "}
                        if a section{" "}
                        <span className="text-stateFairRed"> is sold out.</span>
                      </li>
                    </ul>
                    <ul className="w-96 pt-5 animate-wave5 leading-7 list-disc font-bold">
                      <li>
                        The
                        <span className="text-stateFairRed">
                          {" "}
                          image size
                        </span>{" "}
                        of the seats and sections maps were{" "}
                        <span className="text-stateFairRed">TOO small.</span>
                      </li>
                    </ul>
                    <ul className="w-96 pt-3 animate-wave5 leading-7 list-disc mt-3 font-bold">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        ARE NOT{" "}
                        <span className="text-stateFairRed">
                          {" "}
                          directly displayed
                        </span>{" "}
                        on the seat map.{" "}
                      </li>
                    </ul>
                    <ul className="w-96 pt-3 animate-wave6 leading-6 list-disc mt-2 font-bold">
                      <li>
                        <span className="text-stateFairRed">
                          TOO many options
                        </span>{" "}
                        when selecting sections/seats is
                        <span className="text-stateFairRed"> confusing.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <div className="w-32">
                  <div className="mb-10 leading-7 mt-3">Forth Screen.</div>
                  <ModalStateFair
                    showModal={showModal6}
                    setShowModal={setShowModal6}
                    greetings={"image 1"}
                    img={"/images/state-fair-screen-6.svg"}
                    video={["/images/state-fair-screen-6.svg"]}
                    arrow={["/images/arrow.svg"]}
                    object={TextObject.screen6object}
                  ></ModalStateFair>
                </div>
              </div>
            </div>
          </div>
        )}
        {showBenchmarking && (
          <div className=" font-Quicksand mt-28">
            <div className="text-lg font-black">Benchmarking</div>
            <div className=" absolute mt-5 leading-7  mt-7">
              I conducted a usability test on the ticket buying process using
              the System Usability Scale (SUS) framework <span className="font-bold">after I completed the heuristic evaluation </span>. I used these results
              to establish success metrics for future designs.
            </div>
            <div className="mt-36">
              <div className="-mt-2">
                <div className="font-bold text-stateFairBlue"> First Usability Test Results: </div>
                <ul className="list-disc pl-5">
                  <li className=""> Over all SUS score of 3.3 of 7. </li>
                  <li className="">
                    Only 40% of users were able to select assessable and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
              <div className="leading-6  mt-8">
                <div className="font-bold text-stateFairBlue">Success Metrics: </div>
                <ul className='list-disc pl-5'>
                  <li className="">
                    Higher SUS score than the original design.
                  </li>
                  <li className="pt-1">
                    Majority of users will be able to select accessible and
                    not accessible seats.
                  </li>
                </ul>
              </div>
              <div className="">
              <div className="font-bold mt-8 text-stateFairBlue "> To reach success metrics I needed to design solutions to these problems listed below.</div>
                    <ul className="list-disc pl-5 ">
                      <li className="pt-1">
                        <span className="text-stateFairRed">Prices</span> for{" "}
                        <span className="text-stateFairRed">accessible</span>{" "}
                        and{" "}
                        <span className="text-stateFairRed">
                          non-accessible
                        </span>{" "}
                        seats were
                        <span className="text-stateFairRed">
                          {" "}
                          NOT clearly displayed
                        </span>
                      </li>
                    </ul>
                    <ul className="list-disc  pl-5 ">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        in all locations
                        <span className="text-stateFairRed">
                          {" "}
                          were NOT clearly
                        </span>
                        <span> marked on the section map.</span>
                      </li>
                    </ul>
                    <ul className="list-disc  pl-5">
                      <li>
                        The design
                        <span className="text-stateFairRed">
                          {" "}
                          DID NOT
                        </span> let{" "}
                        <span className="text-stateFairRed">
                          {" "}
                          users know
                        </span>{" "}
                        if a section{" "}
                        <span className="text-stateFairRed"> is sold out.</span>
                      </li>
                    </ul>
                    <ul className=" list-disc  pl-5 pt-1">
                      <li>
                        The
                        <span className="text-stateFairRed">
                          {" "}
                          image size
                        </span>{" "}
                        of the seats and sections maps were{" "}
                        <span className="text-stateFairRed">TOO small.</span>
                      </li>
                    </ul>
                    <ul className=" list-disc  pl-5">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        ARE NOT{" "}
                        <span className="text-stateFairRed">
                          {" "}
                          directly displayed
                        </span>{" "}
                        on the seat map.{" "}
                      </li>
                    </ul>
                    <ul className=" list-disc  pl-5 pt-1">
                      <li>
                        <span className="text-stateFairRed">
                          TOO many options
                        </span>{" "}
                        when selecting sections/seats is
                        <span className="text-stateFairRed"> confusing.</span>
                      </li>
                    </ul>
                  </div>
            </div>
          </div>
        )}
        {showDesignAndTest && (
          <div className="font-Quicksand mt-28 leading-8">
            <div className="text-lg font-black">Design & Test</div>
            <div style={{ width: 800 }} className="mt-7 leading-7">
              <div className="">
                I{" "}
                <span className="font-bold">
                  wrote user stories that addressed each usability issues the
                  heuristics evaluation uncovered
                </span>{" "}
                in the ticket buying process. For each user story I designed a
                solution, tested the design, analyzed feedback from the test,
                and incorporated relevant feedback back into the design. I{" "}
                <span className="font-bold">
                  stopped this process when the design met the
                </span>
                <span> success metrics. </span>
              </div>
            </div>
            <div className="mt-20 ml-10 mb-3">
              Click to see my different iterations
            </div>

            <div className="flex ">
              <div>
                {showTestScreen1 && (
                  <img
                    className="mt-4 mx-8"
                    src={"/images/test-screen-3.svg"}
                    alt="Aprender Screens"
                    style={{ width: "200px" }}
                    onClick={() => {
                      setShowTestScreen1(false);
                      setShowTestScreen3(false);
                      setShowTestScreen2(true);
                    }}
                  ></img>
                )}

                {showTestScreen2 && (
                  <img
                    className="mt-4 mx-8"
                    src={"/images/test-screen-1.svg"}
                    alt="Aprender Screens"
                    style={{ width: "200px" }}
                    onClick={() => {
                      setShowTestScreen1(false);
                      setShowTestScreen3(true);
                      setShowTestScreen2(false);
                    }}
                  ></img>
                )}
                {showTestScreen3 && (
                  <img
                    className="mt-4 mx-8"
                    src={"/images/test-screen-2.svg"}
                    alt="Aprender Screens"
                    style={{ width: "200px" }}
                    onClick={() => {
                      setShowTestScreen1(true);
                      setShowTestScreen3(false);
                      setShowTestScreen2(false);
                    }}
                  ></img>
                )}
              </div>
              { showTestScreen1 && (<div>
              <ul  className="p-32  text-xl leading-8 list-disc">
                <li className="mt-3">
                 SUS score &lt;
                  <span className="text-stateFairRed">  5.2 of 7</span>
                </li>
              </ul>
              </div>)
              }

              { showTestScreen2 && (<div>
              <ul  className="p-32  text-xl leading-8 list-disc">
                <li className="mt-3">
                  Final SUS Score:
                  <span className="text-stateFairRed"> 5.2 of 7</span>
                </li>
                <li className="">
                  <span className="text-stateFairRed"> 80% of participants </span>
                  were able to select accessible and non-accessible seats. <span className="font-bold">To see the final changes click on the Final Mockups tab.</span>
                </li>
              </ul>
              </div>)
              }
              { showTestScreen3 && (<div>
              <ul  className="p-32  text-xl leading-8 list-disc">
                <li className="mt-3">
                  Final SUS Score:
                  <span className="text-stateFairRed"> 5.2 of 7</span>
                </li>
                <li className="">
                  <span className="text-stateFairRed"> 80% of participants </span>
                  were able to select accessible and non-accessible seats. <span className="font-bold">To see the final changes click on the Final Mockups tab.</span>
                </li>
              </ul>
              </div>)
              }
            </div>
          </div>
        )}
        {showFinalMockups && (
          <div className="font-Quicksand">
            <div className="text-lg font-bold mt-28 mb-20 leading-8">
              Final Mockups
              <div className=" mt-12 text-stateFairBlue">To see design changes click or press the headings.</div>
            </div>
            <div className="ml-20 flex gap-28">
              <div className="overflow-hidden">
                {showAppScreen1 && (
                  <div>
                    {showAppArrow1 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 366,
                          left: 110,
                          width: 29.54,
                          height: 29.84,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    {showAppArrow2 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 503,
                          left: 200,
                          width: 29.54,
                          height: 29.84,
                          rotate: "",
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    {showAppArrow3 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          zIndex: 10,
                          top: 625,
                          left: 233,
                          width: 29.54,
                          height: 29.84,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    {showAppArrow4 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 533,
                          left: 100,
                          rotate: "-20deg",
                          width: 29.54,
                          height: 29.84,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    {showAppArrow5 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 690,
                          left: 200,
                          width: 29.54,
                          height: 29.84,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    <div className="">
                      <img
                        src={"images/state-fair-screen-image-1.png"}
                        alt="Aprender Screens"
                        onClick={() => {}}
                        style={{ width: 250 }}
                      ></img>
                      <div className="flex m-auto gap-10 mt-4 justify-center">
                        <div className="rounded-full w-3 h-3  bg-stateFairYellow"></div>
                        <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                {showAppScreen2 && (
                  <div>
                    {showAppArrow6 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 510,
                          left: 200,
                          width: 29.54,
                          height: 29.84,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    <div>
                      <div style={{ height: 505.656 }}>
                        <video
                          muted
                          autoPlay
                          loop
                          className=""
                          alt="Aprender Screens"
                          onClick={() => {}}
                          style={{ width: 250 }}
                        >
                          <source
                            src={"images/state-fair-screen-video-2.mov"}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="flex m-auto gap-10 mt-4 justify-center">
                        <div className="rounded-full w-3 h-3 bg-slate-200"></div>
                        <div className="rounded-full w-3 h-3  bg-stateFairYellow  "></div>
                        <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                )}

                {showAppScreen3 && (
                  <div>
                    {showAppArrow7 && (
                      <img
                        className=" waving-hand"
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 680,
                          left: 270,
                          width: 29.54,
                          height: 29.84,
                          rotate: "90deg",
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}

                    {showAppArrow8 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 724,
                          left: 310,
                          width: 29.54,
                          height: 29.84,
                          rotate: "90deg",
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}

                    {showAppArrow11 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 465,
                          width: 29.54,
                          height: 29.84,
                          left: 195,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    {showAppArrow10 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 525,
                          width: 29.54,
                          height: 29.84,
                          rotate: "-90deg",
                          left: 100,
                        }}
                        alt="state fair arrow"
                      ></img>
                    )}
                    <div>
                      <div style={{ height: 505.656 }}>
                        <video
                          muted
                          autoPlay
                          loop
                          className=""
                          alt="Aprender Screens"
                          style={{ width: 250, height: 505.656 }}
                          onClick={() => {}}
                        >
                          <source src={"images/trimVid.mov"} type="video/mp4" />
                        </video>
                      </div>
                      <div className="flex m-auto gap-10 mt-4 justify-center">
                        <div className="rounded-full w-3 h-3 bg-slate-200"></div>
                        <div className="rounded-full w-3 h-3 bg-slate-200"></div>
                        <div className="rounded-full w-3 h-3  bg-stateFairYellow"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {showAppScreen1 && (
                <div style={{ height: 568 }} className=" w-96">
                  <div
                    onClick={() => {
                      setAppArrow1(true);
                      setAppArrow2(false);
                      setAppArrow3(false);
                      setAppArrow4(false);
                      setAppArrow5(false);
                    }}
                    className="mb-6"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow1 && "text-stateFairRed"
                      }`}
                    >
                      User control and freedom
                    </div>
                    <div>
                      The ‘back to sections’ button is in an easy to spot area.
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setAppArrow2(true);
                      setAppArrow1(false);
                      setAppArrow3(false);
                      setAppArrow4(false);
                      setAppArrow5(false);
                    }}
                    className="mb-6"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow2 && "text-stateFairRed"
                      }`}
                    >
                      Consistency and Standards
                    </div>
                    <div>
                      The new design only uses one method for choosing sections,
                      instead of three.
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setAppArrow3(true);
                      setAppArrow1(false);
                      setAppArrow2(false);
                      setAppArrow4(false);
                      setAppArrow5(false);
                    }}
                    className="mb-6 mt-8"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow3 && "text-stateFairRed"
                      }`}
                    >
                      Visibility of System Status
                    </div>
                    <div>
                      The new design lets users know if a section is sold out.{" "}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setAppArrow4(true);
                      setAppArrow1(false);
                      setAppArrow2(false);
                      setAppArrow3(false);
                      setAppArrow5(false);
                    }}
                    className="mb-6"
                  >
                    <div
                      className={`font-bold mt-8 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow4 && "text-stateFairRed"
                      }`}
                    >
                      Match Between System and the Real World
                    </div>
                    <div>
                      The new design uses the section map which reflects the
                      real world. Also accessible seats in all locations are
                      clearly marked on the section map.
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setAppArrow5(true);
                      setAppArrow1(false);
                      setAppArrow2(false);
                      setAppArrow3(false);
                      setAppArrow4(false);
                    }}
                    className="mt-8"
                  >
                    <div
                      className={`font-bold mb-1 mt-9 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow5 && "text-stateFairRed"
                      }`}
                    >
                      Aesthetic and Minimalist design
                    </div>
                    <div>
                      Only information relevant to selecting sections is
                      present. All prices for accessible and non-accessible
                      seats are clearly displayed.
                    </div>
                  </div>
                </div>
              )}

              {showAppScreen2 && (
                <div style={{ height: 568 }} className="w-96">
                  <div
                    onClick={() => {
                      setAppArrow6((prev) => !prev);
                    }}
                  >
                    <div
                      className={`font-bold mb-1 w-2/5 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow6 && "text-stateFairRed"
                      }`}
                    >
                      Error Prevention
                    </div>
                    <div>
                      The image size of the sections can cause user to choose
                      the wrong section. In the new design the sections are
                      expanded when the user presses on them which can help them
                      choose the section they want.
                    </div>
                  </div>
                </div>
              )}

              {showAppScreen3 && (
                <div style={{ height: 568 }} className="w-96">
                  <div
                    onClick={() => {
                      setAppArrow7(true);
                      setAppArrow11(false);
                      setAppArrow10(false);
                      setAppArrow8(false);
                    }}
                    className="mb-8"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow7 && "text-stateFairRed"
                      }`}
                    >
                      Recognition rather than recall
                    </div>
                    <div>
                      The prices for seats are clearly displayed and color coded
                      to match the seats on the seat map. The prices are no
                      longer hidden behind a button.
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setAppArrow11(true);
                      setAppArrow7(false);
                      setAppArrow10(false);
                      setAppArrow8(false);
                    }}
                    className="mb-8"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow11 && "text-stateFairRed"
                      }`}
                    >
                      Error Prevention
                    </div>
                    <div>
                      The image size of the seats can cause the user to choose
                      the wrong seat. In the new design the rows are expanded
                      when the user presses on them which helps users to select
                      the seat they want without making a mistake.
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      setAppArrow10(true);
                      setAppArrow11(false);
                      setAppArrow7(false);
                      setAppArrow8(false);
                    }}
                    className="mb-8"
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow10 && "text-stateFairRed"
                      }`}
                    >
                      Visibility of System Status
                    </div>
                    <div>
                      The new design allows the user to easily see when a seat
                      is selected with a red check mark.
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      setAppArrow8(true);
                      setAppArrow10(false);
                      setAppArrow11(false);
                      setAppArrow7(false);
                    }}
                  >
                    <div
                      className={`font-bold mb-1 hover:text-stateFairRed active:ease-in-out active:scale-95 active:duration-200 ${
                        showAppArrow8 && "text-stateFairRed"
                      }`}
                    >
                      Visibility of System Status
                    </div>
                    <div>
                      When seats have been selected the Add to Cart button is
                      activated by turning a deep red color.
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-5 -mt-3">
            <BackButton />
            <NextButton />
            </div>
          </div>
        )}
        {showNextSteps && (
          <div className="font-Quicksand">
            <div className="mt-28 leading-8 font-black text-lg">Takeaways</div>
            <ul style={{ width: 700 }} className=" mt-5 ml-9 leading-7 list-disc">
              <li>
                The
                <span className="font-bold"> value of heuristics</span>{" "}
                evaluations as a{" "}
                <span className="font-bold">cheap, quick </span> way to
                  <span className="font-bold"> uncover usability issues.{" "} </span>
              </li>
              <li>
                <span className="font-bold"> Keeping it simple</span>{" "}
                during the UI design process helped me get unstuck when got
                stuck.{" "}
              </li>
              <li>
                <span className="font-bold">
                  Testing designs early and often
                </span>{" "}
                to catch and fix issues.{" "}
              </li>
              <li>
                Next time I would add an
                <span className="font-bold">
                  {" "}
                  ‘time to finish task’
                </span>{" "}
                to my usability tests to measure the amount of time it took for
                users to select seats and sections.{" "}
              </li>
            </ul>

            <div className="font-black mt-10 leading-9 text-lg">Next Steps</div>
            <ul className="list-disc ml-9">
              <li>
              <span className="font-bold">
                Discuss with developers and other stakeholders{" "}
              </span>
              the technical requirements for implementing the updated design.{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  function Tabs() {
    return (
      <div>
        <div className="grid grid-rows-5 gap-4 sticky top-0 font-Quicksand">
          <div
            onClick={() => {
              setShowHeuristicEvaluation(true);
              setShowBenchmarking(false);
              setShowDesignAndTest(false);
              setShowFinalMockups(false);
              setShowNextSteps(false);
              window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
            }}
            className={`duration-300 ease-out hover:ease-in hover:duration-300 rounded-r-2xl bg-stateFairRed w-24 h-24 hover:bg-stateFairRedDark scale-105 hover:w-28 hover:pl-3 ${
              showHeuristicEvaluation === true
                ? "w-28 pl-3 bg-stateFairRedDark"
                : ""
            }`}
          >
            <img
              className="mt-4 mx-8"
              src={"/images/eval-white-icon.svg"}
              alt="Aprender Screens"
              width={25}
              height={25}
            ></img>
            <div className="text-three text-white px-6 pt-2">
              Heuristic Evaluation
            </div>
          </div>
          <div
            onClick={() => {
              setShowBenchmarking(true);
              setShowHeuristicEvaluation(false);
              setShowDesignAndTest(false);
              setShowFinalMockups(false);
              setShowNextSteps(false);
              window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
            }}
            className={` duration-200 ease-out hover:ease-in hover:duration-200 rounded-r-2xl bg-stateFairBlue w-24 h-24 scale-105 hover:bg-stateFairBlueDark hover:w-28 hover:pl-3  ${
              showBenchmarking === true ? "w-28  pl-3 bg-stateFairBlueDark" : ""
            }`}
          >
            <img
              className="mt-5 mx-8"
              src={"/images/ruler-white-icon.svg"}
              alt="Aprender Screens"
              width={25}
              height={25}
            ></img>
            <div className="text-three text-white pt-2  px-3">Benchmarking</div>
          </div>
          <div
            onClick={() => {
              setShowDesignAndTest(true);
              setShowBenchmarking(false);
              setShowHeuristicEvaluation(false);
              setShowFinalMockups(false);
              setShowNextSteps(false);
              window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
            }}
            className={` duration-200 ease-out hover:ease-in hover:duration-200 rounded-r-2xl bg-stateFairOrange hover:bg-stateFairOrangeDark w-24 h-24 scale-105 hover:w-28  hover:pl-3  ${
              showDesignAndTest === true
                ? "w-28  pl-3  bg-stateFairOrangeDark"
                : ""
            }`}
          >
            <img
              className="mt-6 mx-8"
              src={"/images/pencil-white-icon.svg"}
              alt="Aprender Screens"
              width={30}
              height={30}
            ></img>
            <div className="text-three text-white  px-3 pt-2">
              Design & Test
            </div>
          </div>
          <div
            onClick={() => {
              setShowFinalMockups(true);
              setShowDesignAndTest(false);
              setShowBenchmarking(false);
              setShowHeuristicEvaluation(false);
              setShowNextSteps(false);
              window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
            }}
            className={` duration-300 ease-out hover:ease-in hover:duration-300 rounded-r-2xl bg-stateFairBurgandy w-24 h-24 scale-105 hover:bg-stateFairBurgandyDark hover:w-28  hover:pl-2  ${
              showFinalMockups === true
                ? "w-28 pl-2  bg-stateFairBurgandyDark"
                : ""
            }`}
          >
            <img
              className="mt-6 mx-8"
              src={"/images/presentation-white-icon.svg"}
              alt="Aprender Screens"
              width={30}
              height={30}
            ></img>
            <div className="text-three text-white pt-2 px-2">
              Final Mockkups
            </div>
          </div>
          <div
            onClick={() => {
              setShowNextSteps(true);
              setShowFinalMockups(false);
              setShowDesignAndTest(false);
              setShowBenchmarking(false);
              setShowHeuristicEvaluation(false);
              window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
            }}
            className={`duration-300 ease-out hover:ease-in hover:duration-300 rounded-r-2xl bg-stateFairYellow w-24 h-24 scale-105 hover:bg-stateFairYellowDark hover:w-28 hover:pl-3   ${
              showNextSteps === true ? "w-28 pl-3  bg-stateFairYellowDark" : ""
            }`}
          >
            <img
              className="mt-6 mx-8"
              src={"/images/steps-white-icon.svg"}
              alt="Aprender Screens"
              width={30}
              height={30}
            ></img>
            <div className="text-three text-white px-5 pt-1">Next Steps</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Link
        to="/"
        className=" border-2 border-stateFairBurgandy bg-stateFairBurgandy rounded text-white px-4 py-1 hover:bg-white  hover:text-stateFairBurgandy hover:border-2 hover:border-stateFairBurgandy absolute  left-12 top-10  z-50 font-Nunito"
      >
        Home
      </Link>
      <div className=" absolute flex right-12 top-10 z-50 font-Rubik">
        {" "}
        <Link to="/contact-about" className=" flex gap-10">
          {" "}
          <div className="rounded border-2 border-stateFairBurgandy bg-stateFairBurgandy text-white px-3 py-1 hover:border-2 hover:border-stateFairBurgandy  hover:bg-white hover:text-stateFairBurgandy ">
            Contact
          </div>{" "}
          <div className="rounded border-2 border-stateFairBurgandy hover:border-2  bg-stateFairBurgandy text-white px-4 py-1 hover:bg-white hover:text-stateFairBurgandy ">
            About
          </div>{" "}
        </Link>
      </div>
      <div className="p-10 mt-32">
        <div className="text-seven text-center mb-10 font-Quicksand">
          State Fair
        </div>
        <div className="text-five ml-20 mr-20 font-Quicksand">
          <span className="font-bold">Overview:</span> Just over a million
          people visit the Washington State Fair (pre-covid) every year. Many of
          the attendees use the Washington State Fair mobile app to purchase
          tickets for concerts and shows. This projects uncovers usability
          issues in the Washington State Fair mobile app that users struggle
          with when purchasing tickets.
        </div>
        <div className=" ml-20 mr-20 mt-10 mb-10">
          <span className="font-Quicksand font-bold">Role:</span> UX/UI Designer
          , UX Researcher, Font-End Developer
        </div>
      </div>
      <div className=" flex z-10 ">
        <div className=" absolute z-20 left-40  ml-auto mr-auto w-auto ">
          <Body />
        </div>
        <img
          className="pl-10 drop-shadow-2xl"
          src={"/images/note.svg"}
          alt="Aprender Screens"
          width={1100}
        ></img>
        <Tabs />
      </div>
    </div>
  );
}

export default StateFair;
