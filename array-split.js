const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2,5);

const removed = nums.splice(0,3, 889);

const together = nums.join(',');
console.log(removed);
console.log(nums);
console.log(together);