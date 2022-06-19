# [2309\. Greatest English Letter in Upper and Lower Case](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/)

## Description

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given a string of English letters `s`, return _the **greatest** English letter which occurs as **both** a lowercase and uppercase letter in_ `s`. The returned letter should be in **uppercase**. If no such letter exists, return _an empty string_.

An English letter `b` is **greater** than another letter `a` if `b` appears **after** `a` in the English alphabet.

**Example 1:**

```
Input: s = "lEeTcOdE"
Output: "E"
Explanation:
The letter 'E' is the only letter to appear in both lower and upper case.
```

**Example 2:**

```
Input: s = "arRAzFif"
Output: "R"
Explanation:
The letter 'R' is the greatest letter to appear in both lower and upper case.
Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
```

**Example 3:**

```
Input: s = "AbCdEfGhIjK"
Output: ""
Explanation:
There is no letter that appears in both lower and upper case.
```

**Constraints:**

*   `1 <= s.length <= 1000`
*   `s` consists of lowercase and uppercase English letters.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const counts = Array(255).fill(0)
  let ans = ''
  
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charCodeAt(i)
    if (c < 97 && counts[c + 32] && s[i] > ans) ans = s[i]
    counts[c] = 1
  }
  
  return ans
};
```