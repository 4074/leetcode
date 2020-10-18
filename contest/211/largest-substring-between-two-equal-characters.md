### [1624\. Largest Substring Between Two Equal Characters](https://leetcode.com/problems/largest-substring-between-two-equal-characters/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/)


Given a string `s`, return _the length of the longest substring between two equal characters, excluding the two characters._ If there is no such substring return `-1`.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
```

**Example 2:**

```
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
```

**Example 3:**

```
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
```

**Example 4:**

```
Input: s = "cabbac"
Output: 4
Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".
```

**Constraints:**

*   `1 <= s.length <= 300`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const lastPosition = {}
    let ans = -1
    for (let i = 0; i < s.length; i += 1) {
        if (lastPosition[s[i]] !== undefined) {
            const l = i - lastPosition[s[i]] - 1
            if (l > ans) ans = l
        } else {
            lastPosition[s[i]] = i
        }
    }
    return ans
};
```