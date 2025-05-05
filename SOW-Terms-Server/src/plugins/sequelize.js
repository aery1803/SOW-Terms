const fp = require("fastify-plugin");
const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = fp(async (fastify) => {
   const sequelize = new Sequelize(
     process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD,
     {
       host: process.env.DB_HOST,
       dialect: "postgres",
       logging: false,
       dialectOptions: {
         ssl: {
           require: true,
           rejectUnauthorized: false,
         },
       },
     }
   );

   const Content = require("../models/content")(sequelize);
   await sequelize.sync({ alter: true });
  fastify.decorate("sequelize", sequelize);
  fastify.decorate("models", { Content });
});
