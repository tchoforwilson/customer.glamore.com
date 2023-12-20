/**
 * @breif Formatter for currency before displaying
 * @param {String} currency
 * @param {Number} value
 * @returns
 */
export const currencyFormatter = (currency, value) => {
  const minimumFractionDigits = currency === "USD" ? 2 : 0;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits,
  });
  return formatter.format(value);
};
