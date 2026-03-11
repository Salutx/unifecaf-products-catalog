import getProductsByCategory from "@/api/services/Dummy/GetProductsByCategory.service";
import { useQuery } from "@tanstack/react-query";

const useGetProductsByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["categories", categoryId],
    queryFn: () => getProductsByCategory(categoryId),
  });
};

export default useGetProductsByCategory;
