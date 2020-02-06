### [650\. 2 Keys Keyboard](https://leetcode.com/problems/2-keys-keyboard/)

Difficulty: **Medium**


Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

1.  `Copy All`: You can copy all the characters present on the notepad (partial copy is not allowed).
2.  `Paste`: You can paste the characters which are copied **last time**.

Given a number `n`. You have to get **exactly** `n` 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get `n` 'A'.

**Example 1:**

```
Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
```

**Note:**

1.  The `n` will be in the range [1, 1000].


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const dp = Array(n + 1).fill(Infinity)
    
    dp[1] = 0
    dp[2] = 2
    for (let i = 3; i <= n; i += 1) {
        for (let j = 1; j <= i/2; j += 1) {
            if (i % j === 0) {
                dp[i] = Math.min(
                    dp[i],
                    dp[j] + i/j
                )
            }
        }
    }
    
    return dp[n]
};
```