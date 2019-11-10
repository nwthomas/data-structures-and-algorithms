// Helper functions
function getHelpers() {
  // Concatenates and flattens all numbers together in array of arrays
  function flatten(arr) {
    if (typeof arr !== 'object') return null;
    let final = [];
    for (let i = 0; i < arr.length; i++) {
      final = final.concat(arr[i]);
    }
    return final;
  }

  // Returns the count of the digits (length) of the number
  function digitCount(num) {
    if (typeof num !== 'number') return null;
    if (num === 0) return 0;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  // Returns the digit at a specific index counting from the right --> left
  function getDigit(num, i) {
    if (typeof num !== 'number' || typeof i !== 'number') return null;
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  // Returns the maximum length of any of the numbers in the array
  function mostDigits(arr) {
    if (typeof arr !== 'object' || !arr.length) return null;
    let largest = 0;
    arr.forEach(num => {
      const len = digitCount(num);
      if (len > largest) largest = len;
    });
    return largest;
  }

  // Returns an array of 10 empty arrays representing buckets for the radix sort
  function setupArr() {
    return [...Array(10)].fill([]);
  }

  return [flatten, digitCount, getDigit, mostDigits, setupArr];
}

// Radix Sort main function implementation
function radixSort(arr) {
  const [flatten, digitCount, getDigit, mostDigits, setupArr] = getHelpers();
  const maxDigits = mostDigits(arr);
  let finalArr = arr,
    iterations = 0;

  // Sort numbers with "buckets" using their radix (or base) property
  while (iterations < maxDigits) {
    const buckets = setupArr();
    finalArr.forEach(num => {
      const digit = getDigit(num, iterations);
      buckets[digit] = buckets[digit].concat([num]);
    });
    finalArr = flatten(buckets);
    iterations++;
  }
  return finalArr;
}

module.exports = radixSort;
