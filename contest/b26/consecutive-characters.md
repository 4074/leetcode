### [1446\. Consecutive Characters](https://leetcode.com/problems/consecutive-characters/)

Difficulty: **Easy**


Given a string `s`, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return _the power_ of the string.

**Example 1:**

```
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
```

**Example 2:**

```
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
```

**Example 3:**

```
Input: s = "triplepillooooow"
Output: 5
```

**Example 4:**

```
Input: s = "hooraaaaaaaaaaay"
Output: 11
```

**Example 5:**

```
Input: s = "tourist"
Output: 1
```

**Constraints:**

*   `1 <= s.length <= 500`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let ans = 0
    let count = 0
    for (let i = 0; i < s.length; i += 1) {
        if (i === 0 || s[i] === s[i - 1]) {
            count += 1
        } else {
            count = 1
        }
        ans = Math.max(ans, count)
    }
    return ans
};
```