import { React, useState, lazy, useTransition } from "react";

const AprenderFinalMockups = lazy(() => import("./AprenderFinalMockups"));


function Aprender() {
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);

  const [problemSection, setProblemSection] = useState(true);
  const [researchSection, setResearchSection] = useState(false);
  const [designSection, setDesignSection] = useState(false);
  const [wireframingSection, setWireframingSection] = useState(false);
  const [testingSection, setTestingSection] = useState(false);
  const [mockupsSection, setMockupsSection] = useState(false);

  const [takeawaySection, setTakeawaySection] = useState(false);
  const [problemSection1, setProblemSection1] = useState(true);

  const [underlineProblem, setUnderlineProblem] = useState(true);
  const [underlineResearch, setUnderlineResearch] = useState(null);
  const [underlineDesign, setUnderlineDesign] = useState(null);
  const [underlineWireframing, setUnderlineWireframing] = useState(null);
  const [underlineTesting, setUnderlineTesting] = useState(null);
  const [underlineMockups, setUnderlineMockups] = useState(null);
  const [underlineTakeaway, setUnderlineTakeaway] = useState(null);

  const [openCaseStudy, setOpenCaseStudy] = useState(true);

  function OpenStudy() {
    return (
      <div
        className=" border-2 border-white rounded-full text-center px-1 py-2 w-40 bg-white text-aprenderPink hover:bg-aprenderPink hover:text-white"
        onClick={() => {
          setOpenCaseStudy((prev) => !prev);
        }}
      >
        {!openCaseStudy ? "Open Case Study" : "Close Case Study"}
      </div>
    );
  }

  function ScrollButton() {
    const element = document.getElementById("navbar-section");
    return (
      <div
        className=" m-20 text-2xl font-extrabold  text-aprenderPink text-center"
        onClick={() => {
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Top
      </div>
    );
  }

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  // }, []);

  return (
    <div className="relative w-auto overflow-hidden font-Quicksand">
      <div>
        <div className=" md:flex justify-around bg-aprenderPink w-auto overflow-hidden relative block z-20 ">
          <img
            className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
            width={500}
            height={500}
            src={"/images/aprender-screens.svg"}
            alt="Aprender Screens"
          ></img>
          <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
            <div className="lg:pt-18 md:text-eight text-seven ">Aprender</div>
            <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
              <span className="font-bold">Role:</span> UX/UI Designer,
              Interaction Designer, UX Researcher
            </p>
            <p className="text-four font-normal tracking-wide sm:mr-10 ">
              <span className="font-bold">Key skills:</span> Figma, Design
              Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
            </p>
            <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
              <span className="font-bold"> Type of project:</span> Personal,
              Concept
            </p>

            <div className="mt-24">
              <OpenStudy />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="navbar-section"
          className="bg-white w-full drop-shadow-sm flex justify-between top-0 relative z-20 "
        >
          <button
            onClick={() => {
              setProblemSection(true);
              setResearchSection(false);
              setDesignSection(false);
              setWireframingSection(false);
              setTestingSection(false);
              setMockupsSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(true);
              setUnderlineResearch(false);
              setUnderlineDesign(false);
              setUnderlineWireframing(false);
              setUnderlineTesting(false);
              setUnderlineMockups(false);
              setUnderlineTakeaway(false);
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>The </div> <div> Problem</div>
            {underlineProblem ? (
              <div className=" h-1 bg-aprenderPink" />
            ) : (
              <div className="h-1 bg-white" />
            )}
          </button>
          <button
            onClick={() => {
              setProblemSection(false);
              setResearchSection(true);
              setDesignSection(false);
              setWireframingSection(false);
              setTestingSection(false);
              setMockupsSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(true);
              setUnderlineDesign(false);
              setUnderlineWireframing(false);
              setUnderlineTesting(false);
              setUnderlineMockups(false);
              setUnderlineTakeaway(false);
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>User</div> <div>Research</div>
            {underlineResearch ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>

          <button
            onClick={() => {
              setProblemSection(false);
              setResearchSection(false);
              setDesignSection(true);
              setWireframingSection(false);
              setTestingSection(false);
              setMockupsSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(false);
              setUnderlineDesign(true);
              setUnderlineWireframing(false);
              setUnderlineTesting(false);
              setUnderlineMockups(false);
              setUnderlineTakeaway(false);
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>Design </div> <div>Solutions</div>
            {underlineDesign ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>

          <button
            onClick={() => {
              setWireframingSection(true);
              setProblemSection(false);
              setResearchSection(false);
              setDesignSection(false);
              setTestingSection(false);
              setMockupsSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(false);
              setUnderlineDesign(false);
              setUnderlineWireframing(true);
              setUnderlineTesting(false);
              setUnderlineMockups(false);
              setUnderlineTakeaway(false);
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>Wireframing</div> <div>Prototyping</div>
            {underlineWireframing ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>

          <button
            onClick={() => {
              setTestingSection(true);
              setWireframingSection(false);
              setProblemSection(false);
              setResearchSection(false);
              setDesignSection(false);
              setMockupsSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(false);
              setUnderlineDesign(false);
              setUnderlineWireframing(false);
              setUnderlineTesting(true);
              setUnderlineMockups(false);
              setUnderlineTakeaway(false);
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>Usability </div> <div>Testing</div>
            {underlineTesting ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
          <button
            onClick={() => {
              setMockupsSection(true);
              setTestingSection(false);
              setWireframingSection(false);
              setProblemSection(false);
              setResearchSection(false);
              setDesignSection(false);
              setTakeawaySection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(false);
              setUnderlineDesign(false);
              setUnderlineWireframing(false);
              setUnderlineTesting(false);
              setUnderlineMockups(true);
              setUnderlineTakeaway(false);

              startTransition(() => {
                setLoad(true);
              });
            }}
            className="font-Quicksand text-lg p-8 hover:text-aprenderPink"
          >
            <div>High-Fidelity </div> <div>Mockups</div>
            {underlineMockups ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
          <button
            onClick={() => {
              setTakeawaySection(true);
              setMockupsSection(false);
              setTestingSection(false);
              setWireframingSection(false);
              setProblemSection(false);
              setResearchSection(false);
              setDesignSection(false);

              setUnderlineProblem(false);
              setUnderlineResearch(false);
              setUnderlineDesign(false);
              setUnderlineWireframing(false);
              setUnderlineTesting(false);
              setUnderlineMockups(false);
              setUnderlineTakeaway(true);
            }}
            className="font-Quicksand text-lg p-5 hover:text-aprenderPink "
          >
            <div>Takeaways/</div> <div>Next Steps </div>
            {underlineTakeaway ? (
              <div className="h-1  bg-aprenderPink" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
        </div>

        <div className={` h-0  ${openCaseStudy && "  h-full"} `}>
          {problemSection ? (
            <div className="my-10 md:my-32  ">
              {problemSection1 ? (
                <div className="font-Quicksand lg:mx-44 md:mx-12 mx-8">
                  <p className="font-semibold md:text-five mb-4 text-xl">
                    The Corner Shop
                  </p>
                  <div className="grid grid-cols-1 gap-20">
                    <div>
                      <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed">
                        I grew up in a very diverse zip code in Seattle. I was
                        surrounded by languages and people from all over the
                        world. One day, I decided to purchase something at a
                        corner shop near where I lived. Feeling confident, I
                        decided to practice my Spanish with some of the
                        employees at that shop. But when I got there, I couldn’t
                        recall any Spanish words or phrases related to the
                        context I was in. Which led me to wonder...
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="grid grid-cols-1 lg:mx-44">
                <p className=" font-Quicksand text-center text-2xl md:text-5xl lg:text-4xl text-aprenderPink bg-white p-10 md:p-20 mt-1 md:mt-20">
                  Did other people have trouble recalling useful words and
                  phrases for everyday situations when learning new languages?
                  If so, how could it be solved?
                </p>
                <ScrollButton />
              </div>
            </div>
          ) : null}
          {researchSection ? (
            <div className="my-10 md:my-32">
              <div className="font-Quicksand lg:mx-44 md:mx-12 mx-8 ">
                <p className="font-semibold md:text-five text-xl mb-4">
                  User Research
                </p>
                <div className="flex justify-evenly">
                  <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed">
                    I sent out a research survey via Google Forms to 28
                    participants who had used language learning apps in the
                    past. The survey centered around one main question:
                    <p className="text-center text-xl md:text-3xl text-aprenderBlue mt-10 md:mt-32 mb-16 md:mb-24">
                      “Did the app help you communicate in different contexts or
                      situations...in the language you were studying?”
                    </p>
                  </p>
                </div>
                <div className="grid gird-cols-1 justify-center mb-20">
                  <div className="bg-slate-200 p-5 md:p-20 md:mb-24 mb-10 flex">
                    <div className="justify-between">
                      <img
                        className=""
                        width={300}
                        height={300}
                        src={"/images/survey-seven.svg"}
                        alt="corner shop"
                      ></img>
                      <img
                        className=""
                        width={300}
                        height={300}
                        src={"/images/survey-one.svg"}
                        alt="corner shop"
                      ></img>

                      <img
                        className=""
                        width={300}
                        height={300}
                        src={"/images/survey-three.svg"}
                        alt="corner shop"
                      ></img>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className=""
                          width={300}
                          height={300}
                          src={"/images/survey-four.svg"}
                          alt="corner shop"
                        ></img>
                        <img
                          className=""
                          width={300}
                          height={300}
                          src={"/images/survey-five.svg"}
                          alt="corner shop"
                        ></img>
                      </div>
                      <div>
                        <img
                          className=""
                          width={300}
                          height={300}
                          src={"/images/survey-six.svg"}
                          alt="corner shop"
                        ></img>
                        <img
                          className=""
                          width={300}
                          height={300}
                          src={"/images/survey-two.svg"}
                          alt="corner shop"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gird-cols-1 mb-16 md:mx-44 lg:mx-44 mx-8 md:mx-12 ">
                <div className="font-Quicksand ">
                  <p className="font-semibold md:text-five text-xl mb-4">
                    How Might we...
                  </p>
                  <div className="flex justify-evenly">
                    <p className="text-sm md:text-xl leading-relaxed">
                      From that survey I was able to tease out some common
                      issues that users, like myself, were having when using
                      regular language learning apps. From there I set about
                      creating a solution that solved the problem.
                    </p>
                  </div>
                  <p className="font-Quicksand text-center text-xl md:text-4xl leading-relaxed  text-aprenderGold md:my-24 my-10">
                    "How might we improve the experience of learning a new
                    language so that users can retain and apply useful
                    vocabulary for specific locations or scenarios?"
                  </p>
                </div>
              </div>
              <div className="font-Bhaijaan lg:mx-44 mx-8 md:mx-16">
                <div className="grid grid-cols-1 justify-center">
                  <div className="font-Quicksand ">
                    <p className="font-semibold md:text-five text-xl mb-4">
                      Target User
                    </p>
                    <div className="flex justify-evenly">
                      <p className=" text-sm md:text-xl leading-relaxed mb-20">
                        After I finished collecting the data and the research
                        analysis, I created a fictional character that
                        represents typical participant's needs and frustrations.
                      </p>
                    </div>

                    <div className="md:flex bg-slate-200 p-5 md:p-10 justify-center  font-Quicksand ">
                      <div className="text-sm md:text-lg md:w-3/6">
                        <div className="leading-relaxed">
                          <p className="text-aprenderPink font-bold pb-3 ">
                            Target User: Ann
                          </p>
                          <p className="text-aprenderPink font-bold pb-2">
                            <span>Who:</span> &nbsp;
                            <span className="text-black font-normal">
                              Casual Language Learners
                            </span>
                          </p>

                          <p className="text-aprenderPink font-bold pb-2">
                            <span>Struggle To:</span> &nbsp;
                            <span className="text-black font-normal">
                              Retain the words and phrases they've learned while
                              using a language learning app.
                            </span>
                          </p>

                          <p className="text-aprenderPink font-bold pb-2">
                            <span>Why?:</span>&nbsp;&nbsp;
                            <span className="text-black font-normal">
                              Because the current information learned within the
                              app is not relevant to scenarios or locations they
                              encounter in their everyday life.
                            </span>
                          </p>

                          <p className="text-aprenderPink font-bold pb-2">
                            <span>Instead, enable them too?:</span>&nbsp;&nbsp;
                            <span className="text-black font-normal">
                              Focus their language education on words and
                              phrases that are relevant to everyday scenarios or
                              locations they are likely to encounter.
                            </span>
                          </p>

                          <p className="text-aprenderPink font-bold">
                            <span>Possible Features:</span>&nbsp;&nbsp;
                            <span className="text-black font-normal">
                              List words/phrases related to the place they are
                              currently in, such as kitchen, bedroom, store,
                              street, car etc.
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          className="md:mt-14 md:ml-20 mt-10 "
                          width={250}
                          src={"/images/woman.svg"}
                          alt="woman avatar"
                        ></img>
                      </div>
                    </div>
                    <ScrollButton />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {designSection ? (
            <div className=" grid grid-cols-1 md:my-32 my-10 ">
              <div className="font-Quicksand lg:mx-44 md:mx-12 mx-8">
                <p className="font-semibold md:text-five mb-4 text-xl">
                  Design Solutions
                </p>
                <div className="flex justify-evenly">
                  <p className=" sm:text-sm md:text-xl leading-relaxed mb-20">
                    I wrote down the most common issues users were having with
                    the language learning apps they had used in the past. These
                    issues were highlighted and would be used to guide my design
                    decisions for my solution.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      “too much emphasis on vocabulary I did not need...I’ve
                      better results from finding or making targeted word lists
                      and then working on pronunciation and vocabulary.”
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Provide targeted word lists and avoid vocabulary that is
                      not needed. To address this problem the user should have
                      the liberty to choose what they need to learn.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      “I haven’t tried out my skills in a functional context
                      yet.”
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Content should be able to allow users to apply new
                      vocabulary immediately by providing words/phrases that are
                      relevant to the context/situation they are in.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      “It focused on everything at once, and not just one
                      subject.”{" "}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Content should focus on one subject of their choosing.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      “Most phrases weren’t super common and more
                      conversational/situation practices was separate from main
                      curriculum.”{" "}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Content should provide user with common vocabulary. Not
                      vocabulary they will rarely use.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      I didn’t complete the course, but what I did finish, the
                      content was varied.”{" "}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Users should not have to complete the ‘course’ or ‘lesson’
                      to learn useful and practical vocabulary.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-slate-200  text-left  font-Quicksand p-10 mx-8 lg:mx-44 ">
                <div className="space-y-8 md:space-y-0 lg:space-y-0 md:flex lg:flex lg:space-x-10 md:space-x-10  lg:justify-around md:justify-around">
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/quote.svg"}
                      alt="user feedback"
                    ></img>
                    <div className=" md:w-80 lg:w-80 ">
                      “Hard to remember what I learned and apply it.”{" "}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-3"
                      width={24}
                      height={24}
                      src={"/images/user-feedback-check.svg"}
                      alt="user feedback"
                    ></img>
                    <div className="md:w-80 lg:w-80 ">
                      Content must be able to provide words that users can apply
                      to their everyday life immediately.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 justify-center font-Quicksand lg:mx-44 md:mx-12 md:my-20 mx-8 ">
                <div>
                  <p className="font-semibold md:text-five mb-4 mt-10">
                    User Story Mapping
                  </p>
                  <div className="flex justify-evenly">
                    <p className=" text-sm md:text-xl leading-relaxed">
                      The MVP for Aprender would solve for the problems users
                      were having when using language learning apps. I broke
                      down the interactions into simple user stories. Each story
                      addressed a problem users expressed having with other
                      language learning apps.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start bg-slate-200 mt-20 md:p-20 p-5">
                  <img
                    width={800}
                    height={700}
                    src={"/images/user-story-mapping.svg"}
                    alt="corner shop"
                  ></img>
                </div>
                <ScrollButton />
              </div>
            </div>
          ) : null}
          {wireframingSection ? (
            <div className="lg:mx-44 md:mx-12 md:my-32 mx-8 my-10 ">
              <div className="font-Quicksand ">
                <p className="font-semibold md:text-five mb-4 text-xl">
                  Quick Sketches
                </p>
                <div className="flex justify-evenly">
                  <p className=" sm:text-sm md:text-xl lg:text-xl leading-relaxed">
                    After the content was solidified it was time to create a UI
                    that would address each user story that correlated with
                    solving a specific problem. I started with sketches to make
                    sure I had all the elements in place before building out the
                    high fidelity mockups.
                  </p>
                </div>
              </div>
              <img
                className="md:mt-24 mt-10 bg-slate-200"
                width={1600}
                src={"/images/wireframes.svg"}
                alt="corner shop"
              ></img>

              <ScrollButton />
            </div>
          ) : null}

          {testingSection ? (
            <div className="font-Quicksand lg:mx-44 md:mx-12 md:my-32 mx-8 my-10">
              <p className="font-semibold text-five mb-4 text-xl md:text-five  ">
                Usability Testing
              </p>
              <div className="flex justify-evenly">
                <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed">
                  Usability testing the sketches with actual users early on in
                  the process helped me to eliminate things that were confusing
                  to the user, and add things that helped the user get the task
                  done. I asked a couple of people to test initial designs of
                  the app using the systems usability scale, InVision as a
                  prototyping tool. They tested the sketches in places where
                  they were most likely to use the app with their personal
                  phones. With their feedback I was able to make quick design
                  changes to the sketches before I designed the high-fidelity
                  mockups. Because of this the final mockups differed little
                  from the original sketches, which saved me a lot of time.
                </p>
              </div>
              <p className="md:p-10 p-5 bg-slate-200 mt-24">
                <div className="font-bold">SUS Score</div>
                The SUS score for these wireframes was 6.5 out of 7. Because I
                tested early and made changes to the sketches, all the
                interactions in the final mockups were very similar to the
                sketches.
                <p className="mt-10">
                  <div className="font-bold">User Issues Addressed </div>

                  <p className="italic">
                    Issues I addressed in wireframes discovered through robust
                    usability testing.
                  </p>
                  <ul className="p-8  list-disc">
                    <li>
                      I changed the word scenario to location after users did
                      not understand.
                    </li>
                    <li className="mt-5">
                      I placed English word underneath learning word, to reduce
                      the amount of steps user would need to see translation.
                    </li>
                  </ul>
                </p>
              </p>
              <ScrollButton />
            </div>
          ) : null}

          {mockupsSection ? (
            <div className="font-Quicksand md:my-32 my-10   ">
              <p className="font-semibold  lg:mx-44 md:mx-12  mb-4 mx-8 text-xl md:text-five ">
                The Corner Shop{" "}
                <span className="text-aprenderPink">(revisited)</span>
              </p>
              <p className=" sm:text-sm md:text-xl lg:text-xl lg:mx-44 md:mx-12 leading-relaxed  mx-8">
                Remember the corner shop I spoke about before, and how I was
                unable to recall any words or phrases related to that context?
                Well, I hoped to avoid those issues with the new mobile app I
                named...
              </p>
              <p className="font-Quicksand text-seven md:text-nine font-medium text-aprenderPink text-center my-5 md:my-32  mt-20">
                Aprender
              </p>
              <div className="m-32">
               
                {load && (
                  <div>
                    <div className="flex">
                      <div className=" font-Bhaijaan2 text-2xl m-auto p-24">
                        Sarah lives in the Rainier Vallely, one of the most
                        diverse zip codes in the United States. There is a new
                        corner shop that has opened up a few blocks away from
                        where she lives. Sarah wants to try out her Spanish in a
                        way to better connect with her new neighbors. Before she
                        departs Sarah opens up the app Aprender.
                      </div>

                      <video width="250" muted autoPlay loop>
                        <source
                          src="/images/aprender-video-1.mov"
                          type="video/mp4"
                        />
                      </video>
                    </div>

                    <div className="flex">
                      <video width="250" muted autoPlay loop>
                        <source
                          src="/images/aprender-video-2.mov"
                          type="video/mp4"
                        />
                      </video>
                      <div className=" font-Bhaijaan2 m-auto font-normal text-2xl p-24">
                        {" "}
                        She chooses the language she wants to learn. Then she
                        chooses a location.
                      </div>
                    </div>

                    <div className="flex">
                      <div className=" font-Bhaijaan2 m-auto font-normal text-2xl p-24">
                        A deck of words or phrases related to that location
                        appear on the screen. She can read the words in Spanish
                        and see a translation in English. Which helps her to
                        remember them. She can also listen to the words in
                        Spanish...{" "}
                      </div>

                      <video width="250" muted autoPlay loop>
                        <source
                          src="/images/aprender-video-3.mov"
                          type="video/mp4"
                        />
                      </video>
                    </div>

                    <div className="flex">
                      <video width="250" muted autoPlay loop>
                        <source
                          src="/images/aprender-video-3.mov"
                          type="video/mp4"
                        />
                      </video>
                      <div className=" font-Bhaijaan2 m-auto font-normal text-2xl p-24">
                        and save them in her saved cards tab to review them
                        later.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ScrollButton />
            </div>
          ) : null}

          {takeawaySection ? (
            <div className="font-Quicksand lg:mx-44 md:my-32 mx-8 my-10">
              <p className="font-semibold md:text-five mb-6 text-xl ">
                Next Steps & Takeaways
              </p>
              <div className="grid grid-rows-3 gap-6">
                <div className=" bg-slate-200  p-10">
                  <div className="font-bold mb-5">
                    The importance of early usability testing
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>
                        Through this process I learned the importance of
                        gathering information from the user to help solve their
                        needs and early usability testing.{" "}
                      </li>
                      <li>
                        Because I tested the sketches early, I was able to
                        quickly discover user issues and immediately address
                        them before implementing them in the final mockups. This
                        saved me a lot of time.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="bg-slate-200  p-10 ">
                  <div className="font-bold mb-5">
                    Add features based on user research
                  </div>
                  <ul className="list-disc">
                    <li>Add common and useful phrases for each locations.</li>
                    <li>
                      Add scenarios/scripts that people are most likely to need
                      in each location when interacting with people.
                    </li>
                  </ul>
                </p>
                <p className=" bg-slate-200  p-10 ">
                  <div className="font-bold  mb-5">Steps to add in V2</div>
                  <ul className="list-disc">
                    <li>Include task specific usability testing </li>
                    <li>
                      Add success metrics for each task that would provide more
                      qualitative data{" "}
                    </li>
                    <li>UI enhancements from v1.</li>
                    <li>Usability test the final mockups.</li>
                    <li>
                      Conduct qualitative tests to measure if Aprender helped
                      users remember useful information in comparison to other
                      language learning apps.{" "}
                    </li>
                  </ul>
                </p>
              </div>
              <ScrollButton />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Aprender;
