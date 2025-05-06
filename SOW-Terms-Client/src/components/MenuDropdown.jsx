import React from "react";
import logo from "../assets/menu.svg";

/**
 * MenuDropdown Component
 * Displays a dropdown menu for navigation links, which can be toggled open or closed.
 * The menu items are displayed based on the selected language.
 *
 * @param {Array} menus - List of menu items with labels and URLs.
 * @param {Object} selectedLanguage - Currently selected language.
 */
function MenuDropdown({ menus, selectedLanguage }) {
  const menuDropdownRef = React.useRef(null); // Reference to the dropdown container

  /**
   * Effect to handle clicks outside the dropdown.
   * Closes the dropdown if a click occurs outside of it.
   */
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuDropdownRef?.current?.contains(event.target)) {
        menuDropdownRef.current.style.height = 0; // Collapse the dropdown
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
    <div className="menu-dropdown">
      {/* Menu icon to toggle the dropdown */}
      <img
        className="menu-icon"
        src={logo}
        alt="Menu Icon"
        onClick={() => {
          if (menuDropdownRef.current) {
            menuDropdownRef.current.style.height = "22.25rem"; // Expand the dropdown
          }
        }}
      />

      {/* Dropdown content */}
      <div className="dropdown-content" ref={menuDropdownRef}>
        {menus.map((item) => (
          <div
            className="nav-item"
            key={item[selectedLanguage.value]} // Unique key based on the selected language
            onClick={() => {
              window.open(item.goto, "_blank"); // Open the link in a new tab
              if (menuDropdownRef.current) {
                menuDropdownRef.current.style.height = 0; // Collapse the dropdown after clicking
              }
            }}
          >
            {item[selectedLanguage.value]} {/* Display menu label based on the selected language */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuDropdown;
