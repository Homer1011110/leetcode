/* 
  给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
  由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
  将最终结果插入 nums 的前 k 个位置后返回 k 。
  不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let pre: number = nums[0]
  let len: number = 0
  let i = 1
  for (; i < nums.length; i++) {
    const cur = nums[i]
    if (cur === pre) {
      len++
    } else {
      if (len > 0) {
        nums.splice(i - (len + 1), len)
        i -= len
      }
      pre = cur
      len = 0
    }
  }

  if (len > 0) {
    nums.splice(i - (len + 1), len)
  }

  return nums.length
};

let nums = [1, 1, 3, 3, 3]
removeDuplicates(nums)
console.log(nums)