/* 
  给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
  计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
  你可以认为每种硬币的数量是无限的。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/coin-change
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// coins里是整数
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0
  let dp = new Map<number, number>()
  dp.set(0, 0)

  // 遍历 amount 次, 计算W(1)...W(amount)
  for (let i = 1; i <= amount; i++) {
    let count: number | undefined
    // 遍历coins
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      const num = dp.get(i - coin)
      if (num !== undefined) {
        const cur = num + 1
        if (count === undefined) {
          count = cur
        } else {
          count = Math.min(cur, count)
        }
      }
    }
    if (count !== undefined) {
      dp.set(i, count)
    }
  }

  // console.log(dp)
  return dp.get(amount) || -1
};

console.log(coinChange([1], 0))