/* 
  给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
  数组中的每个元素代表你在该位置可以跳跃的最大长度。
  判断你是否能够到达最后一个下标。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/jump-game
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function canJump(nums: number[]): boolean {
  // let arr: boolean[] = new Array(nums.length).fill(false)
  let preIdx = nums.length - 1

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= preIdx - i) {
      preIdx = i
    }
  }

  return preIdx === 0
};

console.log(canJump([3,2,1,0,4]))