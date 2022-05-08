/* 
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target，返回 [-1, -1]。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function searchRange(nums: number[], target: number): number[] {
  let res = [-1, -1]

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === target) {
      if (res[0] === -1) {
        res = [i, i]
      } else {
        res[1] = i
      }
    }
  }

  return res
};

console.log(searchRange([], 10))

interface CompareFn<T> {
  (target: T, cur: T): number
}
// function compare<T>(a: T, b: T): number 

// arr默认升序排序
function binarySearch<T>(arr: T[], target: T, compareFn: CompareFn<T>): number[] {
  let left = 0, right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const compareRes = compareFn(target, arr[mid])
    if (compareRes > 0) {
      // 往右找
      left = mid + 1
    } else if (compareRes < 0) {
      // 往左找
      right = mid - 1
    } else {
      // 
    }
  }

  return []
}