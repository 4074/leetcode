# [2250\. Count Number of Rectangles Containing Each Point](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/), [Binary Indexed Tree](https://leetcode.com/tag/binary-indexed-tree/), [Sorting](https://leetcode.com/tag/sorting/)


You are given a 2D integer array `rectangles` where rectangles[i] = [l<sub>i</sub>, h<sub>i</sub>] indicates that i<sup>th</sup> rectangle has a length of l<sub>i</sub> and a height of h<sub>i</sub>. You are also given a 2D integer array `points` where points[j] = [x<sub>j</sub>, y<sub>j</sub>] is a point with coordinates (x<sub>j</sub>, y<sub>j</sub>).

The i<sup>th</sup> rectangle has its **bottom-left corner** point at the coordinates `(0, 0)` and its **top-right corner** point at (l<sub>i</sub>, h<sub>i</sub>).

Return _an integer array_ `count` _of length_ `points.length` _where_ `count[j]` _is the number of rectangles that **contain** the_ j<sup>th</sup> _point._

The i<sup>th</sup> rectangle **contains** the j<sup>th</sup> point if 0 <= x<sub>j</sub> <= l<sub>i</sub> and 0 <= y<sub>j</sub> <= h<sub>i</sub>. Note that points that lie on the **edges** of a rectangle are also considered to be contained by that rectangle.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/example1.png)

```
Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]
Output: [2,1]
Explanation: 
The first rectangle contains no points.
The second rectangle contains only the point (2, 1).
The third rectangle contains the points (2, 1) and (1, 4).
The number of rectangles that contain the point (2, 1) is 2.
The number of rectangles that contain the point (1, 4) is 1.
Therefore, we return [2, 1].
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/example2.png)

```
Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]
Output: [1,3]
Explanation:
The first rectangle contains only the point (1, 1).
The second rectangle contains only the point (1, 1).
The third rectangle contains the points (1, 3) and (1, 1).
The number of rectangles that contain the point (1, 3) is 1.
The number of rectangles that contain the point (1, 1) is 3.
Therefore, we return [1, 3].
```

**Constraints:**

*   1 <= rectangles.length, points.length <= 5 * 10<sup>4</sup>
*   `rectangles[i].length == points[j].length == 2
*   1 <= l<sub>i</sub>, x<sub>j</sub> <= 10<sup>9</sup>
*   1 <= h<sub>i</sub>, y<sub>j</sub> <= 100
*   All the rectangles` are **unique**.
*   All the `points` are **unique**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
  const heights = Array(101).fill().map(() => [])
  for (const [l, h] of rectangles) {
    heights[h].push(l)
  }
  for (const group of heights) {
    group.sort((a, b) => a -b)
  }
  
  const ans = []
  for (const [x, y] of points) {
    let count = 0
    for (let i = y; i <= 100; i += 1) {
      if (!heights[i].length) continue
      let left = 0, right = heights[i].length - 1
      while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (heights[i][mid] < x) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      if (heights[i][left] >= x) count += heights[i].length - left
    }
    ans.push(count)
  }
  
  return ans
};
```