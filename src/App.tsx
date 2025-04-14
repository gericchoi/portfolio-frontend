import {
  profile,
  usePageTitle,
  TopNavigation,
  BottomNavigation,
  TechStack,
  ContactForm,
  ChatWidget,
} from "../src/components/componentBundle";

import "./index.css";

function App() {
  usePageTitle("@gericchoi - portfolio");

  return (
    <>
      <ChatWidget />

      <TopNavigation />

      <section id="home" className="fade-in-section">
        <div>
          <img src={profile} className="logo profile" alt="Profile logo" />
        </div>
        <h1 className="myName">@gericchoi</h1>
        <p className="read-the-docs">
          Coding, High-Level, OOP, Innovations (CHOI)
        </p>
        <div className="card">
          <p>
            My name is Gerico, I love food! (CHOI) and I'm a Backend Software
            Engineer, Web Developer, Backend Developer, Programmer whatever you
            may call.
          </p>
          <p className="read-the-docs">
            a passionate Software Engineer from Malabon, Philippines, with over
            2 years of hands-on experience building scalable backend systems and
            web applications. I specialize in PHP (CodeIgniter), Node.js, and
            Firebase, and I've worked on everything from enterprise-level
            platforms to automated backend solutions. Whether it’s optimizing
            database queries, integrating third-party APIs, or deploying
            serverless functions, I enjoy solving complex problems with clean,
            efficient code. My work has streamlined internal operations,
            improved application performance, and delivered real value to both
            users and businesses. I thrive in Agile environments, collaborate
            well across teams, and bring a blend of technical depth and
            real-world experience to every project I take on.
          </p>
        </div>
      </section>

      <section id="resume-section">
        <div className="button-container">
          <p className="read-the-docs">
            If interested, you can access my GitHub profile or download my
            resume below:
          </p>
          <a
            href="https://github.com/gericchoi"
            target="_blank"
            className="custom-button"
          >
            Github Profile
          </a>
          <a
            href="https://github.com/gericchoi/resume/raw/main/Gerico-Mangali-Resume.pdf"
            download
            className="custom-button"
          >
            Download CV
          </a>
        </div>
      </section>

      <section id="contact" className="fade-in-section">
        <div className="card">
          <p className="read-the-docs">
            I'm open for new opportunities, if interested you can contact me by
            email or message me on whatsapp below.
          </p>

          <ContactForm />
        </div>
      </section>

      <section id="techstack" className="fade-in-section">
        <TechStack />
      </section>

      <section id="projects" className="fade-in-section">
        <p className="read-the-docs">
          Thank you for reaching projects part! Currently this part is
          unavailable for now!
        </p>
      </section>

      <BottomNavigation />
    </>
  );
}

export default App;
