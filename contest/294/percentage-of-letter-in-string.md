# [2278\. Percentage of Letter in String](https://leetcode.com/problems/percentage-of-letter-in-string/)

## Description

Difficulty: **Easy**  

Related Topics:


Given a string `s` and a character `letter`, return _the **percentage** of characters in_ `s` _that equal_ `letter` _**rounded down** to the nearest whole percent._

**Example 1:**

```
Input: s = "foobar", letter = "o"
Output: 33
Explanation:
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
```

**Example 2:**

```
Input: s = "jjjj", letter = "k"
Output: 0
Explanation:
The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
```

**Constraints:**

*   `1 <= s.length <= 100`
*   `s` consists of lowercase English letters.
*   `letter` is a lowercase English letter.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  let count = 0
  for (const char of s) {
    if (char === letter) count += 1
  }
  return Math.floor((count / s.length) * 100)
};
```