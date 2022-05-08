/*
  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
*/

/* 
  太慢了！！
*/

import { ListNode } from "./data";

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let lists: Array<ListNode> = []
  let p: ListNode | null = head
  while (p) {
    let pre = p
    p = p.next
    pre.next = null
    lists.push(pre)
  }

  while (lists.length > 1) {
    let list = merge2SortedLists(lists.shift() || null, lists.shift() || null)
    if (list) {
      lists.push(list)
    }
  }

  return lists[0]
};

// 先切割
function merge2SortedLists(head1: ListNode | null, head2: ListNode | null): ListNode | null {
  if (!head1) return head2
  if (!head2) return head1

  let p1: ListNode | null = head1
  let p2: ListNode | null = head2
  let head: ListNode | null = null
  let pre: ListNode | null = null

  while(p1 && p2) {
    let cur: ListNode
    if (p1.val < p2.val) {
      cur = p1
      p1 = p1.next
    } else {
      cur = p2
      p2 = p2.next
    }

    if (!pre) {
      head = pre = cur
    } else {
      pre.next = cur
      pre = cur
    }
  }

  let tail = p1 ? p1 : p2 ? p2 : null
  if (pre) {
    pre.next = tail
  }

  return head;
};

let head = new ListNode(
  1,
  new ListNode(
    3,
    new ListNode(
      7,
      new ListNode(
        5,
        new ListNode(
          4,
          new ListNode(
            2,
            new ListNode(
              6,
            )
          )
        )
      )
    )
  )
)

console.log(sortList(head))