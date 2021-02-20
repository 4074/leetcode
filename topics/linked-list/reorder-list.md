### [143\. Reorder List](https://leetcode.com/problems/reorder-list/)

Difficulty: **Medium**  

Related Topics: [Linked List](https://leetcode.com/tag/linked-list/)


Given a singly linked list _L_: _L_<sub style="display: inline;">0</sub>→_L_<sub style="display: inline;">1</sub>→…→_L_<sub style="display: inline;">_n_-1</sub>→_L_<sub style="display: inline;">n</sub>,  
reorder it to: _L_<sub style="display: inline;">0</sub>→_L_<sub style="display: inline;">_n_</sub>→_L_<sub style="display: inline;">1</sub>→_L_<sub style="display: inline;">_n_-1</sub>→_L_<sub style="display: inline;">2</sub>→_L_<sub style="display: inline;">_n_-2</sub>→…

You may **not** modify the values in the list's nodes, only nodes itself may be changed.

**Example 1:**

```
Given 1->2->3->4, reorder it to 1->4->2->3.
```

**Example 2:**

```
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return head
    let fast = head
    let slow = head
    
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    
    function reverse(head) {
        let current = head
        let next = null
        
        while (current.next) {
            const node = current.next
            current.next = next
            next = current
            current = node
        }
        
        current.next = next
        return current
    }
    
    let current1 = head
    let current2 = reverse(slow.next)
    slow.next = null
    
    while (current1 && current2) {
        const n1 = current1.next
        const n2 = current2.next
        current1.next = current2
        current2.next = n1
        current1 = n1
        current2 = n2
    }
    
    return head
};
```