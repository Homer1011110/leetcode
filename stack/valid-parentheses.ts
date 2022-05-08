/* 
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function isValid(s: string): boolean {
  const leftBrackets = ['(', '{', '[']
  const rightBrackets = [')', '}', ']']
  const stack: string[] = []
  let res = true
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (leftBrackets.includes(char)) {
      stack.push(char)
    } else {
      const idx = rightBrackets.indexOf(char)
      if (idx < 0) throw `invalid char: s[${i}]=${char}`
      if (stack.length > 0 && stack[stack.length - 1] === leftBrackets[idx]) {
        stack.pop()
      } else {
        res = false
        break
      }
    }
  }

  return res && stack.length === 0
};

console.log(isValid(''))