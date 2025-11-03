import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "2015 - 2018",
      role: "Software Tester",
      company: "ABC Tech Solutions",
      description:
        "Performed manual and automated testing of web applications, ensuring high-quality deliverables.",
    },
    {
      period: "2018 - 2020",
      role: "Senior Software Tester",
      company: "XYZ Innovations",
      description:
        "Led a team of 3 testers, conducted regression and performance testing, improved test coverage by 40%.",
    },
    {
      period: "2020 - 2022",
      role: "Gap / Self-learning",
      company: "-",
      description:
        "Focused on learning Full Stack Development and modern web technologies (MERN stack).",
    },
    {
      period: "2022 - 2023",
      role: "Junior Full Stack Developer",
      company: "NextGen Web Solutions",
      description:
        "Built MERN stack projects, implemented responsive designs, and optimized performance for small-scale web apps.",
    },
    {
      period: "2023 - Present",
      role: "Full Stack Developer",
      company: "Innovative Apps Inc.",
      description:
        "Working on enterprise-level applications, integrating APIs, and maintaining modern web apps with React, Node.js, and MongoDB.",
    },
  ];

  return (
    <div
      id="experience"
      className="w-full min-h-screen flex flex-col items-center pt-32 md:pt-36 lg:pt-40 px-5 md:px-10 lg:px-20  pb-16 md:pb-20 lg:pb-24 "
    >
      <h1 className="headingStyle">Experience</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-3xl bg-white/20 dark:bg-black/30 
                 shadow-lg border-t-4 border-[#5D688A] dark:border-[#AFCBFF] 
                 transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#5D688A] dark:bg-[#AFCBFF] rounded-full flex items-center justify-center text-white shadow-md">
              <Briefcase className="w-6 h-6" />
            </div>

            {/* Content */}
            <h2 className="textPrimary font-bold text-xl">{exp.role}</h2>
            <span className="textSecondary">{exp.company}</span>
            <span className="textSecondary block text-sm">{exp.period}</span>
            <p className="textSecondary mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
