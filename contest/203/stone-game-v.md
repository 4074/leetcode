### [1563\. Stone Game V](https://leetcode.com/problems/stone-game-v/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


There are several stones **arranged in a row**, and each stone has an associated value which is an integer given in the array `stoneValue`.

In each round of the game, Alice divides the row into **two non-empty rows** (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice's score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row.

The game ends when there is only **one stone remaining**. Alice's is initially **zero**.

Return _the maximum score that Alice can obtain_.

**Example 1:**

```
Input: stoneValue = [6,2,3,4,5,5]
Output: 18
Explanation: In the first round, Alice divides the row to [6,2,3], [4,5,5]. The left row has the value 11 and the right row has value 14\. Bob throws away the right row and Alice's score is now 11.
In the second round Alice divides the row to [6], [2,3]. This time Bob throws away the left row and Alice's score becomes 16 (11 + 5).
The last round Alice has only one choice to divide the row which is [2], [3]. Bob throws away the right row and Alice's score is now 18 (16 + 2). The game ends because only one stone is remaining in the row.
```

**Example 2:**

```
Input: stoneValue = [7,7,7,7,7,7,7]
Output: 28
```

**Example 3:**

```
Input: stoneValue = [4]
Output: 0
```

**Constraints:**

*   `1 <= stoneValue.length <= 500`
*   `1 <= stoneValue[i] <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length
    
    const prefixSum = Array(n + 1).fill(0)
    for (let i = 1; i <= n; i += 1) {
        prefixSum[i] = prefixSum[i - 1] + stoneValue[i - 1]
    }
    
    const cache = Array(n).fill().map(() => Array(n).fill(0))
    
    function dfs(start, end) {
        if (start === end) return 0
        if (!cache[start][end]) {
            const sum = prefixSum[end + 1] - prefixSum[start]
            let leftSum = 0
            let s = 0
            for (let i = start; i < end; i += 1) {
                leftSum += stoneValue[i]
                if (leftSum === sum / 2) {
                    s = Math.max(s, leftSum + Math.max(dfs(start, i), dfs(i + 1, end)))
                } else if (leftSum > sum / 2) {
                    s = Math.max(s, sum - leftSum + dfs(i + 1, end))
                } else {
                    s = Math.max(s, leftSum + dfs(start, i))
                }
            }
            cache[start][end] = s
        }
        
        return cache[start][end]
    }
    
    const ans = dfs(0, n - 1)
    return ans
};
```