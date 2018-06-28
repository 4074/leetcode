### [29\. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/description/)

Difficulty: **Medium**

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing `dividend` by `divisor`.

The integer division should truncate toward zero.

**Example 1:**

```
**Input:** dividend = 10, divisor = 3
**Output:** 3```

**Example 2:**

```
**Input:** dividend = 7, divisor = -3
**Output:** -2```

**Note:**

*   Both dividend and divisor will be 32-bit signed integers.
*   The divisor will never be 0.
*   Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,  2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 2<sup>31</sup> − 1 when the division result overflows.



#### Solution
```
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var result = 0
    var max = Math.pow(2, 31) - 1
    var isNegative = dividend > 0 ^ divisor > 0
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    substract(divisor, 1)
    
    function substract(s, t) {
        if (dividend > s) {
            substract(s + s, t + t)
        }
        if (dividend >= s) {
            dividend -= s
            result += t
        }
    }
    
    if (isNegative) {
        result = -result
    }
    
    return result > max ? max : result
};
```