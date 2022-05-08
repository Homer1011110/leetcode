/* 
  给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
  https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 */

function findLengthOfLCIS(nums: number[]): number {
  let i = 0, j = 0, max = 0

  while (j < nums.length) {
    if (j - 1 >= 0 && nums[j - 1] >= nums[j]) i = j
    j++
    max = Math.max(max, j - i)
  }

  return max
};

console.log(findLengthOfLCIS([1,3,5,4,7]))