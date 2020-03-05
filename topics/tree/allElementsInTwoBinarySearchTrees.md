### [1305\. All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

Difficulty: **Medium**


Given two binary search trees `root1` and `root2`.

Return a list containing _all the integers_ from _both trees_ sorted in **ascending** order.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png)

```
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
```

**Example 2:**

```
Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
```

**Example 3:**

```
Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
```

**Example 4:**

```
Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
```

**Example 5:**

![](https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png)

```
Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
```

**Constraints:**

*   Each tree has at most `5000` nodes.
*   Each node's value is between `[-10^5, 10^5]`.


#### Solution

Language: **JavaScript**

Insert and Inorder Travel Binary Search Tree
```javascript
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    function insert(root, node) {
        if (!node) return
        let x = root
        let p
        while (x) {
            p = x
            if (node.val < x.val) {
                x = x.left
            } else {
                x = x.right
            }
        }
        if (p) {
            if (node.val < p.val) {
                p.left = node
            } else {
                p.right = node
            }
        }
    }
    
    function insertToOne(node) {
        if (node) {
            insertToOne(node.left)
            insertToOne(node.right)
            node.left = null
            node.right = null
            insert(root1, node)
        }
    }
    
    const result = []
    let root
    if (root1 && root2) {
        root = root1
        insertToOne(root2)
    } else if (!root1) {
        root = root2
    } else {
        root = root1
    }
    function output(node) {
        if (node) {
            output(node.left)
            result.push(node.val)
            output(node.right)
        }
    }
    output(root)
    
    return result
};
```

Travel and Sort
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    function travels(node, ans) {
        if (node) {
            travels(node.left, ans)
            ans.push(node.val)
            travels(node.right, ans)
        }
        return ans
    }
    
    const arr = travels(root1, [])
    travels(root2, arr)
    arr.sort((a, b) => a - b)
    
    return arr
};
```

Inorder Travel and Merge Sort
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    function travels(node, ans) {
        if (node) {
            travels(node.left, ans)
            ans.push(node.val)
            travels(node.right, ans)
        }
        return ans
    }
    
    const arr1 = travels(root1, [])
    const arr2 = travels(root2, [])
    const arr = []
    
    const n = arr1.length + arr2.length
    let i = 0, j = 0
    while(i + j < n) {
        if (i === arr1.length) {
            while (j < arr2.length) {
                arr.push(arr2[j])
                j += 1
            }
        } else if (j === arr2.length) {
            while (i < arr1.length) {
                arr.push(arr1[i])
                i += 1
            }
        } else {
            if (arr1[i] < arr2[j]) {
                arr.push(arr1[i])
                i += 1
            } else {
                arr.push(arr2[j])
                j += 1
            }
        }
    }
    
    return arr
};
```