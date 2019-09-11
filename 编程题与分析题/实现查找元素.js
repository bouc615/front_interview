// findIndex

function isBigEnough(element) {
  return element >= 15;
}

function findIndex(array, fn, context) {
  
  for (let i = 0; i < array.length; i++) {
    // if (fn.call(context, array[i])) return i;
    if (fn(array[i])) return i;
  }
  return -1;
}

console.log(
  findIndex([1, 2, 3, 4], function(item) {
    if (item == 3) return true;
  })
); // 2
