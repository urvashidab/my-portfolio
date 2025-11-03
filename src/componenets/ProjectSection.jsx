import { HiArrowUpRight } from "react-icons/hi2";
export default function ProjectSection() {
  const projectData = [
    {
      title: "Project-1",
      description: "Small description of the project.",
      techUsed:
        "React, JavaScript, HTML, Tailwind CSS, MongoDB, Node.js, Express.js,API",

      live: "Check it Out",
    },

    {
      title: "Project-2",
      description: "Small description of the project.",
      techUsed:
        "React, JavaScript, HTML, Tailwind CSS, MongoDB, Node.js, Express.js,API",
      live: "Check it Out",
    },

    {
      title: "Project-2",
      description: "Small description of the project.",
      techUsed:
        "React, JavaScript, HTML, Tailwind CSS, MongoDB, Node.js, Express.js,API",
      live: "Check it Out",
    },

    {
      title: "Project-3",
      description: "Small description of the project.",
      techUsed:
        "React, JavaScript, HTML, Tailwind CSS, MongoDB, Node.js, Express.js,API",
      live: "Check it Out",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full min-h-screen pt-32 md:pt-36 lg:pt-40 px-5 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-24"
    >
      <h1 className="headingStyle">PROJECTS</h1>

      {/* grid  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-20 gap-10 ">
        {projectData.map((project, idx) => (
          <div key={idx} className="gridSectionHover">
            {/* title */}
            <h2 className="gridHeadingStyle">{project.title}</h2>

            {/* description */}
            <p className="textSecondary text-lg mb-4">{project.description}</p>

            {/* tech used */}
            <p className="textPrimary text-lg mb-8 ">{project.techUsed}</p>

            {/* live Demo Link */}

            <a
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "🚧 This project is still under construction. Stay tuned!"
                );
              }}
              href="#"
              target="_blank"
              className=" textSecondary underline font-extrabold cursor-pointer flex items-center gap-2 text-lg w-fit hover:text-[#826674]! transition duration-300"
            >
              {project.live}
              <HiArrowUpRight className="text-xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
