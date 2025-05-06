import React from "react";

/**
 * LanguageDropdown Component
 * Provides a dropdown menu for selecting a language.
 * Displays the currently selected language and allows users to switch between available languages.
 *
 * @param {Array} languages - List of available languages with their labels and flags.
 * @param {Object} selectedLanguage - The currently selected language object.
 * @param {Function} setSelectedLanguage - Function to update the selected language.
 */
function LanguageDropdown({ languages, selectedLanguage, setSelectedLanguage }) {
  const languageDropdownRef = React.useRef(null); // Reference to the dropdown container

  /**
   * Effect to handle clicks outside the dropdown.
   * Closes the dropdown if a click occurs outside of it.
   */
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!languageDropdownRef?.current?.contains(event.target)) {
        languageDropdownRef.current.style.height = 0; // Collapse the dropdown
      }
    };

    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-dropdown">
      {/* Display the currently selected language */}
      <div
        className="language-info"
        onClick={() => {
          if (languageDropdownRef.current) {
            languageDropdownRef.current.style.height = "6.2rem"; // Expand the dropdown
          }
        }}
      >
        <span className="language">{selectedLanguage.lang}</span>
        <img
          className="language-flag"
          src={selectedLanguage.flag}
          alt="Selected Language Flag"
        />
      </div>

      {/* Dropdown content with available languages */}
      <div className="dropdown-content" ref={languageDropdownRef}>
        {languages.map((lang) => (
          <div
            className="language-info"
            key={lang.value}
            onClick={() => {
              setSelectedLanguage(lang); // Update the selected language
              if (languageDropdownRef.current) {
                languageDropdownRef.current.style.height = 0; // Collapse the dropdown after selection
              }
            }}
          >
            <span className="language">{lang.lang}</span>
            <img
              className="language-flag"
              src={lang.flag}
              alt={`${lang.lang} Flag`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageDropdown;
