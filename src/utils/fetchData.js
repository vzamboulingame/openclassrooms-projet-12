/**
 * Fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} - An object with the fetched data.
 * @throws {Error} - If an error occurs during the fetching process.
 */
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
