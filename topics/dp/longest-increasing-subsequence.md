### [300\. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

A **subsequence** is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, `[3,6,2,7]` is a subsequence of the array `[0,3,1,6,2,2,7]`.

**Example 1:**

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

**Example 2:**

```
Input: nums = [0,1,0,3,2,3]
Output: 4
```

**Example 3:**

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

**Constraints:**

*   `1 <= nums.length <= 2500`
*   `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`

**Follow up:**

*   Could you come up with the `O(n<sup>2</sup>)` solution?
*   Could you improve it to `O(n log(n))` time complexity?


#### Solution

Language: **JavaScript**

**DP**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(1)
    
    for (let i = 1; i < n; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};
```

**Greedy**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    const dp = []
    
    for (let i = 0; i < n; i += 1) {
        if (i === 0 || nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i])
            continue
        }
        
        let left = 0
        let right = dp.length - 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (dp[mid] < nums[i]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        dp[left] = nums[i]
    }
    
    return dp.length
};
```