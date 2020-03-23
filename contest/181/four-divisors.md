### [1390\. Four Divisors](https://leetcode.com/problems/four-divisors/)

Difficulty: **Medium**


Given an integer array `nums`, return the sum of divisors of the integers in that array that have exactly four divisors.

If there is no such integer in the array, return `0`.

**Example 1:**

```
Input: nums = [21,4,7]
Output: 32
Explanation:
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.
```

**Constraints:**

*   `1 <= nums.length <= 10^4`
*   `1 <= nums[i] <= 10^5`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum = 0
    for (const num of nums) {
        const s = Math.sqrt(num)
        if (s % 1 === 0) continue
        let ds = []
        for (let i = 2; i < s; i += 1) {
            if (num % i === 0) {
                if (ds.length) {
                    ds = []
                    break
                }
                ds = [i, num/i]
            }
        }
        if (ds.length === 2) {
            sum += 1 + num + ds[0] + ds[1]
        }
    }
    return sum
};
```