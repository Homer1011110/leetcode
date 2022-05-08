/* 
  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
  请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

  https://leetcode-cn.com/problems/longest-consecutive-sequence/
 */

/* 
  参考答案：
  https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/xiao-bai-lang-ha-xi-ji-he-ha-xi-biao-don-j5a2/
 */


/* 
  暴力解法 时间复杂度O(n^3)
 */
/* 
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0

  let max = 1
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let len = 1
    while (true) {
      let contain = false
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] == n + len) {
          contain = true
          break
        }
      }
      if (contain) {
        len++
      } else {
        max = Math.max(max, len)
        break
      }
    }
  }

  return max
};
 */

/* 
  上述解法的冗余查找：
  输入遍历到1时，会查找2,3,4是否存在；遍历到3时，会查找4是否存在，遍历到2时，会查找3,4是否存在 => 使用map来缓存使用
  时间复杂度降为O(n^2)
 */

/* function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  let max = 1
  let map = new Map<number, boolean>()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true)
  }

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let len = 1
    while (true) {
      let contain = map.has(n + len)

      if (contain) {
        len++
      } else {
        max = Math.max(max, len)
        break
      }
    }
  }

  return max
}; */

/* 
  上述解法的冗余查找：
  遍历到1时，会查找2,3,4；遍历到2时，又重复去查找3,4 => 
 */
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  let max = 1
  let map = new Map<number, boolean>()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true)
  }

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (map.has(n - 1)) continue

    let len = 1
    while (map.has(n + len)) {
      len++
    }
    max = Math.max(max, len)
  }

  return max
};

console.log(longestConsecutive([100,4,200,1,3,2]))