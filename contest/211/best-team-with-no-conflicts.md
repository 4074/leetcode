### [1626\. Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the **sum** of scores of all the players in the team.

However, the basketball team is not allowed to have **conflicts**. A **conflict** exists if a younger player has a **strictly higher** score than an older player. A conflict does **not** occur between players of the same age.

Given two lists, `scores` and `ages`, where each `scores[i]` and `ages[i]` represents the score and age of the `i<sup>th</sup>` player, respectively, return _the highest overall score of all possible basketball teams_.

**Example 1:**

```
Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]
Output: 34
Explanation: You can choose all the players.
```

**Example 2:**

```
Input: scores = [4,5,6,5], ages = [2,1,2,1]
Output: 16
Explanation: It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.
```

**Example 3:**

```
Input: scores = [1,2,3,5], ages = [8,9,10,1]
Output: 6
Explanation: It is best to choose the first 3 players. 
```

**Constraints:**

*   `1 <= scores.length, ages.length <= 1000`
*   `scores.length == ages.length`
*   `1 <= scores[i] <= 10<sup>6</sup>`
*   `1 <= ages[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const n = scores.length
    const players = []
    for (let i = 0; i < scores.length; i += 1) {
        players.push([scores[i], ages[i]])
    }
    players.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]
        return b[0] - a[0]
    })
    
    const cache = Array(n).fill().map(() => Array(1001).fill())
    function dfs(index, age) {
        if (index >= n) return 0
        if (cache[index][age] === undefined) {
            let result = dfs(index + 1, age)
            if (players[index][1] <= age) {
                result = Math.max(result, players[index][0] + dfs(index + 1, players[index][1]))
            }
            cache[index][age] = result
        }
        return cache[index][age]
    }
    
    return dfs(0, Infinity)
};
```