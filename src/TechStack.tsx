import { FaPhp, FaNodeJs, FaReact, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiBootstrap, SiJira } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di"; // For CodeIgniter

const TechStack = () => {
  return (
    <section id="techstack" className="container py-5">
      <h1 className="text-center mb-4">Technology Stack</h1>

      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6">
          <h5 className="font-weight-bold">
            Programming Languages & Frameworks
          </h5>
          <ul className="tech-list">
            <li>
              <FaPhp className="icon" size={20} /> PHP
            </li>
            <li>
              <FaNodeJs className="icon" size={20} /> Node.js
            </li>
            <li>
              <FaReact className="icon" size={20} /> React
            </li>
            <li>
              <DiCodeigniter className="icon" size={20} /> CodeIgniter
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6">
          <h5 className="font-weight-bold">Tools & Database</h5>
          <ul className="tech-list">
            <li>
              <SiMysql className="icon" size={20} /> MySQL
            </li>
            <li>
              <FaDatabase className="icon" size={20} /> Firebase Firestore
            </li>
            <li>
              <SiTailwindcss className="icon" size={20} /> Tailwind CSS
            </li>
            <li>
              <SiBootstrap className="icon" size={20} /> Bootstrap
            </li>
            <li>
              <FaGithub className="icon" size={20} /> GitHub
            </li>
            <li>
              <SiJira className="icon" size={20} /> Jira
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
