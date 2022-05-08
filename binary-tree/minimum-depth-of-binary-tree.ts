/* 
  给定一个二叉树，找出其最小深度。
  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
  说明：叶子节点是指没有子节点的节点。

  https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

import { TreeNode } from "./data"

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const queue: TreeNode[] = [root]
  let level = 0
  let timesOfCurLevel = 0
  let numberOfCurLevel = 1
  let numberOfNxtLevel = 0

  while(true) {
    if (timesOfCurLevel >= numberOfCurLevel) {
      level++
      numberOfCurLevel = numberOfNxtLevel
      numberOfNxtLevel = 0
      timesOfCurLevel = 0
    }

    timesOfCurLevel++
    const node: TreeNode = queue.shift() as TreeNode

    if (node.left === null && node.right === null) {
      break
    }

    if (node.left !== null) {
      numberOfNxtLevel++
      queue.push(node.left)
    }

    if (node.right !== null) {
      numberOfNxtLevel++
      queue.push(node.right)
    }
  }

  return level + 1
};

const node = new TreeNode(
  1,
  // new TreeNode(
  //   2,
  //   new TreeNode(
  //     4,
  //   ),
  //   new TreeNode(
  //     5,
  //   ),
  // ),
  // new TreeNode(
  //   3,
  // ),
)
console.log(minDepth(node))