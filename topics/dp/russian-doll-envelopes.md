### [354\. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

Difficulty: **Hard**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are given a 2D array of integers `envelopes` where `envelopes[i] = [w<sub style="display: inline;">i</sub>, h<sub style="display: inline;">i</sub>]` represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

Return _the maximum number of envelopes can you Russian doll (i.e., put one inside the other)_.

**Note:** You cannot rotate an envelope.

**Example 1:**

```
Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

**Example 2:**

```
Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1
```

**Constraints:**

*   `1 <= envelopes.length <= 5000`
*   `envelopes[i].length == 2`
*   `1 <= w<sub style="display: inline;">i</sub>, h<sub style="display: inline;">i</sub> <= 10<sup>4</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  const n = envelopes.length
  const dp = Array(n + 1).fill(Infinity)
  
  for (const [_, h] of envelopes) {
    let l = 0, r = n
    while (l < r) {
      const m = Math.ceil((l + r) / 2)
      if (dp[m] < h) {
        l = m
      } else {
        r = m - 1
      }
    }
    dp[l + 1] = Math.min(dp[l + 1], h)
  }
  
  for (let i = n; n > 0; i -= 1) {
    if (dp[i] !== Infinity) return i
  }
};
```