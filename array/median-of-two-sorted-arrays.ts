/* 
  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
  算法的时间复杂度应该为 O(log (m+n)) 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLen = nums1.length + nums2.length
  if (totalLen === 0) return 0
  let isOdd = totalLen % 2 === 1
  let i = 0,
      j = 0,
      pre: number = 0,
      current: number = 0,
      end = isOdd ? Math.ceil(totalLen / 2) : totalLen / 2 + 1

  while ((i + j) < end) {
    if (i >= nums1.length) {
      pre = current
      current = nums2[j]
      j++
    } else if (j >= nums2.length) {
      pre = current
      current = nums1[i]
      i++
    } else if (nums1[i] < nums2[j]) {
      pre = current
      current = nums1[i]
      i++
    } else {
      pre = current
      current = nums2[j]
      j++
    }
  }

  if (isOdd) {
    return current
  } else {
    return (current + pre) / 2
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4, 5]))