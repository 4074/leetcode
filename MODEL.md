# Models for problems

## Graph
### Topological Sort
```javascript
/**
 * Topological sort
 * @param number[][] graph by linked list 
 */
function topoSort(graph) {
    const n = graph.length

    // Initial indegree
    // indegree[i] represent how many pre items the i-th item has 
    const indegree = Array(n).fill(0)
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < graph[i].length; j += 1) {
            indegree[graph[i][j]] += 1
        }
    }

    const sorted = []
    // Push all items in sorted
    while (sorted.length < n) {

        // Find a item with zero indegree
        let j = 0
        while (j < n && indegree[j] != 0) {
            j += 1
        }

        // If no such item, the graph is cyclic, return empty array
        if (j === n) return []

        // Push item in sorted
        // And set indegree to -1, mark it pushed
        indegree[j] -= 1
        sorted.push(j)

        // Minus 1 the indegree of the items next to this item 
        for (let k = 0; k < graph[j].length; k += 1) {
            indegree[graph[j][k]] -= 1
        }
    }

    return sorted
}
topoSort([[], [0], [1], [2]]) // [3, 2, 1, 0]
```