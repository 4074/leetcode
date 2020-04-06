### [1401\. Circle and Rectangle Overlapping](https://leetcode.com/problems/circle-and-rectangle-overlapping/)

Difficulty: **Medium**


Given a circle represented as (`radius`, `x_center`, `y_center`) and an axis-aligned rectangle represented as (`x1`, `y1`, `x2`, `y2`), where (`x1`, `y1`) are the coordinates of the bottom-left corner, and (`x2`, `y2`) are the coordinates of the top-right corner of the rectangle.

Return True if the circle and rectangle are overlapped otherwise return False.

In other words, check if there are **any** point (xi, yi) such that belongs to the circle and the rectangle at the same time.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/02/20/sample_4_1728.png)

```
Input: radius = 1, x_center = 0, y_center = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
Output: true
Explanation: Circle and rectangle share the point (1,0) 
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/02/20/sample_2_1728.png)**

```
Input: radius = 1, x_center = 0, y_center = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
Output: true
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2020/03/03/sample_6_1728.png)**

```
Input: radius = 1, x_center = 1, y_center = 1, x1 = -3, y1 = -3, x2 = 3, y2 = 3
Output: true
```

**Example 4:**

```
Input: radius = 1, x_center = 1, y_center = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
Output: false
```

**Constraints:**

*   `1 <= radius <= 2000`
*   `-10^4 <= x_center, y_center, x1, y1, x2, y2 <= 10^4`
*   `x1 < x2`
*   `y1 < y2`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i += 1) {
        for (let j = y1; j <= y2; j += 1) {
            if (
                Math.sqrt(
                    Math.abs(i - x_center) ** 2 + Math.abs(j - y_center) ** 2
                ) <= radius
            ) return true
        }
    }
    return false
};
```