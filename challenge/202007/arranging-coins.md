### [441\. Arranging Coins](https://leetcode.com/problems/arranging-coins/)

Difficulty: **Easy**


You have a total of _n_ coins that you want to form in a staircase shape, where every _k_-th row must have exactly _k_ coins.

Given _n_, find the total number of **full** staircase rows that can be formed.

_n_ is a non-negative integer and fits within the range of a 32-bit signed integer.

**Example 1:**

```
n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
```

**Example 2:**

```
n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0, right = n + 1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (mid * (mid + 1) / 2 <= n) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left - 1
};
```

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0, right = n + 1
    while (left < right) {
        const mid = Math.ceil((left + right) / 2)
        if (mid * (mid + 1) / 2 <= n) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
};
```