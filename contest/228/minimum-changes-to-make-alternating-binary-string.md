### [1758\. Minimum Changes To Make Alternating Binary String](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Greedy](https://leetcode.com/tag/greedy/)


You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return _the **minimum** number of operations needed to make_ `s` _alternating_.

**Example 1:**

```
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.
```

**Example 2:**

```
Input: s = "10"
Output: 0
Explanation: s is already alternating.
```

**Example 3:**

```
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
```

**Constraints:**

*   `1 <= s.length <= 10<sup>4</sup>`
*   `s[i]` is either `'0'` or `'1'`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n = s.length
    let ans = 0
    
    for (let i = 0; i < n; i += 1) {
        if (
            (i & 1) && s[i] === '0' || !(i & 1) && s[i] === '1'
        ) ans += 1
    }
    
    return Math.min(ans, n - ans)
};
```