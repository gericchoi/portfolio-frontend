import { useState } from "react";
import "../../index.css";

const projectItems = [
  {
    title: "Backend API Deployment with Express.js using RAWG.io api",
    repository: "https://github.com/gericchoi/rawg-api-backend",
    description:
      "This project involves setting up a backend server with Express to fetch data from a third-party API (RAWG.io). The frontend is built using React, featuring a responsive UI to display top games by rating, platform, and release date.",
    technologies: [
      "Express.js",
      "React.js",
      "Tanstack Query",
      "CORS",
      "React-Bootstrap",
      "Node.js",
      "Axios",
      "API Testing",
      "Fetch",
      "System Deployment",
      "Web Service Development",
    ],
    deployed: "https://rawg-api.surge.sh/",
  },
  {
    title: "Frontend API Fetching using Tanstack Query and Displaying",
    repository: "https://github.com/gericchoi/rawg-api-frontend",
    description:
      "This project frontend is built using React, featuring a responsive UI to display top games by rating, platform, and release date by fetching data from  backend server i created with Express to fetch data from a third-party API (RAWG.io). ",
    technologies: [
      "Express.js",
      "React.js",
      "Tanstack Query",
      "CORS",
      "React-Bootstrap",
      "Node.js",
      "Axios",
      "API Testing",
      "Fetch",
      "System Deployment",
      "Web Service Development",
    ],
    deployed: "https://rawg-api.surge.sh/",
  },
  {
    title: "React Portfolio Frontend",
    repository: "https://github.com/gericchoi/portfolio-frontend",
    description:
      "A modern React-based portfolio with theme toggling, smart search, and email service using react resend.",
    technologies: ["React", "React Hooks", "CSS", "React Resend"],
    deployed: "https://your-deployed-frontend-url.com",
  },
  {
    title: "React Portfolio Backend",
    repository: "https://github.com/gericchoi/portfolio-backend",
    description:
      "A basic backend setup using express for my portfolio to support email service.",
    technologies: ["Express", "Node.js", "Nodemailer"],
    deployed: "https://your-deployed-backend-url.com",
  },
  {
    title: "Simple To Do List App",
    repository: "https://github.com/gericchoi/to-do-list-app",
    description:
      "A React to-do list app using React Bootstrap and localStorage. Features include adding, editing, deleting, and persisting tasks across sessions.",
    technologies: ["React", "React Bootstrap", "localStorage"],
    deployed: "http://gericchoi-to-do-list.surge.sh",
  },
  {
    title: "Smart Parking Record & QR Tracking System",
    repository: "https://github.com/gericchoi/smart-parking", // Update with the correct repository link if available
    description:
      "This system allows manual registration of drivers entering a private school with QR code generation linked to the vehicle plate number, QR code scanning for entry and exit tracking, and gate control integration via Arduino.",
    technologies: [
      "Node.js (Express)",
      "React",
      "REST API",
      "QR Code Generation",
      "Custom QR Scanner",
      "Firebase Firestore",
      "Arduino",
      "Tailwind CSS",
      "JavaScript",
      "NoSQL",
    ],
    deployed: "https://intellipark-system.onrender.com", // If still active
  },
  {
    title: "Portfolio with CRUD & MongoDB",
    repository: "https://github.com/gericchoi/portfolio-with-crud",
    description:
      "A full-stack portfolio app using React, Express, and MongoDB. Built with REST API integration and CRUD functionality for dynamic content management.",
    technologies: ["React", "Express", "MongoDB", "REST API"],
    deployed: "Already Undeployed",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projectstack">
      <h2 className="section-title">Project List</h2>
      <div className="stack-list">
        {projectItems.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div className="tech-item" key={index}>
              <div className="info">
                <div className="title">{project.title}</div>
                <a
                  className="project-link"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository: {project.repository}
                </a>
                <div
                  className={`subtitle ${
                    isExpanded ? "expanded" : "collapsed"
                  }`}
                >
                  {project.description}
                </div>
                <div>
                  <strong>Technologies Used:</strong>{" "}
                  {project.technologies.join(", ")}
                </div>
                <div>
                  <strong>Deployed Link:</strong>{" "}
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.deployed}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
