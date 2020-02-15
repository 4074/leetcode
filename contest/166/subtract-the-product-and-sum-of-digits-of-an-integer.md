### [1281\. Subtract the Product and Sum of Digits of an Integer](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

Difficulty: **Easy**

Given an integer number `n`, return the difference between the product of its digits and the sum of its digits.

**Example 1:**

```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```

**Example 2:**

```
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
```

**Constraints:**

*   `1 <= n <= 10^5`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const num = n.toString()
    let sum = 0, product = 1
    for (let i = 0; i < num.length; i += 1) {
        const d = parseInt(num[i])
        sum += d
        product *= d
    }
    return product - sum
};
```