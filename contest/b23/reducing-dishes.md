### [1402\. Reducing Dishes](https://leetcode.com/problems/reducing-dishes/)

Difficulty: **Hard**


A chef has collected data on the `satisfaction` level of his `n` dishes. Chef can cook any dish in 1 unit of time.

_Like-time coefficient_ of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  i.e.  `time[i]`*`satisfaction[i]`

Return the maximum sum of _Like-time coefficient_ that the chef can obtain after dishes preparation.

Dishes can be prepared in **any** order and the chef can discard some dishes to get this maximum value.

**Example 1:**

```
Input: satisfaction = [-1,-8,0,5,-9]
Output: 14
Explanation: After Removing the second and last dish, the maximum total Like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14). Each dish is prepared in one unit of time.
```

**Example 2:**

```
Input: satisfaction = [4,3,2]
Output: 20
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
```

**Example 3:**

```
Input: satisfaction = [-1,-4,-5]
Output: 0
Explanation: People don't like the dishes. No dish is prepared.
```

**Example 4:**

```
Input: satisfaction = [-2,5,-1,0,3,-3]
Output: 35
```

**Constraints:**

*   `n == satisfaction.length`
*   `1 <= n <= 500`
*   `-10^3 <= satisfaction[i] <= 10^3`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b)
    const mem = Array(satisfaction.length).fill()
        .map(() => Array(satisfaction.length + 1).fill(-Infinity))
    
    function dp(start, num) {
        if (start >= satisfaction.length) return 0
        if (mem[start][num] === -Infinity) {
            mem[start][num] = Math.max(
                satisfaction[start] * num + dp(start + 1, num + 1),
                dp(start + 1, num)
            )
        }
        return mem[start][num] 
    }
    
    return dp(0, 1)
};
```

```javascript
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b)
    
    const n = satisfaction.length
    const dp = Array(n + 1).fill()
        .map(() => Array(n + 1).fill(-Infinity))
    
    dp[0][0] = 0
    for (let i = 1; i <= n; i += 1) {
        dp[i][0] = 0
        for (let j = 1; j <= i; j += 1) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + satisfaction[i - 1] * j)
        }
    }
    
    return dp[n].reduce((m, v) => Math.max(m, v), 0)
};
```

Greedy
```javascript
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a)
    const n = satisfaction.length
    let total = 0
    let res = 0
    
    for (let i = 0; i < n; i += 1) {
        if (satisfaction[i] + total <= 0) {
            break
        }
        total += satisfaction[i]
        res += total
    }
    
    return res
};
```