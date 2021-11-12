function solution(numbers) {
  const temp = [];
  for (let index1 = 0; index1 < numbers.length; index1++) {
      for (let index2 = index1 + 1; index2 < numbers.length; index2++ ) {
          temp.push(numbers[index1] + numbers[index2]);
      }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}
