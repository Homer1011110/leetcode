/* 
  给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
  你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
  返回获得利润的最大值。
  注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

enum STATE {
  CAN_BUY,
  CAN_SELL,
}

function maxProfit(prices: number[], fee: number): number {
  // const dp: number[][] = new Array(prices.length).fill(0).map(() => [])
  let canBuy = 0, canSell = -prices[0]
  // dp[0][STATE.CAN_BUY] = 0
  // dp[0][STATE.CAN_SELL] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    let preCanBuy = canBuy, preCanSell = canSell
    const price = prices[i];
    canBuy = Math.max(
      preCanBuy, // 未持有 不动
      preCanSell + price - fee, // 卖出
    )
    canSell = Math.max(
      preCanSell, // 持有 不动
      preCanBuy - price, // 买入
    )
  }

  return Math.max(canBuy, canSell)
};

console.log(maxProfit([1,3,7,5,10,3], 3))