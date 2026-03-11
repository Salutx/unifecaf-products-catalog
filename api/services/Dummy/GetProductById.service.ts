import DummyAPI from "@/api/DummyAPI";
import { DummyProduct } from "@/global/types/DummyAPI.types";

/**
 * Fetches a product by its ID from the Dummy API.
 * @param productId - The ID of the product to fetch.
 * @returns A promise that resolves to the product data or null if an error occurs.
 */
const getProductById = async (
  productId: number,
): Promise<DummyProduct | null> => {
  try {
    const response = await DummyAPI.get<DummyProduct>(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `[GetProductById] Error fetching product with id ${productId}:`,
      error,
    );
    return null;
  }
};

export default getProductById;
