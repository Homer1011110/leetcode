/* 
  有 N 组物品和一个容量是 V 的背包。每组物品有若干个，同一组内的物品最多只能选一个
  每件物品的体积是 vij，价值是 wij，其中 i 是组号，j是组内编号
  求解将哪些物品装入背包，可使物品总体积不超过背包容量，且总价值最大。输出最大价值。
 */

function packGroup(
  t,
  vGroups, // value groups
  wGroups, // weight groups
) {
  const groupNum = vGroups.length
  const dp = new Array(groupNum + 1).fill(0).map(() => new Array(t + 1).fill(0))

  for (let i = 1; i <= groupNum; i++) {
    const values = vGroups[i - 1]
    const weights = wGroups[i - 1]
    console.log(i, values)
    const len = values.length

    for (let j = 1; j <= t; j++) {
      // 默认装不下
      dp[i][j] = dp[i - 1][j]

      for (let k = 0; k < weights.length; k++) {
        const weight = weights[k];
        const value = values[k]

        if (weight <= j) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weight] + value)
        }
      }
    }
  }

  console.log(dp)

  return dp[groupNum][t]
}

console.log(packGroup(
  8,
  [
    [1, 2, 4, 4],
    [1, 2, 3, 7],
    [1, 2, 3, 4],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ]
))