### [1129\. Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)

Difficulty: **Medium**


Consider a directed graph, with nodes labelled `0, 1, ..., n-1`.  In this graph, each edge is either red or blue, and there could be self-edges or parallel edges.

Each `[i, j]` in `red_edges` denotes a red directed edge from node `i` to node `j`.  Similarly, each `[i, j]` in `blue_edges` denotes a blue directed edge from node `i` to node `j`.

Return an array `answer` of length `n`, where each `answer[X]` is the length of the shortest path from node `0` to node `X` such that the edge colors alternate along the path (or `-1` if such a path doesn't exist).

**Example 1:**

```
Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
Output: [0,1,-1]
```

**Example 2:**

```
Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
Output: [0,1,-1]
```

**Example 3:**

```
Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
Output: [0,-1,-1]
```

**Example 4:**

```
Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
Output: [0,1,2]
```

**Example 5:**

```
Input: n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
Output: [0,1,1]
```

**Constraints:**

*   `1 <= n <= 100`
*   `red_edges.length <= 400`
*   `blue_edges.length <= 400`
*   `red_edges[i].length == blue_edges[i].length == 2`
*   `0 <= red_edges[i][j], blue_edges[i][j] < n`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
    var queue = [], graph = {}, seen = {red: [], blue: []}, answer = new Array(n).fill(-1)
​
    for (var i=0; i<red_edges.length; i++) {
        if (!graph[red_edges[i][0]]) {
            graph[red_edges[i][0]] = {red: [], blue: []}
        }
        if (graph[red_edges[i][0]].red.indexOf(red_edges[i][1]) < 0) {
            graph[red_edges[i][0]].red.push(red_edges[i][1])
        }
        
    }
    for (var i=0; i<blue_edges.length; i++) {
        if (!graph[blue_edges[i][0]]) {
            graph[blue_edges[i][0]] = {red: [], blue: []}
        }
        if (graph[blue_edges[i][0]].blue.indexOf(blue_edges[i][1]) < 0) {
            graph[blue_edges[i][0]].blue.push(blue_edges[i][1])
        }
    }
​
    queue.push({label: 0, color: 'red'}, {label: 0, color: 'blue'})
    seen.red.push(0)
    seen.blue.push(0)
​
    let step = 0
    while(queue.length) {
        let list = queue
        queue = []
        while(list.length) {
            const current = list.pop()
    
            if (answer[current.label] === -1) {
                answer[current.label] = step
            }
    
            if (!graph[current.label]) continue;
            const oppoColor = current.color === 'red' ? 'blue' : 'red'
            const next = graph[current.label][oppoColor]
​
            for (var i=0; i<next.length; i++) {
                if (seen[oppoColor].indexOf(next[i]) < 0) {
                    seen[oppoColor].push(next[i])
                    queue.push({label: next[i], color: oppoColor})
                }
            }
        }
​
        step += 1
    }
    return answer
};
```