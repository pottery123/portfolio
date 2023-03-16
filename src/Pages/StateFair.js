import { React, useState, useEffect } from "react";
import ModalStateFair from "../Components/ModalStateFair";
import { TextObject } from "../Components/StateFairText";

function StateFair() {
  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  // }, []);

  const [showTheProblems, setShowTheProblems] = useState(true);
  const [showHeuristicEvaluation, setShowHeuristicEvaluation] = useState(false);
  const [showOverView, setShowOverView] = useState(false);
  const [showBenchmarking, setShowBenchmarking] = useState(false);
  const [showDesignAndTest, setShowDesignAndTest] = useState(false);
  const [showFinalMockups, setShowFinalMockups] = useState(false);
  const [showNextSteps, setShowNextSteps] = useState(false);
  const [showTestScreen1, setShowTestScreen1] = useState(true);
  const [showTestScreen2, setShowTestScreen2] = useState(false);
  const [showTestScreen3, setShowTestScreen3] = useState(false);

  const [underlineProblems, setUnderlineProblems] = useState(true);
  const [underlineHeuristicEvaluation, setUnderlineHeuristicEvaluation] =
    useState(null);
  const [underlineBenchmarking, setUnderlineBenchmarking] = useState(null);
  const [underlineDesignAndTest, setUnderlineDesignAndTest] = useState(null);
  const [underlineFinalMockups, setUnderlineFinalMockups] = useState(null);
  const [underlineNextSteps, setUnderlineNextSteps] = useState(null);
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

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
  }, [showModal1, showModal2, showModal3, showModal4, showModal5, showModal6]);

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
      ></img>
    );
  }

  function OpenStudy() {
    return (
      <div
        className=" border-2 border-white rounded-full text-center px-1 py-2 w-40 bg-white text-stateFairBurgandy hover:bg-transparent hover:text-white "
        onClick={() => {
          setOpenCaseStudy((prev) => !prev);
        }}
      >
        {!openCaseStudy ? "Open Case Study" : "Close Case Study"}
      </div>
    );
  }

  function BackButton() {
    return (
      <img
        className=""
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
      ></img>
    );
  }

  return (
    <div className="relative w-auto overflow-hidden font-Poppins font-medium">
      <div className=" md:flex justify-around bg-stateFairBurgandy w-auto overflow-hidden relative block z-20">
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5  lg:hidden md:hidden"
          width={500}
          height={500}
          src={"/images/state-fair-images.svg"}
          alt="Aprender Screens"
        ></img>
        <div className=" font-Poppins font-semibold md:pt-52 text-white md:pl-10 p-8">
          <div className="lg:pt-18 md:text-eight lg:text-eight text-six ">State Fair</div>
          <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
            <span className="font-bold">Role:</span> UX/UI Designer, Interaction
            Designer, UX Researcher
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 ">
            <span className="font-bold">Key skills:</span> Figma, Design
            Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
          </p>
          <div className="mt-24">
            {" "}
            <OpenStudy />
          </div>
        </div>
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5 hidden lg:block md:block"
          width={500}
          height={500}
          src={"/images/state-fair-images.svg"}
          alt="Aprender Screens"
        ></img>
      </div>
      <div className="bg-white w-full drop-shadow-sm flex justify-between  top-0 z-20  relative overflow-scroll">
        <button
          onClick={() => {
            setShowTheProblems(true);
            setShowHeuristicEvaluation(false);
            setShowBenchmarking(false);
            setShowDesignAndTest(false);
            setShowFinalMockups(false);
            setShowNextSteps(false);

            setUnderlineProblems(true);
            setUnderlineHeuristicEvaluation(false);
            setUnderlineBenchmarking(false);
            setUnderlineDesignAndTest(false);
            setUnderlineFinalMockups(false);
            setUnderlineNextSteps(false);
          }}
          className="font-Poppins p-8 hover:text-stateFairBurgandy"
        >
          <div className="">The</div>
          <div>Problems</div>
          {underlineProblems ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className=" h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => {
            setShowHeuristicEvaluation(true);
            setShowBenchmarking(false);
            setShowDesignAndTest(false);
            setShowFinalMockups(false);
            setShowNextSteps(false);
            setShowTheProblems(false);

            setUnderlineProblems(false);
            setUnderlineHeuristicEvaluation(true);
            setUnderlineBenchmarking(false);
            setUnderlineDesignAndTest(false);
            setUnderlineFinalMockups(false);
            setUnderlineNextSteps(false);
          }}
          className="font-Poppins p-8 hover:text-stateFairBurgandy"
        >
          <div>Heuristic</div>
          <div>Evaluation</div>
          {underlineHeuristicEvaluation ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className=" h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => {
            setShowBenchmarking(true);
            setShowHeuristicEvaluation(false);
            setShowDesignAndTest(false);
            setShowFinalMockups(false);
            setShowNextSteps(false);
            setShowTheProblems(false);

            setUnderlineProblems(false);
            setUnderlineHeuristicEvaluation(false);
            setUnderlineBenchmarking(true);
            setUnderlineDesignAndTest(false);
            setUnderlineFinalMockups(false);
            setUnderlineNextSteps(false);
          }}
          className="font-Poppins  p-8 hover:text-stateFairBurgandy"
        >
          <div>Benchmarking</div>
          {underlineBenchmarking ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => {
            setShowDesignAndTest(true);
            setShowBenchmarking(false);
            setShowHeuristicEvaluation(false);
            setShowFinalMockups(false);
            setShowNextSteps(false);
            setShowTheProblems(false);

            setUnderlineProblems(false);
            setUnderlineHeuristicEvaluation(false);
            setUnderlineBenchmarking(false);
            setUnderlineDesignAndTest(true);
            setUnderlineFinalMockups(false);
            setUnderlineNextSteps(false);
          }}
          className="font-Poppins  p-8 hover:text-stateFairBurgandy"
        >
          <div>Design &</div>
          <div>Test</div>
          {underlineDesignAndTest ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => {
            setShowFinalMockups(true);
            setShowDesignAndTest(false);
            setShowBenchmarking(false);
            setShowHeuristicEvaluation(false);
            setShowNextSteps(false);
            setShowTheProblems(false);

            setUnderlineProblems(false);
            setUnderlineHeuristicEvaluation(false);
            setUnderlineBenchmarking(false);
            setUnderlineDesignAndTest(false);
            setUnderlineFinalMockups(true);
            setUnderlineNextSteps(false);
          }}
          className="font-Poppins  p-8 hover:text-stateFairBurgandy"
        >
          <div>Final</div>
          <div>Mockups</div>
          {underlineFinalMockups ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => {
            setShowNextSteps(true);
            setShowFinalMockups(false);
            setShowDesignAndTest(false);
            setShowBenchmarking(false);
            setShowHeuristicEvaluation(false);
            setShowTheProblems(false);

            setUnderlineProblems(false);
            setUnderlineHeuristicEvaluation(false);
            setUnderlineBenchmarking(false);
            setUnderlineDesignAndTest(false);
            setUnderlineFinalMockups(false);
            setUnderlineNextSteps(true);
          }}
          className="font-Poppins  p-8 hover:text-stateFairBurgandy"
        >
          <div>Next</div>
          <div>Steps</div>
          {underlineNextSteps ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
      </div>

      <div className={` h-0  ${openCaseStudy && "  h-full"} `}>
        {showTheProblems && (
          <div className="md:p-40 lg:p-40 mx-8 my-4 ">
            <div className=" font-bold font-Poppins lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4">
              The Problems
            </div>
            <div className="">
              <div className="font-Poppins md:text-xl lg:text-xl">
                Just over a million people visit the Washington State Fair every
                year. Many of the attendees use the Washington State Fair mobile
                app to purchase tickets for concerts and shows. This projects
                uncovers usability issues in the Washington State Fair mobile
                app that users struggle with when purchasing tickets.
              </div>
            </div>
          </div>
        )}
        {showHeuristicEvaluation && (
          <div className="md:p-40 lg:p-40 mx-8 my-4 ">
            <div className="font-bold font-Poppins lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4">
              Usability Heuristic Evaluation
            </div>
            <div className="font-Poppins  md:block lg:block md:text-xl lg:text-xl mb-4">
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
              <div className="md:my-12 lg:my-5 md:mb-10 lg:mb-10 font-bold text-aprenderBlue lg:block md:block mt-8">
                Click or press the images to see the evaluation details or for
                an overview
                <span
                  onClick={() => {
                    setShowBenchmarking(true);
                    setShowHeuristicEvaluation(false);
                    setShowDesignAndTest(false);
                    setShowFinalMockups(false);
                    setShowNextSteps(false);
                    setShowTheProblems(false);

                    setUnderlineProblems(false);
                    setUnderlineHeuristicEvaluation(false);
                    setUnderlineBenchmarking(true);
                    setUnderlineDesignAndTest(false);
                    setUnderlineFinalMockups(false);
                    setUnderlineNextSteps(false);
                  }}
                  className=" underline underline-offset-2"
                >
                  {" "}
                  click here.
                </span>
              </div>
            </div>

            <div className="md:grid grid-cols-4 lg:grid grid-cols-4 gap-3 text-sm  font-Poppins ">
              <div className="md:w-36 lg:w-36 md:mt-0 lg:mt-0 mt-20">
                <div className="md:mb-10 leading-7 md:mt-3 md:mx-0 lg:mx-0 mx-8 mt-20">
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
              <div className="md:w-36 lg:w-36">
                <div className="mb-10 leading-7 mt-3 mx-8">Second screen.</div>
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
              <div className="md:w-36 lg:w-36">
                <div className="mb-10 leading-7 mt-3 mx-8">Third screen.</div>
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
                <div className=" text-aprenderBlue font-bold text-lg mt-16 w-96 font-Poppins hidden">
                  This is long. For the highlights{" "}
                  {!showOverView ? (
                    <div
                      onClick={() => {
                        setShowOverView(true);
                      }}
                      className="underline underline-offset-4 text-stateFairBurgandy"
                    >
                      Click here.
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShowOverView(false);
                      }}
                      className="underline underline-offset-4 text-stateFairBurgandy"
                    >
                      Close
                    </div>
                  )}
                </div>
                {showOverView && (
                  <div className=" ">
                    <div className="  w-96 animate-wave2 mt-7 ">
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
                <div className="md:w-36 lg:w-36">
                  <div className="mb-10 leading-7 mt-3 mx-8">Forth Screen.</div>
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
          <div className="md:p-40 lg:p-40 mx-8 my-4">
            <div className="font-Poppins font-bold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4  ">
              Benchmarking
            </div>
            <div className="font-Poppins md:text-xl lg:text-xl md:mb-8 lg:mb-8 mb-4">
              I conducted a usability test on the ticket buying process using
              the System Usability Scale (SUS) framework{" "}
              <span className="font-bold">
                after I completed the heuristic evaluation{" "}
              </span>
              . I used these results to establish success metrics for future
              designs.
            </div>
            <div className=" font-Poppins">
              <div className="lg:mb-4 md:mb-4">
                <div className="font-bold text-stateFairBlue lg:mb-2 md:mb-2">
                  {" "}
                  First Usability Test Results:{" "}
                </div>
                <ul className="list-disc pl-5">
                  <li className=""> Over all SUS score of 3.3 of 7. </li>
                  <li className="">
                    Only 40% of users were able to select assessable and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
              <div className="leading-6">
                <div className="font-bold text-stateFairBlue lg:mb-2 md:mb-2">
                  Success Metrics:{" "}
                </div>
                <ul className="list-disc pl-5">
                  <li className="">
                    Higher SUS score than the original design.
                  </li>
                  <li className="pt-1">
                    Majority of users will be able to select accessible and not
                    accessible seats.
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="font-bold lg:mt-8 md:mt-8 lg:mb-2 md:mb-2 text-stateFairBlue mt-4 mb-4 ">
                  {" "}
                  To reach success metrics I needed to design solutions to these
                  problems listed below.
                </div>
                <ul className="list-disc pl-5 ">
                  <li className="pt-1">
                    <span className="text-stateFairRed">Prices</span> for{" "}
                    <span className="text-stateFairRed">accessible</span> and{" "}
                    <span className="text-stateFairRed">non-accessible</span>{" "}
                    seats were
                    <span className="text-stateFairRed">
                      {" "}
                      NOT clearly displayed
                    </span>
                  </li>
                </ul>
                <ul className="list-disc  pl-5 ">
                  <li>
                    <span className="text-stateFairRed">Accessible seats</span>{" "}
                    in all locations
                    <span className="text-stateFairRed"> were NOT clearly</span>
                    <span> marked on the section map.</span>
                  </li>
                </ul>
                <ul className="list-disc  pl-5">
                  <li>
                    The design
                    <span className="text-stateFairRed"> DID NOT</span> let{" "}
                    <span className="text-stateFairRed"> users know</span> if a
                    section{" "}
                    <span className="text-stateFairRed"> is sold out.</span>
                  </li>
                </ul>
                <ul className=" list-disc  pl-5 pt-1">
                  <li>
                    The
                    <span className="text-stateFairRed"> image size</span> of
                    the seats and sections maps were{" "}
                    <span className="text-stateFairRed">TOO small.</span>
                  </li>
                </ul>
                <ul className=" list-disc  pl-5">
                  <li>
                    <span className="text-stateFairRed">Accessible seats</span>{" "}
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
                    <span className="text-stateFairRed">TOO many options</span>{" "}
                    when selecting sections/seats is
                    <span className="text-stateFairRed"> confusing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {showDesignAndTest && (
          <div className="font-Poppins md:p-40 lg:p-40 mx-8 my-4 ">
            <div className="font-bold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-xl">
              Design & Test
            </div>
            <div className=" lg:text-xl md:text-xl  ">
              <div className="">
                I{" "}
                <span className="font-bold md:text-xl lg:text-xl">
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
            <div className="lg:mt-10 md:mt-10 lg:ml-10 md:ml-10 lg:mb-3 md:mb-3 mt-5 mb-8 font-bold text-stateFairBlue">
              Click or press to see my different iterations.
            </div>

            <div className="md:flex lg:flex text-lg  ">
              <div>
                {showTestScreen1 && (
                  <div className="md:hidden lg:hidden mb-10">
                    <ul className="md:p-32 lg:p-32 pl-6 list-disc ">
                      <li className="mt-5">
                        SUS Score:
                        <span className="text-stateFairRed"> 3.3 of 7</span>
                      </li>
                      <li className="">
                        <span className="text-stateFairRed"> 40% </span>
                        of participants were able to select accessible and
                        non-accessible seats.
                      </li>
                    </ul>
                  </div>
                )}

                {showTestScreen2 && (
                  <div className="md:hidden lg:hidden mb-10 ">
                    <ul className="md:p-32 lg:p-32 pl-6   list-disc">
                      <li className="mt-5">
                        SUS Score:
                        <span className="text-stateFairRed"> 4.4 of 7</span>
                      </li>
                      <li className="">
                        <span className="text-stateFairRed"> 50% </span>
                        of participants were able to select accessible and
                        non-accessible seats.
                      </li>
                    </ul>
                  </div>
                )}
                {showTestScreen3 && (
                  <div className="md:hidden lg:hidden mb-10">
                    <ul className="lg:p-32 md:p-32 pl-6  list-disc">
                      <li className="mt-5">
                        SUS Score:
                        <span className="text-stateFairRed"> 5.2 of 7</span>
                      </li>
                      <li className="">
                        <span className="text-stateFairRed"> 80% </span>
                        of participants were able to select accessible and
                        non-accessible seats.
                      </li>
                    </ul>
                  </div>
                )}

                {showTestScreen1 && (
                  <img
                    className="md:mt-4 lg:mt-4 md:mx-8 lg:mx-8 md:w-[12.5rem] lg:w-[12.5rem]"
                    src={"/images/test-screen-3.svg"}
                    alt="Aprender Screens"
                    onClick={() => {
                      setShowTestScreen1(false);
                      setShowTestScreen3(false);
                      setShowTestScreen2(true);
                    }}
                  ></img>
                )}

                {showTestScreen2 && (
                  <img
                    className="md:mt-4 lg:mt-4 md:mx-8 lg:mx-8 md:w-[12.5rem] lg:w-[12.5rem]"
                    src={"/images/test-screen-1.svg"}
                    alt="Aprender Screens"
                    onClick={() => {
                      setShowTestScreen1(false);
                      setShowTestScreen3(true);
                      setShowTestScreen2(false);
                    }}
                  ></img>
                )}
                {showTestScreen3 && (
                  <img
                    className="md:mt-4 lg:mt-4 md:mx-8 lg:mx-8 md:w-[12.5rem] lg:w-[12.5rem]"
                    src={"/images/test-screen-2.svg"}
                    alt="Aprender Screens"
                    onClick={() => {
                      setShowTestScreen1(true);
                      setShowTestScreen3(false);
                      setShowTestScreen2(false);
                    }}
                  ></img>
                )}
              </div>
              {showTestScreen1 && (
                <div className="hidden lg:block md:block">
                  <ul className="md:p-32 lg:p-32 pl-16  md:text-lg lg:text-lg list-disc text-sm ">
                    <li className="mt-5">
                      SUS Score:
                      <span className="text-stateFairRed"> 3.3 of 7</span>
                    </li>
                    <li className="">
                      <span className="text-stateFairRed"> 40% </span>
                      of participants were able to select accessible and
                      non-accessible seats.
                    </li>
                  </ul>
                </div>
              )}

              {showTestScreen2 && (
                <div className="hidden lg:block md:block">
                  <ul className="md:p-32 lg:p-32 pl-16  md:text-lg lg:text-lg text-sm  list-disc">
                    <li className="mt-5">
                      SUS Score:
                      <span className="text-stateFairRed"> 4.4 of 7</span>
                    </li>
                    <li className="">
                      <span className="text-stateFairRed"> 50% </span>
                      of participants were able to select accessible and
                      non-accessible seats.
                    </li>
                  </ul>
                </div>
              )}
              {showTestScreen3 && (
                <div className="hidden lg:block md:block">
                  <ul className="lg:p-32 md:p-32 pl-16 md:text-lg lg:text-lg text-sm  list-disc">
                    <li className="mt-5">
                      SUS Score:
                      <span className="text-stateFairRed"> 5.2 of 7</span>
                    </li>
                    <li className="">
                      <span className="text-stateFairRed"> 80% </span>
                      of participants were able to select accessible and
                      non-accessible seats.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        {showFinalMockups && (
          <div className=" grid grid-cols-1 md:p-40 lg:p-40 mx-8">
            <div className="font-Poppins">
              <div className="font-bold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mt-8 text-xl mb-4">
                Final Mockups
              </div>
              <div className=" text-stateFairBlue lg:mb-8 md:mb-8 ">
                To see design changes click or press the headings.
              </div>
              <div className="md:ml-20 lg:ml-20 lg:flex md:flex md:gap-28 lg:gap-28">
                <div className="block lg:hidden md:hidden mb-8 mt-16">
                  {showAppScreen1 && (
                    <div className="grid grid-row-5 gap-10">
                      <div>
                        <div className="font-bold">
                          {" "}
                          1. User Control and Freedom
                        </div>
                        <div className="">
                          The ‘back to sections’ button is in an easy to spot
                          area.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          2. Consistency and Standards
                        </div>
                        <div className="">
                          The new design only uses one method for choosing
                          sections, instead of three.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          3. Visibility of System Status
                        </div>
                        <div className="">
                          The new design lets users know if a section is sold
                          out.{" "}
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          4. Match Between System and the Real World
                        </div>
                        <div className="">
                          The new design uses the section map which reflects the
                          real world. Also accessible seats in all locations are
                          clearly marked on the section map.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          {" "}
                          5. Aesthetic and Minimalist Design
                        </div>
                        <div className="">
                          Only information relevant to selecting sections is
                          present. All prices for accessible and non-accessible
                          seats are clearly displayed.
                        </div>
                      </div>
                    </div>
                  )}

                  {showAppScreen2 && (
                    <div>
                      <div>
                        <div className="font-bold"> 1. Error Prevention</div>
                        <div className="">
                          The image size of the sections can cause user to
                          choose the wrong section. In the new design the
                          sections are expanded when the user presses on them
                          which can help them choose the section they want.
                        </div>
                      </div>
                    </div>
                  )}

                  {showAppScreen3 && (
                    <div className="grid grid-row-4 gap-10">
                      <div>
                        <div className="font-bold">
                          1. Recognition rather than Recall
                        </div>
                        <div className="">
                          The prices for seats are clearly displayed and color
                          coded to match the seats on the seat map. The prices
                          are no longer hidden behind a button.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold"> 2. Error Prevention</div>
                        <div className="">
                          The image size of the seats can cause the user to
                          choose the wrong seat. In the new design the rows are
                          expanded when the user presses on them which helps
                          users to select the seat they want without making a
                          mistake.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          3.Visibility of System Status
                        </div>
                        <div className="">
                          The new design allows the user to easily see when a
                          seat is selected with a red checkmark.
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          4.Visibility of System Status
                        </div>
                        <div className="">
                          When seats have been selected the Add to Cart button
                          is activated by turning a deep red color.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative ">
                  {showAppScreen1 && (
                    <div>
                      <div className="">
                        {showAppArrow1 && (
                          <img
                            src={"/images/red-arrow.svg"}
                            style={{
                              position: "absolute",
                              top: 60,
                              left: 50,
                              width: 29.54,
                              height: 29.84,
                            }}
                            alt="state fair arrow"
                          ></img>
                        )}
                      </div>
                      <div className="md:hidden lg:hidden ">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 115,
                              left: 140,
                              width: 29.54,
                              height: 29.84,
                              zIndex: 10,
                            }}
                            alt="state fair arrow"
                          >
                            1
                          </div>
                        }
                      </div>

                      {showAppArrow2 && (
                        <img
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 198,
                            left: 130,
                            width: 29.54,
                            height: 29.84,
                            rotate: "",
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}
                      <div className="md:hidden lg:hidden">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 300,
                              left: 240,
                              width: 29.54,
                              height: 29.84,
                              zIndex: 10,
                            }}
                            alt="state fair arrow"
                          >
                            2
                          </div>
                        }
                      </div>

                      {showAppArrow3 && (
                        <img
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            zIndex: 10,
                            top: 320,
                            left: 153,
                            width: 29.54,
                            height: 29.84,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}
                      <div className="md:hidden lg:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 430,
                              left: 230,
                              width: 29.54,
                              height: 29.84,
                              zIndex: 10,
                            }}
                            alt="state fair arrow"
                          >
                            3
                          </div>
                        }
                      </div>

                      {showAppArrow4 && (
                        <img
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 220,
                            left: 50,
                            rotate: "-20deg",
                            width: 29.54,
                            height: 29.84,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}

                      <div className="md:hidden lg:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 290,
                              left: 100,
                              width: 29.54,
                              height: 29.84,
                              zIndex: 10,
                            }}
                            alt="state fair arrow"
                          >
                            4
                          </div>
                        }
                      </div>
                      {showAppArrow5 && (
                        <img
                          className="hidden lg:block md:block"
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 380,
                            left: 170,
                            width: 29.54,
                            height: 29.84,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}

                      <div className="md:hidden lg:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 570,
                              left: 160,
                              width: 29.54,
                              height: 29.84,
                              rotate: "",
                            }}
                            alt="state fair arrow"
                          >
                            5
                          </div>
                        }
                      </div>
                      <div className="">
                        <img
                          className="md:w-[250px] lg:w-[250px]"
                          src={"images/state-fair-screen-image-1.png"}
                          alt="Aprender Screens"
                          onClick={() => {}}
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
                            top: 200,
                            left: 120,
                            width: 29.54,
                            height: 29.84,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}
                      <div className="lg:hidden md:hidden">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 250,
                              left: 150,
                              width: 29.54,
                              height: 29.84,
                            }}
                            alt="state fair arrow"
                          >
                            1
                          </div>
                        }
                      </div>
                      <div>
                        <div>
                          <video
                            muted
                            autoPlay
                            loop
                            className=" md:w-[250px] lg:w-[250px]"
                            alt="Aprender Screens"
                            onClick={() => {}}
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
                          className=" hidden md:block lg:block"
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 375,
                            left: 200,
                            width: 29.54,
                            height: 29.84,
                            rotate: "90deg",
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}
                      <div className="lg:hidden md:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            src={"/images/red-arrow.svg"}
                            style={{
                              position: "absolute",
                              top: 470,
                              left: 225,
                              width: 29.54,
                              height: 29.84,
                            }}
                            alt="state fair arrow"
                          >
                            1
                          </div>
                        }
                      </div>

                      {showAppArrow8 && (
                        <img
                          className="hidden lg:block md:block"
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 420,
                            left: 230,
                            width: 29.54,
                            height: 29.84,
                            rotate: "90deg",
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}

                      <div className="lg:hidden md:hidden">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 213,
                              left: 140,
                              width: 29.54,
                              height: 29.84,
                            }}
                            alt="state fair arrow"
                          >
                            2
                          </div>
                        }
                      </div>

                      {showAppArrow11 && (
                        <img
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 160,
                            width: 29.54,
                            height: 29.84,
                            left: 115,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}

                      <div className="lg:hidden md:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 310,
                              width: 29.54,
                              height: 29.84,
                              left: 100,
                            }}
                            alt="state fair arrow"
                          >
                            3
                          </div>
                        }
                      </div>

                      {showAppArrow10 && (
                        <img
                          src={"/images/red-arrow.svg"}
                          style={{
                            position: "absolute",
                            top: 220,
                            width: 29.54,
                            height: 29.84,
                            rotate: "-90deg",
                            left: 20,
                          }}
                          alt="state fair arrow"
                        ></img>
                      )}

                      <div className="lg:hidden md:hidden block">
                        {
                          <div
                            className="bg-stateFairBlue font-bold rounded-full text-center text-2xl text-white"
                            style={{
                              position: "absolute",
                              top: 560,
                              width: 29.54,
                              height: 29.84,
                              left: 130,
                            }}
                            alt="state fair arrow"
                          >
                            4
                          </div>
                        }
                      </div>
                      <div>
                        <div>
                          <video
                            muted
                            autoPlay
                            loop
                            className=" md:w-[250px] lg:w-[250px]"
                            alt="Aprender Screens"
                            onClick={() => {}}
                          >
                            <source
                              src={"images/trimVid.mov"}
                              type="video/mp4"
                            />
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
                  <div
                    style={{ height: 568 }}
                    className=" w-96 md:block lg:block hidden"
                  >
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
                        className={`md:font-bold lg:font-bold md:mb-1 lg:mb-1 hover:text-stateFairRed md:active:ease-in-out lg:active:ease-in-out md:active:scale-95 lg:active:scale-95 lg:active:duration-200 md:active:duration-200 ${
                          showAppArrow1 && "text-stateFairRed"
                        }`}
                      >
                        User Control and Freedom
                      </div>
                      <div className="w-4/5">
                        The ‘back to concerts’ button is in an easy to spot
                        area.
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
                      <div className="w-4/5">
                        The new design only uses one method for choosing
                        sections, instead of three.
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
                      <div className="w-4/5">
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
                      <div className="w-4/5">
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
                        Aesthetic and Minimalist Design
                      </div>
                      <div className="w-4/5">
                        Only information relevant to selecting sections is
                        present. All prices for accessible and non-accessible
                        seats are clearly displayed.
                      </div>
                    </div>
                  </div>
                )}

                {showAppScreen2 && (
                  <div
                    style={{ height: 568 }}
                    className="w-96 md:block lg:block hidden"
                  >
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
                      <div className="w-4/5">
                        The image size of the sections can cause user to choose
                        the wrong section. In the new design the sections are
                        expanded when the user presses on them which can help
                        them choose the section they want.
                      </div>
                    </div>
                  </div>
                )}

                {showAppScreen3 && (
                  <div
                    style={{ height: 568 }}
                    className="w-96 md:block lg:block hidden"
                  >
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
                        Recognition rather than Recall
                      </div>
                      <div className="w-4/5">
                        The prices for seats are clearly displayed and color
                        coded to match the seats on the seat map. The prices are
                        no longer hidden behind a button.
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
                      <div className="w-4/5">
                        The image size of the seats can cause the user to choose
                        the wrong seat. In the new design the rows are expanded
                        when the user presses on them which helps users to
                        select the seat they want without making a mistake.
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
                      <div className="w-4/5">
                        The new design allows the user to easily see when a seat
                        is selected with a red checkmark.
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
                      <div className="w-4/5">
                        When seats have been selected the Add to Cart button is
                        activated by turning a deep red color.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className=" flex md:flex lg:flex gap-5 mb-10  m-auto md:pr-11 lg:pr-32 pt-4">
              <BackButton />
              <NextButton />
            </div>
          </div>
        )}
        {showNextSteps && (
          <div className="font-Poppins md:p-40 lg:p-40 mx-8 my-4 ">
            <div className=" font-bold  lg:text-xl md:text-xl text-xl mb-4">Takeaways</div>
            <ul className=" ml-9 md:w-[43.75rem] lg:w-[43.75rem] md:mt-5 lg:mt-5 md:ml-9 lg:ml-9 leading-7 lg:mb-4 md:mb-4 list-disc">
              <li>
                The
                <span className="font-bold"> value of heuristics</span>{" "}
                evaluations as a{" "}
                <span className="font-bold">cheap, quick </span> way to
                <span className="font-bold"> uncover usability issues. </span>
              </li>
              <li>
                <span className="font-bold"> Keeping it simple</span> during the
                UI design process helped me get unstuck when got stuck.{" "}
              </li>
              <li>
                <span className="font-bold">
                  Testing designs early and often
                </span>{" "}
                to catch and fix issues.{" "}
              </li>
              <li>
                Next time I would add an
                <span className="font-bold"> ‘time to finish task’</span> to my
                usability tests to measure the amount of time it took for users
                to select seats and sections.{" "}
              </li>
            </ul>
            <div className=" font-bold lg:text-xl md:text-xl md:mb-4 lg:mb-4 mb-4 text-xl mt-4">
              Next Steps
            </div>
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
    </div>
  );
}

export default StateFair;
