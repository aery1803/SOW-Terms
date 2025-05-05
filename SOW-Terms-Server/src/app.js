const fastify = require("fastify")({ logger: true, pluginTimeout: 20000 });
const cors = require("@fastify/cors");
const sequelizePlugin = require("./plugins/sequelize");
const routes = require("./routes/index");

const start = async () => {
  try {
    // Register plugins
    await fastify.register(cors, {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    });
    await fastify.register(sequelizePlugin);
    await routes(fastify);

    const PORT = process.env.PORT || 3000;
    const HOST = "0.0.0.0";

    await fastify.listen({ port: PORT, host: HOST });
    fastify.log.info(`Server listening on http://${HOST}:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
