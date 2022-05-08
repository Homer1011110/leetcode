/* 
  给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
  数组中的每个元素代表你在该位置可以跳跃的最大长度。
  你的目标是使用最少的跳跃次数到达数组的最后一个位置。
  假设你总是可以到达数组的最后一个位置。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/jump-game-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


function jump(nums: number[]): number {
  let arr: number[] = new Array(nums.length).fill(Infinity)
  arr[arr.length - 1] = 0

  for (let i = nums.length - 2; i >= 0; i--) {
    const n = nums[i];
    let res = Infinity
    for (let j = i + 1; j <= i + n && j < nums.length ; j++) {
      res = Math.min(res, arr[j])
    }
    arr[i] = res + 1
  }

  return arr[0]
};

console.log(jump([2,1,0,1,4]))