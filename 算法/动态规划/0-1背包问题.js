function kanpSack(capacity, weights, values, n) {
  var KS = [],a,b;
  for (var i = 0; i <= n; i++) {
    KS[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        KS[i][w] = 0;
      } else if (weights[i - 1] > w) {
        KS[i][w] = KS[i - 1][w];
      } else {
        a = KS[i - 1][w - weights[i - 1]] + values[i - 1];
        b = KS[i - 1][w];

        KS[i][w] = a > b ? a : b;
      }
    }
     
  }
 findValues(n, capacity, KS, weights, values);
  return KS[n][capacity];
}

function findValues(n, capacity, KS, weights, values) {
  var i = n;
  var k = capacity;
  while (i > 0 && k > 0) {
    if (KS[i][k] !== KS[i - 1][k]) {
      console.log(`物品${i}重量：${weights[i - 1]},价值：${values[i - 1]}`);
      i--;
      k = k - KS[i][k];
    } else {
      i--;
    }
  }
}
var values = [3, 4, 5,8,10];
var weights = [2, 3, 4,5,9];
var capacity = 20;
var n = values.length;
console.log(kanpSack(capacity, weights, values, n));
