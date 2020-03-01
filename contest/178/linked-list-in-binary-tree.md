### [1367\. Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)

Difficulty: **Medium**


Given a binary tree `root` and a linked list with `head` as the first node. 

Return True if all the elements in the linked list starting from the `head` correspond to some _downward path_ connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/02/12/sample_1_1720.png)**

```
Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree.  
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/02/12/sample_2_1720.png)**

```
Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
```

**Example 3:**

```
Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: false
Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.
```

**Constraints:**

*   `1 <= node.val <= 100` for each node in the linked list and binary tree.
*   The given linked list will contain between `1` and `100` nodes.
*   The given binary tree will contain between `1` and `2500` nodes.


#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let result = false
    
    let headVals = []
    let h = head
    while (h) {
        headVals.push(h.val)
        h = h.next
    }
    const headStr = headVals.join(',')
    
    function dfs(current, vals) {
        if (result) return
        if (vals.join(',').indexOf(headStr) >= 0) {
            result = true
            return
        }
        
        if (!current) return
        vals.push(current.val)
        dfs(current.left, vals)
        dfs(current.right, vals)
        vals.pop()
    }
    
    dfs(root, [])
    
    return result
};
```