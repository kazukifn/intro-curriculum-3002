'use strict';
const memo = new Map();
const length = 40;
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

/**
 * トリボナッチ数列を出力する
 * @param {int} n 
 * @returns {int} value
 */
function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}

for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}
