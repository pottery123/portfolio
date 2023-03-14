import React, { useState, useEffect } from "react";
import Modal from "../Components/Modal";

function AprenderFinalMockups() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  useEffect(() => {
    if (showModal1 || showModal2 || showModal3 || showModal4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal1, showModal2, showModal3, showModal4]);

  const description1 = (
    <div className=" font-Bhaijaan2 max-w-lg font-normal ">
      Sarah lives in the Rainier Vallely, one of the most diverse zip codes in
      the United States. There is a new corner shop that has opened up a few
      blocks away from where she lives. Sarah wants to try out her Spanish in a
      way to better connect with her new neighbors. Before she departs Sarah
      opens up the app Aprender.
    </div>
  );

  const description2 = (
    <div className=" font-Bhaijaan2 max-w-lg font-normal">
      She chooses the language she wants to learn. Then she chooses a location.
    </div>
  );

  const description3 = (
    <div className=" font-Bhaijaan2 max-w-lg font-normal">
      {" "}
      A deck of words or phrases related to that location appear on the screen.
      She can read the words in Spanish and see a translation in English. Which
      helps her to remember them. She can also listen to the words in Spanish...{" "}
    </div>
  );

  const description4 = (
    <div className=" font-Bhaijaan2 max-w-lg font-normal">
      {" "}
      and save them in her saved cards tab to review them later.
    </div>
  );

  const aprenderModalObject = {
    modal: [showModal1, showModal2, showModal3, showModal4],
    setModal: [setShowModal1, setShowModal2, setShowModal3, setShowModal4],
    greetings: ["image 1", "image 2", "image 3", "image 4"],
    images: [
      "/images/aprender-screen-1.svg",
      "/images/aprender-screen-2.svg",
      "/images/aprender-screen-3.svg",
      "/images/aprender-screen-4.svg",
    ],
    videos1: [
      "/images/aprender-video-1.mov",
      "/images/aprender-video-2.mov",
      "/images/aprender-video-3.mov",
      "/images/aprender-video-4.mov",
    ],

    videos2: [
      "/images/aprender-video-2.mov",
      "/images/aprender-video-3.mov",
      "/images/aprender-video-4.mov",
      "/images/aprender-video-1.mov",
    ],

    videos3: [
      "/images/aprender-video-3.mov",
      "/images/aprender-video-4.mov",
      "/images/aprender-video-2.mov",
      "/images/aprender-video-1.mov",
    ],

    videos4: [
      "/images/aprender-video-4.mov",
      "/images/aprender-video-3.mov",
      "/images/aprender-video-2.mov",
      "/images/aprender-video-1.mov",
    ],

    
    texts1: [description1, description2, description3, description4],
    texts2: [description2, description3, description4, description1],
    texts3: [description3, description4, description1, description2,],
    texts4: [ description4,description1, description2, description3,],
  };

  return (
    <>
      <div>
        <div className="md:grid grid-cols-4">
          <Modal
            showModal={showModal1}
            setShowModal={setShowModal1}
            greetings={aprenderModalObject.greetings}
            img={"/images/aprender-screen-1.svg"}
            video={aprenderModalObject.videos1}
            text={aprenderModalObject.texts1}
          ></Modal>

          <Modal
            showModal={showModal2}
            setShowModal={setShowModal2}
            greetings={aprenderModalObject.greetings}
            img={"/images/aprender-screen-2.svg"}
            video={aprenderModalObject.videos2}
            text={aprenderModalObject.texts2}
          ></Modal>

          <Modal
            showModal={showModal3}
            setShowModal={setShowModal3}
            greetings={aprenderModalObject.greetings}
            img={"/images/aprender-screen-3.svg"}
            video={aprenderModalObject.videos3}
            text={aprenderModalObject.texts3}
          ></Modal>
          <Modal
            showModal={showModal4}
            setShowModal={setShowModal4}
            greetings={aprenderModalObject.greetings}
            img={"/images/aprender-screen-4.svg"}
            video={aprenderModalObject.videos4}
            text={aprenderModalObject.texts4}
          ></Modal>
        </div>
      </div>
    </>
  );
}

export default AprenderFinalMockups;
