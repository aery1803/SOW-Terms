const fp = require("fastify-plugin");
const { Sequelize } = require("sequelize");
require("dotenv").config();

/**
 * Fastify plugin to set up and configure Sequelize for database interaction.
 * This plugin establishes a connection to the database, synchronizes models,
 * and decorates the Fastify instance with Sequelize and models for use throughout the application.
 *
 * @param {Object} fastify - The Fastify instance.
 */
module.exports = fp(async (fastify) => {
  // Initialize Sequelize with database credentials from environment variables
  let sequelize;

  /**
   * Function to establish a connection to the database.
   * Retries the connection up to a maximum number of attempts.
   */
  async function connectToDatabase(retries = 5, delay = 4000) {
    while (retries > 0) {
      try {
        sequelize = new Sequelize(
          process.env.DB_NAME, // Database name
          process.env.DB_USER, // Database user
          process.env.DB_PASSWORD, // Database password
          {
            host: process.env.DB_HOST, // Database host
            dialect: "postgres", // Database dialect (PostgreSQL)
            logging: false, // Disable logging for Sequelize
            dialectOptions: {
              ssl: {
                require: true, // Require SSL for secure connections
                rejectUnauthorized: false, // Allow self-signed certificates
              },
            },
          }
        );

        await sequelize.authenticate(); // Authenticate the database connection
        fastify.log.info(
          "Database connection has been established successfully."
        );
        return; // Exit the loop if the connection is successful
      } catch (error) {
        retries -= 1; // Decrement the retry count
        fastify.log.error(
          `Unable to connect to the database. Retries left: ${retries}`,
          error
        );
        if (retries === 0) {
          throw new Error(
            "Max retries reached. Unable to connect to the database."
          );
        }
        fastify.log.info(
          `Retrying database connection in ${delay / 1000} seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
      }
    }
  }

  // Establish the database connection
  await connectToDatabase();

  // Load and initialize the Content model
  const Content = require("../models/content")(sequelize);

  // Synchronize the database schema with the models
  await sequelize.sync({ alter: true });

  // Decorate the Fastify instance with Sequelize and models
  fastify.decorate("sequelize", sequelize);
  fastify.decorate("models", { Content });
});
