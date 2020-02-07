### [77\. Combinations](https://leetcode.com/problems/combinations/)

Difficulty: **Medium**


Given two integers _n_ and _k_, return all possible combinations of _k_ numbers out of 1 ... _n_.

**Example:**

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    
    function dfs(numbers, index) {
        if (numbers.length === k) {
            return result.push([...numbers])
        }
        for (let i = index; i <= n; i += 1) {
            numbers.push(i)
            dfs(numbers, i + 1)
            numbers.pop()
        }
    }
    
    dfs([], 1)
    
    return result
};
```