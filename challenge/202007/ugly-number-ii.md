### [264\. Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)

Difficulty: **Medium**


Write a program to find the `n`-th ugly number.

Ugly numbers are **positive numbers** whose prime factors only include `2, 3, 5`. 

**Example:**

```
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
```

**Note:**  

1.  `1` is typically treated as an ugly number.
2.  `n` **does not exceed 1690**.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const nums = [1]
    let i2 = 0, i3 = 0, i5 = 0
    
    while (nums.length < n) {
        const next2 = nums[i2] * 2
        const next3 = nums[i3] * 3
        const next5 = nums[i5] * 5
        const next = Math.min(next2, next3, next5)
        if (next2 === next) i2 += 1
        if (next3 === next) i3 += 1
        if (next5 === next) i5 += 1
        nums.push(next)
    }
    
    return nums[n - 1]
};
```