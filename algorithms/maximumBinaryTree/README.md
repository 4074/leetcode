### [654\. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)

Difficulty: **Medium**


Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

1.  The root is the maximum number in the array.
2.  The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3.  The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

**Example 1:**  

```
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
```

**Note:**  

1.  The size of the given array will be in the range [1,1000].


#### Solution

Language: **JavaScript**

```javascript
var constructMaximumBinaryTree = function(nums) {
    var f = [], log2 = [0]
    
    for (var i=1; i<=nums.length; i++) {
        log2[i] = log2[i-1]
        if (i === (1<<log2[i]+1)) {
            log2[i] += 1
        }
    }
    
    function build() {
        for(var i=0; i<nums.length; i++) {
            f[i] = [i]
        }
        
        for(var j=1; j<=log2[nums.length-1]; j++) {
            for(var i=0; i<nums.length; i++) {
                if (i + (1<<j) - 1 < nums.length) {
                    f[i][j] = f[i][j-1]
                    var p = i + (1<<j-1)
                    if (nums[f[i][j]] < nums[f[p][j-1]]) {
                        f[i][j] = f[p][j-1]
                    }
                }
                
            }
        }
    }
    
    function query(left, right) {
        var k = log2[right - left + 1], i2 = right - (1<<k) + 1
        var max = f[left][k]
        
        if(f[i2] && f[i2][k] && nums[f[i2][k]] > nums[max]) {
            max = f[i2][k]
        }
        return max
        
    }
    
    function setNode(node, index, left, right) {
        if (left < index) {
            var p = query(left, index - 1)
            node.left = new TreeNode(nums[p])
            setNode(node.left, p, left, index - 1)
        }
        if (index < right) {
            var q = query(index + 1, right)
            node.right = new TreeNode(nums[q])
            setNode(node.right, q, index + 1, right)
        }
    }
    
    build()
    var index = query(0, nums.length-1)
    var result = new TreeNode(nums[index])
    setNode(result, index, 0, nums.length-1)
    
    return result
}
```