/* 
  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

import { TreeNode } from "./data";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) return null
  if (p === null || q === null) return null

  const ancestor = new Map<TreeNode, TreeNode>()
  dfs(root, p, q, ancestor)

  const set = new Set<TreeNode>()
  while (p) {
    set.add(p)
    p = ancestor.get(p) || null
  }

  while (q) {
    if (set.has(q)) break
    q = ancestor.get(q) || null
  }

  return q
};

function dfs(root: TreeNode, p: TreeNode, q: TreeNode, map: Map<TreeNode, TreeNode>) {
  if (map.has(q) && map.has(p)) return

  if (root.left !== null) {
    map.set(root.left, root)
    dfs(root.left, p, q, map)
  }

  if (root.right !== null) {
    map.set(root.right, root)
    dfs(root.right, p, q, map)
  }
}

const root = new TreeNode(
  1,
)

root.left = new TreeNode(2)
root.right = new TreeNode(3)
const p = new TreeNode(5)
const q = new TreeNode(6)
root.left.left = p
root.right.right = q

console.log(lowestCommonAncestor(root, p, q))