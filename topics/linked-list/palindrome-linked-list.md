### [234\. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

Difficulty: **Easy**  

Related Topics: [Linked List](https://leetcode.com/tag/linked-list/), [Two Pointers](https://leetcode.com/tag/two-pointers/)


Given a singly linked list, determine if it is a palindrome.

**Example 1:**

```
Input: 1->2
Output: false
```

**Example 2:**

```
Input: 1->2->2->1
Output: true
```

**Follow up:**  
Could you do it in O(n) time and O(1) space?


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return head
    
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    let head2 = slow.next
    slow.next = null
    let tail = head2
    
    while (tail.next) {
        const temp = tail.next.next
        tail.next.next = head2
        head2 = tail.next
        tail.next = temp
    }
    
    while (head && head2) {
        if (head.val !== head2.val) return false
        head = head.next
        head2 = head2.next
    }
    
    return true
};
```