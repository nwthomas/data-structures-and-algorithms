function breadthFirstSearch(rootNode, searchValue) {
  let queue = [rootNode];
  while (queue.length) {
    const node = queue[0];
    if (node.value && node.value === searchValue) {
      return true;
    } else if (node.left || node.right) {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    queue.shift();
  }
  return false;
}

module.exports = breadthFirstSearch;
