import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiSelenium,
  SiJirasoftware,
  SiMysql,
} from "react-icons/si";

const skillsData = [
  {
    section: "Frontend",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "text-orange-600" },
      { icon: FaCss3Alt, name: "CSS3", color: "text-blue-600" },
      { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
      { icon: FaReact, name: "React.js", color: "text-cyan-400" },
      { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
    ],
  },
  {
    section: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { icon: SiExpress, name: "Express.js", color: "text-gray-700" },
      { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    ],
  },
  {
    section: "Database",
    skills: [
      { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
      { icon: FaDatabase, name: "SQL", color: "text-gray-700" },
    ],
  },
  {
    section: "Others",
    skills: [
      { icon: FaGitAlt, name: "Git", color: "text-orange-700" },
      { icon: FaGithub, name: "GitHub", color: "text-black" },
      { icon: SiSelenium, name: "Selenium", color: "text-green-500" },
      { icon: SiJirasoftware, name: "Jira", color: "text-blue-500" },
    ],
  },
];

export default function SkillSec() {
  return (
    <div
      className="w-full min-h-screen  pt-32 md:pt-36 lg:pt-40 px-5 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-24"
      id="skills"
    >
      <h1 className="headingStyle">Technical Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {skillsData.map((section, idx) => (
          <div key={idx} className="gridSectionHover">
            <h2 className="gridHeadingStyle">{section.section}</h2>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {section.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                  >
                    <Icon className={`text-4xl ${skill.color}`} />
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
