/* 
  给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  子数组 是数组中的一个连续部分。

  https://leetcode-cn.com/problems/maximum-subarray/
 */

function maxSubArray(nums: number[]): number {
  if (nums.length < 1) throw 'length of nums is invalid'

  let sum = nums[0], max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    if (n < 0) {
      max = Math.max(sum, max)
    }

    if (sum < 0) {
      sum = n
    } else {
      sum += n
    }
  }

  return Math.max(max, sum)
};

console.log(maxSubArray(
[-2,1,-3,4,-1,2,1,-5,4]))