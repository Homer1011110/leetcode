import { ListNode } from "./data";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null

  let start: ListNode | null = head
  while(reverseVal(start, k)) {
    for (let index = 0; index < k; index++) {
      if (!start) {
        throw 'error'
      }
      start = start.next
    }
  }
  return head;
};

function reverseVal(head: ListNode | null, length: number): boolean {
  let start: ListNode | null = head
  let end: ListNode | null = start

  let arr: Array<number> = []
  for (let index = 0; index < length; index++) {
    if (!end) return false
    arr.push(end.val)
    end = end.next
  }

  for (let i = 0; i < arr.length; i++) {
    if (!start) return false
    const e = arr[arr.length - 1 - i];
    // if (!e) return false
    start.val = e
    start = start.next
  }

  return true
}

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(
          5,
        )
      )
    )
  )
)

console.log(reverseKGroup(head, 2));