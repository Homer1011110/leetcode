/* 
  给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
  设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
    卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

enum STATE {
  // DO_NOTHING,
  CAN_BUY, // 可以买股票
  CAN_SELL, // 可以卖股票
  COOLDOWN_1, // 卖掉股票当天
  COOLDOWN_2, // 卖掉股票第二天冷却
}

function maxProfit(prices: number[]): number {
  const dp: number[][] = new Array(prices.length).fill(0).map(() => [])

  dp[0][STATE.CAN_BUY] = 0
  dp[0][STATE.CAN_SELL] = -prices[0]
  dp[0][STATE.COOLDOWN_1] = 0 // 
  dp[0][STATE.COOLDOWN_2] = 0 // 应该是不存在?

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    dp[i][STATE.CAN_SELL] = Math.max(
      dp[i - 1][STATE.CAN_SELL], // 买入之后不动
      dp[i - 1][STATE.CAN_BUY] - price, // 过了冷却期至少1天之后买入
      dp[i - 1][STATE.COOLDOWN_2] - price // 过了冷却期直接买入
    )
    dp[i][STATE.COOLDOWN_1] = Math.max(
      dp[i - 1][STATE.COOLDOWN_2], // 冷却期过，买入又卖出
      dp[i - 1][STATE.CAN_BUY], // 第i天买入又卖出
      dp[i - 1][STATE.CAN_SELL] + price, // 卖出股票
    )
    dp[i][STATE.COOLDOWN_2] = dp[i - 1][STATE.COOLDOWN_1]
    dp[i][STATE.CAN_BUY] = Math.max(
      dp[i - 1][STATE.CAN_BUY], // 没买
      dp[i - 1][STATE.COOLDOWN_2], // 冷却结束, 没买
    )
  }

  // console.log(dp)
  const last = dp[prices.length - 1]
  return Math.max(last[STATE.COOLDOWN_1], last[STATE.COOLDOWN_2], last[STATE.CAN_BUY], last[STATE.CAN_SELL])
};

console.log(maxProfit([1,4,2]))