# [2251\. Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

## Description

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Binary Search](https://leetcode.com/tag/binary-search/), [Sorting](https://leetcode.com/tag/sorting/), [Prefix Sum](https://leetcode.com/tag/prefix-sum/), [Ordered Set](https://leetcode.com/tag/ordered-set/)


You are given a **0-indexed** 2D integer array `flowers`, where flowers[i] = [start<sub>i</sub>, end<sub>i</sub>] means the i<sup>th</sup> flower will be in **full bloom** from start<sub>i</sub> to end<sub>i</sub> (**inclusive**). You are also given a **0-indexed** integer array `persons` of size `n`, where `persons[i]` is the time that the i<sup>th</sup> person will arrive to see the flowers.

Return _an integer array_ `answer` _of size_ `n`_, where_ `answer[i]` _is the **number** of flowers that are in full bloom when the_ i<sup>th</sup> _person arrives._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg)

```
Input: flowers = [[1,6],[3,7],[9,12],[4,13]], persons = [2,3,7,11]
Output: [1,2,2,2]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg)

```
Input: flowers = [[1,10],[3,3]], persons = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Constraints:**

*   1 <= flowers.length <= 5 * 10<sup>4</sup>
*   `flowers[i].length == 2
*   1 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>9</sup>
*   1 <= persons.length <= 5 * 10<sup>4</sup>`
*   1 <= persons[i] <= 10<sup>9</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, persons) {
  const startSorted = flowers.map(a => a[0]).sort((a, b) => a - b)
  const endSorted = flowers.map(a => a[1]).sort((a, b) => a - b)
  
  const ans = []
  for (const person of persons) {
    let l = 0, r = startSorted.length - 1
    while (l < r) {
      const m = Math.ceil((l + r) / 2)
      if (startSorted[m] <= person) {
        l = m
      } else {
        r = m - 1
      }
    }
    const startCount = startSorted[r] <= person ? (r + 1) : 0
    
    l = 0
    r = endSorted.length
    while (l < r) {
      const m = Math.floor((l + r) / 2)
      if (endSorted[m] < person) {
        l = m + 1
      } else {
        r = m
      }
    }
    ans.push(startCount - l)
  }
  
  return ans
};
```