/* 
  给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
  一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
  例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-common-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

  for (let i = 1; i < dp.length; i++) {
    const arr = dp[i];
    for (let j = 1; j < arr.length; j++) {
      const len = arr[j];
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[text1.length][text2.length]
};

console.log(longestCommonSubsequence('abcde', 'ace'))