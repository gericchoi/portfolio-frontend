import { FaPhp, FaNodeJs, FaReact, FaDatabase, FaGithub } from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiJira,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { DiCodeigniter } from "react-icons/di";

import "../../index.css";

const techItems = [
  {
    icon: <FaPhp color="#777bb4" />,
    title: "PHP",
    category: "Backend",
  },
  {
    icon: <DiCodeigniter color="#ee4323" />,
    title: "CodeIgniter",
    category: "PHP Framework",
  },
  {
    icon: <FaNodeJs color="#3c873a" />,
    title: "Node.js",
    category: "Backend",
  },
  {
    icon: <SiMysql color="#00758f" />,
    title: "MySQL",
    category: "Database",
  },
  {
    icon: <FaDatabase color="#ffa000" />,
    title: "Firebase Firestore",
    category: "NoSQL DB",
  },
  {
    icon: <FaReact color="#61dbfb" />,
    title: "React",
    category: "Frontend",
  },
  {
    icon: <SiTailwindcss color="#38bdf8" />,
    title: "Tailwind CSS",
    category: "Styling",
  },
  {
    icon: <SiBootstrap color="#563d7c" />,
    title: "Bootstrap",
    category: "Styling",
  },
  {
    icon: <FaGithub color="#000000" />,
    title: "GitHub",
    category: "Version Control",
  },
  {
    icon: <SiJira color="#0052cc" />,
    title: "Jira",
    category: "Project Management",
  },
  {
    icon: <SiMongodb color="#47A248" />,
    title: "MongoDB",
    category: "Database",
  },
  {
    icon: <SiExpress color="#000000" />,
    title: "Express.js",
    category: "Backend Framework",
  },
];

const TechStack = () => {
  return (
    <section id="techstack">
      <h2 className="section-title">Technology Stack List</h2>
      <div className="stack-list">
        {techItems.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="icon-container">{tech.icon}</div>
            <div className="info">
              <div className="title">{tech.title}</div>
              <div className="subtitle">{tech.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
