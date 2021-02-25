### [172\. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)

Difficulty: **Easy**  

Related Topics: [Math](https://leetcode.com/tag/math/)


Given an integer `n`, return _the number of trailing zeroes in `n!`_.

**Follow up:** Could you write a solution that works in logarithmic time complexity?

**Example 1:**

```
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
```

**Example 2:**

```
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
```

**Example 3:**

```
Input: n = 0
Output: 0
```

**Constraints:**

*   `0 <= n <= 10<sup>4</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let base = 5
    
    let ans = 0
    while (n >= base) {
        ans += Math.floor(n / base)
        base *= 5
    }
    
    return ans
};
```