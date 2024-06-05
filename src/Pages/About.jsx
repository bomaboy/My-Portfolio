import "../styles/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { ReactTyped } from "react-typed";
import image5 from "../images/About-image.png";
import { CgWebsite } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { SiApplearcade } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiReact } from "react-icons/si";
import { HiPaintBrush } from "react-icons/hi2";
import { FaFigma } from "react-icons/fa";

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
              <div className="image1 h-[65vh] w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image2 h-[65vh] w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image3 h-[65vh] w-[100vw]"></div>
            </figure>
            <figure className="w-full">
              <div className="image4 h-[65vh] w-[100vw]"></div>
            </figure>
          </Carousel>
        </section>
        <section className="w-[100vw] md:h-[100vh] h-[150vh] flex items-center justify-center ">
          <div className="md:w-[85vw] w-[75vw] md:h-[95vh] h-[145vh] flex items-center justify-between md:flex-row flex-col ">
            <div className="md:w-[40vw] w-[95vw]  h-[70vh] flex items-start justify-between flex-col text-[#2a1313]">
              <p className="font-extrabold md:text-[2.1vw] text-[5vw]">
                {" "}
                <span className="span">We</span> Live For your quality websites{" "}
              </p>
              <p className="text-[18px] md:font-medium ">
                "I specialize in crafting websites and mobile apps tailored to
                elevate your business. <br /> <br />
                Additionally, I am proficient in diverse forms of artistic
                expression, ranging from digital to traditional mediums <br />{" "}
                <br />
              </p>
              <p className="text-[18px] md:font-medium  ">
                As a web instructor at{" "}
                <abbr title="LearnFactory Nigeria, Aba, Abia State">LF</abbr>, I
                empower my clients with the knowledge and skills to
                independently create and manage their own websites."
              </p>
              <a href="https://docs.google.com/document/d/1ck2Y17pg2Ko-wzeyk3PbptIb7Kgo2_YJsfns0CWq7p4/edit">
                <button className="w-[150px] h-[50px] border-[blue] border-[2px] rounded-[30px] hover:bg-[blue] hover:text-[white] duration-500 font-medium ">
                  View CV
                </button>
              </a>
            </div>
            <a href="/">
              <div className="image5 md:w-[38vw] w-[95vw] h-[70vh] flex items-center justify-center font-extrabold md:text-white text-[blue] text-[30px]">
                <div className="md:w-[38vw] w-[95vw] h-[70vh] md:hover:bg-[blue] absolute opacity-70 duration-500 md:mt-0 mt-[-3.5px]"></div>
                <p className="hidden absolute "> BomaTech</p>
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
                  <p className="font-bold text-[18px]">High Quality Website</p>
                  <h1>
                    i build high quality websites that are free from any kind of
                    bugs, my websites are standard and reliable
                  </h1>
                </div>
              </div>
              <div className=" icon-div2 md:w-[25vw] w-[80vw] h-[50vh] duration-500 rounded-2xl flex items-end justify-center text-center shadow-md pb-5 bg-white ">
                <div className="icon2 w-[80px] h-[80px] rounded-[50%] bg-[blue] text-white flex items-center justify-center  absolute mb-[40vh] text-[40px] ">
                  <FcIdea />
                </div>
                <div className="md:w-[23vw] w-[75vw] h-[30vh] flex items-center justify-between flex-col">
                  <p className="font-bold text-[18px]">Aboundant Eperience</p>
                  <h1>
                    i have been into this business of websites building for the
                    past two years now, i have gained alot of experience and
                    have seen alot of challengies and scalled through
                  </h1>
                </div>
              </div>
              <div className="icon-div3 md:w-[25vw] w-[80vw] h-[50vh] duration-500 rounded-2xl  flex items-end justify-center text-center shadow-md pb-5 bg-white ">
                <div className="icon3 w-[80px] h-[80px] rounded-[50%] bg-[blue] text-white flex items-center justify-center  absolute mb-[40vh] text-[40px] ">
                  <SiApplearcade />
                </div>
                <div className="md:w-[23vw] w-[75vw] h-[30vh] flex items-center justify-between flex-col">
                  <p className="font-bold text-[18px]">Modern Equipments</p>
                  <h1>
                    i use modern frameworks like react.js, vite and tailwindcss
                    just to mention a few, i also use a very strong and reliable
                    laptop as you can see on the image above
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
                <p>HTML</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <ImHtmlFive />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>CSS</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <SiCss3 />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>JavaScript</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <TbBrandJavascript />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>Tailwind</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <SiTailwindcss />
                </div>
              </div>
            </div>
            <div className="w-[95vw] h-[40vh] flex items-center justify-between">
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>GitHub</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <VscGithubInverted />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>React.js</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <SiReact />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>Figma</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <FaFigma />
                </div>
              </div>
              <div className="md:w-[30vw] w-[95vw] flex md:items-center items-center justify-between flex-col">
                <p>Art Work</p>
                <div
                  href="http://"
                  className="font-medium text-[30px] hover:text-[blue] duration-500"
                >
                  <HiPaintBrush />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
