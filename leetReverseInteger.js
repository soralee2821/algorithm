var reverse = function(x) {
  debugger;
  const absX = Math.abs(x);
  let reverseX = absX.toString().split('').reverse().join('');
  reverseX = Number(reverseX);
  const rangeNumber = Math.pow(2, 31) + 1;
  if (reverseX > rangeNumber) {
    return 0;
  }
  const result = x > 0 ? reverseX : -reverseX;
  return result;
};

console.log(reverse(-12345));
