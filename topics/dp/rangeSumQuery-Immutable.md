### [303\. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

Difficulty: **Easy**


Given an integer array _nums_, find the sum of the elements between indices _i_ and _j_ (_i_ ≤ _j_), inclusive.

**Example:**  

```
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

**Note:**  

1.  You may assume that the array does not change.
2.  There are many calls to _sumRange_ function.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.dp = [nums[0]]
    for (let i = 1; i < nums.length; i += 1) {
        this.dp[i] = this.dp[i - 1] + nums[i] 
    }
};
​
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.dp[j] - (i > 0 ? this.dp[i - 1] : 0)
};
​
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```