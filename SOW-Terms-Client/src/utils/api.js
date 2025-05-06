/**
 * Fetch content from the backend API based on the selected language.
 *
 * @param {string} lang - The language to fetch content for (e.g., "english", "swedish").
 * @returns {Promise<Object>} The content data retrieved from the backend.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const fetchContent = async (lang) => {
  try {
    // Send a GET request to the backend API
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/content/${lang}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse and return the response as JSON
    return response.json();
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching content:", error);
    throw error;
  }
};
