import React from "react";

/**
 * Loader Component
 * Displays a square-based animated loader to indicate a loading state.
 * The loader consists of a grid of squares that animate in sequence.
 *
 * @param {string} className - Optional CSS class to style the loader container.
 */
const Loader = ({ className }) => {
  return (
    <div className={className}>
      <div className="loader-square" id="sq1" />
      <div className="loader-square" id="sq2" />
      <div className="loader-square" id="sq3" />
      <div className="loader-square" id="sq4" />
      <div className="loader-square" id="sq5" />
      <div className="loader-square" id="sq6" />
      <div className="loader-square" id="sq7" />
      <div className="loader-square" id="sq8" />
      <div className="loader-square" id="sq9" />
    </div>
  );
};

export default Loader;
