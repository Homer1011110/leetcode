/* 
  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
  你可以按任意顺序返回答案。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/two-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) throw 'length of nums is invalid'
  let map = new Map<number, Array<number>>()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    let idxs = map.get(n)
    if (!idxs) idxs = []
    idxs.push(i)
    map.set(n, idxs)
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const m = target - n
    const idxs = map.get(m)

    if (!idxs) continue

    if (m == n && idxs.length > 1) {
      return idxs
    } else if (m != n && idxs.length > 0) {
      return [idxs[0], i]
    }
  }

  return []
};

console.log(twoSum([3,3], 6))