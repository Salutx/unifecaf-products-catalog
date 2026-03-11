// Category Types
export interface DummyCategory {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

// Product Types

export type DummyProductReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type DummyProductMeta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export interface DummyProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: DummyProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: string;
  meta: DummyProductMeta;
  images: string[];
  thumbnail: string;
}
