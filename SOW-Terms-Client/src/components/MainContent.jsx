import React from "react";
import Loader from "./Loading";

/**
 * MainContent Component
 * Displays the main content of the application, including terms and conditions.
 * Handles loading state and renders terms dynamically based on the provided content.
 *
 * @param {Object} content - The content object containing terms and related data.
 * @param {boolean} loading - Indicates whether the content is still loading.
 */
function MainContent({ content, loading }) {
  const { terms = {} } = content;

  /**
   * Sort terms based on their keys.
   * Filters keys that start with "terms_text_" and sorts them numerically.
   * Converts markdown-style links into HTML anchor tags.
   */
  const sortedTerms = Object.keys(terms)
    .filter((key) => key.startsWith("terms_text_") && !isNaN(key.split("_")[2]))
    .sort((a, b) => parseInt(a.split("_")[2]) - parseInt(b.split("_")[2]))
    .reduce((acc, key) => {
      const valueWithLinks = terms[key].replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2">$1</a>' // Convert markdown links to HTML links
      );
      acc[key] = valueWithLinks;
      return acc;
    }, {});

  return (
    <>
      {/* Display loader if content is still loading */}
      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}

      {/* Main heading with terms title and close button */}
      <div className="main-heading">
        <span className="main-heading-text">{terms?.terms}</span>
        <button className="close-button">{terms?.close}</button>
      </div>

      {/* Render sorted terms dynamically */}
      <div className="main-content">
        {Object.values(sortedTerms).map((term, index) => (
          <p
            key={term}
            className={index === 3 ? "mt-6" : index === 4 ? "mb-6" : ""}
            dangerouslySetInnerHTML={{ __html: term }} // Render HTML content safely
          />
        ))}
      </div>

      {/* Close button at the bottom */}
      <button className="close-button">{terms?.close}</button>

      <div className="mb-6" />
    </>
  );
}

export default MainContent;
