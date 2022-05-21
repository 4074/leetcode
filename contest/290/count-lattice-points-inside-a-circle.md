# [2249\. Count Lattice Points Inside a Circle](https://leetcode.com/problems/count-lattice-points-inside-a-circle/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Math](https://leetcode.com/tag/math/), [Geometry](https://leetcode.com/tag/geometry/), [Enumeration](https://leetcode.com/tag/enumeration/)


Given a 2D integer array `circles` where circles[i] = [x<sub>i</sub>, y<sub>i</sub>, r<sub>i</sub>] represents the center (x<sub>i</sub>, y<sub>i</sub>) and radius r<sub>i</sub> of the i<sup>th</sup> circle drawn on a grid, return _the **number of lattice points**_ _that are present inside **at least one** circle_.

**Note:**

*   A **lattice point** is a point with integer coordinates.
*   Points that lie **on the circumference of a circle** are also considered to be inside it.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/exa-11.png)

```
Input: circles = [[2,2,1]]
Output: 5
Explanation:
The figure above shows the given circle.
The lattice points present inside the circle are (1, 2), (2, 1), (2, 2), (2, 3), and (3, 2) and are shown in green.
Other points such as (1, 1) and (1, 3), which are shown in red, are not considered inside the circle.
Hence, the number of lattice points present inside at least one circle is 5.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/exa-22.png)

```
Input: circles = [[2,2,2],[3,4,1]]
Output: 16
Explanation:
The figure above shows the given circles.
There are exactly 16 lattice points which are present inside at least one circle. 
Some of them are (0, 2), (2, 0), (2, 4), (3, 2), and (4, 4).
```

**Constraints:**

*   `1 <= circles.length <= 200`
*   `circles[i].length == 3`
*   1 <= x<sub>i</sub>, y<sub>i</sub> <= 100
*   1 <= r<sub>i</sub> <= min(x<sub>i</sub>, y<sub>i</sub>)


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  let ans = 0
  for (let i = 0; i <= 200; i += 1) {
    for (let j = 0; j <= 200; j += 1) {
      for (const [x, y, r] of circles) {
        if (Math.sqrt((i - x) ** 2 + (j - y) ** 2) <= r) {
          ans += 1
          break
        }
      }
    }
  }
  return ans
};
```