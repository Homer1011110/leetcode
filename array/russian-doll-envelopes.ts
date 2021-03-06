/*
  俄罗斯套娃信封问题
  给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
  当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
  请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
  注意：不允许旋转信封。
*/

function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length === 0) return 0

  envelopes.sort((a: number[], b: number[]) => {
    if (a.length !== 2 || b.length !== 2) throw 'param error'
    return a[0] - b[0]
  })


  return 0
};