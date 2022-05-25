# [2225\. Find Players With Zero or One Losses](https://leetcode.com/problems/find-players-with-zero-or-one-losses/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Sorting](https://leetcode.com/tag/sorting/), [Counting](https://leetcode.com/tag/counting/)


You are given an integer array `matches` where matches[i] = [winner<sub>i</sub>, loser<sub>i</sub>] indicates that the player winner<sub>i</sub> defeated player loser<sub>i</sub> in a match.

Return _a list_ `answer` _of size_ `2` _where:_

*   `answer[0]` is a list of all players that have **not** lost any matches.
*   `answer[1]` is a list of all players that have lost exactly **one** match.

The values in the two lists should be returned in **increasing** order.

**Note:**

*   You should only consider the players that have played **at least one** match.
*   The testcases will be generated such that **no** two matches will have the **same** outcome.

**Example 1:**

```
Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
```

**Example 2:**

```
Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
```

**Constraints:**

*   1 <= matches.length <= 10<sup>5</sup>
*   `matches[i].length == 2
*   1 <= winner<sub>i</sub>, loser<sub>i</sub> <= 10<sup>5</sup>
*   winner<sub>i</sub> != loser<sub>i</sub>
*   All matches[i]` are **unique**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const players = {}
  const ans = [[], []]
  
  let max = 0
  for (const [w, l] of matches) {
    players[l] = (players[l] || 0) + 1
    if (players[w] === undefined) players[w] = 0
    max = Math.max(max, w, l)
  }
  
  for (let i = 1; i <= max; i += 1) {
    if (players[i] === 0) {
      ans[0].push(i)
    } else if (players[i] === 1) {
      ans[1].push(i)
    }
  }
  
  return ans
};
```