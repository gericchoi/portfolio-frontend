import { Home, Code, Wrench, LayoutDashboard } from "lucide-react";
import "../../index.css";

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
    </nav>
  );
};

export default BottomNavigation;
