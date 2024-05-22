const _ = require("lodash");

function deepCloneObject(array, deepCloneObject) {
  return _.deepClone(array, chunkSize);
}
function mergeObjects(array, mergeObjects) {
  return _.mergeObjects(array, mergeObjects);
}
module.exports = { deepCloneObject, mergeObjects };
