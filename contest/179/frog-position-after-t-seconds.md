### [1377\. Frog Position After T Seconds](https://leetcode.com/problems/frog-position-after-t-seconds/)

Difficulty: **Hard**


Given an undirected tree consisting of `n` vertices numbered from 1 to `n`. A frog starts jumping from the **vertex 1**. In one second, the frog jumps from its current vertex to another **unvisited** vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices it jumps randomly to one of them with the same probability, otherwise, when the frog can not jump to any unvisited vertex it jumps forever on the same vertex. 

The edges of the undirected tree are given in the array `edges`, where `edges[i] = [from<sub style="display: inline;">i</sub>, to<sub style="display: inline;">i</sub>]` means that exists an edge connecting directly the vertices `from<sub style="display: inline;">i</sub>` and `to<sub style="display: inline;">i</sub>`.

_Return the probability that after `t` seconds the frog is on the vertex `<font face="monospace" style="display: inline;">target</font>`._

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/02/20/frog_2.png)

```
Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
Output: 0.16666666666666666 
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 probability to the vertex 2 after second 1 and then jumping with 1/2 probability to vertex 4 after second 2\. Thus the probability for the frog is on the vertex 4 after 2 seconds is 1/3 * 1/2 = 1/6 = 0.16666666666666666\. 
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/02/20/frog_3.png)**

```
Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
Output: 0.3333333333333333
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 = 0.3333333333333333 probability to the vertex 7 after second 1\. 
```

**Example 3:**

```
Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 20, target = 6
Output: 0.16666666666666666
```

**Constraints:**

*   `1 <= n <= 100`
*   `edges.length == n-1`
*   `edges[i].length == 2`
*   `1 <= edges[i][0], edges[i][1] <= n`
*   `1 <= t <= 50`
*   `1 <= target <= n`
*   Answers within `10^-5` of the actual value will be accepted as correct.


#### Solution

Language: **JavaScript**

DFS
```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const graph = Array(n + 1).fill().map(() => [])
    for (const [from, to] of edges) {
        graph[from].push(to)
        graph[to].push(from)
    }
    
    let ans = 0
    function dfs(node, prob, steps, parent) {
        let next = graph[node].filter(i => i !== parent)
        if (node === target) {
            if (!next.length || steps === t) {
                ans = prob
            }
            return false
        }
        
        if (steps < t) {
            for (const i of next) {
                if (dfs(i, prob / next.length, steps + 1, node) === false) {
                    return false
                }
            }
        }
    }
    
    dfs(1, 1, 0, null)
    
    return ans
};
```

Return the result directly from DFS
```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const graph = Array(n + 1).fill().map(() => [])
    for (const [from, to] of edges) {
        graph[from].push(to)
        graph[to].push(from)
    }
    
    let ans = 0
    function dfs(node, parent, steps) {
        if (steps === t) return node === target ? 1 : 0
        
        let total = 0
        let prob = 0
        for (const child of graph[node]) {
            if (child === parent) continue
            prob += dfs(child, node, steps + 1)
            total += 1
        }
        if (!total) return node === target ? 1 : 0
        return prob/total
    }
    
    return dfs(1, null, 0)
};
```

BFS
```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const graph = Array(n + 1).fill().map(() => [])
    for (const [from, to] of edges) {
        graph[from].push(to)
        graph[to].push(from)
    }
    
    const queue = [1]
    const probs = Array(n + 1).fill(0)
    const seen = Array(n + 1).fill(0)
    probs[1] = 1
    seen[1] = 1
    let steps = 0
    
    while (queue.length && steps <= t) {
        let size = queue.length
        while (size) {
            size -= 1
            const node = queue.pop()
            const children = graph[node].filter(i => !seen[i])
            if (node === target) {
                if (!children.length || steps === t) return probs[node]
                return 0
            }
            for (const child of children) {
                if (!seen[child]) {
                    seen[child] = 1
                    probs[child] = probs[node]/children.length
                    queue.unshift(child)
                }
            }
        }
        steps += 1
    }
    return 0
};
```