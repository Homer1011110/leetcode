/* 
  有N件物品和一个容量为V的背包。第i件物品的费用是c[i]，价值是w[i]。求解将哪些物品装入背包可使价值总和最大。
  01背包: 每种物品只能买一个
  参考: http://cuitianyi.com/Pack/
 */

// 状态转移方程: 前i件物品装进限重为v的背包可以获得的最大价值 f[i][v] = max{ f[i-1][v], f[i-1][v-c[i]]+w[i] }
// 初始状态 f[0][0...v - 1] = 0
function pack01(
  t, // 总容量(总金额)
  v, // 物品的价值 list
  w, // 物品的重量 list
) {
  const num = v.length
  // const dp = new Array(num + 1).fill(0).map(() => new Array(t + 1).fill(0))
  const dp = new Array(t + 1).fill(0)

  for (let i = 1; i <= num; i++) {
    const weight = w[i - 1]
    const value = v[i - 1]
    for (let j = t; j >= 0; j--) {
      // c[i] > j时, 表示容量为j时, 装不下c[i], 只能不装
      if (weight > j) {
        dp[j] = dp[j]
      } else {
        dp[j] = Math.max(dp[j], dp[j - weight] + value)
      }
    }
  }

  console.log(dp)

  return dp[t]
}

console.log(pack01(4, [15, 20, 30], [1, 3, 4]))