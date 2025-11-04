import photo from "../assets/gaggz.jpg";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Main() {
  return (
    <div
      id="about"
      className="   flex  justify-center items-center flex-col w-full min-h-screen pt-32 md:pt-36 lg:pt-40 px-5 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-24 "
    >
      {/* image */}
      <img
        src={photo}
        alt="Urvashi"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-md shadow-gray-400 rounded-full object-cover "
      ></img>
      {/* name section */}
      <h2 className="text-2xl  textPrimary font-bold mt-20">
        Hello, I'm Urvashi
      </h2>
      <p className="textPrimary text-lg mb-2">
        Judious, Active, Trustworthy, Innovative, Noticeable
      </p>
      {/* Typewriter effect */}
      <h1 className="font-extrabold text-4xl mt-8 textSecondary mb-4">
        <Typewriter
          options={{
            strings: [
              "Full Stack Software Developer",
              "MERN Stack Developer",
              "Web Enthusiast",
            ],
            autoStart: true,
            loop: true, // remove if you don’t want it to repeat
            delay: 120,
            deleteSpeed: 80,
          }}
        />
      </h1>
      <p className="mb-10  textPrimary font-bold max-w-2xl text-center">
        I’m a passionate Full Stack Developer specializing in the MERN stack,
        dedicated to building clean, scalable, and user-centered web
        applications.
      </p>
      {/* Socials & Email */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMediaStyle text-2xl "
        >
          <FaGithub />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMediaStyle text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:urvashi.ucoe@gmail.com"
          className="btnStyle flex items-center gap-2 text-lg"
        >
          Email Me
          <HiArrowUpRight className="text-xl" />
        </a>
      </div>
    </div>
  );
}
