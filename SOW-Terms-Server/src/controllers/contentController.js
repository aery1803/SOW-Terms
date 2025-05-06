/**
 * Controller to fetch content based on the specified language.
 * This function handles the logic for retrieving content from the database
 * for a given language parameter provided in the request.
 *
 * @param {Object} request - The HTTP request object containing parameters and other data.
 * @param {Object} reply - The HTTP reply object used to send responses back to the client.
 */
const getContentByLanguage = async (request, reply) => {
  const { Content } = request.server.models; // Accessing the Content model from the server instance
  const { language } = request.params; // Extracting the language parameter from the request
  try {
    // Attempt to fetch the content for the specified language from the database
    const content = await Content.findOne({ where: { language } });

    // If no content is found, return a 404 response with an appropriate error message
    if (!content) {
      return reply
        .status(404)
        .send({ error: "Content not found for the specified language" });
    }

    // If content is found, send it back in the response
    return reply.send(content);
  } catch (err) {
    // Log the error for debugging purposes and return a 500 response for server errors
    request.server.log.error(err);
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};

// Exporting the controller function for use in other parts of the application
module.exports = {
  getContentByLanguage,
};
