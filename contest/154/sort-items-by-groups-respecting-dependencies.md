### [1203\. Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)

Difficulty: **Hard**


There are `n` items each belonging to zero or one of `m` groups where `group[i]` is the group that the `i`-th item belongs to and it's equal to `-1` if the `i`-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.

Return a sorted list of the items such that:

*   The items that belong to the same group are next to each other in the sorted list.
*   There are some relations between these items where `beforeItems[i]` is a list containing all the items that should come before the `i`-th item in the sorted array (to the left of the `i`-th item).

Return any solution if there is more than one solution and return an **empty list** if there is no solution.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png)**

```
Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]
```

**Example 2:**

```
Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
Output: []
Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
```

**Constraints:**

*   `1 <= m <= n <= 3*10^4`
*   `group.length == beforeItems.length == n`
*   `-1 <= group[i] <= m-1`
*   `0 <= beforeItems[i].length <= n-1`
*   `0 <= beforeItems[i][j] <= n-1`
*   `i != beforeItems[i][j]`
*   `beforeItems[i] `does not contain duplicates elements.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    let k = m
    const groups = []
    for (let i = 0; i < group.length; i += 1) {
        if (group[i] < 0) {
            group[i] = k
            k += 1
        }
        if (!groups[group[i]]) groups[group[i]] = []
        groups[group[i]].push(i)
    }
    
    // console.log(group)
    const graph = Array(k).fill()
        .map(() => [])
    const itemsNext = Array(n).fill()
        .map(() => [])
    for (let i = 0; i < beforeItems.length; i += 1) {
        for (let j = 0; j < beforeItems[i].length; j += 1) {
            const preItem = beforeItems[i][j]
            if (group[preItem] !== group[i]) {
                graph[group[preItem]].push(group[i])
            } else {
                itemsNext[preItem].push(i)
            }
        }
    }
    // console.log(graph)
    const groupSorted = topoSort(graph)
    // console.log(groupSorted)
    // console.log(groups)
    // console.log(itemsNext)
    
    let result = []
    for (const g of groupSorted) {
        if (!groups[g]) continue
        if (groups[g].length === 1) {
            result.push(groups[g][0])
            continue
        }
        
        const valueIndex = new Map()
        for (let i = 0; i < groups[g].length; i += 1) {
            valueIndex.set(groups[g][i], i)
        }
        // console.log(222, valueIndex)
        let itemGraph = Array(groups[g].length).fill()
            .map(
                (_, i) => itemsNext[groups[g][i]].map(k => valueIndex.get(k))
            )
        // console.log(111, g, itemGraph)
        const itemSorted = topoSort(itemGraph).map((i) => groups[g][i])
        if (!itemSorted.length) return []
        result = result.concat(itemSorted)
    }
    
    return result
};

function topoSort(graph) {
    const n = graph.length
    const indegree = Array(n).fill(0)
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < graph[i].length; j += 1) {
            indegree[graph[i][j]] += 1
        }
    }

    const sorted = []
    for (let i = 0; i < n; i += 1) {
        let j = 0
        while (j < n && indegree[j] != 0) {
            j += 1
        }
        if (j === n) return []

        indegree[j] -= 1
        sorted.push(j)
        for (let k = 0; k < graph[j].length; k += 1) {
            indegree[graph[j][k]] -= 1
        }
    }

    return sorted
}
```