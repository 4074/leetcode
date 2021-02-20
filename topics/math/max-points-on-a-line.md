### [149\. Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)

Difficulty: **Hard**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [Math](https://leetcode.com/tag/math/)


Given _n_ points on a 2D plane, find the maximum number of points that lie on the same straight line.

**Example 1:**

```
Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
```

**Example 2:**

```
Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
```

**NOTE:** input types have been changed on April 15, 2019\. Please reset to default code definition to get new method signature.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 2) return points.length
    const n = points.length
    
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }
    
    function computeKey([x1, y1], [x2, y2]) {
        const dx = x1 - x2
        const dy = y1 - y2
        if (!dx) return `/${x1}`
        if (!dy) return `${y1}/`
        const d = gcd(dx, dy)
        return `${dy/d}/${dx/d}`
    }
    
    let ans = 0
    for (let i = 0; i < n; i += 1) {
        const map = new Map()
        let count = 1
        for (let j = i + 1; j < n; j += 1) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                count += 1
                continue
            }
            const key = computeKey(points[i], points[j])
            map.set(key, (map.get(key) || 0) + 1)
        }
        ans = Math.max(ans, count, Math.max(0, ...map.values()) + count)
    }
​
    return ans
};  
```