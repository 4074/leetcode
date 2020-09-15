### [1584\. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)

Difficulty: **Medium**  

Related Topics: [Union Find](https://leetcode.com/tag/union-find/)


You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub>]`.

The cost of connecting two points `[x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub>]` and `[x<sub style="display: inline;">j</sub>, y<sub style="display: inline;">j</sub>]` is the **manhattan distance** between them: `|x<sub style="display: inline;">i</sub> - x<sub style="display: inline;">j</sub>| + |y<sub style="display: inline;">i</sub> - y<sub style="display: inline;">j</sub>|`, where `|val|` denotes the absolute value of `val`.

Return _the minimum cost to make all points connected._ All points are connected if there is **exactly one** simple path between any two points.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/08/26/d.png)

```
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
```

**Example 2:**

```
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
```

**Example 3:**

```
Input: points = [[0,0],[1,1],[1,0],[-1,1]]
Output: 4
```

**Example 4:**

```
Input: points = [[-1000000,-1000000],[1000000,1000000]]
Output: 4000000
```

**Example 5:**

```
Input: points = [[0,0]]
Output: 0
```

**Constraints:**

*   `1 <= points.length <= 1000`
*   `-10<sup>6</sup> <= x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub> <= 10<sup>6</sup>`
*   All pairs `(x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub>)` are distinct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    const distances = []
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            if (i === j) continue            
            const d = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            distances.push([d, i, j])
        }
    }
    
    distances.sort((a, b) => a[0] - b[0])
    const parents = Array(n).fill().map((_, i) => i)
    
    function find(node) {
        if (parents[node] === node) return node
        let r = find(parents[node])
        parents[node] = r
        return r
    }
    
    function union(a, b) {
        parents[find(b)] = find(a)
    }
    
    let ans = 0
    let count = 0
    for (const [d, i, j] of distances) {
        if (find(i) === find(j)) continue
        union(i, j)
        ans += d
        count += 1
        if (count === n - 1) break
    }
    
    return ans
};
```