function lengthOfLongestSubstring(s: string): number {
  let map = new Map()
  let longestStr = ''
  let start = 0
  let end = 0
  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index)
    if (map.has(char)) {
      if (longestStr.length < (end - start)) {
        longestStr = s.substring(start, end)
      }

      while(start !== map.get(char)) {
        map.delete(s.charAt(start))
        start++
      }
      start++
    }
    map.set(char, index)
    end++
  }

  if (longestStr.length < (end - start)) {
    longestStr = s.substring(start, end)
  }

  // console.log(longestStr)
  return longestStr.length
};

lengthOfLongestSubstring('pwwkew')