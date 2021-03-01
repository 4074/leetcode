### [223\. Rectangle Area](https://leetcode.com/problems/rectangle-area/)

Difficulty: **Medium**  

Related Topics: [Math](https://leetcode.com/tag/math/)


Find the total area covered by two **rectilinear** rectangles in a **2D** plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

![Rectangle Area](https://assets.leetcode.com/uploads/2018/10/22/rectangle_area.png)

**Example:**

```
Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
```

**Note:**

Assume that the total area is never beyond the maximum possible value of **int**.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    const x1 = Math.max(A, E)
    const y1 = Math.max(B, F)
    const x2 = Math.min(C, G)
    const y2 = Math.min(D, H)
    
    const overlap = x2 > x1 && y2 > y1 ? (x2 - x1) * (y2 - y1) : 0
    return (C - A) * (D - B) + (G - E) * (H - F) - overlap
};
```