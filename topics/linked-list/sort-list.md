### [148\. Sort List](https://leetcode.com/problems/sort-list/)

Difficulty: **Medium**  

Related Topics: [Linked List](https://leetcode.com/tag/linked-list/), [Sort](https://leetcode.com/tag/sort/)


Given the `head` of a linked list, return _the list after sorting it in **ascending order**_.

**Follow up:** Can you sort the linked list in `O(n logn)` time and `O(1)` memory (i.e. constant space)?

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

**Example 3:**

```
Input: head = []
Output: []
```

**Constraints:**

*   The number of nodes in the list is in the range `[0, 5 * 10<sup>4</sup>]`.
*   `-10<sup>5</sup> <= Node.val <= 10<sup>5</sup>`


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
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head
    let fast = head.next
    let slow = head
    
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    
    const head2 = slow.next
    slow.next = null
    
    let l1 = sortList(head)
    let l2 = sortList(head2)
    
    const dummy = new ListNode(0)
    let current = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    current.next = l1 || l2
    
    return dummy.next
};
```