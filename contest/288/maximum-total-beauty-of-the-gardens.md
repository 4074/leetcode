# [2234\. Maximum Total Beauty of the Gardens](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/)

## Description

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Binary Search](https://leetcode.com/tag/binary-search/), [Greedy](https://leetcode.com/tag/greedy/), [Sorting](https://leetcode.com/tag/sorting/)


Alice is a caretaker of `n` gardens and she wants to plant flowers to maximize the total beauty of all her gardens.

You are given a **0-indexed** integer array `flowers` of size `n`, where `flowers[i]` is the number of flowers already planted in the i<sup>th</sup> garden. Flowers that are already planted **cannot** be removed. You are then given another integer `newFlowers`, which is the **maximum** number of flowers that Alice can additionally plant. You are also given the integers `target`, `full`, and `partial`.

A garden is considered **complete** if it has **at least** `target` flowers. The **total beauty** of the gardens is then determined as the **sum** of the following:

*   The number of **complete** gardens multiplied by `full`.
*   The **minimum** number of flowers in any of the **incomplete** gardens multiplied by `partial`. If there are no incomplete gardens, then this value will be `0`.

Return _the **maximum** total beauty that Alice can obtain after planting at most_ `newFlowers` _flowers._

**Example 1:**

```
Input: flowers = [1,3,1,1], newFlowers = 7, target = 6, full = 12, partial = 1
Output: 14
Explanation: Alice can plant
- 2 flowers in the 0th garden
- 3 flowers in the 1st garden
- 1 flower in the 2nd garden
- 1 flower in the 3rd garden
The gardens will then be [3,6,2,2]. She planted a total of 2 + 3 + 1 + 1 = 7 flowers.
There is 1 garden that is complete.
The minimum number of flowers in the incomplete gardens is 2.
Thus, the total beauty is 1 * 12 + 2 * 1 = 12 + 2 = 14.
No other way of planting flowers can obtain a total beauty higher than 14.
```

**Example 2:**

```
Input: flowers = [2,4,5,3], newFlowers = 10, target = 5, full = 2, partial = 6
Output: 30
Explanation: Alice can plant
- 3 flowers in the 0th garden
- 0 flowers in the 1st garden
- 0 flowers in the 2nd garden
- 2 flowers in the 3rd garden
The gardens will then be [5,4,5,5]. She planted a total of 3 + 0 + 0 + 2 = 5 flowers.
There are 3 gardens that are complete.
The minimum number of flowers in the incomplete gardens is 4.
Thus, the total beauty is 3 * 2 + 4 * 6 = 6 + 24 = 30.
No other way of planting flowers can obtain a total beauty higher than 30.
Note that Alice could make all the gardens complete but in this case, she would obtain a lower total beauty.
```

**Constraints:**

*   1 <= flowers.length <= 10<sup>5</sup>
*   1 <= flowers[i], target <= 10<sup>5</sup>
*   1 <= newFlowers <= 10<sup>10</sup>
*   1 <= full, partial <= 10<sup>5</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function(flowers, newFlowers, target, full, partial) {
  flowers.sort((a, b) => a - b)
  const n = flowers.length
  const sums = Array(n).fill()
  
  let lastNotFullIndex = -1
  for (let i = 0; i < n; i += 1) {
    sums[i] = (sums[i - 1] || 0) + Math.min(target, flowers[i])
    if (flowers[i] < target) lastNotFullIndex = i
  }
  
  let ans = 0
  if (sums[n - 1] + newFlowers >= target * n) ans = full * n
  for (let j = lastNotFullIndex; j >= 0; j -= 1) {
    const fullCount = n - j - 1
    let k = newFlowers
    if (fullCount) {
      const sum = sums[n - 1] - sums[j]
      k -= fullCount * target - sum
    }
    if (k < 0) break
    
    let left = 0, right = j
    while (left < right) {
      const mid = Math.ceil((left + right) / 2)
      if ((sums[mid] + k) / (mid + 1) > flowers[mid]) {
        left = mid
      } else {
        right = mid - 1
      }
    }
    const min = Math.min(target - 1, Math.floor((sums[left] + k) / (left + 1)))
    
    ans = Math.max(ans, min * partial + fullCount * full)
  }
  return ans
};
```

https://leetcode.com/contest/weekly-contest-288/ranking 1

```javascript
/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function(flowers, newFlowers, target, full, partial) {
  flowers.sort((a, b) => a - b)
  const n = flowers.length
  const sums = Array(n + 1).fill(0)
  
  for (let i = 0; i < n; i += 1) {
    sums[i + 1] = (sums[i]) + Math.min(target, flowers[i])
  }
  
  let ans = 0
  for (let i = 0, j = 0; i <= n; i += 1) {
    const k = newFlowers - ((n - i) * target - (sums[n] - sums[i]))
    if (k >= 0) {
      while (j < i && k >= j * flowers[j] - sums[j]) j += 1
      ans = Math.max(
        ans,
        (n - i) * full
        + (j && partial * Math.min(target - 1, Math.floor((k + sums[j]) / j)))
      )
    }
    if (i < n && flowers[i] >= target) break
  }
  return ans
};
```