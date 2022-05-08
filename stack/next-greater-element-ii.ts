/* 
  给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
  数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/next-greater-element-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function nextGreaterElements(nums: number[]): number[] {
  if (nums.length === 1) return [-1]

  let max = nums[0]
  let maxElIdx = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxElIdx = i
    }
  }

  const stack: number[] = []
  const mp = new Map<number, number>()
  let i = maxElIdx
  while (true) {
    // console.log(`[i=${i}] ${nums[i]}`)
    const n = nums[i]
    while(stack.length !== 0 && n >= stack[stack.length - 1]) {
      stack.pop()
    }
    mp.set(i, stack.length === 0 ? -1 : stack[stack.length - 1])
    stack.push(n)


    if (maxElIdx === nums.length - 1 && i === 0) break
    if (maxElIdx < nums.length - 1 && i === maxElIdx + 1) break

    if (i === 0) {
      i = nums.length - 1
    } else {
      i--
    }
  }

  // console.log(mp)
  return nums.map((n, i) => mp.get(i) as number)
};

console.log(nextGreaterElements([100,1,11,1,120,111,123,1,-1,-100]))
// expect [120,11,120,120,123,123,-1,100,100,100]