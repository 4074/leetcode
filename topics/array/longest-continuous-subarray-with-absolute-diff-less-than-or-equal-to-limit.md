### [1438\. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

Difficulty: **Medium**


Given an array of integers `nums` and an integer `limit`, return the size of the longest continuous subarray such that the absolute difference between any two elements is less than or equal to `limit`_._

In case there is no subarray satisfying the given condition return 0.

**Example 1:**

```
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4\. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4\. 
Therefore, the size of the longest subarray is 2.
```

**Example 2:**

```
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
```

**Example 3:**

```
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `1 <= nums[i] <= 10^9`
*   `0 <= limit <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const n = nums.length
    if (n === 0) return 0
    
    const tree = new BinarySearchTree(true)
    let left = 0, right = 0
    let ans = 0
    
    while (right < n) {
        tree.insert(nums[right])
        
        let min = tree.min()
        let max = tree.max()
        
        while (max - min > limit) {
            tree.delete(nums[left])
            left += 1
            min = tree.min()
            max = tree.max()
        }
        
        ans = Math.max(ans, right - left + 1)
        
        right += 1
    }
    
    return ans
};
    
class BinarySearchTree {
    constructor(isSet = false) {
        this.root = null
        this.leftFirst = true

        this.isSet = isSet
        this.counter = new Map()
    }

    insert(val) {
        if (this.isSet) {
            this.counter.set(val, (this.counter.get(val) || 0) + 1)
            if (this.counter.get(val) > 1) return this
        }
        this.root = this.insertNode(this.root, val)
        return this
    }

    delete(val) {
        if (this.isSet) {
            if (this.counter.get(val) > 0) {
                this.counter.set(val, this.counter.get(val) - 1)
                if (this.counter.get(val) > 0) {
                    return this
                }
            }
        }
        this.root = this.deleteNode(this.root, val)
        return this
    }

    min() {
        const minChild = this.findMinChild(this.root)
        return minChild && minChild.node && minChild.node.val
    }

    max() {
        if (!this.root) return
        let node = this.root
        let current
        while (node) {
            current = node
            node = node.right
        }
        return current.val
    }

    has(val) {
        return !!this.findChild(this.root, val)
    }

    insertNode(root, val) {
        const node = new Node(val)
        if (!root) return node

        // Find the null node with val
        // Parent will store the null node's parent
        let parent = null
        let current = this.root

        while (current) {
            parent = current
            if (node.val === current.val) {
                current = this.leftFirst ? current.left : current.right
            } else if (node.val < current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }

        // Insert the node into the tree.
        if (node.val === parent.val) {
            if (this.leftFirst) {
                parent.left = node
            } else {
                parent.right = node
            }
        } else if (node.val < parent.val) {
            parent.left = node
        } else {
            parent.right = node
        }

        this.leftFirst = !this.leftFirst

        return root
    }

    deleteNode(root, val) {
        const current = this.findChild(root, val)
        if (!current) return root
        
        let { parent, node } = current
        let child = null
        
        if (!node.left) {
            // 1. No left child, the right child take the current place.
            child = node.right
        } else if (!node.right) {
            // 2. No right child, the left child take the current place.
            child = node.left
        } else {
            // 3. Has two children, find the min node of right child.
            // Remove it from tree, and then insert it into current place.
            const minChildOfRight = this.findMinChild(node.right)

            if (minChildOfRight.node === node.right) {
                // 3.1 If the min node is current's right child, the same as 1
                child = minChildOfRight.node
            } else {
                // The min child has no left child, and has right child.
                // So remove it using a shorthand impletement, but not use this.remove
                minChildOfRight.parent.left = minChildOfRight.node.right
                child = minChildOfRight.node
                child.right = node.right
            }

            // Link current left child to the new current
            child.left = node.left
        }

        // If no parent, the deleted node is root.
        // Let the child be the new root
        if (!parent) return child

        // Link the new current node to the parent
        parent[parent.val < node.val ? 'right' : 'left'] = child

        return root
    }

    findChild(root, val) {
        let parent = null
        let node = root
        while (node) {
            if (node.val === val) {
                return {
                    parent,
                    node
                }
            }
            parent = node
            if (val < node.val) {
                node = node.left
            } else {
                node = node.right
            }
        }
    }

    findMinChild(root) {
        if (!root) return
        let parent = null
        let node = root
        while (node.left) {
            parent = node
            node = node.left
        }
        return {
            parent,
            node
        }
    }

    preorder() {
        return this.walk(this.root, 'pre', [])
    }

    inorder() {
        return this.walk(this.root, 'in', [])
    }

    postorder() {
        return this.walk(this.root, 'post', [])
    }

    walk(node, order, result) {
        if (!node) return result
        if (order === 'pre') {
            result.push(node.val)
            this.walk(node.left, order, result)
            this.walk(node.right, order, result)
        } else if (order === 'in') {
            this.walk(node.left, order, result)
            result.push(node.val)
            this.walk(node.right, order, result)
        } else {
            this.walk(node.left, order, result)
            this.walk(node.right, order, result)
            result.push(node.val)
        }
        return result
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
```

Monotonic Queue
```javascript
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const n = nums.length
    if (n === 0) return 0
    
    let ans = 0
    const minQueue = []
    const maxQueue = []
    
    let left = 0
    for (let right = 0; right < n; right += 1) {
        const num = nums[right]
        while (minQueue.length && minQueue[minQueue.length - 1] > num) {
            minQueue.pop()
        }
        while (maxQueue.length && maxQueue[maxQueue.length - 1] < num) {
            maxQueue.pop()
        }
        minQueue.push(num)
        maxQueue.push(num)
        
        while (maxQueue[0] - minQueue[0] > limit) {
            const leftNum = nums[left]
            if (maxQueue[0] === leftNum) maxQueue.shift()
            if (minQueue[0] === leftNum) minQueue.shift()
            left += 1
        }
        
        ans = Math.max(ans, right - left + 1)
    }
    
    return ans
};
```