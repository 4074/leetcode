### [718\. Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)

Difficulty: **Medium**


Given two integer arrays `A` and `B`, return the maximum length of an subarray that appears in both arrays.

**Example 1:**

```
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
```

**Note:**

1.  1 <= len(A), len(B) <= 1000
2.  0 <= A[i], B[i] < 100


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const dp = Array(A.length).fill()
        .map(() => Array(B.length).fill(0))
    let result = 0
    
    for (let i = 0; i < A.length; i += 1) {
        for (let j = 0; j < B.length; j += 1) {
            if (A[i] === B[j]) {
                dp[i][j] = (i > 0 && j > 0 ? dp[i - 1][j - 1] : 0) + 1
                result = Math.max(result, dp[i][j])
            }
        }
    }
    
    return result
};
```