### [1362\. Closest Divisors](https://leetcode.com/problems/closest-divisors/)

Difficulty: **Medium**


Given an integer `num`, find the closest two integers in absolute difference whose product equals `num + 1` or `num + 2`.

Return the two integers in any order.

**Example 1:**

```
Input: num = 8
Output: [3,3]
Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.
```

**Example 2:**

```
Input: num = 123
Output: [5,25]
```

**Example 3:**

```
Input: num = 999
Output: [40,25]
```

**Constraints:**

*   `1 <= num <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    function findClosestIntergers(product) {
        let left = Math.floor(Math.sqrt(product))
        while (left >= 1) {
            if (product % left === 0) return [left, product / left]
            left -= 1
        }
    }
    
    const int1 = findClosestIntergers(num + 1)
    const int2 = findClosestIntergers(num + 2)
    return Math.abs(int1[0] - int1[1]) < Math.abs(int2[0] - int2[1]) ? int1 : int2
};
```