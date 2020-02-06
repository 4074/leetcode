### [813\. Largest Sum of Averages](https://leetcode.com/problems/largest-sum-of-averages/)

Difficulty: **Medium**


We partition a row of numbers `A` into at most `K` adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

```
Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
```

**Note:**

*   `1 <= A.length <= 100`.
*   `1 <= A[i] <= 10000`.
*   `1 <= K <= A.length`.
*   Answers within `10^-6` of the correct answer will be accepted as correct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
    const dp = Array(K + 1).fill()
        .map(() => Array(A.length).fill(0))
    const sum = []
    
    for (let i = 0; i < A.length; i += 1) {
        sum[i] = (i === 0 ? 0 : sum[i - 1]) + A[i]
        dp[1][i] = sum[i] / (i + 1)
    }
    
    for (let k = 2; k <= K; k += 1) {
        for (let i = k - 1; i < A.length; i += 1) {
            for (let j = k - 2; j < i; j += 1) {
                dp[k][i] = Math.max(
                    dp[k][i],
                    dp[k - 1][j] + (sum[i] - sum[j]) / (i - j)
                )
            }
        }
    }
    
    return dp[K][A.length - 1]
};
```