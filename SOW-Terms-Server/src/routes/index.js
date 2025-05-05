module.exports = async (fastify) => {
  const { Content } = fastify.models;

  fastify.get("/terms/:language", async (request, reply) => {
    const { language } = request.params;
    try {
      const content = await Content.findOne({ where: { language } });
      if (!content) {
        return reply
          .status(404)
          .send({ error: "Terms not found for the specified language" });
      }
      return reply.send(content);
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
};
