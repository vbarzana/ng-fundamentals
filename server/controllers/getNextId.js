module.exports = function getNextId(collection) {
  let nextId = 1;
  collection.forEach(function(item) {
    nextId = item.id >= nextId ? item.id + 1 : nextId;
  });
  return nextId;
}
