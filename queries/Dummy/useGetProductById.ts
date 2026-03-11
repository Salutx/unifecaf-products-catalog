import getProductById from "@/api/services/Dummy/GetProductById.service";
import { useQuery } from "@tanstack/react-query";

const useGetProductById = (productId: number) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });
};

export default useGetProductById;
