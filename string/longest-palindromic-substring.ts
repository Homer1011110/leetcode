function longestPalindrome(s: string): string {
  let res: string = ''
  for (let index = 0; index < s.length; index++) {
    let str = fn(s, index);
    if (str.length > res.length) {
      res = str
    }
  }
  return res
};

function fn(s: string, idx: number): string {
  let start = idx - 1
  let end = idx + 1
  while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
    start--
    end++
  }
  let res = s.substring(start+1, end)

  if (idx + 1 < s.length && s.charAt(idx) === s.charAt(idx+1)) {
    start = idx - 1
    end = idx + 2
    while (start >=0 && end < s.length && s.charAt(start) === s.charAt(end)) {
      start--
      end++
    }

    if (res.length < end - (start + 1)) {
      res = s.substring(start + 1, end)
    }

  }

  return res
}

console.log(longestPalindrome('bb'))