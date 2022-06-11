# [2300\. Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)

## Description

Difficulty: **Medium**  

Related Topics:


You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]` represents the strength of the i<sup>th</sup> spell and `potions[j]` represents the strength of the j<sup>th</sup> potion.

You are also given an integer `success`. A spell and potion pair is considered **successful** if the **product** of their strengths is **at least** `success`.

Return _an integer array_ `pairs` _of length_ `n` _where_ `pairs[i]` _is the number of **potions** that will form a successful pair with the_ i<sup>th</sup> _spell._

**Example 1:**

```
Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.
```

**Example 2:**

```
Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
Thus, [2,0,2] is returned.
```

**Constraints:**

*   `n == spells.length`
*   `m == potions.length`
*   1 <= n, m <= 10<sup>5</sup>
*   1 <= spells[i], potions[i] <= 10<sup>5</sup>
*   1 <= success <= 10<sup>10</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b)
  return spells.map(s => {
    let l = 0, r = potions.length
    while (l < r) {
      const mid = Math.floor((l + r) / 2)
      if (potions[mid] * s >= success) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    if (s * potions[l] >= success) return potions.length - l
    return 0
  })
};
```