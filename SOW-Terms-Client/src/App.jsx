import React from "react";
import logo from "./assets/menu.svg";
import "./App.scss";
import Loader from "./components/loader";

const languages = [
  { lang: "Svenska", flag: "/SE.png", value: "swedish" },
  { lang: "English", flag: "/GB.png", value: "english" },
];

const menus = [
  { menu: "Home", goto: "https://www.123fakturera.se/index.html" },
  { menu: "Order", goto: "https://www.123fakturera.se/bestall.html" },
  { menu: "Our Customers", goto: "https://www.123fakturera.se/kunder.html" },
  { menu: "About Us", goto: "https://www.123fakturera.se/omoss.html" },
  { menu: "Contact Us", goto: "https://www.123fakturera.se/kontaktaoss.html" },
];

function App() {
  const menuDropdownRef = React.useRef(null);
  const languageDropdownRef = React.useRef(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[1]);
  const [content, setContent] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const fetchContent = async (lang) => {
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/terms/${lang}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setContent(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchContent(selectedLanguage.lang);
  }, [selectedLanguage.lang]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuDropdownRef?.current?.contains(event.target))
        menuDropdownRef.current.style.height = 0;
      if (!languageDropdownRef?.current?.contains(event.target))
        languageDropdownRef.current.style.height = 0;
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { terms = {} } = content;
  const sortedTerms = Object.keys(terms)
    .filter((key) => key.startsWith("terms_text_") && !isNaN(key.split("_")[2]))
    .sort((a, b) => parseInt(a.split("_")[2]) - parseInt(b.split("_")[2]))
    .reduce((acc, key) => {
      // Check for patterns like [text](link) and replace with anchor tags
      const valueWithLinks = terms[key].replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2">$1</a>'
      );
      acc[key] = valueWithLinks;
      return acc;
    }, {});

  return (
    <div className="main-container">
      <div className="background">
        <img
          src="/background.jpg"
          alt="Background"
          className="background-image"
        />
      </div>

      <div className="header">
        <img className="logo" src="/logo.png" alt="Logo" />
        <div className="menu-dropdown">
          <img
            className="menu-icon"
            src={logo}
            onClick={() => {
              if (menuDropdownRef.current)
                menuDropdownRef.current.style.height = "22.25rem";
            }}
          />
          <div className="dropdown-content" ref={menuDropdownRef}>
            {menus.map((item) => (
              <div
                className="nav-item"
                key={item.menu}
                onClick={() => {
                  window.open(item.goto, "_blank");
                  if (menuDropdownRef.current)
                    menuDropdownRef.current.style.height = 0;
                }}
              >
                {item.menu}
              </div>
            ))}
          </div>
        </div>
        <div className="header-content">
          <nav className="nav-bar">
            {menus.map((item) => (
              <div
                className="nav-item"
                key={item.goto}
                onClick={() => window.open(item.goto, "_blank")}
              >
                {item.menu}
              </div>
            ))}
          </nav>
          <div className="language-dropdown">
            <div
              className="language-info"
              onClick={() => {
                if (languageDropdownRef.current)
                  languageDropdownRef.current.style.height = "6.2rem";
              }}
            >
              <span className="language">{selectedLanguage.lang}</span>
              <img
                className="language-flag"
                src={selectedLanguage.flag}
                alt="User Icon"
              />
            </div>
            <div className="dropdown-content" ref={languageDropdownRef}>
              {languages.map((lang) => (
                <div
                  className="language-info"
                  key={lang.value}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    if (languageDropdownRef.current)
                      languageDropdownRef.current.style.height = 0;
                  }}
                >
                  <span className="language">{lang.lang}</span>
                  <img className="language-flag" src={lang.flag} alt="flag" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!content.id ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          {loading && (
            <div className="loader-container">
              <Loader />
            </div>
          )}
          <div className="main-heading">
            <span className="main-heading-text">{terms?.terms}</span>
            <button className="close-button">{terms?.close}</button>
          </div>

          <div className="main-content">
            {Object.values(sortedTerms).map((term, index) => (
              <p
                className={index === 3 ? "mt-6" : index === 4 ? "mb-6" : ""}
                dangerouslySetInnerHTML={{ __html: term }}
              />
            ))}
          </div>

          <button className="close-button">{terms?.close}</button>

          <div className="mb-6" />
        </>
      )}
    </div>
  );
}

export default App;
