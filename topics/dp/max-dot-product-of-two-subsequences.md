### [1458\. Max Dot Product of Two Subsequences](https://leetcode.com/problems/max-dot-product-of-two-subsequences/)

Difficulty: **Hard**


Given two arrays `nums1` and `<font face="monospace" style="display: inline;">nums2</font>`<font face="monospace" style="display: inline;">.</font>

Return the maximum dot product between **non-empty** subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `[2,3,5]` is a subsequence of `[1,2,3,4,5]` while `[1,5,3]` is not).

**Example 1:**

```
Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.
```

**Example 2:**

```
Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.
```

**Example 3:**

```
Input: nums1 = [-1,-1], nums2 = [1,1]
Output: -1
Explanation: Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.
```

**Constraints:**

*   `1 <= nums1.length, nums2.length <= 500`
*   `-1000 <= nums1[i], nums2[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length
    const m = nums2.length
    
    const cache = Array(n).fill().map(() => Array(m).fill(-Infinity))
    function dp(i, j) {
        if (i < 0 || j < 0) return -Infinity
        if (i === 0 && j === 0) return nums1[i] * nums2[j]
        if (cache[i][j] === -Infinity) {
            cache[i][j] = Math.max(
                dp(i - 1, j),
                dp(i, j - 1),
                Math.max(dp(i - 1, j - 1), 0) + nums1[i] * nums2[j]
            )
        }
        return cache[i][j]
    }
    
    return dp(n - 1, m - 1)
};
```