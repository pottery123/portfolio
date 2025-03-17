import { React, useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Somo() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ alignToTop: false, behavior: "smooth" });
  };

  const problem = useRef();
  const productResearch = useRef();
  const designDecisions = useRef();
  const testing = useRef();
  const finalMockups = useRef();
  const nextSteps = useRef();

  const [problemRef, inViewProblem] = useInView();
  const [productResearchRef, inViewProductResearch] = useInView();
  const [designDecisionsRef, inViewDesignDecisions] = useInView();
  const [wireframingRef, inViewWireframing] = useInView();
  const [testingRef, inViewTesting] = useInView();
  const [finalMockupsRef, inViewFinalMockups] = useInView();
  const [nextStepsRef, inViewNextSteps] = useInView();

  return (
    <div>
      <div className=" md:flex justify-around bg-heroSomoBlue w-auto overflow-hidden relative block z-20 ">
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
          width={500}
          height={500}
          src={"/images/aprender-screens.svg"}
          alt="Aprender Screens"
        ></img>
        <div className=" font-poppins font-semibold md:pt-52 text-white md:pl-10 p-8">
          <div className="lg:pt-18 md:text-eight text-seven ">SOMO</div>
          <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
            <span className="font-bold">Role:</span> UX/UI Designer, Interaction
            Designer, UX Researcher
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 ">
            <span className="font-bold">Key skills:</span> Figma, Design
            Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
          </p>
        </div>
      </div>
      <div>
        <div className=" bg-white w-full drop-shadow-sm flex justify-between z-50  overflow-scroll sticky -top-1">
          <button
            onClick={() => scrollTo(problem)}
            className="font-poppins text-lg p-8 hover:text-heroSomoBlue"
          >
            <div>The </div> <div> Problem</div>
            {inViewProblem && !inViewProductResearch ? (
              <div className=" h-1 bg-heroSomoBlue" />
            ) : (
              <div className="h-1 bg-white" />
            )}
          </button>
          <button
            onClick={() => scrollTo(productResearch)}
            className="font-poppins text-lg p-8 hover:text-heroSomoBlue"
          >
            <div>Product</div> <div>Research</div>
            {inViewProductResearch ? (
              <div className="h-1  bg-heroSomoBlue" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>

          <button
            onClick={() => scrollTo(designDecisions)}
            className="font-poppins text-lg p-8 hover:text-heroSomoBlue"
          >
            <div>Design </div> <div>Decisions</div>
            {inViewDesignDecisions ? (
              <div className="h-1  bg-heroSomoBlue" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>

          <button
            onClick={() => scrollTo(finalMockups)}
            className="font-poppins text-lg p-8 hover:text-heroSomoBlue"
          >
            <div>Usability </div> <div>Testing</div>
            {inViewTesting ? (
              <div className="h-1  bg-heroSomoBlue" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
          <button
            onClick={() => scrollTo(finalMockups)}
            className="font-poppins text-lg p-8 hover:text-heroSomoBlue"
          >
            <div>High-Fidelity </div> <div>Mockups</div>
            {inViewFinalMockups ? (
              <div className="h-1  bg-heroSomoBlue" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
          <button
            onClick={() => scrollTo(nextSteps)}
            className="font-poppins text-lg p-5 hover:text-heroSomoBlue "
          >
            <div>Takeaways/</div> <div>Next Steps </div>
            {inViewNextSteps ? (
              <div className="h-1  bg-heroSomoBlue" />
            ) : (
              <div className="h-1  bg-white" />
            )}
          </button>
        </div>

        <div ref={problem} className="my-10 md:my-32 scroll-m-52">
          <div ref={problemRef} className="font-poppins lg:mx-44 md:mx-12 mx-8">
            <p className="font-semibold md:text-five mb-2 text-xl">
              The Problem
            </p>
            <p className="font-bold text-somoGreen">Shut Out!</p>

            <div className="flex mt-10">
              <img
                src={"/images/ShutOut.png"}
                alt="shut out!"
                width={300}
                height={300}
              ></img>

              <div className="m-auto ml-20  ">
                <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed">
                  <span className="text-somoGreen">Kenya</span> a land rich in
                  natural resources such as timber, gold, wildlife and minerals.
                  These natural resources have the potential to lift{" "}
                  <span className="text-somoGreen">millions </span>of Kenyans
                  out of rural and urban poverty.{" "}
                  <div className="text-somoGreen mt-4">
                    However, many small urban and rural businesses owners are
                    shut out of these lucrative markets because of their limited
                    buying power.
                  </div>
                </p>
              </div>

              <div></div>
            </div>
          </div>

          <div ref={productResearchRef} className="m-auto lg:text-xl mx-52">
            <div
              ref={productResearch}
              className=" text-center text-6xl mt-52 scroll-m-52"
            >
              Let's Get Started!
            </div>
            <div className="mt-10  text-center">
              I volunteered to work with SOMO a non-profit based in Kenya to
              design and build a mobile app that would allow small businesses
              owners to combine their resources and purchase raw materials in
              bulk.
            </div>
          </div>
          <div className="m-auto  mt-52 px-40">
            <p className="font-semibold md:text-five mb-2 text-xl">
              Some product research
            </p>
            <p className="font-bold text-somoGreen">
              Not re-inventing the wheel but looking for examples.
            </p>
            <div className="m-auto mt-3 ">
              <div className="">
                <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10">
                  I had never designed an e-commerce app before. So I decided to
                  do a little research on some already established mobile apps
                  that were known for selling items in bulk and raw materials.
                  My two main apps were Etsy, Azure Standard and an Kenyan food
                  delivery app called Jumia .
                </p>
                <img
                  className="m-auto mt-20 mb-20"
                  width={500}
                  src={"/images/aejLogo.svg"}
                  alt="shut out!"
                ></img>
              </div>
              <div className=" bg-[#D1DEF2] p-16">
                <div className=" flex ">
                  <div className="">
                    <div className="text-somoGreen font-bold ">Insight#1</div>
                    <div className="  font-extrabold w-max">Product Images</div>
                  </div>
                  <div className="pl-10 pr-10 ">
                    I observed that the product images were displayed in a two
                    colomun grid display. The width of the images were larger
                    one hundered fifty pixels. The descirption of the product
                    was underneath the image.
                    <div className="mt-3">
                      {" "}
                      <span className="text-somoGreen font-bold">
                        Action:
                      </span>{" "}
                      Display the images in two colomun grid, with the images
                      sizes being larger than one hundred fifty pixels the price
                      and description below image.
                    </div>
                  </div>
                </div>

                <div className="flex mt-32">
                  <div className="block">
                    <div className="text-somoGreen font-bold ">Insight#2</div>
                    <div className=" font-extrabold w-max">
                      Product Selection
                    </div>
                  </div>
                  <div className="pl-10 pr-10">
                    I observed that products were grouped into clear,
                    easy-to-read categories, and a search bar was included to
                    make it easier to find items.{" "}
                    <div className="mt-3">
                      {" "}
                      <span className="text-somoGreen font-bold">
                        Action:
                      </span>{" "}
                      Group producs in clear, easy-to-read categories and
                      include a search bar to make it easier to find items.
                    </div>
                  </div>
                </div>

                <div className="flex  mt-32">
                  <div className="relative">
                    <div className="text-somoGreen font-bold ">Insight#3</div>
                    <div className=" font-extrabold w-max ">
                      Product Checkout
                    </div>
                  </div>
                  <div className="pl-10 pr-10">
                    Each app had a checkout process that included shipping,
                    payment, review and place order, as well as a way to track
                    the order.
                    <div className="mt-3">
                      {" "}
                      <span className="text-somoGreen font-bold">
                        Action:
                      </span>{" "}
                      I made sure to include this process in the application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto px-40">
            <div>
              <p className="font-semibold md:text-five mb-2 text-xl mt-32">
                Cultural factors to consider
              </p>
              <p className="font-bold text-somoGreen">
                Designing for the cultural realities in rapidly developing
                nation.
              </p>

              <div className="bg-[#D1DEF2] p-10 mt-10">
                <p className="font-semibold  mb-2 text-xl">Mobile money?</p>
                <p className="font-bold text-somoGreen">
                  What is Mpesa and how does it work?
                </p>

                <div className="flex mt-3 ">
                  <div className="mr-32">
                    After some back and forth we decided to remove the cash on
                    delivery, mainly because we wanted to keep the app as simple
                    as possible. Since mobile money is widely used in Kenya we
                    decided to keep that option. However, I had never seen Mpesa
                    integrated in an application before. So that lead me to do
                    some research on how Mpeas is used in apps.
                  </div>
                  <img
                    width={300}
                    src={"/images/mpesaLogo.svg"}
                    alt="shut out!"
                  ></img>
                </div>
              </div>
            </div>

            <div className="bg-[#D1DEF2] p-10 mt-10 ">
              <p className="font-semibold  mb-2 text-xl mt-10">No addresses?</p>
              <p className="font-bold text-somoGreen">
                How are packages sent then?
              </p>
              <div className="flex mt-3  ">
                <img
                  className="mr-20"
                  width={200}
                  src={"/images/kenyaPinLogo.svg"}
                  alt="shut out!"
                ></img>
                <div className="mr-32">
                  Another cultural factor I ran into was the fact the Kenya
                  doesn’t have addresses like we do in the States. I was very
                  confused upon learning that. That led me to do more research
                  and I learned that google maps is used to let people know
                  where your location is. I had never used google pin before so
                  I had to some research on how to drop a pin in google maps.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={designDecisions}
            className="m-auto  mt-52 px-40 scroll-m-52"
          >
            <p className="font-semibold md:text-five mb-2 text-xl ">
              User Stories
            </p>
            <p ref={designDecisionsRef} className="font-bold text-somoGreen">
              Turning requirements into actions.
            </p>
            <div className="m-auto mt-3 ">
              <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10">
                Most of the user research had already been done when I joined
                started the project. The CEO already had a list of the things
                she wanted the app too do. I broke these items into a list of
                user stories.
              </p>
              <img src={"/images/user-stories-somo.png"} alt="shut out!"></img>
            </div>
          </div>

          <div></div>

          <div ref={wireframingRef} className="m-auto  mt-52 px-40">
            <p className="font-semibold md:text-five mb-2 text-xl">
              Wireframes and Prototyping
            </p>
            <p className="font-bold text-somoGreen">
              User Stories => Wireframes
            </p>
            <div className="m-auto mt-3 ">
              <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10">
                I then went about assigning each user story to an element in the
                wireframe.
              </p>
              <div>
                <img
                  width={2000}
                  src={"/images/somo-wireframes.png"}
                  alt="shut out!"
                ></img>
                <img
                  className="md:mt-24 mt-10 bg-slate-200 p-5"
                  src={"/images/wireframes-somo.png"}
                  alt="user story map"
                ></img>
              </div>
            </div>
          </div>
          <div ref={testingRef} className="m-auto  mt-52 px-40">
            <p
              ref={testing}
              className="font-semibold md:text-five mb-2 text-xl scroll-m-52"
            >
              Testing Time
            </p>
            <p className="font-bold text-somoGreen">Usability Testing</p>
            <div className="m-auto mt-3 ">
              <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10">
                I then decided to do some usability testing with some potential
                customers in Kenya. It was a little difficult coordinating time
                but we were able to make happen.
              </p>
              <div className="bg-[#D1DEF2] p-10">
                <div className="flex">
                  <div className="">
                    <div className="font-bold mb-5">Test Plan</div>
                    <div>
                      {" "}
                      <span className="font-bold">Scope:</span>{" "}
                      <span>Purchase a product on the SOMO Market place</span>
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">Purpose:</span>
                      <span>
                        To see if users can easily use the app to purchase an
                        item.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Participants:</span>
                      <span>
                        Small business owners who will be using the application.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 font-bold">Results:</div>
                <div className="flex gap-10 mt-5">
                  <div>
                    <div className="font-bold text-somoGreen mb-5">Rosaly</div>
                    <img
                      width={400}
                      height={400}
                      src={"/images/test-task-1.svg"}
                      alt="shut out!"
                    ></img>
                  </div>
                  <div>
                    <div className="font-bold text-somoGreen mb-5">Fatmia</div>
                    <img
                      width={400}
                      height={350}
                      src={"/images/test-task-2.svg"}
                      alt="shut out!"
                    ></img>
                  </div>
                </div>
                <p className="mt-10">
                  <div className="font-bold">User Feedback </div>

                  <p className="italic">
                    Issues I addressed in wireframes discovered through robust
                    usability testing.
                  </p>
                  <ul className="p-8  list-disc">
                    <li>
                      Save orders in cart if connection is lost or app is closed
                      Track delivery button (Muhseen)
                    </li>
                    <li className="mt-5">
                      Use different language for where you want your items
                      delivered ie. where do you want your items to be
                      delivered, or some such thing. (Fatma)
                    </li>
                    <li className="mt-5">
                      Shorten process for regular users(save address, and
                      payment information) (Rosaly)
                    </li>
                  </ul>
                </p>
              </div>

              <p className="font-semibold md:text-five text-xl mt-32">
                Feedback guided design changes.
              </p>
              <p className="font-bold text-somoGreen">
                Integrating feedback back into the design.
              </p>

              <div className="flex mt-10">
                <div className="">
                  <div className="text-somoGreen font-bold"> Change #1</div>
                  <div className="font-bold  mb-3">
                    Shorter checkout process for regular users
                  </div>
                  <div className="mr-10">
                    <span className="font-bold text-somoGreen">Action:</span> I
                    added a save location and save card information, and then
                    added a use saved info button.
                  </div>
                </div>

                <img
                  width={400}
                  height={400}
                  src={"/images/Testing 1.png"}
                  alt="shut out!"
                ></img>
              </div>
              <div className="flex mt-20 justify-between">
                <div className="">
                  <div className="text-somoGreen font-bold"> Change #2</div>
                  <div className="font-bold mb-3">
                    Improve wording for clarity.
                  </div>
                  <div>
                    <span className="font-bold text-somoGreen">Action:</span> I
                    added a phrase for clarity.
                  </div>
                </div>
                <img
                  width={400}
                  height={400}
                  src={"/images/Testing 2.png"}
                  alt="shut out!"
                ></img>
              </div>
            </div>
            <div ref={finalMockupsRef} className="m-auto  mt-52 ">
              <p
                ref={finalMockups}
                className="font-semibold md:text-five mb-2 text-xl"
              >
                High Fidelity Designs
              </p>
              <p className="font-bold text-somoGreen">UI Design</p>
              <div className="m-auto mt-3 ">
                <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10">
                  <div>
                    I then went and worked on the UI part of the app. I used
                    colors that were apart of the brand guidelines but some had
                    to be changed a little to make it accessible. Also I added
                    some illustrations to bring a little light to the designs.
                  </div>
                </p>
                <img src={"/images/componentlibrary.png"} alt="shut out!"></img>
              </div>
            </div>
            <div className="m-auto  mt-52 ">
              <p className="font-semibold md:text-five mb-2 text-xl">
                How it Works
              </p>
              <p className="font-bold text-somoGreen">Interaction Design</p>
              <div className="m-auto mt-3 ">
                <p className="sm:text-sm md:text-xl lg:text-xl leading-relaxed mb-10"></p>
                <div className="flex">
                  <div>
                    <div className="font-bold">Step One</div>
                    <div>
                      Sally can look for products in the app that she wants to
                      buy
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="font-bold">Step One</div>
                    <div>
                      Sally can look for products in the app that she wants to
                      buy
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="font-bold">Step One</div>
                    <div>
                      Sally can look for products in the app that she wants to
                      buy
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="font-bold">Step One</div>
                    <div>
                      Sally can look for products in the app that she wants to
                      buy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={nextSteps}>
              <div
                ref={nextStepsRef}
                className="font-semibold md:text-five mb-2 text-xl mt-52"
              >
                Next Steps and Takeaways
              </div>
              <p className="font-bold text-somoGreen">Always imporving</p>
              <div className="mt-10">
                <div className=" scroll-m-52 font-semibold   lg:text-2xl md:text-2xl text-2xl mb-4">
                  Takeaways
                </div>
                <ul className=" md:w-[43.75rem] lg:w-[43.75rem] md:mt-5 lg:mt-5 md:ml-9 lg:ml-9 leading-7 lg:mb-4 md:mb-4 list-disc">
                  <li>
                    I would have conducted more thorough user research and
                    usability testing by{" "}
                    <span className="font-bold">visiting Kenya</span> and being
                    in the <span className="font-bold"> environment</span> where
                    people would be{" "}
                    <span className="font-bold">using the application.</span>
                  </li>
                  <li>
                    <span className="font-bold">
                      Testing designs early and often
                    </span>{" "}
                    to catch and fix issues and intergrating those issues back
                    into the design saved me a lot of time and effort.{" "}
                  </li>
                  <li>
                    Next time I would like to{" "}
                    <span className="font-bold">
                      {" "}
                      spend more time discussing{" "}
                    </span>
                    in detail the{" "}
                    <span className="font-bold"> technical challenges</span> I
                    would be designing for with the developers.
                  </li>
                </ul>
                <div className=" font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-2xl mt-4">
                  Next Steps
                </div>
                <ul className="list-disc ml-9">
                  <li>
                    <span className="font-bold">
                      Discuss with developers and other stakeholders{" "}
                    </span>
                    the technical requirements for implementing the design.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Somo;
