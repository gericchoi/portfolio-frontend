import { Sun, Moon } from "lucide-react";
import useTheme from "./hooks/useTheme";
import SearchBox from "./SearchBox";
import "./index.css";

const TopNavigation = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="top-nav">
      <div className="left-section">
        <span className="my-name" onClick={() => scrollTo("home")}>
          Portfolio{" "}
        </span>
      </div>
      <div className="right-section">
        <SearchBox />
        <button className="toggleTheme" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="icon" size={24} />
          ) : (
            <Moon className="icon" size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
