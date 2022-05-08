/* 
  给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
  设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

enum STATE {
  buy1 = 0,
  sell1 = 1,
  buy2 = 2,
  sell2 = 3,
}

function maxProfit(prices: number[]): number {
  let dp: number[][] = new Array(prices.length).fill(0).map(() => [])
  dp[0][STATE.buy1] = -prices[0]
  dp[0][STATE.sell1] = 0
  dp[0][STATE.buy2] = -prices[0]
  dp[0][STATE.sell2] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][STATE.buy1] = Math.max(dp[i - 1][STATE.buy1], 0 - prices[i])
    dp[i][STATE.sell1] = Math.max(dp[i - 1][STATE.sell1], dp[i - 1][STATE.buy1] + prices[i])
    dp[i][STATE.buy2] = Math.max(dp[i - 1][STATE.buy2], dp[i - 1][STATE.sell1] - prices[i])
    dp[i][STATE.sell2] = Math.max(dp[i - 1][STATE.sell2], dp[i - 1][STATE.buy2] + prices[i])
  }

  console.log(dp)
  return Math.max(dp[prices.length - 1][STATE.sell1], dp[prices.length - 1][STATE.sell2])
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]))