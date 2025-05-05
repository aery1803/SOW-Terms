// filepath: /fastify-sequelize-backend/fastify-sequelize-backend/src/controllers/index.js
const { User } = require('../models');

const getUsers = async (request, reply) => {
  try {
    const users = await User.findAll();
    reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: 'Failed to fetch users' });
  }
};

const createUser = async (request, reply) => {
  const { name, email } = request.body;
  try {
    const newUser = await User.create({ name, email });
    reply.status(201).send(newUser);
  } catch (error) {
    reply.status(400).send({ error: 'Failed to create user' });
  }
};

module.exports = {
  getUsers,
  createUser,
};