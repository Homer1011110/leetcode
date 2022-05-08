import { ListNode } from "./data";

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;

  let left = head;

  function traverse(node: ListNode): boolean {
    let res: boolean = true
    if (node.next) {
      res = traverse(node.next);
    }
    res = res && node.val === left.val
    if (left.next) left = left.next
    return res;
  }
  return traverse(head);
};



// 反转后半段链表，再判断两段链表是否相等

// function equal(a: ListNode | null, b: ListNode | null): boolean {
//   console.log(a)
//   console.log(b)
//   while (a) {
//     if (!b || a.val !== b.val) {
//       return false
//     }
//     a = a.next
//     b = b.next
//   }

//   return !b
// }


// function reverse(head: ListNode | null) : ListNode | null {
//   if (!head) return null;

//   let pre: ListNode | null = null;
//   let cur: ListNode | null = head;
//   let nxt: ListNode | null = null;

//   while (cur) {
//     nxt = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = nxt
//   }

//   return pre;
// }

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        3,
        new ListNode(
          1,
        )
      )
    )
  )
)

console.log(isPalindrome(head));