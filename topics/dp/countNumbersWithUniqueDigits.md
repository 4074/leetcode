### [357\. Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)

Difficulty: **Medium**


Given a **non-negative** integer n, count all numbers with unique digits, x, where 0 ≤ x < 10<sup>n</sup>.


**Example:**

```
Input: 2
Output: 91 
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
             excluding 11,22,33,44,55,66,77,88,99
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    const dp = Array(n + 1).fill(0)
    
    dp[0] = 1
    for (let i = 1; i <= n; i += 1) {
        let sum = 9
        for (let j = 9; j >= 0 && i + j > 10; j -= 1) {
            sum *= j
        }
        dp[i] = dp[i - 1] + sum
    }
    
    return dp[n]
};
```