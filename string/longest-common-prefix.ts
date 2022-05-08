function longestCommonPrefix(strs: string[]): string {
  let res = ''
  let i = 0

  if (strs.length === 0) {
    return ''
  }

  while(isSameAtColumn(strs, i)) {
    res = res.concat(strs[0].charAt(i))
    i++
  }

  return res
};

function isSameAtColumn(strs: string[], idx: number): boolean {
  let char = ''
  // console.log(idx)

  for (let index = 0; index < strs.length; index++) {
    const str = strs[index]
    const newChar = str.charAt(idx)
    if (!newChar) return false

    if (!char) {
      char = newChar
    } else {
      if (char !== newChar) {
        return false
      }
    }
  }

  return true
}

console.log(longestCommonPrefix([
  's',
  'c',
  'ab'
]))