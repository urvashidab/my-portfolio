import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdCancel } from "react-icons/md";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  // close menu when clicking a link(only for small screens)
  const handleLinkClick = () => setMenuOpen(!menuOpen);

  // toggle dark mode theme
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
    <nav className=" backdrop-blur-md py-5 shadow-md fixed w-full top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* logo */}
        <a href="#about" className="text-xl textPrimary font-bold ">
          Urvashi
        </a>

        {/* desktop menu */}

        <ul className="md:flex hidden textPrimary gap-10 text-lg font-bold">
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

        <div className="flex justify-center items-center gap-6 ">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-2xl rounded-full p-2 transition-transform hover:scale-105 ${
              darkMode
                ? "bg-[#5d688a] text-yellow-300" // dark mode colors
                : "bg-[#826674] text-gray-100" // light mode colors
            }`}
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          <button className="btnStyle hidden md:flex items-center gap-2 text-lg">
            Resume
            <LiaDownloadSolid className="text-xl" />
          </button>

          {/* hamburger menu icons */}

          <button
            className="textPrimary text-2xl  md:hidden "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdCancel /> : <GrMenu />}
          </button>
        </div>
      </div>

      {/* mobile Menu */}
      {menuOpen && (
        <ul
          className={`
    absolute top-full left-0 w-full flex flex-col items-center gap-4 py-4
    transition-all duration-300 z-50 md:hidden
    ${
      window.innerWidth < 640
        ? "bg-white dark:bg-gray-900" // solid for small screens
        : "bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/10"
    } // glassy for sm and above
  `}
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
      )}
    </nav>
  );
}
