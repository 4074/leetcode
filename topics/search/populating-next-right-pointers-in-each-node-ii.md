### [117\. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)


Given a binary tree

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

**Follow up:**

*   You may only use constant extra space.
*   Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/02/15/117_sample.png)

```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

**Constraints:**

*   The number of nodes in the given tree is less than `6000`.
*   `-100 <= node.val <= 100`


#### Solution

Language: **JavaScript**

**BFS**
```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
​
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    let queue = [root]
    
    while (queue.length) {
        const next = []
        while (queue.length) {
            const node = queue.shift()
            node.next = queue[0] || null
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
        }
        queue = next
    }
    
    return root
};
```

**DFS**
```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let current = root
    let head = null, pre = new Node(0)
    
    while (current) {
        if (current.left) {
            pre.next = current.left
            pre = pre.next
            if (!head) head = pre
        }
        if (current.right) {
            pre.next = current.right
            pre = pre.next
            if (!head) head = pre
        }
        current = current.next
        if (!current) {
            current = head
            head = null
            pre = new Node(0)
        }
    }
    
    return root
};
```