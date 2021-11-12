function solution(arr, divisor) {
  var answer = [];
  for (let index = 0; index < arr.length; index++) {
      if (arr[index] % divisor === 0) {
          answer.push(arr[index]);
      }
  }
  answer = answer.sort(function (a, b) {return a - b});
  if (!answer.length) answer.push(-1);
  return answer;
}
