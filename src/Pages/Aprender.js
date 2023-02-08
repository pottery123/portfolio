import { React, useState, useEffect } from "react";
import AprenderFinalMockups from "./AprenderFinalMockups";
import { Link } from "react-router-dom";

function Aprender() {
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

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative">
      <Link
        to="/"
        className="rounded bg-aprenderPinkLight text-white px-3 py-1 hover:bg-white hover:text-aprenderPink absolute  left-12 top-10  z-50 font-Nunito"
      >
        Home
      </Link>
      <div className=" absolute flex right-12 top-10 bg-aprenderPink z-50 font-Rubik">
        {" "}
        <Link to="/contact-about" className=" flex gap-10">
          {" "}
          <div className="rounded bg-aprenderPinkLight text-white px-3 py-1 hover:bg-white hover:text-aprenderPink">
            Contact
          </div>{" "}
          <div className="rounded bg-aprenderPinkLight text-white px-4 py-1 hover:bg-white hover:text-aprenderPink">
            About
          </div>{" "}
        </Link>
      </div>

      <div className="flex justify-around bg-aprenderPink pb-16 w-full">
        <img
          className="pt-32"
          width={500}
          height={500}
          src={"/images/aprender-screens.svg"}
          alt="Aprender Screens"
        ></img>
        <div className="text-eight font-Bhaijaan2 font-semibold pt-52 text-white pl-10">
          <div className="pt-18">Aprender</div>
          <p className="text-four font-normal tracking-wide">
            <span className="font-bold">Role:</span> UX/UI Designer, Interaction
            Designer, UX Researcher
          </p>
          <p className="text-four font-normal tracking-wide">
            <span className="font-bold">Key skills:</span> Figma, Design
            Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
          </p>
        </div>
      </div>

      <div className="bg-white w-full drop-shadow-sm flex justify-between sticky top-0 z-30">
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

            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
        >
          <div>The </div> <div> Problem</div>
          {underlineProblem ? (
            <div className=" h-1 bg-aprenderPink" />
          ) : (
            <div className=" bg-white" />
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

            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
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
            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
        >
          <div>Design </div> <div>Decisions</div>
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
            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
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
            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
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
            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-8 hover:text-aprenderPink"
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
            window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
          }}
          className="font-Bhaijaan2 text-lg p-5 hover:text-aprenderPink"
        >
          <div>Takeaways/</div> <div>Next Steps </div>
          {underlineTakeaway ? (
            <div className="h-1  bg-aprenderPink" />
          ) : (
            <div className="h-1  bg-white" />
          )}
        </button>
      </div>

      {problemSection ? (
        <div className="my-32">
          {problemSection1 ? (
            <div className="font-Bhaijaan2  mx-44">
              <p className="font-semibold text-five mb-4">The Corner Shop</p>
              <div className="grid grid-cols-1 gap-20">
                <div>
                  <p className="text-2xl leading-relaxed">
                    I grew up in a very diverse zip code in Seattle. I was
                    surrounded by languages and people from all over the world.
                    One day, I decided to purchase something at a corner shop
                    near where I lived. Feeling confident, I decided to practice
                    my Spanish with some of the employees at that shop. But when
                    I got there, I couldn’t recall any Spanish words or phrases
                    related to the context I was in. Which led me to wonder...
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          <div className="grid grid-cols-1 mx-44">
            <p className="font-Bhaijaan2 text-center text-5xl text-aprenderPink bg-white p-20 mt-20">
              Did other people have this issue? If so, how could it be solved?
            </p>
          </div>
        </div>
      ) : null}
      {researchSection ? (
        <div className="my-32">
          <div className="font-Bhaijaan2 mx-44">
            <p className="font-semibold text-five mb-4">User Research</p>
            <div className="flex justify-evenly">
              <p className="text-2xl leading-relaxed">
                I sent out a research survey via Google Forms to 28 participants
                who had used language learning apps in the past. The survey
                centered around one main question:
                <p className="text-center text-3xl text-aprenderBlue mt-32 mb-24">
                  “Did the app help you communicate in different contexts or
                  situations...in the language you were studying?”
                </p>
              </p>
            </div>
            <div className="grid gird-cols-1 justify-center mb-20">
              <div className="bg-slate-200 p-20 mb-24 flex">
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

          <div className="grid gird-cols-1 mb-16 mx-44">
            <div className="font-Bhaijaan2">
              <p className="font-semibold text-five mb-4">How Might we...</p>
              <div className="flex justify-evenly">
                <p className="text-2xl leading-relaxed">
                  From that survey I was able to tease out some common issues
                  that users, like myself, were having when using regular
                  language learning apps. From there I set about creating a
                  solution that solved the problem.
                </p>
              </div>
              <p className="font-Bhaijaan2 text-center text-4xl leading-relaxed  text-aprenderGold my-24">
                "How might we improve the experience of learning a new language
                so that users can retain and apply useful vocabulary for
                specific locations or scenarios?"
              </p>
            </div>
          </div>
          <div className="font-Bhaijaan mx-44 ">
            <div className="grid grid-cols-1 justify-center">
              <div className="font-Bhaijaan2  ">
                <p className="font-semibold text-five">Target User</p>
                <div className="flex justify-evenly">
                  <p className="text-2xl leading-relaxed mb-20">
                    After I finished collecting the data and the research
                    analysis, I created a fictional character that represents
                    typical participant's needs and frustrations.
                  </p>
                </div>

                <div className="flex  bg-slate-200 p-10 justify-center  mb-72 font-Bhaijaan2">
                  <div className="text-lg w-3/6">
                    <div className="leading-relaxed">
                      <p className="text-aprenderPink font-bold pb-3 ">
                        Target 1
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
                          Because the current information learned within the app
                          is not relevant to scenarios or locations they
                          encounter in their everyday life.
                        </span>
                      </p>

                      <p className="text-aprenderPink font-bold pb-2">
                        <span>Instead, enable them too?:</span>&nbsp;&nbsp;
                        <span className="text-black font-normal">
                          Focus their language education on words and phrases
                          that are relevant to everyday scenarios or locations
                          they are likely to encounter.
                        </span>
                      </p>

                      <p className="text-aprenderPink font-bold">
                        <span>Possible Features:</span>&nbsp;&nbsp;
                        <span className="text-black font-normal">
                          List words/phrases related to the place they are
                          currently in, such as kitchen, bedroom, store, street,
                          car
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="mt-14 ml-20"
                      width={250}
                      src={"/images/woman.svg"}
                      alt="woman avatar"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {designSection ? (
        <div className=" grid grid-cols-1 my-32 ">
          <div className="font-Bhaijaan2 mx-44">
            <p className="font-semibold text-five mb-4">Design Solutions</p>
            <div className="flex justify-evenly">
              <p className="text-2xl leading-relaxed mb-20">
                I wrote down the most common issues users were having with the
                language learning apps they had used in the past. These issues
                were highlighted and would be used to guide my design decisions
                for my solution.
              </p>
            </div>
          </div>

          <div className=" font-Bhaijaan2 grid grid-rows-6 gap-16 bg-slate-200 p-32 mx-40">
            <div className="grid grid-cols-2 gap-24">
              <div>
                <img
                  className="mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “too much emphasis on vocabulary I did not need...I’ve better
                  results from finding or making targeted word lists and then
                  working on pronunciation and vocabulary.”
                </div>
              </div>

              <div>
                <img
                  className="mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Provide targeted word lists and avoid vocabulary that is not
                  needed. To address this problem the user should have the
                  liberty to choose what they need to learn.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-24">
              <div className="">
                <img
                  className="mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “I haven’t tried out my skills in a functional context yet.”
                </div>
              </div>
              <div className="">
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Content should be able to allow users to apply new vocabulary
                  immediately by providing words/phrases that are relevant to
                  the context/situation they are in.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “It focused on everything at once, and not just one subject.”
                </div>
              </div>

              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Content should focus on one subject of their choosing.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “Most phrases weren’t super common and more
                  conversational/situation practices was separate from main
                  curriculum.”
                </div>
              </div>

              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Content should provide user with common vocabulary. Not
                  vocabulary they will rarely use.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “I didn’t complete the course, but what I did finish, the
                  content was varied.”
                </div>
              </div>

              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Users should not have to complete the ‘course’ or ‘lesson’ to
                  learn useful and practical vocabulary.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/quote.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  “Hard to remember what I learned and apply it.”
                </div>
              </div>
              <div>
                <img
                  className=" mb-3"
                  width={24}
                  height={24}
                  src={"/images/user-feedback-check.svg"}
                  alt="user feedback"
                ></img>
                <div className="w-72">
                  Content must be able to provide words that users can apply to
                  their everyday life immediately.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center font-Bhaijaan2 mx-44 my-20">
            <div>
              <p className="font-semibold text-five mb-4">User Story Mapping</p>
              <div className="flex justify-evenly">
                <p className="text-2xl leading-relaxed">
                  The MVP for Aprender would solve for the problems users were
                  having when using language learning apps. I broke down the
                  interactions into simple user stories. Each story addressed a
                  problem users expressed having with other language learning
                  apps.
                </p>
              </div>
            </div>
            <div className="flex justify-start bg-slate-200 mt-20 p-20">
              <img
                width={800}
                height={700}
                src={"/images/user-story-mapping.svg"}
                alt="corner shop"
              ></img>
            </div>
          </div>
          {/* ≠ */}
        </div>
      ) : null}
      {wireframingSection ? (
        <div className="mx-44 my-32">
          <div className="font-Bhaijaan2">
            <p className="font-semibold text-five mb-4">Quick Sketches</p>
            <div className="flex justify-evenly">
              <p className="text-2xl leading-relaxed">
                After the content was solidified it was time to create a UI that
                would address each user story that correlated with solving a
                specific problem. I started with sketches to make sure I had all
                the elements in place before building out the high fidelity
                mockups.
              </p>
            </div>
          </div>
          <img
            className="mt-24 bg-slate-200"
            width={1600}
            src={"/images/wireframes.svg"}
            alt="corner shop"
          ></img>
        </div>
      ) : null}

      {testingSection ? (
        <div className="font-Bhaijaan2 mx-44 my-32">
          <p className="font-semibold text-five mb-4">Usability Testing</p>
          <div className="flex justify-evenly">
            <p className="text-2xl leading-relaxed">
              Usability Testing Testing the sketches with actual users early on
              in the process helped me to eliminate things that were confusing
              to the user, and add things that helped the user get the task
              done. Because of this the final mockups differed little from the
              original sketches, which saved me a lot of time.
            </p>
          </div>
          <p className="p-10 bg-slate-200 mt-24">
            <div className="font-bold">SUS Score</div>
            The SUS score for these wireframes was 6.5 out of 7. Because I
            tested early and made changes to the sketches, all the interactions
            in the final mockups were very similar to the sketches.
            <p className="mt-10">
              <div className="font-bold">User Issues Addressed </div>

              <p className="italic">
                Issues I addressed in wireframes discovered through robust
                usability testing.
              </p>
              <p className="p-3">
                <div>
                  • I changed the word scenario to location after users did not
                  understand.
                </div>
                <div className="mt-5">
                  • I placed English word underneath learning word, to reduce
                  the amount of steps user would need to see translation.
                </div>
              </p>
            </p>
          </p>
        </div>
      ) : null}

      {mockupsSection ? (
        <div className="font-Bhaijaan2 my-32">
          <p className="font-semibold text-five mx-44 mb-4">
            The Corner Shop (revisited)
          </p>
          <p className="text-2xl mx-44">
            Remember the corner shop I spoke about before, and how I was unable
            to recall any words or phrases related to that context? Well, I
            hoped to avoid those issues with the new mobile app I named...
          </p>
          <p className="font-Bhaijaan2 text-nine font-medium text-aprenderPink text-center my-40">
            Aprender
          </p>

          <AprenderFinalMockups />
        </div>
      ) : null}

      {takeawaySection ? (
        <div className="font-Bhaijaan2 mx-44 my-32">
          <p className="font-semibold text-five mb-16">
            Next Steps & Takeaways
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className=" bg-slate-200  p-10">
              <div className="font-bold mb-5">
                The importance of early usability testing
              </div>
              <div>
                <ul className="list-disc">
                  <li>
                    Through this process I learned the importance of gathering
                    information from the user to help solve their needs and
                    early usability testing.{" "}
                  </li>
                  <li>
                    Because I tested the sketches early, I was able to quickly
                    discover user issues and immediately address them before
                    implementing them in the final mockups. This saved me a lot
                    of time.
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
                  Add scenarios/scripts that people are most likely to need in
                  each location when interacting with people.
                </li>
              </ul>
            </p>
            <p className=" bg-slate-200  p-10 ">
              <div className="font-bold  mb-5">Steps to add in V2</div>
              <ul className="list-disc" >

              <li>Include task specific usability testing </li>
              <li>
                Add success metrics for each task that would provide more
                qualitative data{" "}
              </li>
              <li>UI enhancements from v1.</li>
              <li>Usability test the final mockups.</li>
              <li>
                Conduct qualitative tests to measure if Aprender helped users
                remember useful information in comparison to other language
                learning apps.{" "}
              </li>
              </ul>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Aprender;
