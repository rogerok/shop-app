export const countPriceWithDiscount = (
  price: string | number,
  discountPercentage: string | number
) =>
  Number(((100 - Number(discountPercentage)) * Number(price)) / 100).toFixed(2);
