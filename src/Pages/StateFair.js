import { React, useState, useEffect } from "react";
import ModalStateFair from "../Components/ModalStateFair";
import { TextObject } from "../Components/StateFairText";

function StateFair() {
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
        <div
          className="text-center font-Quicksand text-sm text-white bg-stateFairBurgandy px-2 py-2  rounded-full m-auto w-24  hover:bg-stateFairBurgandyDark"
          onClick={() => {
            if (showAppScreen1) {
              setAppScreen1(false);
              setAppScreen2(true);
              setAppScreen3(false);
            } else if (showAppScreen2) {
              setAppScreen1(false);
              setAppScreen2(false);
              setAppScreen3(true);
            } else if (showAppScreen3) {
              setAppScreen1(true);
              setAppScreen2(false);
              setAppScreen3(false);
            }
          }}
        >
          {" "}
          Next
        </div>
      );
    }

    return (
      <div className="">
        {showHeuristicEvaluation && (
          <div className=" mt-28">
            <div className="text-lg font-black font-Quicksand">
              Heuristic Evaluation
            </div>
            <div className="font-Quicksand absolute mt-3 leading-7">
              The project started off with a usability heuristic evaluation of
              the ticket purchasing process in the Washington State Fair app. I
              used Jakob Nielsen's 10 general principles for interaction design.
              Through this process I was able to identify some major usability
              issues when purchasing tickets for available seats .
            </div>
            <div className="grid grid-cols-4 gap-24 text-sm mt-36 font-Quicksand">
              <div className="w-36">
                <div className="mb-10 leading-7">
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
                <div className="mb-10 leading-7">
                  This is the second screen that shows after users have chosen
                  the secton map to select seats.
                </div>
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
                <div className="mb-10 leading-7">
                  Third screen. Section selection screen.
                </div>
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
                <div className=" text-lg mt-11 w-96 font-Quicksand">
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
                    <div className="w-96 pt-5 animate-wave2 leading-7 mt-3">
                      {" "}
                      • <span className="text-stateFairRed">
                        Prices
                      </span> for{" "}
                      <span className="text-stateFairRed">accessible</span> and{" "}
                      <span className="text-stateFairRed">non-accessible</span>{" "}
                      seats were
                      <span className="text-stateFairRed">
                        {" "}
                        NOT clearly displayed
                      </span>
                    </div>
                    <div className="w-96 pt-5 animate-wave3 leading-7 ">
                      {" "}
                      •{" "}
                      <span className="text-stateFairRed">
                        Accessible seats
                      </span>{" "}
                      in all locations
                      <span className="text-stateFairRed">
                        {" "}
                        were NOT clearly
                      </span>
                      <span> marked on the section map.</span>
                    </div>
                    <div className="w-96 pt-5 animate-wave4 leading-10">
                      {" "}
                      • The design
                      <span className="text-stateFairRed">
                        {" "}
                        DID NOT
                      </span> let{" "}
                      <span className="text-stateFairRed"> users know</span> if
                      a section{" "}
                      <span className="text-stateFairRed"> is sold out.</span>
                    </div>
                    <div className="w-96 pt-5 animate-wave5 leading-7">
                      {" "}
                      • The{" "}
                      <span className="text-stateFairRed">image size</span> of
                      the seats and sections maps were{" "}
                      <span className="text-stateFairRed">TOO small.</span>
                    </div>
                    <div className="w-96 pt-5 animate-wave5 leading-9">
                      •{" "}
                      <span className="text-stateFairRed">
                        Accessible seats
                      </span>{" "}
                      ARE NOT{" "}
                      <span className="text-stateFairRed">
                        {" "}
                        directly displayed
                      </span>{" "}
                      on the seat map.{" "}
                    </div>
                    <div className="w-96 pt-5 animate-wave6 leading-7">
                      •{" "}
                      <span className="text-stateFairRed">
                        TOO many options
                      </span>{" "}
                      when selecting sections/seats is
                      <span className="text-stateFairRed"> confusing.</span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="w-32">
                  <div className="mb-10 leading-7">
                    Forth Screen. Seat selection.
                  </div>
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
            <div className=" absolute mt-3 leading-7">
              I conducted a usability test on the ticket buying process using
              the System Usability Scale (SUS) framework. I used these results
              to establish success metrics for future designs.
            </div>
            <div className="flex justify-between mt-32 ml-32 gap-32">
              <div
                className="bg-stateFairRed justify-around p-5 text-white"
                style={{ width: "241px", height: "264px" }}
              >
                {" "}
                <div className="font-bold"> First Usability Test Results: </div>
                <div className="mt-5"> • Over all SUS score of 3.3 of 7 </div>
                <div className="mt-3">
                  {" "}
                  • Only 40% of users were able to select assessable and
                  non-accessible seats.
                </div>
              </div>
              <div
                className="bg-stateFairBlue p-5 text-white"
                style={{ width: "241px", height: "264px" }}
              >
                <div className="font-bold">Success Metrics: </div>
                <div className="mt-5">
                  {" "}
                  • Higher SUS score than the original design
                </div>
                <div className="mt-3">
                  • Majority of users will be able to select accessible and not
                  accessible seats.
                </div>
              </div>
            </div>
          </div>
        )}
        {showDesignAndTest && (
          <div className="font-Quicksand mt-28 leading-8">
            <div className="text-lg font-black">Design & Test</div>
            <div style={{ width: 800 }} className="mt-3 leading-7">
              <div className="">
                I{" "}
                <span className="text-stateFairRed">
                  wrote user stories that addressed each usability issues the
                  heuristics evaluation uncovered
                </span>{" "}
                in the ticket buying process. For each user story I designed a
                solution, tested the design, analyzed feedback from the test,
                and incorporated relevant feedback back into the design. I{" "}
                <span className="text-stateFairRed">
                  stopped this process when the design met the
                </span>
                success metrics.
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
                    src={"/images/test-screen-1.svg"}
                    alt="Aprender Screens"
                    style={{ width: "250px" }}
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
                    src={"/images/test-screen-2.svg"}
                    alt="Aprender Screens"
                    style={{ width: "250px" }}
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
                    src={"/images/test-screen-3.svg"}
                    alt="Aprender Screens"
                    style={{ width: "250px" }}
                    onClick={() => {
                      setShowTestScreen1(true);
                      setShowTestScreen3(false);
                      setShowTestScreen2(false);
                    }}
                  ></img>
                )}
              </div>
              <div style={{ width: 500 }} className="mt-36 text-xl leading-8">
                <div className="mt-5">
                  {" "}
                  • Final SUS Score:{" "}
                  <span className="text-stateFairRed">5.2 of 7</span>
                </div>
                <div className="">
                  {" "}
                  •{" "}
                  <span className="text-stateFairRed">
                    80% of participants
                  </span>{" "}
                  were able to select accessible and non- accessible seats.
                </div>
              </div>
            </div>
          </div>
        )}
        {showFinalMockups && (
          <div className="font-Quicksand ">
            <div className="text-lg font-bold mt-28 leading-8">
              Final Mockups
            </div>
            <div className="mt-20 ml-20 flex gap-28 mt-44">
              <div className="overflow-hidden">
                {showAppScreen1 && (
                  <div>
                    {showAppArrow1 && (
                      <img
                        src={"/images/red-arrow.svg"}
                        style={{
                          position: "absolute",
                          top: 380,
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
                          top: 518,
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
                          top: 640,
                          left: 240,
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
                          top: 550,
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
                          top: 710,
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
                          top: 530,
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
                          top: 695,
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
                          top: 740,
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
                          top: 480,
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
                          top: 540,
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
                    onMouseOut={() => {
                      setAppArrow1(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow1(true);
                    }}
                    className="mb-6"
                  >
                    <div className="font-bold mb-2 underline-offset-4 hover:text-stateFairRed">
                      User control and freedom
                    </div>
                    <div>
                      The ‘back to sections’ button is in an easy to spot area.
                    </div>
                  </div>
                  <div
                    onMouseOut={() => {
                      setAppArrow2(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow2(true);
                    }}
                    className="mb-6"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed">
                      Consistency and Standards
                    </div>
                    <div>
                      The new design only uses one method for choosing sections,
                      instead of three.
                    </div>
                  </div>
                  <div
                    onMouseOut={() => {
                      setAppArrow3(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow3(true);
                    }}
                    className="mb-6 mt-8"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed">
                      Visibility of System Status
                    </div>
                    <div>
                      The new design lets users know if a section is sold out.{" "}
                    </div>
                  </div>
                  <div
                    onMouseOut={() => {
                      setAppArrow4(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow4(true);
                    }}
                    className="mb-6"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed">
                      Match Between System and the Real World
                    </div>
                    <div>
                      The new design uses the section map which reflects the
                      real world. Also accessible seats in all locations are
                      clearly marked on the section map.
                    </div>
                  </div>
                  <div
                    onMouseOut={() => {
                      setAppArrow5(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow5(true);
                    }}
                    className="mt-8"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed">
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
                    onMouseOut={() => {
                      setAppArrow6(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow6(true);
                    }}
                  >
                    <div className="font-bold mb-2 w-2/5 hover:text-stateFairRed">
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
                    onMouseOut={() => {
                      setAppArrow7(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow7(true);
                    }}
                    className="mb-8"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed ">
                      Recognition rather than recall
                    </div>
                    <div>
                      The prices for seats are clearly displayed and color coded
                      to match the seats on the seat map. The prices are no
                      longer hidden behind a button.
                    </div>
                  </div>
                  <div
                    onMouseOut={() => {
                      setAppArrow11(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow11(true);
                    }}
                    className="mb-8"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed ">
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
                    onMouseOut={() => {
                      setAppArrow10(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow10(true);
                    }}
                    className="mb-8"
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed mt-3">
                      Visibility of System Status
                    </div>
                    <div>
                      The new design allows the user to easily see when a seat
                      is selected with a red check mark.
                    </div>
                  </div>

                  <div
                    onMouseOut={() => {
                      setAppArrow8(false);
                    }}
                    onMouseOver={() => {
                      setAppArrow8(true);
                    }}
                  >
                    <div className="font-bold mb-2 hover:text-stateFairRed">
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
            <NextButton />
          </div>
        )}
        {showNextSteps && (
          <div className="font-Quicksand">
            <div className="mt-28 leading-8 font-black">Takeaways</div>
            <div style={{ width: 700 }} className="mt-2 leading-7">
              <div>
                • The{" "}
                <span className="text-stateFairRed">value of heuristics</span>{" "}
                evaluations as a{" "}
                <span className="text-stateFairRed">cheap, quick </span> way to
                <span className="text-stateFairRed">
                  uncover usability issues.{" "}
                </span>
              </div>
              <div>
                • <span className="text-stateFairRed"> Keeping it simple</span>{" "}
                during the UI design process helped me get unstuck when got
                stuck.{" "}
              </div>
              <div>
                •{" "}
                <span className="text-stateFairRed">
                  Testing designs early and often
                </span>{" "}
                to catch and fix issues.{" "}
              </div>
              <div>
                • Next time I would add an
                <span className="text-stateFairRed">
                  {" "}
                  ‘time to finish task’
                </span>{" "}
                to my usability tests to measure the amount of time it took for
                users to select seats and sections{" "}
              </div>
            </div>

            <div className="font-black mt-10 leading-9">Next Steps</div>
            <div>
              •{" "}
              <span className="text-stateFairRed">
                Discuss with developers and other stakeholders{" "}
              </span>
              the technical requirements for implementing the updated design.{" "}
            </div>
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
      <div className="p-10">
        <div className="text-seven text-center mb-10 font-Quicksand">
          State Fair
        </div>
        <div className="text-five ml-20 mr-20 font-Quicksand">
          <span className="font-bold">Overview:</span> Just over a million
          people visit the Washington State Fair (pre-covid) every year. Many of
          the attendees use the Washington State Fair mobile app to purchase
          tickets for concerts and shows. This projects uncovers usability
          issues in the app that users struggle with when purchasing tickets.
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
          src={"/images/note_book_background.svg"}
          alt="Aprender Screens"
          width={1100}
        ></img>
        <Tabs />
      </div>
    </div>
  );
}

export default StateFair;
