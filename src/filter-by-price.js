import { createJSON, createXLSX,convertPriceStringToNumber } from "./utils.js";
/**
 * Filter an array of houses by maximum price and city
 * @param {Array} houses - Array of Houses to filter
 * @param {Number} maximumPrice - Maximum price to filter
 * @param {String} city - City to filter
 *
 */
function filterByPrice({ houses, maximumPrice, city }) {
  const filteredHouses = houses
    .filter(
      (house) =>
	  convertPriceStringToNumber(house.priceInCLP) < maximumPrice
	  )
    .map((filterHouse) => {
      return {
        Location: filterHouse.location,
        URL: filterHouse.url,
      };
    });

  createXLSX(filteredHouses, city);

  createJSON(city, filteredHouses);
}

export default filterByPrice;
