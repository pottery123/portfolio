import { React, useState, useEffect, lazy } from "react";

function StateFairFinalMockups() {
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
  const [showAppArrow11, setAppArrow11] = useState(false);
  const [showAppArrow10, setAppArrow10] = useState(false);
  const [showAppArrow8, setAppArrow8] = useState(false);
  return (
    <div className=" ">
      <div className=" md:flex lg:flex gap-10">
        <div className="lg:w-[550px] mb-10">
          <img
            src={"images/state-fair-screen-image-1.png"}
            alt="Aprender Screens"
            onClick={() => {}}
          ></img>
        </div>
        <div>
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
            <div className="md:font-bold lg:font-bold font-bold md:mb-1 lg:mb-1 hover:text-stateFairRed md:active:ease-in-out lg:active:ease-in-out md:active:scale-95 lg:active:scale-95 lg:active:duration-200 md:active:duration-200">
              User Control and Freedom
            </div>
            <div className="md:w-4/5 lg:w-4/5">
              The ‘back to concerts’ button is in an easy to spot area.
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
            <div className="font-bold mb-1">Consistency and Standards</div>
            <div className="lg:w-4/5">
              The new design only uses one method for choosing sections, instead
              of three.
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
            <div className="font-bold mb-1">Visibility of System Status</div>
            <div className="lg:w-4/5">
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
            <div className="font-bold mt-8">
              Match Between System and the Real World
            </div>
            <div className="lg:w-4/5">
              The new design uses the section map which reflects the real world.
              Also accessible seats in all locations are clearly marked on the
              section map.
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
            <div className="font-bold mb-1 mt-9">
              Aesthetic and Minimalist Design
            </div>
            <div className="lg:w-4/5">
              Only information relevant to selecting sections is present. All
              prices for accessible and non-accessible seats are clearly
              displayed.
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex lg:flex mt-32 mb-32">
        <div className="hidden lg:block md:block">
          <div
            onClick={() => {
              setAppArrow6((prev) => !prev);
            }}
          >
            <div className="font-bold md:w-2/5 lg:w-2/5">
              Error Prevention
            </div>
            <div className="md:w-4/5 lg:-4/5">
              The image size of the sections can cause the user to choose the
              wrong section. In the new design the sections are expanded when
              the user presses on them which can help them choose the section
              they want.
            </div>
          </div>
        </div>
        <video
          muted
          autoPlay
          loop
          className=" md:w-[250px] lg:w-[250px] mb-10"
          alt="Aprender Screens"
          onClick={() => {}}
        >
          <source
            src={"images/state-fair-screen-video-2.mov"}
            type="video/mp4"
          />
        </video>
        <div className="lg:hidden md:hidden block">
          <div
            onClick={() => {
              setAppArrow6((prev) => !prev);
            }}
          >
            <div
              className={`font-bold mb-1 md:w-2/5 lg:w-2/5 ${
                showAppArrow6 && "text-stateFairRed"
              }`}
            >
              Error Prevention
            </div>
            <div className="md:w-4/5 lg:-4/5">
              The image size of the sections can cause the user to choose the
              wrong section. In the new design the sections are expanded when
              the user presses on them which can help them choose the section
              they want.
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex lg:flex gap-10">
        <video
          muted
          autoPlay
          loop
          className=" md:w-[250px] lg:w-[250px] mb-10"
          alt="Aprender Screens"
          onClick={() => {}}
        >
          <source src={"images/trimVid.mov"} type="video/mp4" />
        </video>

        <div className="">
          <div
            onClick={() => {
              setAppArrow7(true);
              setAppArrow11(false);
              setAppArrow10(false);
              setAppArrow8(false);
            }}
            className="mb-6"
          >
            <div className="font-bold mb-1">Recognition rather than Recall</div>
            <div className="lg:w-4/5 mb-6">
              The prices for seats are clearly displayed and color coded to
              match the seats on the seat map. The prices are no longer hidden
              behind a button.
            </div>
            <div
              onClick={() => {
                setAppArrow11(true);
                setAppArrow7(false);
                setAppArrow10(false);
                setAppArrow8(false);
              }}
              className="mb-6"
            >
              <div className={`font-bold mb-1`}>Error Prevention</div>
              <div className="lg:w-4/5 mb-6">
                The image size of the seats can cause the user to choose the
                wrong seat. In the new design the rows are expanded when the
                user presses on them which helps users to select the seat they
                want without making a mistake.
              </div>
              <div
                onClick={() => {
                  setAppArrow10(true);
                  setAppArrow11(false);
                  setAppArrow7(false);
                  setAppArrow8(false);
                }}
                className="mb-6"
              >
                <div
                  className={`font-bold mb-1 ${
                    showAppArrow10 && "text-stateFairRed"
                  }`}
                >
                  Visibility of System Status
                </div>
                <div className="lg:w-4/5 mb-6">
                  The new design allows the user to easily see when a seat is
                  selected with a red checkmark.
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
                    className={`font-bold mb-1 ${
                      showAppArrow8 && "text-stateFairRed"
                    }`}
                  >
                    Visibility of System Status
                  </div>
                  <div className="lg:w-4/5">
                    When seats have been selected the Add to Cart button is
                    activated by turning a deep red color.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateFairFinalMockups;
