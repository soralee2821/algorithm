function solution(a, b) {
  var answer = '';
  const week = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
  let day = new Date(`2016, ${a}, ${b}`);
  answer = week[day.getDay()];
  return answer;
}
