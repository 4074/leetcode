### [445\. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

Difficulty: **Medium**  

Related Topics: [Linked List](https://leetcode.com/tag/linked-list/)


You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Follow up:**  
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

**Example:**

```
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const s1 = []
    const s2 = []
    
    while (l1) {
        s1.push(l1.val)
        l1 = l1.next
    }
    
    while (l2) {
        s2.push(l2.val)
        l2 = l2.next
    }
    
    let carry = 0
    const dummy = new ListNode()
    
    while (s1.length || s2.length || carry) {
        let d1 = 0, d2 = 0
        if (s1.length) d1 = s1.pop()
        if (s2.length) d2 = s2.pop()
        
        let sum = d1 + d2 + carry
        carry = 0
        if (sum >= 10) {
            sum -= 10
            carry = 1
        }
        
        const node = new ListNode(sum)
        node.next = dummy.next
        dummy.next = node
    }
    
    return dummy.next
};
```