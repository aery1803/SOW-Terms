// Importing Fastify with logging enabled and a custom plugin timeout
const fastify = require("fastify")({ logger: true, pluginTimeout: 20000 });

// Importing required plugins and modules
const cors = require("@fastify/cors"); // CORS plugin for handling cross-origin requests
const sequelizePlugin = require("./plugins/sequelize"); // Sequelize plugin for database interaction
const routes = require("./routes/index"); // Route definitions

/**
 * Starts the Fastify server and registers plugins and routes.
 * This function initializes the server, sets up middleware, and listens for incoming requests.
 */
const start = async () => {
  try {
    // Register CORS plugin with configuration
    await fastify.register(cors, {
      origin: "*", // Allow all origins
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    });

    // Register Sequelize plugin for database connection
    await fastify.register(sequelizePlugin);

    // Register application routes
    await routes(fastify);

    // Define the server's port and host
    const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
    const HOST = "0.0.0.0"; // Listen on all network interfaces

    // Start the Fastify server
    await fastify.listen({ port: PORT, host: HOST });
  } catch (err) {
    // Log any errors and exit the process
    fastify.log.error(err);
    process.exit(1);
  }
};

// Start the server
start();
