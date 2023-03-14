import React, { useState } from "react";

function Modal({ showModal, setShowModal, img, video, text }) {
  const [count, setCount] = useState(0);

  function NextButton() {
    return (
      <img
        alt="back"
        src={"/images/arrow-forward.svg"}
        onClick={() => {
          if (count === 3) {
            setCount(0);
          } else {
            setCount((prevCount) => prevCount + 1);
          }
        }}
      ></img>
    );
  }

  function BackButton() {
    return (
      <img
        alt="back"
        src={"/images/arrow-back.svg"}
        onClick={() => {
          if (count === 0) {
            setCount(3);
          } else {
            setCount((prevCount) => prevCount - 1);
          }
        }}
      ></img>
    );
  }

  function OpenCloseModal() {
    setShowModal((prev) => !prev);
    setCount(0);
  }

  return (
    <>
      {showModal ? (
        <div className=" backdrop-blur-3xl fixed inset-0 z-50  h-screen font-Bhaijaan2 lg:backdrop-blur-md md:backdrop-blur-md overflow-scroll">
          <button
            onClick={OpenCloseModal}
            className="text-black md:text-5xl lg:text-5xl text-3xl absolute ml-10 md:ml-10 lg:ml-24 mt-8 text-Bhaijaan2  hover:text-aprenderPink font-normal"
          >
            X
          </button>
          <div className="text-xl lg:hidden md:hidden mt-10 p-10">{text[count]}</div>
          <video
              key={video[count]}
              className=" md:hidden lg:hidden m-auto"
              width="350"
              muted
              autoPlay
              loop
            >
              <source src={video[count]} type="video/mp4" />
            </video>

          <div className="md:flex md:justify-around">
            <div className="text-Bhaijaan2 lg:mt-52 md:mt-52 mt-5 text-2xl">
              <div className="grid grid-rows-1">
                <div className="h-64 md:flex lg:flex hidden md:mt-32 lg:mt-0 lg:mt-0 lg:p-0 md:p-10 ">{text[count]}</div>
                <div className="flex gap-10 m-auto lg:mt-0 md:mt-20">
                  <div
                    className={`rounded-full w-2 h-2 bg-aprenderPink  ${
                      count !== 0 && "bg-slate-400"
                    }`}
                  ></div>
                  <div
                    className={`rounded-full w-2 h-2 bg-aprenderPink  ${
                      count !== 1 && "bg-slate-400"
                    }`}
                  ></div>
                  <div
                    className={`rounded-full w-2 h-2 bg-aprenderPink  ${
                      count !== 2 && "bg-slate-400"
                    }`}
                  ></div>
                  <div
                    className={`rounded-full w-2 h-2 bg-aprenderPink  ${
                      count !== 3 && "bg-slate-400"
                    }`}
                  ></div>
                </div>
                <div className="flex gap-5 m-auto mt-10 pb-10 lg:mt-5 ">
                  <BackButton />
                  <NextButton />
                  
                </div>
              </div>
            </div>
            <video
              key={video[count]}
              className="mt-10  md:flex lg:flex hidden md:mt-52 lg:mt-10 md:mr-5"
              width="260"
              muted
              autoPlay
              loop
            >
              <source src={video[count]} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <img
          className="lg:ml-12 md:ml-12 hover:scale-105 hover:transition delay-75 duration-72 ease-in-out md:p-0 lg:p-0 p-12"
          src={img}
          alt={img}
          onClick={() => setShowModal((prev) => !prev)}
        ></img>
      )}
    </>
  );
}

export default Modal;
