const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Content = sequelize.define("Content", {
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    terms: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return Content;
};
