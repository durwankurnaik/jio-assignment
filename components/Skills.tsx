import {
  SiAstro,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGoland,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPython,
  SiReact,
  SiSolid,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface SkillsDataType {
  name: string;
  icon: any; // To keep the things simple, I added any type here
}

const sizeValue: number = 30;

const SkillsData: SkillsDataType[] = [
  { name: "Next.JS", icon: <SiNextdotjs size={sizeValue} /> },
  { name: "React JS", icon: <SiReact size={sizeValue} /> },
  { name: "Express JS", icon: <SiExpress size={sizeValue} /> },
  { name: "Solid JS", icon: <SiSolid size={sizeValue} /> },
  { name: "Astro", icon: <SiAstro size={sizeValue} /> },
  { name: "Flask", icon: <SiFlask size={sizeValue} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={sizeValue} /> },
  { name: "Javascript", icon: <SiJavascript size={sizeValue} /> },
  { name: "Typescript", icon: <SiTypescript size={sizeValue} /> },
  { name: "Golang", icon: <SiGoland size={sizeValue} /> },
  { name: "Python", icon: <SiPython size={sizeValue} /> },
  { name: "Java", icon: <FaJava size={sizeValue} /> },
  { name: "Linux", icon: <SiLinux size={sizeValue} /> },
  { name: "Nginx", icon: <SiNginx size={sizeValue} /> },
  { name: "Docker", icon: <SiDocker size={sizeValue} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={sizeValue} /> },
  { name: "MySQL", icon: <SiMysql size={sizeValue} /> },
  { name: "MongoDB", icon: <SiMongodb size={sizeValue} /> },
];

const Skills = () => {
  return (
    <section className="pt-10 md:pt-16" id="skills">
      <h1 className="heading-1 mb-10 md:mb-16 text-center">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-12 opacity-80">
        {SkillsData.map((skill, idx) => (
          <div key={idx} className="flex justify-center items-center gap-4">
            {skill.icon}
            <span className="span">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
