import { ListNode } from "./data";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false

  let fast: ListNode = head
  let slow: ListNode = head

  while(true) {
    if (!fast.next || !fast.next.next || !slow.next) return false // 最后一个条件可以不要的，为了处理ts校验
    if (fast.next == slow || fast.next.next == slow) return true
    fast = fast.next.next
    slow = slow.next
  }
};

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
a.next = b
b.next = c

console.log(hasCycle(a))