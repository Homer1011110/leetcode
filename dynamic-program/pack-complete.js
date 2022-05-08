/* 
  一共有N种物品，每种物品有无限多个，第i（i从1开始）种物品的重量为w[i]，价值为v[i]。在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？
  完全背包: 每种物品可以放无限个
 */

// 状态转移方程: 前i件物品装进限重为v的背包可以获得的最大价值 f[i][j] = max{ f[i-1][j], f[i-1][j-w[i]]+v[i] }
// 初始状态 f[0][0...v - 1] = 0

function packComplete(
  t, // weight limit
  v, // value list
  w, // weight list
) {
  const num = v.length
  const dp = new Array(num + 1).fill(0).map(() => new Array(t + 1).fill(0))

  for (let i = 1; i <= num; i++) {
    const weight = w[i - 1]
    const value = v[i - 1]

    for (let j = 1; j <= t; j++) {
      if (j >= weight) {
        // 装得下: 当前物品 + 1; 不装当前物品
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight] + value)
      } else {
        // 连一个都装不下: 不装当前物品
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  console.log(dp)

  return dp[num][t]
}

console.log(packComplete(4, [40, 20, 30], [3, 1, 2]))