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
    <div className=" font-Bhaijaan2 max-w-lg ">
      Sarah lives in the Rainier Vallely, one of the most diverse zip codes in the United States. 
      There is a new corner shop that has opened up a few blocks away from where she lives. Sarah wants to try out her Spanish in a way to better connect with her new neighbors. 
      Before she departs Sarah opens up the app Aprender.
    </div>
  );

  const description2 = (
    <div className=" font-Bhaijaan2 max-w-lg">
      She chooses the language she wants to learn. Then she chooses a location.
    </div>
  );

  const description3 = (
    <div className=" font-Bhaijaan2 max-w-lg">
      {" "}
      A deck of words or phrases related to that location appear on the screen.
      She can read the words in Spanish and see a translation in English. Which
      helps her to remember them. She can also listen to the words in Spanish...{" "}
    </div>
  );

  const description4 = (
    <div className=" font-Bhaijaan2 max-w-lg">
      {" "}
      and save them in her saved cards tab to review them later.
    </div>
  );


  return (
    <>
      <div>
        <div className="grid grid-cols-4">
          <Modal
            showModal={showModal1}
            setShowModal={setShowModal1}
            greetings={"image 1"}
            img={"/images/aprender-screen-1.svg"}
            video={"/images/aprender-video-1.mov"}
            text={description1}
          ></Modal>

          <Modal
            showModal={showModal2}
            setShowModal={setShowModal2}
            greetings={"image 2"}
            img={"/images/aprender-screen-2.svg"}
            video={"/images/aprender-video-2.mov"}
            text={description2}
          ></Modal>
          <Modal
            showModal={showModal3}
            setShowModal={setShowModal3}
            greetings={"image 3"}
            img={"/images/aprender-screen-3.svg"}
            video={"/images/aprender-video-3.mov"}
            text={description3}
          ></Modal>
          <Modal
            showModal={showModal4}
            setShowModal={setShowModal4}
            greetings={"image 4"}
            img={"/images/aprender-screen-4.svg"}
            video={"/images/aprender-video-4.mov"}
            text={description4}
          ></Modal>
        </div>
      </div>
    </>
  );
}




export default AprenderFinalMockups;
