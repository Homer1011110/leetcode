/* 
  给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/container-with-most-water
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function maxArea(height: number[]): number {
  if (height.length < 2) return 0

  let start = 0, end = height.length - 1
  let max = 0
  while (end > start) {
    let capacity = (end - start) * Math.min(height[start], height[end])
    max = Math.max(capacity, max)
    if (height[start] > height[end]) {
      end--
    } else {
      start++
    }
  }
  return max
};

console.log(maxArea([1, 1]))