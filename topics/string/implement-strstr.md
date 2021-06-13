### [28\. Implement strStr()](https://leetcode.com/problems/implement-strstr/)

Difficulty: **Easy**  

Related Topics: [Two Pointers](https://leetcode.com/tag/two-pointers/), [String](https://leetcode.com/tag/string/)


Implement .

Return the index of the first occurrence of needle in haystack, or `-1` if `needle` is not part of `haystack`.

**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's  and Java's .

**Example 1:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

**Example 2:**

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Example 3:**

```
Input: haystack = "", needle = ""
Output: 0
```

**Constraints:**

*   `0 <= haystack.length, needle.length <= 5 * 10<sup>4</sup>`
*   `haystack` and `needle` consist of only lower-case English characters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length > haystack) return -1
  return match(haystack, needle)
};
​
function lps(s) {
  const res = Array(s.length).fill(0)
​
  let k = 0
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[k]) {
      k += 1
      res[i] = k
    } else {
      if (k) {
        k = res[k - 1]
        i -= 1
      } else {
        res[i] = 0
      }
    }
  }
​
  return res
}
​
function match(s, p) {
  if (s.length < p.length) return -1
  if (s === p || !p) return 0
  const next = lps(p)
  let k = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === p[k]) {
      k += 1
    } else {
      if (k) {
        k = next[k - 1]
        i -= 1
      } else {
        k = 0
      }
    }
​
    if (k === p.length) return i - k + 1
  }
​
  return -1
}
```