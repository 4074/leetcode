### [233\. Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)

Difficulty: **Hard**  

Related Topics: [Math](https://leetcode.com/tag/math/)


Given an integer `n`, count _the total number of digit_ `1` _appearing in all non-negative integers less than or equal to_ `n`.

**Example 1:**

```
Input: n = 13
Output: 6
```

**Example 2:**

```
Input: n = 0
Output: 0
```

**Constraints:**

*   `0 <= n <= 2 * 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let base = 1
  let count = 0
  while (base <= n) {
    const left = Math.floor(n / base / 10)
    const cur = Math.floor(n / base) % 10
    const right = n % base
    
    count += left * base
    if (cur === 1) {
      count += right + 1
    } else if (cur > 1) {
      count += base
    }
    base *= 10
  }
  
  return count
};
```