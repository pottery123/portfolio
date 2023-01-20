import { React, useState } from "react";
import _, { keys } from "underscore";

function ModalStateFair({ showModal, setShowModal, img = [], object }) {
  const [index, setIndex] = useState(0);

  function arrayIndex() {
    if (index !== object.text.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      {showModal ? (
        <div className="bg-white-30 fixed inset-0 z-60 h-screen font-Bhaijaan2 backdrop-blur-md">
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="text-black text-2xl absolute mr-24 mt-12 text-Bhaijaan2  hover:text-aprenderPink right-0"
          >
            Close
          </button>
          <div className="m-auto">
            <div className="flex gap-24 mt-14 justify-center">
              <div>
                <img
                  className="w-40"
                  src={object.images[index]}
                  alt={object.alt}
                  style={object.imageStyle[index]}
                ></img>
                <div>
                  {object.images.length === 1 && (
                    <div className=" flex justify-center mt-5 gap-5">
                      <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                    </div>
                  )}

                  {object.images.length === 2 && (
                    <div>
                      {index === 0 && (
                        <div className=" flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className=" flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {object.images.length === 3 && (
                    <div>
                      {index === 0 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {object.images.length === 4 && (
                    <div>
                       {index === 0 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {object.images.length === 4 && (
                    <div>
                       {index === 1 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {object.images.length === 4 && (
                    <div>
                       {index === 2 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-slate-200"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {object.images.length === 4 && (
                    <div>
                       {index === 3 && (
                        <div className="flex justify-center mt-5 gap-5">
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                          <div className="rounded-full w-3 h-3  bg-stateFairBlue"></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-3">
                {index === 0 &&
                  object.arrowStyle1.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}

                {index === 1 &&
                  object.arrowStyle2.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}
                {index === 2 &&
                  object.arrowStyle3.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}
                {index === 3 &&
                  object.arrowStyle4.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}
                {index === 4 &&
                  object.arrowStyle5.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}
                {index === 5 &&
                  object.arrowStyle6.map((style) => (
                    <img
                      style={style}
                      alt="arrow"
                      src={object.arrows[index]}
                    ></img>
                  ))}
              </div>
              <div className="w-96 text-base">{object.text[index]}</div>
            </div>
          </div>
          <div
              className="justify-center flex text-base relative "
              onClick={() => arrayIndex()}
            >
              {object.text.length > 1 && (
                <div className="text-center font-Quicksand text-sm text-white bg-stateFairYellow hover:bg-stateFairYellowDark px-2 py-2  rounded-full m-auto w-24 -mt-10">
                  Next
                </div>
              )}
            </div>
        </div>
      ) : (
        <img
          className="hover:scale-105 hover:transition delay-75 duration-72 ease-in-out"
          src={img}
          alt={img}
          onClick={() => setShowModal((prev) => !prev)}
        ></img>
      )}
    </>
  );
}

export default ModalStateFair;
