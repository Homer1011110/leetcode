/* 
  给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
*/

/* 
  暴力枚举 O(n^2)
 */
/* 
function subarraySum(nums: number[], k: number): number {
  let count: number = 0;
  for (let start = 0; start < nums.length; start++) {
      let sum = 0;
      // 遍历至start = 3时，计算[2, 3] [1, 2, 3] [0, 1, 2, 3]
      for (let end = start; end >= 0; end--) {
          sum += nums[end];
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};
 */


/* 
  前缀和数组 pre[i] = nums[0]...nums[i]之和
  pre[i] - pre[i - 1] = nums[i]
  pre[i] - pre[j - 1] = nums[j] + ... + nums[i] = k
*/
function subarraySum(nums: number[], k: number): number {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0, pre = 0;
  for (const x of nums) {
      pre += x;
      if (mp.has(pre - k)) {
          count += mp.get(pre - k);
      }
      if (mp.has(pre)) {
          mp.set(pre, mp.get(pre) + 1);
      } else {
          mp.set(pre, 1);
      }
  }
  return count;
};

console.log(subarraySum([-1,-1,1], 0))