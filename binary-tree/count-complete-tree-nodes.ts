/* 
  给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
  完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2^h 个节点。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/count-complete-tree-nodes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { TreeNode } from './data'

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0

  let h = 0
  let cur = root
  while (cur.left) {
    cur = cur.left
    h++
  }

  // 最底下一行最多有2^h个 [0, 2^h - 1]
  const length = Math.pow(2, h)
  const num = find(root, length, h, checkExist)
  let sum = num + 1
  // console.log(`sum=${sum}|h=${h}|max=${length}`)
  for (let i = 0; i < h; i++) {
    sum = sum + Math.pow(2, i)
  }

  return sum
};

function checkExist(root: TreeNode, height: number, idx: number): boolean {
  let cur: TreeNode | null = root
  let bit: number = 1
  for (let i = 0; i < height - 1; i++) {
    bit = bit << 1
  }
  // console.log('init:', bit.toString(2), idx.toString(2), idx)

  for (let i = 0; i < height; i++) {
    if (cur === null) throw 'height error'
    // console.log('calc:', bit.toString(2), (idx & bit).toString(2), idx & bit)
    if ((idx & bit) === 0) {
      cur = cur.left
    } else {
      cur = cur.right
    }
    bit = bit >> 1
  }

  // console.log('check exist', cur)
  return !!cur
}

// 传h进来
function find(root: TreeNode, length: number, height: number, check: typeof checkExist): number {
  let left = 0, right = length - 1

  while (left < right) {
    const i = Math.floor((left + right) / 2)
    const exist: boolean = check(root, height, i)
    console.log(`--left=${left} right=${right} exist=${exist} i=${i}--`)
    if (exist) {
      // console.log(check(root, height, i+1), i)
      if (!check(root, height, i + 1) || i >= length) {
        return i
      }
      left = i + 1
    } else {
      right = i - 1
    }
  }

  return left
}

const node = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(
      3,
    ),
    new TreeNode(
      4,
    ),
  ),
  new TreeNode(
    5,
    new TreeNode(
      6,
    ),
  ),
)
console.log(countNodes(node))

// checkExist(node, 2, 0)