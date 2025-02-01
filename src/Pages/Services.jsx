import "../styles/Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import img1 from "/images/bg1.webp";
import img2 from "/images/bg4.webp";
import img3 from "/images/bg5.jpeg";

function Services() {
  return (
    <>
      <main
        id="Main"
        className="w-[100vw] md:h-[170vh] h-[300vh] font-serif bg-[whitesmoke]"
      >
        <section className=" md:h-[65vh] overflow-x-hidden">
          <div className="z-20 absolute md:mt-[40vh]  mt-[30vh] md:ml-[40vw] sm:ml-[35vw] ml-[27vw] text-[white]  border-none outline-none flex items-center justify-center flex-col">
            <h1 className="font-bold text-[35px]">Our Services</h1>
            <div className="md:w-[10vw] w-[25vw] h-[5vh] flex items-center justify-between font-medium md:mr-0 mr-10">
              <a
                href="/"
                className="md:w-[6vw] w-[20vw] h-[5vh] flex items-center justify-between font-medium "
              >
                <IoHomeOutline />
                Home <IoIosArrowForward />
              </a>
              <span className="text-[blue]">Services</span>
            </div>
          </div>{" "}
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
            <figure className="w-full">
              {/* <img src={Image2} alt="Image2" className="images h-[120vh]" /> */}
              <div className="image6 h-[65vh]   w-[100vw] sm:bg-cover bg-contain"></div>
            </figure>
            <figure className="w-full">
              <div className="image7 h-[65vh]   w-[100vw] sm:bg-cover bg-contain"></div>
            </figure>
            <figure className="w-full">
              <div className="image8 h-[65vh]   w-[100vw] sm:bg-cover bg-contain"></div>
            </figure>
            <figure className="w-full">
              <div className="image9 h-[65vh]   w-[100vw] sm:bg-cover bg-contain"></div>
            </figure>
          </Carousel>
        </section>{" "}
        <section className="w-[100vw] md:h-[100vh] h-[110vh] flex items-center justify-center bg-[whitesmoke] ">
          <div className="w-[95vw] h-[95vh] flex items-center justify-between flex-col">
            <div className="w-[95vw] h-[15vh] border-b-[blue] border-b-[1px] border-dashed flex items-center justify-between">
              <p className="font-extrabold text-[blue] text-[30px]">
                My Services
              </p>
              <FaBook className="font-extrabold text-[blue] text-[30px]" />
            </div>
            <div className="w-[95vw] md:h-[75vh] h-[100vh] flex items-center justify-between md:flex-row flex-col">
              <div className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10">
                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className=" text-center service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Mr.Emmanuel <br /> Animations{" "}
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                  <img
                    src={img1}
                    alt="img1"
                    className=" md:w-[30vw] w-[95vw] h-[50vh]"
                  />
                </div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    3D Modeling
                  </div>
                  <div className="font-medium text-[blue]">
                    Ability to create characters,
                    <br /> environments, props, and assets.
                  </div>
                </div>
              </div>
              <div className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10">
                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="text-center service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Mr.Emmanuel <br /> Animations
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                  <img
                    src={img2}
                    alt="img2"
                    className="h-[50vh] md:w-[30vw] w-[95vw]"
                  />
                </div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-8vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Rigging & Skinning{" "}
                  </div>
                  <div className="font-medium text-[blue]">
                    Setting up skeletal rigs for <br /> characters, objects, and
                    creatures.
                  </div>
                </div>
              </div>
              <div className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col">
                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className=" text-center service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Mr.Emmanuel <br /> Animations{" "}
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                  <img
                    src={img3}
                    alt="img3"
                    className="h-[50vh] md:w-[30vw] w-[95vw]"
                  />
                </div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-8vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Storytelling & Composition{" "}
                  </div>
                  <div className="font-medium text-[blue]">
                    Creating animations that <br /> connect with the audience.{" "}
                    <br /> and many more{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
