import { ListNode } from './data'

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let pre: ListNode | null = null;
  let cur: ListNode | null = head;
  let nxt: ListNode | null = null;

  while (cur) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt
  }

  return pre;
};

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      // new ListNode(
      //   4,
      //   new ListNode(
      //     5,
      //   )
      // )
    )
  )
)

console.log(reverseList(head));