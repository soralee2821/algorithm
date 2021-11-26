var isPalindrome = function(x) {
  x = x.toString();
  let reverseX = x.split('').reverse().join('');
  return x === reverseX ? true : false;
};