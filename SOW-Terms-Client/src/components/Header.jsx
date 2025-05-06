import React from "react";
import MenuDropdown from "./MenuDropdown";
import LanguageDropdown from "./LanguageDropdown";

// Navigation menu items
const menus = [
  {
    swedish: "Hem",
    english: "Home",
    goto: "https://www.123fakturera.se/index.html",
  },
  {
    swedish: "Beställ",
    english: "Order",
    goto: "https://www.123fakturera.se/bestall.html",
  },
  {
    swedish: "Våra Kunder",
    english: "Our Customers",
    goto: "https://www.123fakturera.se/kunder.html",
  },
  {
    swedish: "Om oss",
    english: "About Us",
    goto: "https://www.123fakturera.se/omoss.html",
  },
  {
    swedish: "Kontakta oss",
    english: "Contact Us",
    goto: "https://www.123fakturera.se/kontaktaoss.html",
  },
];

/**
 * Header component for the application.
 * Displays the logo, navigation menu, and language selection dropdown.
 *
 * @param {Array} languages - List of available languages.
 * @param {Object} selectedLanguage - Currently selected language.
 * @param {Function} setSelectedLanguage - Function to update the selected language.
 */
function Header({ languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <div className="header">
      {/* Logo */}
      <img className="logo" src="/logo.png" alt="Logo" />

      {/* Menu Dropdown for smaller screens */}
      <MenuDropdown menus={menus} selectedLanguage={selectedLanguage} />

      {/* Navigation bar and language dropdown */}
      <div className="header-content">
        <nav className="nav-bar">
          {menus.map((item) => (
            <div
              className="nav-item"
              key={item.goto}
              onClick={() => window.open(item.goto, "_blank")}
            >
              {item[selectedLanguage.value]}
            </div>
          ))}
        </nav>
        <LanguageDropdown
          languages={languages}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
    </div>
  );
}

export default Header;
