import fs from "fs";
import XLSX from "xlsx";

/**
 * Create a JSON file with the filtered houses of a specific city
 * @param {String} city the city to filter
 * @param {Array} filteredHouses the houses filtered
 */
export function createJSON(city, filteredHouses) {
  fs.writeFile(
    `./json/${city}.json`,
    JSON.stringify(filteredHouses),
    function (err) {
      if (err) {
        console.log(err);
      }
      console.log(`${city} JSON generated successfully`);
    }
  );
}

/**
 * Create a XLSX file with the filtered houses of a specific city
 * @param {Array} filteredHouses the houses filtered
 * @param {String} city the specific city of the houses
 */
export function createXLSX(filteredHouses, city) {
  const workSheet = XLSX.utils.json_to_sheet(filteredHouses);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "Houses");
  XLSX.writeFile(workBook, `./xlsx/${city}.xlsx`);
  console.log(`${city} XLSX File generated successfully`);
}

/**
 
Remove currency symbols and thousand separators from a price string and convert it to a number.
@param {string} priceString - The price string to convert.
@returns {number} - The price as a number.
*/
export function convertPriceStringToNumber(priceString) {
  return Number(priceString.replace("$", "").replace(/./g, ""));
}
