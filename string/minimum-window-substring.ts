/*
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
*/

function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) {
    return ''
  }

  let tMap = new Map<string, number>()
  let windowMap = new Map<string, number>()

  for (let i = 0; i < t.length; i++) {
    let char = t.charAt(i)
    let num = tMap.get(char)
    if (num) {
      tMap.set(char, num + 1)
    } else {
      tMap.set(char, 1)
    }
  }

  let start = 0
  let end = 0
  let minimumWindow = [start, end]

  while (end < s.length) {
    let eChar = s.charAt(end)
    if (tMap.has(eChar)) {
      // 命中, 减1, 到0时delete
      let num = windowMap.get(eChar)
      num === undefined ? windowMap.set(eChar, 1) : windowMap.set(eChar, num + 1)
    }

    end++

    if (!satisfy(tMap, windowMap)) continue
    if ((minimumWindow[1] === minimumWindow[0]) || (minimumWindow[1] - minimumWindow[0]) > (end - start)) {
      minimumWindow = [start, end]
    }

    while (true) {
      let sChar = s.charAt(start)
      if (tMap.has(sChar)) {
        let num = windowMap.get(sChar)
        if (num === undefined) throw 'error'
        windowMap.set(sChar, num - 1)
      }

      start++

      if (!satisfy(tMap, windowMap)) {
        if (minimumWindow[1] - minimumWindow[0] > end - (start - 1)) {
          minimumWindow = [start - 1, end]
        }
        break
      }
    }
  }

  return s.substring(minimumWindow[0], minimumWindow[1])
};

function satisfy(tMap: Map<string, number>, windowMap: Map<string, number>): boolean {
  for (const iterator of tMap.entries()) {
    const [char, num] = iterator
    const numInWindow = windowMap.get(char)
    if (numInWindow === undefined || numInWindow < num) return false
  }

  return true
}
