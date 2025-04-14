import { Home, Code, Wrench, LayoutDashboard } from "lucide-react";
import "./index.css";
import logo from "./assets/Logo.png";

const BottomNavigation = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bottom-nav">
      <button onClick={() => scrollTo("home")}>
        <Home />
      </button>
      <button onClick={() => scrollTo("techstack")}>
        <Code />
      </button>
      <button onClick={() => scrollTo("skills")}>
        <Wrench />
      </button>
      <button onClick={() => scrollTo("projects")}>
        <LayoutDashboard />
      </button>
      <img
        src={logo}
        alt="Profile"
        className="profile-photo"
        onClick={() => scrollTo("home")}
      />
    </nav>
  );
};

export default BottomNavigation;
