import DummyAPI from "@/api/DummyAPI";
import { DummyCategory } from "@/global/types/DummyAPI.types";

/**
 * Fetches products for a specific category from the Dummy API.
 * @param {string} categoryId - The ID of the category to fetch products for.
 * @returns {Promise<DummyCategory | null>} A promise that resolves to the category with its products, or null if an error occurs.
 */
const getProductsByCategory = async (
  categoryId: string,
): Promise<DummyCategory | null> => {
  try {
    const response = await DummyAPI.get<DummyCategory>(
      `/products/category/${categoryId}`,
    );
    return response.data;
  } catch (error) {
    console.error(
      `[GetProductsByCategory] Error fetching products for category ${categoryId}:`,
      error,
    );
    return null;
  }
};

export default getProductsByCategory;
