/* 
  DNA序列
  https://www.nowcoder.com/practice/e8480ed7501640709354db1cc4ffd42a?tpId=37&tqId=21286&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fdifficulty%3D3%26page%3D1%26pageSize%3D50%26search%3D%26tpId%3D37%26type%3D37&difficulty=3&judgeStatus=undefined&tags=&title=

  [描述]
  一个 DNA 序列由 A/C/G/T 四个字母的排列组合组成。 G 和 C 的比例（定义为 GC-Ratio ）是序列中 G 和 C 两个字母的总的出现次数除以总的字母数目（也就是序列长度）。在基因工程中，这个比例非常重要。因为高的 GC-Ratio 可能是基因的起始点。

  给定一个很长的 DNA 序列，以及限定的子串长度 N ，请帮助研究人员在给出的 DNA 序列中从左往右找出 GC-Ratio 最高且长度为 N 的第一个子串。
  DNA序列为 ACGT 的子串有: ACG , CG , CGT 等等，但是没有 AGT ， CT 等等

  数据范围：字符串长度满足 1 \le n \le 1000 \1≤n≤1000  ，输入的字符串只包含 A/C/G/T 字母
  [输入描述]
  输入一个string型基因序列，和int型子串的长度
  [输出描述]
  找出GC比例最高的子串,如果有多个则输出第一个的子串
 */

function fn(s, n) {
  if (!s.length) return s
  if (s.length <= n) return s

  const set = new Set()
  set.add('C').add('G')

  let count = 0
  let max = 0
  let start = 0

  for (let i = 1; (i + n - 1) < s.length; i++) {
    if (set.has(s.charAt(i - 1))) { // 移出窗口
      count--
    }

    if (set.has(s.charAt(i + n - 1))) { // 移入窗口
      count++
    }

    if (max < count) {
      max = count
      start = i
    }
  }
  return s.substring(start, start + n)
}

console.log(fn('AACTGTGCACGACCTGA', 5))