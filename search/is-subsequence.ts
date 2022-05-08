/* 
  给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
  字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/is-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function isSubsequence(s: string, t: string): boolean {
  let charMap = new Map<string, number[]>()

  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i)
    let idxs = charMap.get(char)
    if (!idxs) idxs = []
    idxs.push(i)
    charMap.set(char, idxs)
  }

  let res = true
  let preIndex = -1
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    const idxs = charMap.get(char)

    if (!idxs) return false

    const curIndex = idxs.find((idx) => idx > preIndex)
    if (curIndex !== undefined) {
      preIndex = curIndex
    } else {
      return false
    }
  }

  return res
};

console.log(isSubsequence('axc', 'ahbgdc'))