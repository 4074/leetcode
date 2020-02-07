### [39\. Combination Sum](https://leetcode.com/problems/combination-sum/)

Difficulty: **Medium**


Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

*   All numbers (including `target`) will be positive integers.
*   The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a, b) => a < b ? -1 : 1)
    const answer = []
    
    function dfs(numbers, sum, index) {
        if (sum === target) {
            return answer.push([...numbers])
        }
        
        for (let i=index; i<candidates.length; i++) {
            if (sum + candidates[i] > target) return
            numbers.push(candidates[i])
           dfs(numbers, sum + candidates[i], i)
            numbers.pop()
        }
    }
    
    dfs([], 0, 0)
    
    return answer
};
```