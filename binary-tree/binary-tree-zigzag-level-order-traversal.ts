/* 
  给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
  https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
*/
import { TreeNode } from "./data";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  let queue: TreeNode[][] = [[root]]
  let res = [[root.val]]

  for (let i = 0; i < queue.length; i++) {
    const curLv = queue[i]; // 第 i 层的结点
    const nxtLv = []
    const nxtLvVal = []
    // 先右后左(i % 2 === 0)   先左后右(i % 2 === 1)
    for (let j = curLv.length - 1; j >= 0; j--) {
      const node = curLv[j];
      if (i % 2 === 0) {
        if (node.right !== null) {
          nxtLv.push(node.right)
          nxtLvVal.push(node.right.val)
        }

        if (node.left !== null) {
          nxtLv.push(node.left)
          nxtLvVal.push(node.left.val)
        }
      } else {
        if (node.left !== null) {
          nxtLv.push(node.left)
          nxtLvVal.push(node.left.val)
        }

        if (node.right !== null) {
          nxtLv.push(node.right)
          nxtLvVal.push(node.right.val)
        }
      }
    }

    if (nxtLv.length > 0) {
      queue.push(nxtLv)
      res.push(nxtLvVal)
    }
  }

  return res
};

const node = new TreeNode(
  1,
  new TreeNode(
    2,
  ),
  new TreeNode(
    3,
  ),
)

console.log(zigzagLevelOrder(node))