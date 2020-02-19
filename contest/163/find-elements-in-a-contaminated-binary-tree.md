### [1261\. Find Elements in a Contaminated Binary Tree](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/)

Difficulty: **Medium**


Given a binary tree with the following rules:

1.  `root.val == 0`
2.  If `treeNode.val == x` and `treeNode.left != null`, then `treeNode.left.val == 2 * x + 1`
3.  If `treeNode.val == x` and `treeNode.right != null`, then `treeNode.right.val == 2 * x + 2`

Now the binary tree is contaminated, which means all `treeNode.val` have been changed to `-1`.

You need to first recover the binary tree and then implement the `FindElements` class:

*   `FindElements(TreeNode* root)` Initializes the object with a contamined binary tree, you need to recover it first.
*   `bool find(int target)` Return if the `target` value exists in the recovered binary tree.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/11/06/untitled-diagram-4-1.jpg)**

```
Input
["FindElements","find","find"]
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]); 
findElements.find(1); // return False 
findElements.find(2); // return True 
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2019/11/06/untitled-diagram-4.jpg)**

```
Input
["FindElements","find","find","find"]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2019/11/07/untitled-diagram-4-1-1.jpg)**

```
Input
["FindElements","find","find","find","find"]
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
Output
[null,true,false,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True
```

**Constraints:**

*   `TreeNode.val == -1`
*   The height of the binary tree is less than or equal to `20`
*   The total number of nodes is between `[1, 10^4]`
*   Total calls of `find()` is between `[1, 10^4]`
*   `0 <= target <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    function dfs(node, val) {
        if (!node) return
        node.val = val
        dfs(node.left, 2 * val + 1)
        dfs(node.right, 2 * val + 2)
    }
    
    dfs(root, 0)
    this.root = root
};
​
/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    const queue = [this.root]
    
    while (queue.length) {
        let size = queue.length
        while (size) {
            const node = queue.pop()
            if (node.val === target) return true
            if (node.val < target) {
                if (node.left) queue.unshift(node.left)
                if (node.right) queue.unshift(node.right)
            }
            
            size -= 1
        }
    }
    
    return false
};
​
/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
```

Set
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.values = new Set()
    const dfs = (node, val) => {
        if (!node) return
        this.values.add(val)
        node.val = val
        dfs(node.left, 2 * val + 1)
        dfs(node.right, 2 * val + 2)
    }
    
    dfs(root, 0)
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.values.has(target)
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
```

Array
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    let max = 0
    for (let i = 0; i < 20; i += 1) {
        max = 2 * max + 2
    }
    this.values = Array(max + 1).fill(0)
    
    const dfs = (node, val) => {
        if (!node) return
        this.values[val] = 1
        node.val = val
        dfs(node.left, 2 * val + 1)
        dfs(node.right, 2 * val + 2)
    }
    
    dfs(root, 0)
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.values[target] === 1
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
```