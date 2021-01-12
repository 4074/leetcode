### [1711\. Count Good Meals](https://leetcode.com/problems/count-good-meals/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Two Pointers](https://leetcode.com/tag/two-pointers/)


A **good meal** is a meal that contains **exactly two different food items** with a sum of deliciousness equal to a power of two.

You can pick **any** two different foods to make a good meal.

Given an array of integers `deliciousness` where `deliciousness[i]` is the deliciousness of the `i<sup>​​​​​​th</sup>​​​​`​​​​ item of food, return _the number of different **good meals** you can make from this list modulo_ `10<sup>9</sup> + 7`.

Note that items with different indices are considered different even if they have the same deliciousness value.

**Example 1:**

```
Input: deliciousness = [1,3,5,7,9]
Output: 4
Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.
```

**Example 2:**

```
Input: deliciousness = [1,1,1,3,3,3,7]
Output: 15
Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.
```

**Constraints:**

*   `1 <= deliciousness.length <= 10<sup>5</sup>`
*   `0 <= deliciousness[i] <= 2<sup>20</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    const mod = 10 ** 9 + 7
    const counts = new Map()
    const powers = [1]
    for (let i = 0; i <= 21; i += 1) {
        powers.push(powers[powers.length - 1] * 2)
    }
    let ans = 0
    for (const d of deliciousness) {
        for (const p of powers) {
            if (counts.has(p - d)) {
                ans = (ans + counts.get(p - d)) % mod
            }
        }
        counts.set(d, (counts.get(d) || 0) + 1)
    }
    return ans
};
```