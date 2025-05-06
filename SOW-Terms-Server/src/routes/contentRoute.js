const contentController = require("../controllers/contentController");

/**
 * Registers the content-related routes for the application.
 * This route handles requests to fetch content based on the specified language.
 *
 * @param {Object} fastify - The Fastify instance.
 */
module.exports = async (fastify) => {
  /**
   * Route to fetch content by language.
   * @route GET /content/:language
   * @param {string} language - The language parameter to filter content.
   */
  fastify.get("/content/:language", contentController.getContentByLanguage);
};
