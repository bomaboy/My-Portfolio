import "../styles/Projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import videoFile1 from "/images/Realistic_Water_Animation.mp4";
import videoFile2 from "/images/Champions_League_Animation.mp4";
import videoFile3 from "/images/Animated_Portfolio.mp4";
import videoFile4 from "/images/Mushroom_Character_Animation.mp4";
import videoFile5 from "/images/Warner_Bros_Intro_Animation.mp4";
import videoFile6 from "/images/MP_Modeling_Animation.mp4";

function Projects() {
  return (
    <>
      <main
        id="Main"
        className="w-[100vw] md:h-[240vh] h-[300vh] bg-[whitesmoke]  font-serif"
      >
        <section className=" md:h-[65vh] overflow-x-hidden">
          <div className="z-20 absolute md:mt-[40vh]  mt-[30vh] md:ml-[40vw] sm:ml-[35vw] ml-[27vw] text-[white]  border-none outline-none flex items-center justify-center flex-col">
            <h1 className="font-bold text-[35px]">Our Projects</h1>
            <div className="md:w-[10vw] w-[25vw] h-[5vh] flex items-center justify-between font-medium md:mr-0 mr-10">
              <a
                href=""
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
        <section className="w-[100vw] md:h-[110vh] h-[200vh] flex items-center justify-center bg-[whitesmoke] md:mt-0 mt-10  ">
          <div className="w-[95vw] md:h-[95vh] h-[190vh] flex items-center justify-between flex-col">
            <div className="w-[95vw] h-[15vh] border-b-[blue] border-b-[1px] border-dashed flex items-center justify-between">
              <p className="font-extrabold text-[blue] text-[30px]">
                My Projects.
              </p>
              <FaBook className="font-extrabold text-[blue] text-[30px]" />
            </div>
            <h1 className=" font-extrabold text-[blue] text-left">
              <span className="text-3xl">Wed development projects?</span> I
              Created this Website and other projects, this particular portfolio
              is dedicated to 3D animation <br />
              Enjoy the videos below
              <br />
              Always working on new once <br /> stay turned
            </h1>
            {/* <div className="w-[95vw] sm:h-[100vh] h-[200vh] flex items-center justify-between flex-col border-[red] border-[5px]"> */}
            <div className="w-[95vw] md:h-[75vh] h-[90vh] flex items-center justify-between md:flex-row flex-col md:mb-0  md:mt-0 mt-10">
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile1} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile2} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile3} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
            </div>
            <div className="w-[95vw] md:h-[75vh] h-[90vh] flex items-center justify-between md:flex-row flex-col md:mt-0 mt-10">
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile4} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile5} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
              {/* <a
                  href="https://bomaboy.github.io/project_image/"
                 
                > */}
              <video
                controls
                className="service shadow-lg md:w-[30vw] w-[95vw] h-[65vh] flex items-center justify-between flex-col md:mb-0 mb-10"
              >
                <source src={videoFile6} type="video/mp4" />

                <div className="hover:bg-[blue] md:w-[30vw] w-[95vw] h-[50vh] absolute duration-500 opacity-60"></div>
                <p className="service-p absolute mt-[20vh] font-bold text-[30px] text-[whitesmoke] hidden">
                  Click to preview
                </p>
                <div className="md:w-[30vw] w-[95vw] h-[50vh]"></div>
                <div className="md:w-[30vw] w-[95vw] h-[15vh] bg-[whitesmoke] flex items-center justify-between flex-col">
                  <div className="md:w-[25vw] w-[90vw] h-[8vh] absolute mt-[-7vh] bg-[whitesmoke] flex items-center justify-center font-bold text-[blue]">
                    Image manipulator
                  </div>
                  <div className="font-medium text-[blue]">
                    You can space and blur the image
                  </div>
                </div>
              </video>
              {/* </a> */}
            </div>
            {/* </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
