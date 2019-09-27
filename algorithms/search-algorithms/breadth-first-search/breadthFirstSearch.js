function breadthFirstSearch(obj, searchTerm) {
  let queue = [];
  for (let key in obj) queue.push(obj[key]); // Initial push of keys to queue array
  while (queue.length > 0) {
    let value = queue.shift(); // Removes each key value from array
    if (value === searchTerm) return true; // Exit condition - If searchTerm is found, return true
    if (typeof value === 'object') {
      // If key is object, push key values in object to queue array
      for (let nestedKey in value) queue.push(value[nestedKey]);
    }
  }
  return false; // If the searchTerm is not found, return false
}
