// Performance of O(|V| + |E|)

function breadthFirstSearch(obj, searchTerm) {
  let queue = [],
    key;
  for (key in obj) queue.push(obj[key]); // Initial push of keys to queue array
  while (queue.length > 0) {
    let value = queue.shift(); // Removes each key value from array
    if (value === searchTerm) return true; // Exit condition - If searchTerm is found, return true
    if (typeof value === "object") {
      // If key is object, push key values in object to queue array
      let nestedKey;
      for (nestedKey in value) queue.push(value[nestedKey]);
    }
  }
  return false; // If the searchTerm is not found, return false
}

let deep = {
  // Example object to be analyzed
  1: 2,
  3: { 4: "a", b: "c" },
  5: { 6: { 7: 8 } },
  9: { 10: { 11: { 12: { 13: { 14: { 15: 16 } } } } } }
};

console.log(breadthFirstSearch(deep, 16)); // Will return true.
console.log(breadthFirstSearch(deep, "c")); // Will return true.
