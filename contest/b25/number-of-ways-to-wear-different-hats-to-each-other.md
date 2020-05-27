### [1434\. Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)

Difficulty: **Hard**


There are `n` people and 40 types of hats labeled from 1 to 40.

Given a list of list of integers `hats`, where `hats[i]` is a list of all hats preferred by the `i-th` person.

Return the number of ways that the n people wear different hats to each other.

Since the answer may be too large, return it modulo `10^9 + 7`.

**Example 1:**

```
Input: hats = [[3,4],[4,5],[5]]
Output: 1
Explanation: There is only one way to choose hats given the conditions. 
First person choose hat 3, Second person choose hat 4 and last one hat 5.
```

**Example 2:**

```
Input: hats = [[3,5,1],[3,5]]
Output: 4
Explanation: There are 4 ways to choose hats
(3,5), (5,3), (1,3) and (1,5)
```

**Example 3:**

```
Input: hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
Output: 24
Explanation: Each person can choose hats labeled from 1 to 4.
Number of Permutations of (1,2,3,4) = 24.
```

**Example 4:**

```
Input: hats = [[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]]
Output: 111
```

**Constraints:**

*   `n == hats.length`
*   `1 <= n <= 10`
*   `1 <= hats[i].length <= 40`
*   `1 <= hats[i][j] <= 40`
*   `hats[i]` contains a list of **unique** integers.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
    const mod = 10 ** 9 + 7
    const n = hats.length
    const hatsCount = 40
    const h2p = Array(hatsCount).fill().map(() => [])
    
    for (let i = 0; i < n; i += 1) {
        for (const h of hats[i]) {
            h2p[h - 1].push(i)
        }
    }
    
    const cache = Array(hatsCount).fill().map(() => Array(1 << n).fill())
    const allAssigned = (1 << n) - 1
    
    function dfs(i, assigned) {
        if (assigned === allAssigned) return 1
        if (i === hatsCount) return 0
        if (cache[i][assigned] === undefined) {
            cache[i][assigned] = dfs(i + 1, assigned)
            for (const p of h2p[i]) {
                const mask = 1 << p
                if ((assigned & mask) === 0) {
                    cache[i][assigned] = (cache[i][assigned] + dfs(i + 1, assigned | mask)) % mod
                }
            }
        }
        return cache[i][assigned]
    }
    
    return dfs(0, 0)
};
```