### [1770\. Maximum Score from Performing Multiplication Operations](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are given two integer arrays `nums` and `multipliers`of size `n` and `m` respectively, where `n >= m`. The arrays are **1-indexed**.

You begin with a score of `0`. You want to perform **exactly** `m` operations. On the `i<sup>th</sup>` operation **(1-indexed)**, you will:

*   Choose one integer `x` from **either the start or the end** of the array `nums`.
*   Add `multipliers[i] * x` to your score.
*   Remove `x` from the array `nums`.

Return _the **maximum** score after performing_ `m` _operations._

**Example 1:**

```
Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14.
```

**Example 2:**

```
Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
Output: 102
Explanation: An optimal solution is as follows:
- Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
- Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
- Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
- Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
- Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
The total score is 50 + 15 - 9 + 4 + 42 = 102.
```

**Constraints:**

*   `n == nums.length`
*   `m == multipliers.length`
*   `1 <= m <= 10<sup>3</sup>`
*   `m <= n <= 10<sup>5</sup>`
*   `-1000 <= nums[i], multipliers[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const n = nums.length
    const m = multipliers.length
    const cache = Array(n).fill().map(() => () => Array(m).fill())
    
    function dfs(s, e, i) {
        if (i === m) return 0
        if (cache[s][i] === undefined) {
            cache[s][i] = Math.max(
                nums[s] * multipliers[i] + dfs(s + 1, e, i + 1),
                nums[e] * multipliers[i] + dfs(s, e - 1, i + 1)
            )
        }
        return cache[s][i]
    }
    
    return dfs(0, n - 1, 0)
};
```