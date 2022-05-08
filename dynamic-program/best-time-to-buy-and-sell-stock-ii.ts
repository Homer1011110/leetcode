/* 
  给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
  在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
  返回 你能获得的 最大 利润 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/* 
  简单遍历 时间O(n) 空间O(1)
 */
/* 
function maxProfit(prices: number[]): number {
  let buy = 0, sell = 0
  let sum = 0

  for (let i = 0; i < prices.length; i++) {
    const cur = prices[i];
    if (prices[sell] <= cur) {
      sell = i
    } else {
      sum += prices[sell] - prices[buy]
      sell = buy = i
    }
  }

  sum += prices[sell] - prices[buy]

  return sum
};
 */

/* 
  动态规划
 */
function maxProfit(prices: number[]): number {
  return 0
}
console.log(maxProfit([3, 2]))