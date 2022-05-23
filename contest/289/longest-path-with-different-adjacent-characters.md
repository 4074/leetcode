# [2246\. Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)

## Description

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [String](https://leetcode.com/tag/string/), [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Graph](https://leetcode.com/tag/graph/), [Topological Sort](https://leetcode.com/tag/topological-sort/)


You are given a **tree** (i.e. a connected, undirected graph that has no cycles) **rooted** at node `0` consisting of `n` nodes numbered from `0` to `n - 1`. The tree is represented by a **0-indexed** array `parent` of size `n`, where `parent[i]` is the parent of node `i`. Since node `0` is the root, `parent[0] == -1`.

You are also given a string `s` of length `n`, where `s[i]` is the character assigned to node `i`.

Return _the length of the **longest path** in the tree such that no pair of **adjacent** nodes on the path have the same character assigned to them._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/25/testingdrawio.png)

```
Input: parent = [-1,0,0,1,1,2], s = "abacbe"
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3\. The length of this path is 3, so 3 is returned.
It can be proven that there is no longer path that satisfies the conditions. 
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/25/graph2drawio.png)

```
Input: parent = [-1,0,0,0], s = "aabc"
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3\. The length of this path is 3, so 3 is returned.
```

**Constraints:**

*   `n == parent.length == s.length`
*   1 <= n <= 10<sup>5</sup>
*   `0 <= parent[i] <= n - 1` for all `i >= 1`
*   `parent[0] == -1`
*   `parent` represents a valid tree.
*   `s` consists of only lowercase English letters.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length
  const list = {}
  for (let i = 1; i < n; i += 1) {
    if (!list[parent[i]]) list[parent[i]] = []
    list[parent[i]].push(i)
  }
  
  let ans = 1
  const dfs = (node) => {
    if (!list[node]) return 1
    
    let maxChild = 0
    let secMaxChild = 0
    for (const child of list[node]) {
      let len = dfs(child)
      if (s[child] === s[node]) continue
      if (len >= maxChild) {
        secMaxChild = maxChild
        maxChild = len
      } else if (len > secMaxChild) {
        secMaxChild = len
      }
    }
    
    ans = Math.max(ans, maxChild + 1 + secMaxChild)
    return maxChild + 1
  }
  
  dfs(0)
  
  return ans
};
```