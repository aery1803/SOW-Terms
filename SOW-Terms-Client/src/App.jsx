import React from "react";
import logo from "./assets/menu.svg";
import "./App.scss";

const languages = [
  { lang: "Svenska", flag: "/SE.png", value: "swedish" },
  { lang: "English", flag: "/GB.png", value: "english" },
];

const menus = ["Home", "Order", "Our Customers", "About Us", "Contact Us"];

function App() {
  const menuDropdownRef = React.useRef(null);
  const languageDropdownRef = React.useRef(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[1]);

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

  return (
    <div className="main-container">
      <img
        src="/background.jpg"
        alt="Background"
        className="background-image"
      />

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
                key={item}
                onClick={() => {
                  if (menuDropdownRef.current)
                    menuDropdownRef.current.style.height = 0;
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="header-content">
          <nav className="nav-bar">
            {menus.map((item) => (
              <div className="nav-item" key={item}>
                {item}
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

      <div className="main-heading">
        <span className="main-heading-text">Terms</span>
        <button className="close-button">Close and Go Back</button>
      </div>

      <div className="main-content"></div>

      <button className="close-button">Close and Go Back</button>
    </div>
  );
}

export default App;
