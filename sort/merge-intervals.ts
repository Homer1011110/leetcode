/* 
  以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-intervals
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function merge(intervals: number[][]): number[][] {
  if (intervals.length < 1) throw 'length of intervals is invalid'
  
  intervals.sort((a: number[], b: number[]) => {
    if (a.length !== 2 || b.length !== 2) throw 'length of intervals[i] is invalid'
    return a[0] - b[0]
  })

  // console.log('[init]', intervals)
  let res: number[][] = []
  let pre = null
  for (let i = 0; i < intervals.length; i++) {
    const e = intervals[i]
    // console.log('[loop]', pre, intervals[i])
    const [start, end] = e;
    if (pre === null) {
      pre = e
    } else if (start <= pre[1]) {
      pre = [pre[0], Math.max(pre[1], end)]
    } else {
      res.push(pre)
      pre = e
    }
  }

  if (pre !== null) {
    res.push(pre)
  }

  return res
};

console.log(merge([[8,10], [2,6], [1,3], [15,18]]))