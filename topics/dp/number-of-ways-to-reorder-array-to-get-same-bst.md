### [1569\. Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given an array `nums` that represents a permutation of integers from `1` to `n`. We are going to construct a binary search tree (BST) by inserting the elements of `nums` in order into an initially empty BST. Find the number of different ways to reorder `nums` so that the constructed BST is identical to that formed from the original array `nums`.

For example, given `nums = [2,1,3]`, we will have 2 as the root, 1 as a left child, and 3 as a right child. The array `[2,3,1]` also yields the same BST but `[3,2,1]` yields a different BST.

Return _the number of ways to reorder_ `nums` _such that the BST formed is identical to the original BST formed from_ `nums`.

Since the answer may be very large, **return it modulo **`10^9 + 7`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/08/12/bb.png)

```
Input: nums = [2,1,3]
Output: 1
Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/08/12/ex1.png)**

```
Input: nums = [3,4,5,1,2]
Output: 5
Explanation: The following 5 arrays will yield the same BST: 
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2020/08/12/ex4.png)**

```
Input: nums = [1,2,3]
Output: 0
Explanation: There are no other orderings of nums that will yield the same BST.
```

**Example 4:**

**![](https://assets.leetcode.com/uploads/2020/08/12/abc.png)**

```
Input: nums = [3,1,2,5,4,6]
Output: 19
```

**Example 5:**

```
Input: nums = [9,4,2,1,3,6,5,7,8,14,11,10,12,13,16,15,17,18]
Output: 216212978
Explanation: The number of ways to reorder nums to get the same BST is 3216212999\. Taking this number modulo 10^9 + 7 gives 216212978.
```

**Constraints:**

*   `1 <= nums.length <= 1000`
*   `1 <= nums[i] <= nums.length`
*   All integers in `nums` are **distinct**.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const tree = new BinarySearchTree()
    const mod = 10 ** 9 + 7
    
    for (let i = 0; i < nums.length; i += 1) {
        tree.insert(nums[i])
    }
    
    const computeCache = Array(1001).fill().map(() => Array(1001).fill(-1))
    function compute(a, b) {
        if (a * b === 0) return 1
        if (a < b) [a, b] = [b, a]

        if (computeCache[a][b] < 0) {
            let dp = Array(a + 1).fill(1)

            for (let i = 2; i <= b; i += 1) {
                const dp1 = Array(a + 1).fill(0)
                let sum = 0
                for (let j = 0; j < dp.length; j += 1) {
                    sum = (sum + dp[j]) % mod
                    dp1[j] = sum
                }
                dp = dp1
            }

            let sum = 0
            for (const num of dp) {
                sum = (sum + num) % mod
            }
            computeCache[a][b] = sum
        }
        return computeCache[a][b]
    }
    
    function product(...nums) {
        let result = BigInt(1)
        for (const num of nums) {
            result = (result * BigInt(num)) % BigInt(mod)
        }
        return parseInt(result.toString())
    }
    
    function dfs(node) {
        if (!node) return [0, 1]
        const leftResult = dfs(node.left)
        const rightResult = dfs(node.right)
        return [
            leftResult[0] + rightResult[0] + 1,
            product(leftResult[1], rightResult[1], compute(leftResult[0], rightResult[0]))
        ]
    }
    
    const ans = dfs(tree.root)[1] - 1
    
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
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
```

Without BST
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const mod = 10 ** 9 + 7
    
    const computeCache = Array(1001).fill().map(() => Array(1001).fill(-1))
    function compute(a, b) {
        if (a * b === 0) return 1
        if (a < b) [a, b] = [b, a]

        if (computeCache[a][b] < 0) {
            let dp = Array(a + 1).fill(1)

            for (let i = 2; i <= b; i += 1) {
                const dp1 = Array(a + 1).fill(0)
                let sum = 0
                for (let j = 0; j < dp.length; j += 1) {
                    sum = (sum + dp[j]) % mod
                    dp1[j] = sum
                }
                dp = dp1
            }

            let sum = 0
            for (const num of dp) {
                sum = (sum + num) % mod
            }
            computeCache[a][b] = sum
        }
        return computeCache[a][b]
    }
    
    function product(...nums) {
        let result = BigInt(1)
        for (const num of nums) {
            result = (result * BigInt(num)) % BigInt(mod)
        }
        return parseInt(result.toString())
    }
    
    function dfs(nums) {
        if (nums.length <= 2) return 1
        
        const left = [], right = []
        for (let i = 1; i < nums.length; i += 1) {
            if (nums[i] < nums[0]) {
                left.push(nums[i])
            } else {
                right.push(nums[i])
            }
        }
        
        const leftResult = dfs(left)
        const rightResult = dfs(right)
        
        return product(leftResult, rightResult, compute(left.length, right.length))
    }
    
    const ans = dfs(nums) - 1
    
    return ans
};
```