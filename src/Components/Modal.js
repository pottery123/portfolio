import React from "react";

function Modal({ showModal, setShowModal, img, video, text }) {
  return (
    <>
      {showModal ? (
        <div className="bg-white-30 fixed inset-0 z-50  h-screen  font-Bhaijaan2 backdrop-blur-md">
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="text-black text-5xl absolute ml-24 mt-12 text-Bhaijaan2  hover:text-aprenderPink"
          >
            X
          </button>
          <div className="flex justify-around">
            <div className="text-Bhaijaan2 mt-52 text-2xl">{text}</div>
              <video className="mt-10" width='260'  muted autoPlay loop>
                <source src={video} type="video/mp4" />
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
