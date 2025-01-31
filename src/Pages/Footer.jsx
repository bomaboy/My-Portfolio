import "../styles/Footer.css";
// import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

//
function Footer() {
  return (
    <>
      <footer className="w-[100vw] md:h-[90vh] h-[150vh] overflow-x-hidden bg-[blue] flex items-center justify-center">
        <div className="w-[90vw] md:h-[70vh] h-[130vh] flex items-center justify-between  flex-col  ">
          <div className="w-[90vw] md:h-[70vh] h-[130vh] flex md:items-center items-start justify-between  md:flex-wrap flex-nowrap md:flex-row flex-col  ">
            <div
              className="md:w-[600px] w-[80vw] md:h-[25vh] h-[30vh] flex items-start justify-between flex-col 
             "
            >
              <p className="text-[white] text-[30px] font-bold">
                About Mr.Emmanuel Animations
              </p>
              <p className="text-[whitesmoke]">
                Our passion for technology and our expertise in harnessing the
                plethora of ways by which it can transform a business has
                enabled us to deliver incredible customer experiences.
              </p>
            </div>
            <div className="w-[150px] h-[30vh] flex items-start justify-between flex-col ">
              <p className="text-[white] text-[30px] font-bold">Site Links</p>

              <a
                className="text-[white] hover:text-[gray] duration-500 "
                href="/"
              >
                Home
              </a>
              <a
                className="text-[white] hover:text-[gray] duration-500 "
                href="/About"
              >
                About
              </a>
              <a
                className="text-[white] hover:text-[gray] duration-500 "
                href="/Contact"
              >
                Contact
              </a>
              <a
                className="text-[white] hover:text-[gray] duration-500 "
                href="/Services"
              >
                Services
              </a>
              <a
                className="text-[white] hover:text-[gray] duration-500 "
                href="/Projects"
              >
                Projects
              </a>
            </div>
            <div
              className="w-[250px] md:h-[40vh] h-[45vh] flex items-start justify-evenly flex-col text-[white] 
              "
            >
              <p className=" text-[30px] font-bold">Newsletter</p>
              <p>Get Notify on our Newsfeed.</p>
              <button className="md:w-[240px] w-[90vw] h-[60px] rounded-md bg-[#3d3dff] text-[white]">
                Your Email Address
              </button>
              <button className="md:w-[240px] w-[90vw] h-[60px] rounded-md bg-[black] text-[blue] hover:opacity-80 duration-500 ">
                Subscribe
              </button>
            </div>
            <div className="w-[90vw] md:h-[10vh] h-[20vh] flex md:items-center items-start justify-between md:flex-row flex-col">
              <div className="text-[white]  md:w-[20vw] w-[150px] h-[10vh] flex items-center justify-between sm:mb-0 mb-[5vh]">
                <div className="">
                  <a
                    href="https://web.facebook.com/bomaboy1996/"
                    className="font-medium"
                  >
                    <FaSquareFacebook className="text-[30px] hover:text-[gray] duration-500" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/NwankwoOny10395"
                    className="font-medium"
                  >
                    <FaXTwitter className="text-[30px] hover:text-[gray] duration-500" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/onyedikachi-emmanuel-655a19274/"
                    className="font-medium"
                  >
                    <BsLinkedin className="text-[30px] hover:text-[gray] duration-500" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://medium.com/@bomaboy1996"
                    className="font-medium"
                  >
                    <FaMedium className="text-[30px] hover:text-[gray] duration-500" />
                  </a>
                </div>
              </div>
              <div className="md:w-[50vw] w-[90vw] h-[10vh] flex sm:items-center items-start md:justify-around justify-between flex-col sm:flex-row   ">
                <div className="md:w-[415px] w-[60vw] h-[10vh] flex md:items-center items-start justify-between  text-[whitesmoke] md:flex-row flex-col">
                  <div className="md:w-[250px] w-[60vw] h-[2.5vh] flex items-center  md:justify-around justify-start md:border-r-[1px] md:border-[gray] border-r-[0px] border-[transparent]">
                    <p>@ Copyright Mr.Emanuel Animations 2025 </p>
                  </div>
                  <div className="md:w-[250px] w-[90vw] md:h-[2.5vh] h-[10vh] flex sm:items-center flex-col md:justify-around justify-center mt-10 sm:mt-0">
                    Designed by{" "}
                    {/* <span className="text-center font-bold text-white hover:text-[gray] duration-500 flex items-center justify-center ">
                      {" "}
                      <br /> */}
                      <a href="/">
                        Mr.Emmanuel <br /> Animations
                      </a>{" "}
                    {/* </span> */}
                  </div>
                </div>
                <a href="#Main">
                  <div className="Arrow-div w-[50px] h-[50px] flex items-center justify-center bg-[transparent] hover:text-[gray] rounded-[50%] border-[white] hover:border-[gray] border-[1px] duration-500 ml-[40vh] md:ml-0 ">
                    <FaArrowUp className="  Arrow-Up text-[white] " />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
