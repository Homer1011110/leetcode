/* 
  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
  https://leetcode-cn.com/problems/trapping-rain-water/
 */

function trap(height: number[]): number {
  if (height.length < 3) return 0

  let capacity = 0
  let leftHeight = height[0], rightHeight = height[height.length - 1]
  let left = 1, right = height.length - 2

  while (left < right) {
    if (height[left] < leftHeight) {
      // leftHeight = height[left]
      
    }
  }

  return capacity
};