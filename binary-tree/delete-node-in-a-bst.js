/* 
  给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
  一般来说，删除节点可分为两个步骤：
  首先找到需要删除的节点；
  如果找到了，删除它。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class TreeNode {
  // val,
  // left,
  // right,
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


function deleteNode(root, key) {
  let father = null
  let direction = 0 // 0左边, 1右边

  function searchBST(node, val) {
    if (node === null) return null
    if (node.val === val) {
      return node
    } else if (node.val < val) {
      father = node
      direction = 1
      return searchBST(node.right, val)
    } else {
      father = node
      direction = 0
      return searchBST(node.left, val)
    }
  }

  const target = searchBST(root, key)
  if (!target) return root

  let childRoot = null
  if (target.left) {
    childRoot = target.left
    let maxNode = findMaxNode(childRoot)
    maxNode.right = target.right
  } else if (target.right) {
    childRoot = target.right
  }

  if (father) {
    if (direction === 0) {
      father.left = childRoot
    } else {
      father.right = childRoot
    }
    return root
  } else {
    return childRoot
  }
};

function findMaxNode(root) {
  let cur = root
  while (cur.right) {
    cur = cur.right
  }
  return cur
}

const root = new TreeNode(
  5,
  new TreeNode(
    3,
    new TreeNode(
      2,
    ),
    new TreeNode(
      4,
    ),
  ),
  new TreeNode(
    6,
    new TreeNode(
      5.5,
    ),
    new TreeNode(
      7,
    ),
  ),
)

console.log(deleteNode(root, 5))