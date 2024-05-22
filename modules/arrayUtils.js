const _ = require("lodash");

function chunkArray(array, chunkSize) {
  return _.chunk(array, chunkSize);
}
function findUniqueElements(array, findUniqueElements) {
  return _.findUniqueElements(array, findUniqueElements);
}
module.exports = { chunkArray, findUniqueElements };
