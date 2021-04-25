### [1840\. Maximum Building Height](https://leetcode.com/problems/maximum-building-height/)

Difficulty: **Hard**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Greedy](https://leetcode.com/tag/greedy/)


You want to build `n` new buildings in a city. The new buildings will be built in a line and are labeled from `1` to `n`.

However, there are city restrictions on the heights of the new buildings:

*   The height of each building must be a non-negative integer.
*   The height of the first building **must** be `0`.
*   The height difference between any two adjacent buildings **cannot exceed** `1`.

Additionally, there are city restrictions on the maximum height of specific buildings. These restrictions are given as a 2D integer array `restrictions` where `restrictions[i] = [id<sub style="display: inline;">i</sub>, maxHeight<sub style="display: inline;">i</sub>]` indicates that building `id<sub style="display: inline;">i</sub>` must have a height **less than or equal to** `maxHeight<sub style="display: inline;">i</sub>`.

It is guaranteed that each building will appear **at most once** in `restrictions`, and building `1` will **not** be in `restrictions`.

Return _the **maximum possible height** of the **tallest** building_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/04/08/ic236-q4-ex1-1.png)

```
Input: n = 5, restrictions = [[2,1],[4,1]]
Output: 2
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,1,2], and the tallest building has a height of 2.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/04/08/ic236-q4-ex2.png)

```
Input: n = 6, restrictions = []
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,4,5], and the tallest building has a height of 5.
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2021/04/08/ic236-q4-ex3.png)

```
Input: n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,3,4,4,5,4,3], and the tallest building has a height of 5.
```

**Constraints:**

*   `2 <= n <= 10<sup>9</sup>`
*   `0 <= restrictions.length <= min(n - 1, 10<sup>5</sup>)`
*   `2 <= id<sub style="display: inline;">i</sub> <= n`
*   `id<sub style="display: inline;">i</sub>` is **unique**.
*   `0 <= maxHeight<sub style="display: inline;">i</sub> <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
  if (restrictions.length === 0) return n - 1
  
  restrictions.sort((a, b) => a[0] - b[0])
  restrictions.unshift([1, 0])
  restrictions.push([n, n-1])
  const m = restrictions.length
  const dp = Array(m).fill(Infinity)
  
  dp[0] = 0
  for (let i = 1; i < m; i += 1) {
    dp[i] = Math.min(
      dp[i - 1] + restrictions[i][0] - restrictions[i - 1][0],
      restrictions[i][1]
    )
  }
  
  for (let i = m - 2; i >= 0; i -= 1) {
    dp[i] = Math.min(
      dp[i],
      dp[i + 1] + restrictions[i + 1][0] - restrictions[i][0]
    )
  }
  
  let ans = 0
  for (let i = 1; i < m; i += 1) {
    ans = Math.max(ans, dp[i])
    const dis = restrictions[i][0] - restrictions[i - 1][0]
    const diff = Math.abs(dp[i] - dp[i - 1])
    if (dis > diff) {
      ans = Math.max(ans, Math.floor((dis - diff) / 2) + Math.max(dp[i], dp[i - 1]))
    }
  }
  
  return ans
};
```