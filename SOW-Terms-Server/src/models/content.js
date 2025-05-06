/**
 * Defines the Content model for the database.
 * This model represents the content table in the database, which stores terms
 * and their associated language information.
 *
 * @param {Object} sequelize - The Sequelize instance used to define the model.
 * @returns {Object} The Content model.
 */
module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");

  // Define the Content model with language and terms fields
  const Content = sequelize.define("Content", {
    /**
     * The language field represents the language of the terms.
     * It is a required field and must be unique.
     */
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    /**
     * The terms field stores the terms in JSON format.
     * It is a required field.
     */
    terms: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return Content;
};
