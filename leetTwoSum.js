var twoSum = function(nums, target) {
  let result = [];
  const originalNums = nums.slice();
  for (let index = 0; index < originalNums.length; index++) {
    nums = originalNums.slice();
    const resume = target - originalNums[index];
    console.log("index", index);
    console.log("num", nums[index]);
    console.log("resume", resume);
    nums.splice(index, 1);
    let hasResume = nums.includes(resume);
    console.log(hasResume);
    if (!hasResume) {
      continue;
    } else {
      let resumeIndex = originalNums.indexOf(resume);
      if (resume === originalNums[index]) {
        resumeIndex = originalNums.indexOf(resume, resumeIndex + 1);
      }
      result.push(index, resumeIndex);
      break;
    }
  }
  return result;
};

const myNum = [2, 1, 9, 4, 4, 56, 90, 3]
const myTarget = 8;
//twoSum(myNum, myTarget);
console.log(twoSum(myNum, myTarget));