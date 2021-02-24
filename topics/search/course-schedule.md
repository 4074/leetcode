### [207\. Course Schedule](https://leetcode.com/problems/course-schedule/)

Difficulty: **Medium**  

Related Topics: [Depth-first Search](https://leetcode.com/tag/depth-first-search/), [Breadth-first Search](https://leetcode.com/tag/breadth-first-search/), [Graph](https://leetcode.com/tag/graph/), [Topological Sort](https://leetcode.com/tag/topological-sort/)


There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub>]` indicates that you **must** take course `b<sub style="display: inline;">i</sub>` first if you want to take course `a<sub style="display: inline;">i</sub>`.

*   For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**Example 1:**

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0\. So it is possible.
```

**Example 2:**

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1\. So it is impossible.
```

**Constraints:**

*   `1 <= numCourses <= 10<sup>5</sup>`
*   `0 <= prerequisites.length <= 5000`
*   `prerequisites[i].length == 2`
*   `0 <= a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub> < numCourses`
*   All the pairs prerequisites[i] are **unique**.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill().map(() => [])
    const inDegrees = Array(numCourses).fill(0)
    
    for (const [p, c] of prerequisites) {
        graph[p].push(c)
        inDegrees[c] += 1
    }
    
    const queue = []
    for (let i = 0; i < numCourses; i += 1) {
        if (inDegrees[i] === 0) queue.push(i)
    }
    
    while (queue.length) {
        const current = queue.pop()
        numCourses -= 1
        for (const c of graph[current]) {
            inDegrees[c] -= 1
            if (inDegrees[c] === 0) queue.push(c)
        }
    }
    
    return !numCourses
};
```