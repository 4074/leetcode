### [1104\. Path In Zigzag Labelled Binary Tree](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/)

Difficulty: **Medium**


In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.

![](https://assets.leetcode.com/uploads/2019/06/24/tree.png)

Given the `label` of a node in this tree, return the labels in the path from the root of the tree to the node with that `label`.

**Example 1:**

```
Input: label = 14
Output: [1,3,4,14]
```

**Example 2:**

```
Input: label = 26
Output: [1,2,6,10,26]
```

**Constraints:**

*   `1 <= label <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    let row = 1
    for (let i = label; i >= 2; i /= 2) {
        row += 1
    }
    
    const path = [label]
    row -= 1
    while (row > 0) {
        const base = 1 << row
        const num = base - Math.floor(path[0] / 2) - 1 + base / 2
        path.unshift(num)
        row -= 1
    }
    
    return path
};
```