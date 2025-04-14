import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Fuse from "fuse.js";
import "./index.css";

type SearchItem = {
  title: string;
  description: string;
  tags: string[];
};

const data: SearchItem[] = [
  {
    title: "Parking Management System",
    description: "Node.js + Firebase + Arduino with QR access",
    tags: ["node.js", "firebase", "iot"],
  },
  {
    title: "HubSpot CRM Integration",
    description: "Custom API integration to automate workflows",
    tags: ["php", "hubspot", "api"],
  },
  {
    title: "Official Receipts Generator",
    description: "Back-end logic for automatic ORs",
    tags: ["mysql", "pdf", "automation"],
  },
  {
    title: "Position",
    description: "Backend Software Engineer",
    tags: ["title", "work", "position"],
  },
  {
    title: "Experience",
    description:
      "2 years of hands-on experience building scalable backend systems and web application",
    tags: ["work experience", "experience", "how many"],
  },
];

const fuse = new Fuse(data, {
  keys: ["title", "description", "tags"],
  threshold: 0.3,
});

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setQuery("");
    setResults([]);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    const found = fuse.search(val).map((r) => r.item);
    setResults(found);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Search className="search-icon" size={22} onClick={toggleOpen} />
      {isOpen && (
        <div className="popup-search-wrapper" ref={boxRef}>
          <input
            ref={inputRef}
            type="text"
            className="popup-search-input"
            placeholder="Looking for something?"
            value={query}
            onChange={handleChange}
          />
          {results.length > 0 && (
            <div className="popup-search-results">
              {results.map((item, index) => (
                <div className="popup-result" key={index}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBox;
