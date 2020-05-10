### [1443\. Minimum Time to Collect All Apples in a Tree](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/)

Difficulty: **Medium**


Given an undirected tree consisting of `n` vertices numbered from 0 to `n-1`, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. _Return the minimum time in seconds you have to spend in order to collect all apples in the tree starting at **vertex 0** and coming back to this vertex._

The edges of the undirected tree are given in the array `edges`, where `edges[i] = [from<sub style="display: inline;">i</sub>, to<sub style="display: inline;">i</sub>]` means that exists an edge connecting the vertices `from<sub style="display: inline;">i</sub>` and `to<sub style="display: inline;">i</sub>`. Additionally, there is a boolean array `hasApple`, where `hasApple[i] = true` means that vertex `i` has an apple, otherwise, it does not have any apple.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_1.png)**

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
Output: 8 
Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_2.png)**

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
Output: 6
Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
```

**Example 3:**

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
Output: 0
```

**Constraints:**

*   `1 <= n <= 10^5`
*   `edges.length == n-1`
*   `edges[i].length == 2`
*   `0 <= from<sub style="display: inline;">i</sub>, to<sub style="display: inline;">i</sub> <= n-1`
*   `from<sub style="display: inline;">i</sub> < to<sub style="display: inline;">i</sub>`
*   `hasApple.length == n`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    const graph = Array(n).fill().map(() => [])
    for (const [from, to] of edges) {
        graph[from].push(to)
        graph[to].push(from)
    }
    
    function dfs(current, visited) {
        let steps = 0, has = hasApple[current]
        visited.add(current)
        for (const next of graph[current]) {
            if (!visited.has(next)) {
                const [s, h] = dfs(next, visited)
                if (h) {
                    has = true
                    steps += s + 2
                }
            }
        }
        return [steps, has]
    }
    
    const [steps, has] = dfs(0, new Set())
    return has ? steps : 0
};
```