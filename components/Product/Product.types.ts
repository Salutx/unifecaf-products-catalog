import { DummyProduct } from "@/global/types/DummyAPI.types";

export interface ProductProps {
  data: DummyProduct;
  onPress: () => void;
}
