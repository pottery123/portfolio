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
        <div className="bg-white-30 fixed inset-0 z-50  h-screen  font-Bhaijaan2 backdrop-blur-md">
          <button
            onClick={OpenCloseModal}
            className="text-black text-5xl absolute ml-24 mt-12 text-Bhaijaan2  hover:text-aprenderPink"
          >
            X
          </button>
          <div className="flex justify-around">
            <div className="text-Bhaijaan2 mt-52 text-2xl">
              <div className="grid grid-rows-1">
                <div className="h-64">{text[count]}</div>
                <div className="flex gap-10 m-auto">
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
                <div className="flex gap-5 m-auto mt-10 ">
                  <BackButton />
                  <NextButton />
                  
                </div>
              </div>
            </div>
            <video
              key={video[count]}
              className="mt-10"
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
          className="w-60 mx-8 hover:scale-105 hover:transition delay-75 duration-72 ease-in-out"
          src={img}
          alt={img}
          onClick={() => setShowModal((prev) => !prev)}
        ></img>
      )}
    </>
  );
}

export default Modal;
