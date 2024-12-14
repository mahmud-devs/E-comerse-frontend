export const calculateDiscount = (originalPrice, discountPercent) => {
  const discountPrice = (originalPrice * discountPercent) / 100;
  const totalDiscounntPrice = originalPrice - discountPrice;
  return totalDiscounntPrice;
};
