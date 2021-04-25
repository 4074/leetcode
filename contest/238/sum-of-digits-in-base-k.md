### [1837\. Sum of Digits in Base K](https://leetcode.com/problems/sum-of-digits-in-base-k/)

Difficulty: **Easy**  

Related Topics: [Math](https://leetcode.com/tag/math/), [Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)


Given an integer `n` (in base `10`) and a base `k`, return _the **sum** of the digits of_ `n` _**after** converting_ `n` _from base_ `10` _to base_ `k`.

After converting, each digit should be interpreted as a base `10` number, and the sum should be returned in base `10`.

**Example 1:**

```
Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54\. 5 + 4 = 9.
```

**Example 2:**

```
Input: n = 10, k = 10
Output: 1
Explanation: n is already in base 10\. 1 + 0 = 1.
```

**Constraints:**

*   `1 <= n <= 100`
*   `2 <= k <= 10`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  let sum = 0
  while (n) {
    let next = Math.floor(n / k)
    sum += n - next * k
    n = next
  }
  return sum
};
```