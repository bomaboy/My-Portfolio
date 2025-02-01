import "../styles/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image5 from "/images/About-image.png";
import { CgWebsite } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { SiApplearcade } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function About() {
  return (
    <>
      <main
        id="Main"
        className="w-screen h-[500vh] md:h-[320vh] z-10 font-serif bg-[whitesmoke]"
      >
        <section className=" md:h-[65vh] w-screen">
          <div className="z-20 absolute md:mt-[40vh]  mt-[30vh] md:ml-[40vw] sm:ml-[35vw] ml-[27vw] text-[white]  border-none outline-none flex items-center justify-center flex-col">
            <h1 className="font-bold text-[35px]">About Us</h1>
            <div className="md:w-[10vw] w-[25vw] h-[5vh] flex items-center justify-between font-medium md:mr-0 mr-10">
              <a
                href="/"
                className="md:w-[6vw] w-[20vw] h-[5vh] flex items-center justify-between font-medium "
              >
                <IoHomeOutline />
                Home <IoIosArrowForward />
              </a>
              <span className="text-[blue]">About</span>
            </div>
          </div>{" "}
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
            <figure className="w-full">
              {/* <img src={Image2} alt="Image2" className="images h-[120vh]" /> */}
              <div className="image6 h-[65vh]   w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image7 h-[65vh]   w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image8 h-[65vh]   w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image9 h-[65vh]   w-[100vw]"></div>
            </figure>
          </Carousel>
        </section>
        <section className="w-[100vw] md:h-[100vh] h-[150vh] flex items-center justify-center ">
          <div className="md:w-[85vw] w-[75vw] md:h-[95vh] h-[145vh] flex items-center justify-between md:flex-row flex-col ">
            <div className="md:w-[40vw] w-[95vw]  h-[70vh] flex items-start justify-between flex-col text-[#2a1313]">
              <p className="font-extrabold md:text-[2.1vw] text-[5vw]">
                {" "}
                <span className="span">We</span> Live For your quality Animation{" "}
              </p>
              <p>
                ✅ Film & TV – Creating animated movies, CGI effects, and
                virtual sets.
              </p>
              <p>
                ✅ Gaming Industry – Designing game characters, environments,
                and cinematics.
              </p>
              <p>
                ✅ Advertising & Marketing – Producing animated commercials and
                product visualizations.
              </p>
              <p>
                ✅ VR & AR – Developing immersive 3D experiences for training,
                simulation, and entertainment.
              </p>
              <p>
                ✅ Architectural Visualization – Animating buildings and
                landscapes for real estate and design.
              </p>
              <a href="https://drive.google.com/file/d/1zbd-Jw6rcPzUOlb2ZUWGGcCLx6l__2fI/view?usp=drive_link">
                <button className="w-[150px] h-[50px] border-[blue] border-[2px] rounded-[30px] hover:bg-[blue] hover:text-[white] duration-500 font-medium ">
                  View CV
                </button>
              </a>
            </div>
            <a href="/">
              <div className="image5 md:w-[38vw] w-[95vw] h-[70vh] flex items-center justify-center font-extrabold md:text-white text-[blue] text-[30px]">
                <div className="md:w-[38vw] w-[95vw] h-[70vh] md:hover:bg-[blue] absolute opacity-70 duration-500 md:mt-0 mt-[-3.5px]"></div>
                <p className="hidden absolute text-center">
                  Mr.Emmanuel Animations
                </p>
                <img
                  src={image5}
                  alt="image5"
                  className="md:w-[40vw] w-[95vw] h-[70vh]"
                />
              </div>
            </a>
          </div>
        </section>
        <section className="w-[100vw] md:h-[100vh] h-[230vh] flex items-center justify-center ">
          <div className="w-[80vw] md:h-[90vh] h-[225vh] flex items-center justify-around flex-col">
            <p className="text-[35px] font-medium">Why Choose Us</p>
            <div className="w-[80vw] md:h-[60vh] h-[190vh] flex items-center justify-between font-medium md:flex-row flex-col ">
              <div className="icon-div1 md:w-[25vw] w-[80vw] h-[50vh] duration-500 rounded-2xl  flex items-end justify-center text-center shadow-md pb-5 bg-white ">
                <div className=" icon1 w-[80px] h-[80px] rounded-[50%] bg-[blue] text-white flex items-center justify-center  absolute mb-[40vh] text-[40px] ">
                  <CgWebsite />
                </div>
                <div className="md:w-[23vw] w-[75vw] h-[30vh] flex items-center justify-between flex-col">
                  <p className="font-bold text-[18px]">
                    {" "}
                    Unique Artistic Vision & Style
                  </p>
                  <h1>
                    Unlike generic animation services, I bring a distinct
                    artistic touch to every project. Whether it’s character
                    animation, VFX, or motion design, your creativity ensures
                    visually striking and emotionally engaging animations that
                    stand out from the rest.
                  </h1>
                </div>
              </div>
              <div className=" icon-div2 md:w-[25vw] w-[80vw] h-[50vh] duration-500 rounded-2xl flex items-end justify-center text-center shadow-md pb-5 bg-white ">
                <div className="icon2 w-[80px] h-[80px] rounded-[50%] bg-[blue] text-white flex items-center justify-center  absolute mb-[40vh] text-[40px] ">
                  <FcIdea />
                </div>
                <div className="md:w-[23vw] w-[75vw] h-[30vh] flex items-center justify-between flex-col">
                  <p className="font-bold text-[18px]">
                    High-Quality, Detail-Oriented Work
                  </p>
                  <h1>
                    I focus on precision and storytelling, ensuring smooth
                    animations, lifelike motion, and polished visuals. Every
                    project is handled with top-tier industry techniques, making
                    my work not just good, but exceptional.
                  </h1>
                </div>
              </div>
              <div className="icon-div3 md:w-[25vw] w-[80vw] h-[50vh] duration-500 rounded-2xl  flex items-end justify-center text-center shadow-md pb-5 bg-white ">
                <div className="icon3 w-[80px] h-[80px] rounded-[50%] bg-[blue] text-white flex items-center justify-center  absolute mb-[40vh] text-[40px] ">
                  <SiApplearcade />
                </div>
                <div className="md:w-[23vw] w-[75vw] h-[30vh] flex items-center justify-between flex-col">
                  <p className="font-bold text-[18px]">
                    Client-Centric & Reliable Service
                  </p>
                  <h1>
                    I prioritize client satisfaction, clear communication, and
                    on-time delivery. Unlike competitors who might rush
                    projects, I take the time to understand the client’s vision
                    and bring it to life with professionalism and dedication.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[100vw] h-[50vh] flex items-center justify-center ">
          <div className="w-[95vw] h-[45vh] flex items-center justify-between flex-col ">
            <p className="font-bold text-[30px]">skills</p>
            <div className="w-[95vw] h-[40vh] flex items-center justify-between">
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex"> 3D Modeling</p>
                <div className="Image10 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex">Texturing & UV Mapping</p>
                <div className="Image11 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex">Rigging & Skinning</p>
                <div className="Image12 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex">Animation</p>
                <div className="Image13 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
            </div>
            <div className="w-[95vw] h-[40vh] flex items-center justify-between">
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex"> Lighting & Rendering </p>
                <div className="Image14 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex"> Real-Time Rendering</p>
                <div className="Image15 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex">Storytelling & Composition </p>
                <div className="Image16 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p className="hidden sm:flex">Problem-Solving & Adaptability</p>
                <div className="Image17 w-[20vw] sm:w-[10vw] h-[15vh]"></div>{" "}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
