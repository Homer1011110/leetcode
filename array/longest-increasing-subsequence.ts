/* 
  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

  子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/*
  动态规划
*/
// function lengthOfLIS(nums: number[]): number {
//   if (nums.length === 0) return 0

//   let dp: number[] = new Array(nums.length).fill(1)
//   let max: number = dp[0]

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//     max = Math.max(dp[i], max)
//   }

//   return max
// };

/* 
  二分查找
  参考: https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
  笔记: 
  1. 为什么遇到小的数字，要在同一堆上放？
    比如[6, 3, 5], 第一堆先放6, 遇到3时, 因为3比6更容易和后续的数字组成升序序列（3和5能升序，6和5不行）, 所以要用3替换掉6
  2. 为什么遇到大的数字要分成新的堆？
    新的一堆，表示升序序列中，新的一个元素（或者说坑位）
  3. 为什么遇到小的数字，可以放在多个堆上时，要放在最左边的？
    当遇到小的数字时，因为当前已计算出来的升序序列中，前面的比有它大的数。所以要临时保存当前结果（现有的堆不动），并【重新开始计算一个新的序列】。
    计算新序列时，是要从左边第一个堆开始计算（放牌），但是如果第一个堆（或者说前面的n个堆），数字都更小，那就可以直接复用这些堆（子序列），把牌放到他们的后一个堆上（也就是可放牌的最左边的那堆）
 */

function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0

  let res: number[] = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > res[res.length - 1]) {
      res.push(nums[i])
    } else {
      const idx = findBinary(res, nums[i])
      res[idx] = nums[i]
    }
  }

  return res.length
};

function findBinary(arr: number[], e: number): number {
  let left = 0,
      right = arr.length - 1
  while (true) {
    let idx = Math.floor((left + right) / 2)

    if (arr[idx] < e) {
      // right
      left = idx + 1
      if (left >= arr.length) {
        return arr.length
      }
    } else {
      if (idx - 1 < 0 || arr[idx - 1] < e) {
        // here
        return idx
      } else {
        right = idx - 1
      }
    }
  }
}

console.log(lengthOfLIS([0,1,0,3,2,3]))