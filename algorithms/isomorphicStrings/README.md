### [205\. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)

Difficulty: **Easy**

Given two strings **_s_** and **_t_**, determine if they are isomorphic.

Two strings are isomorphic if the characters in **_s_** can be replaced to get **_t_**.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,  
Given `"egg"`, `"add"`, return true.

Given `"foo"`, `"bar"`, return false.

Given `"paper"`, `"title"`, return true.

**Note:**  
You may assume both **_s_** and **_t_** have the same length.

#### Solution
```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let len = s.length
    let charMap = {}
    let chars = []
​
    if (t.length !== len) return false;
​
    for (var i = 0; i < len; i++) {
        const n = s[i], m = t[i]
        if (charMap[n]) {
            if (charMap[n] !== m) return false
        } else {
            if (chars.indexOf(m) >= 0) return false;
            charMap[n] = m
            chars.push(m)
        }
    }
​
    return true
};
```