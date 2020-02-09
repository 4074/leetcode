### [1347\. Minimum Number of Steps to Make Two Strings Anagram](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/)

Difficulty: **Medium**


Given two equal-size strings `s` and `t`. In one step you can choose **any character** of `t` and replace it with **another character**.

Return _the minimum number of steps_ to make `t` an anagram of `s`.

An **Anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

**Example 1:**

```
Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
```

**Example 2:**

```
Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
```

**Example 3:**

```
Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
```

**Example 4:**

```
Input: s = "xxyyzz", t = "xxyyzz"
Output: 0
```

**Example 5:**

```
Input: s = "friend", t = "family"
Output: 4
```

**Constraints:**

*   `1 <= s.length <= 50000`
*   `s.length == t.length`
*   `s` and `t` contain lower-case English letters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const sc = {}
    const tc = {}
    
    for (const si of s) {
        sc[si] = (sc[si] || 0) + 1
    }
    
    for (const ti of t) {
        tc[ti] = (tc[ti] || 0) + 1
    }
    
    let addCount = 0, deleteCount = 0
    for (const si of Object.keys(sc)) {
        const diff = (tc[si] || 0) - sc[si]
        if (diff > 0) {
            deleteCount += diff
        } else {
            addCount += -diff
        }
    }
    
    for (const ti of Object.keys(tc)) {
        if (!sc[ti]) deleteCount += tc[ti]
    }
    
    return Math.max(addCount, deleteCount)
};
```