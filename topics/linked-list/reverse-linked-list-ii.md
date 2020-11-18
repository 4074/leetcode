### [92\. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

Difficulty: **Medium**  

Related Topics: [Linked List](https://leetcode.com/tag/linked-list/)


Reverse a linked list from position _m_ to _n_. Do it in one-pass.

**Note: **1 ≤ _m_ ≤ _n_ ≤ length of list.

**Example:**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const dummy = new ListNode(0, head)
    let node = dummy
    
    while (m > 1) {
        node = node.next
        m -= 1
        n -= 1
    }
    
    const first = node.next
    while (n > 1) {
        const prev = node.next
        node.next = first.next
        first.next = node.next.next
        node.next.next = prev
        n -= 1
    }
    
    return dummy.next
};
```