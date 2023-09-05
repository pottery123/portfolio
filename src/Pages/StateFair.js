import { React, useState, useEffect, useRef} from "react";


import { TextObject } from "../Components/StateFairText";

import ModalStateFair from "../Components/ModalStateFair";
import StateFairFinalMockups from "./StateFairFinalMockups";


function StateFair() {
  const [showTheProblems, setShowTheProblems] = useState(true);
  const [showHeuristicEvaluation, setShowHeuristicEvaluation] = useState(false);
  const [showOverView, setShowOverView] = useState(false);
  const [showBenchmarking, setShowBenchmarking] = useState(false);
  const [showDesignAndTest, setShowDesignAndTest] = useState(false);
  const [showFinalMockups, setShowFinalMockups] = useState(false);
  const [showNextSteps, setShowNextSteps] = useState(false);

  const [underlineProblems, setUnderlineProblems] = useState(true);
  const [underlineHeuristicEvaluation, setUnderlineHeuristicEvaluation] =
    useState(null);
  const [underlineBenchmarking, setUnderlineBenchmarking] = useState(null);
  const [underlineDesignAndTest, setUnderlineDesignAndTest] = useState(null);
  const [underlineFinalMockups, setUnderlineFinalMockups] = useState(null);
  const [underlineNextSteps, setUnderlineNextSteps] = useState(null);
  const [openCaseStudy, setOpenCaseStudy] = useState(true);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showAppScreen1, setAppScreen1] = useState(true);
  const [showAppScreen2, setAppScreen2] = useState(false);
  const [showAppScreen3, setAppScreen3] = useState(false);

  const ref1 = useRef(null);

  function ScrollButton(ref) {
    const ScrollButtonClick = () =>
      ref1.current.scrollIntoView({ behavior: "smooth" });
    return (
      <div
        className=" m-20 text-2xl font-extrabold  text-stateFairRed text-center"
        onClick={ScrollButtonClick}
      >
        Top
      </div>
    );
  }

 
  

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

  return (
    <div className="relative w-auto overflow-hidden font-Quicksand">
      <div className=" md:flex justify-around bg-stateFairBurgandy w-auto overflow-hidden relative block z-20">
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5  lg:hidden md:hidden"
          width={500}
          height={500}
          src={"/images/state-fair-images.svg"}
          alt="Aprender Screens"
        ></img>
        <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
          <div className="lg:pt-18 md:text-eight lg:text-eight text-six ">
            State Fair
          </div>
          <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
            <span className="font-bold">Role:</span> UX/UI Designer, Interaction
            Designer, UX Researcher
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 ">
            <span className="font-bold">Key skills:</span> Figma, Design
            Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
            <span className="font-bold"> Type of project:</span> Personal,
            Concept
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
      <div
        ref={ref1}
        className="bg-white w-full drop-shadow-sm flex justify-between  top-0 z-20  relative overflow-scroll"
      >
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
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>The</div>
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
          className="font-Quicksand p-8 text-lg hover:text-stateFairBurgandy"
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
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
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
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
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
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
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
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>Takeaways/</div> <div>Next Steps </div>
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
            <div className=" font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4">
              The Problems
            </div>
            <div className="">
              <div className="font-Quicksand md:text-xl lg:text-xl font-normal ">
                Just over a million people visit the Washington State Fair every
                year. Many of the attendees use the Washington State Fair mobile
                app to purchase tickets for concerts and shows. This projects
                uncovers usability issues in the Washington State Fair mobile
                app that users struggle with when purchasing tickets.
              </div>
              <ScrollButton />
            </div>
          </div>
        )}
        {showHeuristicEvaluation && (
          <div className="md:p-40 lg:p-40 mx-8 my-4 ">
            <div className="font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4">
              Usability Heuristic Evaluation
            </div>
            <div className="font-Quicksand  md:block lg:block md:text-xl lg:text-xl mb-4 font-normal">
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

            <div className="md:grid grid-cols-4 lg:grid grid-cols-4 gap-3 text-sm  font-Quicksand ">
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
                <div className=" text-aprenderBlue font-bold text-lg mt-16 w-96 font-Quicksand hidden">
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
            <ScrollButton />
          </div>
        )}
        {showBenchmarking && (
          <div className="md:p-40 lg:p-40 mx-8 my-4">
            <div className="font-Quicksand font-semibold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4  ">
              Benchmarking
            </div>
            <div className="font-Quicksand md:text-xl lg:text-xl md:mb-8 lg:mb-8 mb-4 font-normal">
              I conducted a usability test on the ticket buying process using
              the System Usability Scale (SUS) framework{" "}
              <span className="font-bold">
                after I completed the heuristic evaluation{" "}
              </span>
              . I used these results to establish success metrics for future
              designs.
            </div>
            <div className=" font-Quicksand">
              <div className="lg:mb-4 md:mb-4">
                <div className="font-bold text-stateFairBlue lg:mb-2 md:mb-2">
                  {" "}
                  First Usability Test Results:{" "}
                </div>
                <ul className="list-disc pl-5">
                  <li className=""> Over all SUS score of 3.3 of 7. </li>
                  <li className="">
                    Only 40% of users were able to select accessible and
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
            <ScrollButton />
          </div>
        )}
        {showDesignAndTest && (
          <div className="font-Quicksand md:p-40 lg:p-40 mx-8 my-4 ">
            <div className="font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-xl">
              Design & Test
            </div>
            <div className=" lg:text-xl md:text-xl  ">
              <div className="font-normal">
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

            <div className="flex justify-between mt-20">
              <div className="">
                <img
                  alt="test screen "
                  width={200}
                  src={"/images/test-1.png"}
                ></img>
                <ul className="list-disc  text-xs ">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 3.3 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 40% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  alt="test screen"
                  width={200}
                  src={"/images/test-2.png"}
                ></img>
                <ul className=" text-xs   list-disc">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 4.4 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 50% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>

              <div>
                <img
                  alt="test screen"
                  width={200}
                  src={"/images/test-3.png"}
                ></img>
                <ul className="list-disc text-xs">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 5.2 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 80% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
            </div>
            <ScrollButton />
          </div>
        )}
        {showFinalMockups && (
          <div>
            <div className=" grid grid-cols-1 md:p-40 lg:p-40 mx-8">
              <div className="font-Quicksand">
                <div className="font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mt-8 text-xl mb-20">
                  Final Mockups
                </div>
                <StateFairFinalMockups />
              </div>
              <ScrollButton />
            </div>
          </div>
        )}
        {showNextSteps && (
          <div className="font-Quicksand md:p-40 lg:p-40 mx-8 my-4 ">
            <div className=" font-semibold   lg:text-xl md:text-xl text-xl mb-4">
              Takeaways
            </div>
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
            <div className=" font-semibold  lg:text-xl md:text-xl md:mb-4 lg:mb-4 mb-4 text-xl mt-4">
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
