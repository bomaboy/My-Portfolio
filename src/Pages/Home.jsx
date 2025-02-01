import "../styles/Home.css";
import { ReactTyped } from "react-typed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <main className="w-[100vw] h-[100vh]">
        <div className="drop md:w-[100vw] w-[100vw] h-10 absolute text-[white] font-extrabold md:text-[82px] sm:text-[50px] text-[40px] z-10  md:mt-[-10vh] mt-[10vh] pr-5 text-center font-serif ">
          <p>Hello</p>
          <p>I'm Emmanuel</p>
        </div>
        <ReactTyped
          strings={[
            "I'm A 3D Artist",
            "I'm A 3D Instructor",
            "I'm A Web Developer",
            "I'm A Web Instructor",
          ]}
          typeSpeed={50}
          backSpeed={70}
          loop
          className="z-20 absolute sm:mt-[80vh] mt-[70vh] md:ml-[35vw] sm:ml-[30vw] text-[white] font-extrabold sm:text-[30px] ml-[15vw] text-[25px] border-none outline-none font-serif"
        ></ReactTyped>
        <section className=" h-[100vh] ">
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
            <figure className="w-full">
              {/* <img src={Image2} alt="Image2" className="images h-[120vh]" /> */}
              <div className="image6 h-[100vh]   w-[100vw] sm:bg-cover bg-contain "></div>
            </figure>
            <figure className="w-full">
              <div className="image7 h-[100vh]   w-[100vw] sm:bg-cover bg-contain "></div>
            </figure>
            <figure className="w-full">
              <div className="image8 h-[100vh]   w-[100vw] sm:bg-cover bg-contain "></div>
            </figure>
            <figure className="w-full">
              <div className="image9 h-[100vh]   w-[100vw] sm:bg-cover bg-contain "></div>
            </figure>
          </Carousel>
        </section>
        {/* <section className="w-[100vw] md:h-[140vh] h-[150vh] flex items-center justify-center">
          <div className="md:w-[85vw] w-[75vw] md:h-[100vh] h-[145vh] flex items-center justify-between md:flex-row flex-col ">
            <div className="md:w-[60vw] w-[95vw]  h-[70vh] flex items-start justify-between flex-col text-[#2a1313]">
              <p className="font-medium md:text-[20px] text-[5vw] font-mono">
                {" "}
                <span className="span"> Hello,</span> I'm Nwankwo Onyedikachi
                Emmanuel CEO of BOMATECH{" "}
              </p>
              <p className="text-[90px] md:font-meduim  leading-[100px] h-[60vh] font-serif ">
                I Create Websites and Mobile App for your businesses.
              </p>
            </div>
            <div className="image5 md:w-[25vw] w-[95vw] h-[70vh] flex items-center justify-center font-extrabold md:text-white text-[blue] text-[30px]">
              <div className="md:w-[25vw] w-[95vw] h-[70vh] md:hover:bg-[blue] absolute opacity-70 duration-500 md:mt-0 mt-[-3.5px]"></div>
              <p className="hidden absolute "> BomaTech</p>
              <img
                src={image5}
                alt="image5"
                className="md:w-[25vw] w-[95vw] h-[70vh]"
              />
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

export default Home;
