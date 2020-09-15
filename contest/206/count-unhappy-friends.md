### [1583\. Count Unhappy Friends](https://leetcode.com/problems/count-unhappy-friends/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/)


You are given a list of `preferences` for `n` friends, where `n` is always **even**.

For each person `i`, `preferences[i]` contains a list of friends **sorted** in the **order of preference**. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from `0` to `n-1`.

All the friends are divided into pairs. The pairings are given in a list `pairs`, where `pairs[i] = [x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub>]` denotes `x<sub style="display: inline;">i</sub>` is paired with `y<sub style="display: inline;">i</sub>` and `y<sub style="display: inline;">i</sub>` is paired with `x<sub style="display: inline;">i</sub>`.

However, this pairing may cause some of the friends to be unhappy. A friend `x` is unhappy if `x` is paired with `y` and there exists a friend `u` who is paired with `v` but:

*   `x` prefers `u` over `y`, and
*   `u` prefers `x` over `v`.

Return _the number of unhappy friends_.

**Example 1:**

```
Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.
```

**Example 2:**

```
Input: n = 2, preferences = [[1], [0]], pairs = [[1, 0]]
Output: 0
Explanation: Both friends 0 and 1 are happy.
```

**Example 3:**

```
Input: n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs = [[1, 3], [0, 2]]
Output: 4
```

**Constraints:**

*   `2 <= n <= 500`
*   `n` is even.
*   `preferences.length == n`
*   `preferences[i].length == n - 1`
*   `0 <= preferences[i][j] <= n - 1`
*   `preferences[i]` does not contain `i`.
*   All values in `preferences[i]` are unique.
*   `pairs.length == n/2`
*   `pairs[i].length == 2`
*   `x<sub style="display: inline;">i</sub> != y<sub style="display: inline;">i</sub>`
*   `0 <= x<sub style="display: inline;">i</sub>, y<sub style="display: inline;">i</sub> <= n - 1`
*   Each person is contained in **exactly one** pair.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    const prefer = Array(n).fill().map(() => Array(n).fill(0))
    for (const [x, y] of pairs) {
        for (const u of preferences[x]) {
            if (u === y) break
            prefer[x][u] = 1
        }
        
        for (const u of preferences[y]) {
            if (u === x) break
            prefer[y][u] = 1
        }
    }
    
    let ans = 0
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (prefer[i][j] && prefer[j][i]) {
                ans += 1
                break
            }
        }
    }
    
    return ans
};
```