import { React, useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { TextObject } from "../Components/StateFairText";

import ModalStateFair from "../Components/ModalStateFair";
import StateFairFinalMockups from "./StateFairFinalMockups";

function StateFair() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showOverView, setShowOverView] = useState(true);
  const [openCaseStudy, setOpenCaseStudy] = useState(true);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const pageTop = useRef();
  const problem = useRef();
  const heuristic = useRef();
  const benchmarking = useRef();
  const designTest = useRef();
  const finalMockups = useRef();
  const nextSteps = useRef();

  const [problemRef, inViewProblem] = useInView();
  const [heuristicRef, inViewHeuristic] = useInView();
  const [benchmarkingRef, inViewBenchmarking] = useInView();
  const [designTestRef, inViewDesignTest] = useInView();
  const [finalMockupsRef, inViewFinalMockups] = useInView();
  const [nextStepsRef, inViewNextSteps] = useInView();

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

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ alignToTop: false, behavior: "smooth" });
  };

  
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
    <div>
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
          <div className="mt-24"> </div>
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
        className="bg-white w-full drop-shadow-sm flex justify-between z-50 -top-1 sticky 
           overflow-scroll"
      >
        <button
          onClick={() => scrollTo(problem)}
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>The </div> <div> Problems</div>
          {inViewProblem && !inViewHeuristic ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => scrollTo(heuristic)}
          className="font-Quicksand p-8 text-lg hover:text-stateFairBurgandy"
        >
          <div>Heuristic</div>
          <div>Evaluation</div>
          {inViewHeuristic && !inViewBenchmarking ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => scrollTo(benchmarking)}
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div className="mt-7">Benchmarking</div>
          {inViewBenchmarking && !inViewDesignTest ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(designTest)}
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>Design &</div>
          <div>Test</div>
          {inViewDesignTest && !inViewFinalMockups ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(finalMockups)}
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>Final</div>
          <div>Mockups</div>
          {inViewFinalMockups && !inViewNextSteps ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(nextSteps)}
          className="font-Quicksand text-lg  p-8 hover:text-stateFairBurgandy"
        >
          <div>Takeaways/</div> <div>Next Steps </div>
          {inViewNextSteps ? (
            <div className=" h-1 bg-stateFairBurgandy" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
      </div>

      <div className="md:p-10 lg:p-40 mx-8 my-4 ">
        <div
          ref={problem}
          className=" scroll-m-52 font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4"
        >
          The Problems
        </div>
        <div ref={problemRef} className="">
          <div className="font-Quicksand md:text-xl lg:text-xl font-normal ">
            Just over a million people visit the Washington State Fair every
            year. Many of the attendees use the Washington State Fair mobile app
            to purchase tickets for concerts and shows. This projects uncovers
            usability issues in the Washington State Fair mobile app that users
            struggle with when purchasing tickets.
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto">
          <div className="md:p-10 lg:p-40 mx-8 my-4 ">
            <div
              ref={heuristic}
              className="  scroll-m-52 font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4"
            >
              Usability Heuristic Evaluation
            </div>
            <div
              ref={heuristicRef}
              className=" font-Quicksand  md:block lg:block md:text-xl lg:text-xl mb-4 font-normal"
            >
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
              <div className=" w ">
                <div className="mt-7 mb-5 font-semibold text-stateFairBlue">
                  Below is a list if problems I uncoverd using the usability
                  heuristic evaluation.
                </div>
                <div className="mx-32 my-10">
                  <ul className="pt-3 leading-6 list-disc text-base">
                    {" "}
                    <li className="">
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
                  <ul className=" leading-8 list-disc text-base">
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
                  <ul className="leading-7 list-disc text-base">
                    <li>
                      The design
                      <span className="text-stateFairRed">
                        {" "}
                        DID NOT
                      </span> let{" "}
                      <span className="text-stateFairRed"> users know</span> if
                      a section{" "}
                      <span className="text-stateFairRed"> is sold out.</span>
                    </li>
                  </ul>
                  <ul className="leading-7 list-disc text-base ">
                    <li>
                      The
                      <span className="text-stateFairRed"> image size</span> of
                      the seats and sections maps were{" "}
                      <span className="text-stateFairRed">TOO small.</span>
                    </li>
                  </ul>
                  <ul className="leading-7 list-disc text-base">
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
                  <ul className="list-disc text-base">
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

            <div ref={heuristicRef} className=" font-Quicksand">
              <div className="mt-14 mb-5 font-semibold text-stateFairBlue">A detailed document of the usability heuristic evaluation.</div>
              <img alt="screen 1" src="/images/h2.png"></img>
            </div>
          </div>
        </div>
        <div ref={benchmarkingRef} className="md:p-10 lg:p-40 mx-8 my-4">
          <div
            ref={benchmarking}
            className=" scroll-m-52 font-Quicksand font-semibold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4  "
          >
            Benchmarking
          </div>
          <div className="font-Quicksand md:text-xl lg:text-xl md:mb-8 lg:mb-8 mb-4 font-normal">
            I conducted a usability test on the ticket buying process using the
            System Usability Scale (SUS) framework{" "}
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
                <li className="">Higher SUS score than the original design.</li>
                <li className="pt-1">
                  Majority of users will be able to select accessible and not
                  accessible seats.
                </li>
              </ul>
            </div>
            <div className="">
              <div className="font-bold lg:mt-8 md:mt-8 lg:mb-2 md:mb-2 text-stateFairBlue  mb-4 ">
                {" "}
                To reach success metrics I needed to design solutions to these
                problems listed below.
              </div>
              <ul className="list-disc pl-5">
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
                  <span className="text-stateFairRed">Accessible seats</span> in
                  all locations
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
                  <span className="text-stateFairRed"> image size</span> of the
                  seats and sections maps were{" "}
                  <span className="text-stateFairRed">TOO small.</span>
                </li>
              </ul>
              <ul className=" list-disc  pl-5">
                <li>
                  <span className="text-stateFairRed">Accessible seats</span>{" "}
                  ARE NOT{" "}
                  <span className="text-stateFairRed"> directly displayed</span>{" "}
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

        <div
          ref={designTestRef}
          className="font-Quicksand md:p-10 lg:p-40 mx-8 my-4 "
        >
          <div
            ref={designTest}
            className=" scroll-m-72 font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-xl"
          >
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
              solution, tested the design, analyzed feedback from the test, and
              incorporated relevant feedback back into the design. I{" "}
              <span className="font-bold">
                stopped this process when the design met the
              </span>
              <span> success metrics. </span>
            </div>
          </div>

          <div className="lg:flex md:flex md:justify-between lg:justify-between md:mt-20 lg:mt-20 mt-32 ml-14">
            <div className="mt-32">
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
            <div className="mt-32">
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

            <div className="mt-32">
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
        </div>

        <div>
          <div
            ref={finalMockups}
            className=" grid grid-cols-1 md:p-10 lg:p-40 mx-8"
          >
            <div ref={finalMockupsRef} className="font-Quicksand">
              <div className="font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mt-8 text-xl mb-32">
                Final Mockup
              </div>
              <StateFairFinalMockups />
            </div>
          </div>
        </div>

        <div
          ref={nextStepsRef}
          className="font-Quicksand md:p-10 lg:p-40 mx-8 my-4 "
        >
          <div
            ref={nextSteps}
            className=" scroll-m-52 font-semibold   lg:text-2xl md:text-2xl text-2xl mb-4"
          >
            Takeaways
          </div>
          <ul className=" ml-9 md:w-[43.75rem] lg:w-[43.75rem] md:mt-5 lg:mt-5 md:ml-9 lg:ml-9 leading-7 lg:mb-4 md:mb-4 list-disc">
            <li>
              The
              <span className="font-bold"> value of heuristics</span>{" "}
              evaluations as a <span className="font-bold">cheap, quick </span>{" "}
              way to
              <span className="font-bold"> uncover usability issues. </span>
            </li>
            <li>
              <span className="font-bold"> Keeping it simple</span> during the
              UI design process helped me get unstuck when got stuck.{" "}
            </li>
            <li>
              <span className="font-bold">Testing designs early and often</span>{" "}
              to catch and fix issues.{" "}
            </li>
            <li>
              Next time I would add an
              <span className="font-bold"> ‘time to finish task’</span> to my
              usability tests to measure the amount of time it took for users to
              select seats and sections.{" "}
            </li>
          </ul>
          <div className=" font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-2xl mt-4">
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
      </div>
    </div>
  );
}

export default StateFair;
