import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdCancel,
} from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme from localStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Close menu when clicking a link (only for small screens)
  const handleLinkClick = () => setMenuOpen(false);

  // Toggle dark mode theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="backdrop-blur-md py-5 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 ">
        {/* logo */}
        <a href="#about" className="text-xl textPrimary font-bold">
          Urvashi
        </a>

        {/* desktop menu - show from md (768px) onwards */}
        <ul className="lg:flex hidden textPrimary gap-10 text-lg font-bold">
          <li className="hoverMenu">
            <a href="#about">About Me</a>
          </li>
          <li className="hoverMenu">
            <a href="#skills">Skills</a>
          </li>
          <li className="hoverMenu">
            <a href="#projects">Projects</a>
          </li>
          <li className="hoverMenu">
            <a href="#experience">Experience</a>
          </li>
          <li className="hoverMenu">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-2xl rounded-full p-2 transition-transform hover:scale-105 ${
              darkMode
                ? "bg-[#5d688a] text-yellow-300"
                : "bg-[#826674] text-gray-100"
            }`}
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          <button className="btnStyle hidden lg:flex items-center gap-2 text-lg">
            Resume
            <LiaDownloadSolid className="text-xl" />
          </button>

          {/* hamburger menu icons - hide from md onwards */}
          <button
            className="textPrimary text-2xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdCancel /> : <GrMenu />}
          </button>
        </div>
      </div>

      {/* mobile/iPad Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full z-50 overflow-hidden transition-all duration-500 ease-in-out
    ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
      >
        <ul
          className="flex flex-col md:flex-row md:justify-center items-center gap-4 md:gap-8 py-4 md:py-6 transition-all duration-300
      bg-white dark:bg-gray-900 sm:bg-white/30 sm:dark:bg-gray-900/30 sm:backdrop-blur-lg sm:border sm:border-white/10"
        >
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <button className="btnStyle flex items-center gap-2 text-lg">
              Resume
              <LiaDownloadSolid className="text-xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
