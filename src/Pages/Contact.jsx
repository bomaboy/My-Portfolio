import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
// import { BsLinkedin } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaMedium } from "react-icons/fa6";
// import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

function Contact() {
  return (
    <>
      <main
        id="Main"
        className="w-[100%] md:h-[280vh] h-[350vh] font-serif bg-[whitesmoke]"
      >
        <section className=" md:h-[65vh] ">
          <div className="z-20 absolute md:mt-[40vh]  mt-[30vh] md:ml-[40vw] sm:ml-[35vw] ml-[27vw] text-[white]  border-none outline-none flex items-center justify-center flex-col">
            <h1 className="font-bold text-[35px]">Contact Us</h1>
            <div className="md:w-[10vw] w-[25vw] h-[5vh] flex items-center justify-between font-medium md:mr-0 mr-10">
              <a
                href="/"
                className="md:w-[6vw] w-[20vw] h-[5vh] flex items-center justify-between font-medium "
              >
                <IoHomeOutline />
                Home <IoIosArrowForward />
              </a>
              <span className="text-[blue]">Contact</span>
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
        <section className="w-[100vw] md:h-[120vh] h-[190vh] flex items-center justify-center  ">
          <div className="w-[85vw] md:h-[110vh] h-[195vh]   ">
            <div className="w-[85vw] md:h-[40vh] h-[70vh]  flex items-center justify-center  ">
              <div className="w-[80vw] md:h-[35vh] h-[90vh] flex items-center md:justify-between justify-around md:flex-row flex-col  ">
                <div className="md:w-[700px] w-[80vw] md:h-[30vh] h-[5vh] flex md:items-start items-center justify-between flex-col">
                  <p className="font-bold sm:text-[60px] text-[50px]">
                    Let's work
                  </p>
                  <p className="font-bold sm:text-[60px] text-[50px]">
                    Together
                  </p>
                </div>
                <div className="md:w-[400px] w-[80vw] md:h-[24vh] h-[30vh] flex items-start justify-around flex-col ">
                  <div className="md:w-[30vw] w-[80vw] flex md:items-start items-center justify-between flex-col">
                    <p>Email</p>
                    <a
                      href="mailto:bomaboy1996@gmail.com"
                      className="font-medium  hover:text-[blue] duration-500"
                    >
                      {/* <SiGmail /> */}
                      nwankwoonyedikachiemmanuel@gmail.com
                    </a>
                  </div>
                  <div className="md:w-[30vw] w-[80vw] flex md:items-start items-center justify-between flex-col">
                    <p>Call Us</p>
                    <a
                      href="tel:07041131882"
                      className="font-medium hover:text-[blue] duration-500"
                    >
                      {/* <GiRotaryPhone /> */}
                      +1234 7041131882
                    </a>
                  </div>
                  <div className="md:w-[30vw] w-[80vw] flex md:items-start items-center justify-between flex-col">
                    <p>What'sApp</p>
                    <a
                      href="http://wa.me/2347041131882"
                      className="font-medium text-[20px] hover:text-[blue] duration-500"
                    >
                      <ImWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[85vw] md:h-[70vh] h-[110vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8384001602317!2d7.359613999999999!3d5.129717299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429964fe59a2d9%3A0xed3b01aba6a81287!2sLearnFactory%20Nigeria!5e0!3m2!1sen!2sng!4v1709636055020!5m2!1sen!2sng"
                className="w-[85vw] md:h-[70vh] h-[110vh] shadow-2xl"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="w-[100vw] md:h-[100vh] h-[90vh] flex items-center justify-center ">
          <form
            action="https://mail.google.com/mail/u/0/#inbox"
            className="md:w-[60vw] w-[95vw]  h-[80vh] shadow-md flex items-center justify-center bg-white"
          >
            <div className="md:w-[50vw] w-[90vw] h-[70vh]">
              <div className="md:w-[50vw] w-[90vw] h-[10vh] flex items-center justify-between">
                <div className="md:w-[20vw] w-[40vw] h-[10vh] flex items-start justify-center flex-col">
                  <label htmlFor="">Your Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="md:w-[20vw] w-[40vw] h-[10vh] pl-5 bg-[whitesmoke] "
                    required
                  />
                </div>
                <div className="md:w-[20vw] w-[40vw] h-[10vh] flex items-start justify-center flex-col">
                  <label htmlFor="">Your Email</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="md:w-[20vw] w-[40vw] h-[10vh] pl-5 bg-[whitesmoke]"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="md:w-[50vw] w-[90vw] h-[10vh] flex items-start justify-center flex-col">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="md:w-[50vw] w-[90vw] h-[10vh] pl-5 bg-[whitesmoke]"
                  required
                />
              </div>
              <br />
              <div className="md:w-[50vw] w-[90vw] h-[30vh] flex items-start justify-center flex-col">
                <label htmlFor="">Message</label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="md:w-[50vw] w-[90vw] h-[30vh] pl-5 bg-[whitesmoke]"
                  required
                />
              </div>
              <div className="md:w-[50vw] w-[90vw] h-[15vh] flex items-center justify-start">
                <button className="w-[150px] h-[60px] bg-[white] text-[blue] border-[1px] border-[blue] rounded-lg font-medium duration-500 hover:bg-[blue] hover:text-[white] ">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
