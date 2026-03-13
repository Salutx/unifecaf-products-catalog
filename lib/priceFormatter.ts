export const priceFormatter = (price?: number): string => {
  if (!price) return "";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    compactDisplay: "short",
    notation: "compact",
  }).format(price);
};
