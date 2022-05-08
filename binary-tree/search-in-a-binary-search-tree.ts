/* 
  给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
  你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { TreeNode } from "./data";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null

  if (root.val === val) {
    return root
  } else if (root.val < val) {
    return searchBST(root.right, val)
  } else {
    return searchBST(root.left, val)
  }
};

console.log(searchBST(
  new TreeNode(
    2,
    new TreeNode(
      1,
    ),
    new TreeNode(
      3,
      new TreeNode(
        2.5
      ),
      new TreeNode(
        4
      ),
    ),
  ),
  3
))