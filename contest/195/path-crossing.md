### [1496\. Path Crossing](https://leetcode.com/problems/path-crossing/)

Difficulty: **Easy**


Given a string `path`, where `path[i] = 'N'`, `'S'`, `'E'` or `'W'`, each representing moving one unit north, south, east, or west, respectively. You start at the origin `(0, 0)` on a 2D plane and walk on the path specified by `path`.

Return `True` if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return `False` otherwise.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123929-pm.png)

```
Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123843-pm.png)

```
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
```

**Constraints:**

*   `1 <= path.length <= 10^4`
*   `path` will only consist of characters in `{'N', 'S', 'E', 'W}`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const points = new Map()
    points.set(0, new Set())
    points.get(0).add(0)
    
    const cur = [0, 0]
    const move = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    }
    for (const p of path) {
        cur[0] += move[p][0]
        cur[1] += move[p][1]
        if (!points.has(cur[0])) {
            points.set(cur[0], new Set())
        }
        if (points.get(cur[0]).has(cur[1])) return true
        points.get(cur[0]).add(cur[1])
    }
    return false
};
```