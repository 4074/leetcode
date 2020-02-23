### [1363\. Largest Multiple of Three](https://leetcode.com/problems/largest-multiple-of-three/)

Difficulty: **Hard**


Given an integer array of `digits`, return the largest multiple of **three** that can be formed by concatenating some of the given digits in any order.

Since the answer may not fit in an integer data type, return the answer as a string.

If there is no answer return an empty string.

**Example 1:**

```
Input: digits = [8,1,9]
Output: "981"
```

**Example 2:**

```
Input: digits = [8,6,7,1,0]
Output: "8760"
```

**Example 3:**

```
Input: digits = [1]
Output: ""
```

**Example 4:**

```
Input: digits = [0,0,0,0,0,0]
Output: "0"
```

**Constraints:**

*   `1 <= digits.length <= 10^4`
*   `0 <= digits[i] <= 9`
*   The returning answer must not contain unnecessary leading zeros.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    digits.sort((a, b) => b - a)
    if (digits[0] === 0) return '0'
    
    const dp = Array(3).fill(null)
    
    function strMax(str1, str2) {
        if (str1.length > str2.length) {
            return str1
        } else if (str1.length < str2.length) {
            return str2
        } else {
            return str1 > str2 ? str1 : str2
        }
    }
    
    dp[0] = ''
    for (let i = 1; i <= digits.length; i += 1) {
        const n = digits[i - 1] % 3
        const dp1 = [...dp]
        for (let j = 0; j < 3; j += 1) {
            const k = (3 + j - n) % 3
            if (dp1[k] !== null) {
                dp[j] = strMax(dp1[j] || '', dp1[k] + digits[i - 1])
            }
        }
    }
    
    return dp[0]
};
```