
import React from "react";


function Modal({ showModal, setShowModal, img, video, text }) {
  return (
    <>
      {showModal ? (
        <div className="bg-white-30 fixed inset-0 z-50  h-screen overflow-hidden font-Bhaijaan2 backdrop-blur-md">
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="text-black text-5xl absolute ml-24 mt-12 text-Bhaijaan2 "
          >
            X
          </button>
          <div className="flex justify-between m-14">
            <div className="p-32 mt-14  text-five text-Bhaijaan2 ">{text}</div>

            <div className="relative">
             
              {/* <ReactPlayer
                url={video}
                light={true}
                volume={6}
                loop={true}
                playing={true}
                height="580px"
                width="380px"
                muted={true}
                controls={false}
                onReady={() => console.log("onReady callbCK")}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <img
          className="w-60 mx-8 hover:scale-105 hover:transition delay-150 duration-300 ease-in-out"
          src={img}
          alt={img}
          onClick={() => setShowModal((prev) => !prev)}
        ></img>
      )}
    </>
  );
}

export default Modal;
