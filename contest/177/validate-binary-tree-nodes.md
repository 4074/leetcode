### [1361\. Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)

Difficulty: **Medium**


You have `n` binary tree nodes numbered from `0` to `n - 1` where node `i` has two children `leftChild[i]` and `rightChild[i]`, return `true` if and only if **all** the given nodes form **exactly one** valid binary tree.

If node `i` has no left child then `leftChild[i]` will equal `-1`, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/08/23/1503_ex1.png)**

```
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2019/08/23/1503_ex2.png)**

```
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
Output: false
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2019/08/23/1503_ex3.png)**

```
Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
Output: false
```

**Example 4:**

**![](https://assets.leetcode.com/uploads/2019/08/23/1503_ex4.png)**

```
Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
Output: false
```

**Constraints:**

*   `1 <= n <= 10^4`
*   `leftChild.length == rightChild.length == n`
*   `-1 <= leftChild[i], rightChild[i] <= n - 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const queue = [0]
    const seen = Array(n).fill(0)
    let count = 0
    
    while (queue.length) {
        let size = queue.length
        while (size) {
            size -= 1
            const node = queue.pop()
            if (seen[node]) return false
            
            seen[node] = 1
            count += 1
            
            if (leftChild[node] >= 0) queue.unshift(leftChild[node])
            if (rightChild[node] >= 0) queue.unshift(rightChild[node])
        }
    }
    
    return count === n
};
```