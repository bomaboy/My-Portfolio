import "../styles/Projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import img1 from "/images/Project-image.png";
import img2 from "/images/Project-clock.png";
import img3 from "/images/Project-Quize.png";
import img4 from "/images/Project-calculator.png";
import img5 from "/images/Project-responsive-facebook.png";
import img6 from "/images/Project-Book-Lab.png";

function Projects() {
  return (
    <>
      <main
        id="Main"
        className="w-[100vw] md:h-[240vh] h-[520vh] bg-[whitesmoke]  font-serif"
      >
        <section className=" md:h-[65vh] overflow-x-hidden">
          <div className="z-20 absolute md:mt-[40vh]  mt-[30vh] md:ml-[40vw] sm:ml-[35vw] ml-[27vw] text-[white]  border-none outline-none flex items-center justify-center flex-col">
            <h1 className="font-bold text-[35px]">Our Projects</h1>
            <div className="md:w-[10vw] w-[25vw] h-[5vh] flex items-center justify-between font-medium md:mr-0 mr-10">
              <a
                href="/"
                className="md:w-[6vw] w-[20vw] h-[5vh] flex items-center justify-between font-medium "
              >
                <IoHomeOutline />
                Home <IoIosArrowForward />
              </a>
              <span className="text-[blue]">Projects</span>
            </div>
          </div>{" "}
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
            <figure className="w-full">
              {/* <img src={Image2} alt="Image2" className="images h-[120vh]" /> */}
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
        <section className="w-[100vw] md:h-[110vh] flex items-center justify-center bg-[whitesmoke] md:mt-0 mt-10 ">
          <div className="w-[95vw] h-[95vh] flex items-center justify-between flex-col">
            <div className="w-[95vw] h-[15vh] border-b-[blue] border-b-[1px] border-dashed flex items-center justify-between">
              <p className="font-extrabold text-[blue] text-[30px]">
                My Projects.
              </p>
              <FaBook className="font-extrabold text-[blue] text-[30px]" />
            </div>

            <div className="w-[95vw] h-[150vh] flex items-center justify-between flex-col">
              <div className="w-[95vw] h-[75vh] flex items-center justify-between md:flex-row flex-col md:mb-0 mb-[130vh] md:mt-0 mt-10">
                <a
                  href="https://bomaboy.github.io/project_image/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
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
                      Image manipulator
                    </div>
                    <div className="font-medium text-[blue]">
                      You can space and blur the image
                    </div>
                  </div>
                </a>
                <a
                  href="https://bomaboy.github.io/project_clock/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
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
                      Project Clock
                    </div>
                    <div className="font-medium text-[blue]">
                      I build a wallclock using HTML,CSS & JS
                    </div>
                  </div>
                </a>
                <a
                  href="https://bomaboy.github.io/project_Quiz/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
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
                      Quize App
                    </div>
                    <div className="font-medium text-[blue]">
                      i build a quize app
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-[95vw] h-[75vh] flex items-center justify-between md:flex-row flex-col md:mt-0 mt-10">
                <a
                  href="https://bomaboy.github.io/project_calculator/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
                  </p>
                  <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                    <img
                      src={img4}
                      alt="img4"
                      className=" md:w-[30vw] w-[95vw] h-[50vh]"
                    />
                  </div>
                  <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                    <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                      Calculator
                    </div>
                    <div className="font-medium text-[blue]">
                      i build a calculator
                    </div>
                  </div>
                </a>
                <a
                  href=" https://bomaboy.github.io/Responsive-Facebook-Clone/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
                  </p>
                  <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                    <img
                      src={img5}
                      alt="img5"
                      className="h-[50vh] md:w-[30vw] w-[95vw]"
                    />
                  </div>
                  <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                    <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-8vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                      Responsive-FB-clone
                    </div>
                    <div className="font-medium text-[blue]">
                      I cloned facebook
                    </div>
                  </div>
                </a>
                <a
                  href="https://bomaboy.github.io/Books_library/"
                  className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
                >
                  <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                  <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                    Click to preview
                  </p>
                  <div className="md:w-[30vw] w-[95vw] h-[50vh]">
                    <img
                      src={img6}
                      alt="img6"
                      className="h-[50vh] md:w-[30vw] w-[95vw]"
                    />
                  </div>
                  <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                    <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-8vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                      Book-Library-App
                    </div>
                    <div className="font-medium text-[blue]">
                      Search for any book at all
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
