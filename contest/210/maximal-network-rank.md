### [1615\. Maximal Network Rank](https://leetcode.com/problems/maximal-network-rank/)

Difficulty: **Medium**  

Related Topics: [Graph](https://leetcode.com/tag/graph/)


There is an infrastructure of `n` cities with some number of `roads` connecting these cities. Each `roads[i] = [a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub>]` indicates that there is a bidirectional road between cities `a<sub style="display: inline;">i</sub>` and `b<sub style="display: inline;">i</sub>`.

The **network rank**of **two different cities** is defined as the total number of **directly** connected roads to **either** city. If a road is directly connected to both cities, it is only counted **once**.

The **maximal network rank** of the infrastructure is the **maximum network rank** of all pairs of different cities.

Given the integer `n` and the array `roads`, return _the **maximal network rank** of the entire infrastructure_.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/09/21/ex1.png)**

```
Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
Output: 4
Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1\. The road between 0 and 1 is only counted once.
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/09/21/ex2.png)**

```
Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
Output: 5
Explanation: There are 5 roads that are connected to cities 1 or 2.
```

**Example 3:**

```
Input: n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
Output: 5
Explanation: The network rank of 2 and 5 is 5\. Notice that all the cities do not have to be connected.
```

**Constraints:**

*   `2 <= n <= 100`
*   `0 <= roads.length <= n * (n - 1) / 2`
*   `roads[i].length == 2`
*   `0 <= a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub> <= n-1`
*   `a<sub style="display: inline;">i</sub> != b<sub style="display: inline;">i</sub>`
*   Each pair of cities has **at most one** road connecting them.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const count = Array(n).fill(0)
    const directly = Array(n).fill().map(() => Array(n).fill(0))
    
    for (const [a, b] of roads) {
        count[a] += 1
        count[b] += 1
        directly[a][b] = 1
        directly[b][a] = 1
    }
    
    let ans = 0
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            ans = Math.max(ans, count[i] + count[j] - directly[i][j])
        }
    }
    return ans
};
```