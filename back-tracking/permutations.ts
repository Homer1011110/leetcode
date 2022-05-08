/* 
  给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

  示例 1：
  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  https://leetcode-cn.com/problems/permutations/
 */

/* 
  思路: 某个排列长度一定为n, 选取第i个元素时, 依次从nums中剩余的元素中进行试探
 */
function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const len = nums.length
  let t: number[] = [] // 单轮探索的结果
  function dfs (curIdx: number) {
    if (curIdx === len) {
      // 结束一次探索, 保存结果并回溯上一步, 重新探索
      return res.push(t.slice())
    }

    // console.log('[dfs] nums=', nums)
    for (let i = 0; i < nums.length; i++) {
      if (Number.isNaN(nums[i])) continue

      t.push(nums[i])
      // console.log(`[dfs] t=${t} i=${i} n=${nums[i]}`)
      nums[i] = NaN
      dfs(curIdx + 1)
      nums[i] = t.pop() as number
    }
  }

  dfs(0)

  return res
};

console.log(permute([1, 2]))