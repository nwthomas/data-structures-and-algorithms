function countingSort(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return [];
    if (arr[i] > largest) largest = arr[i];
  }
  const tracker = [...Array(largest + 1)].fill(0);
  const final = [...Array(arr.length - 1)].fill(0);
  arr.forEach(num => tracker[num]++);
  tracker.forEach((num, i) => {
    if (i) tracker[i] += tracker[i - 1];
  });
  arr.forEach((num, i) => {
    if (!!tracker[num]) {
      final[tracker[num] - 1] = num;
      tracker[num] -= 1;
    }
  });
  return final;
}
