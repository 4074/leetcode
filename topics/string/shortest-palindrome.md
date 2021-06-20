### [214\. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/)


You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it.

Return _the shortest palindrome you can find by performing this transformation_.

**Example 1:**

```
Input: s = "aacecaaa"
Output: "aaacecaaa"
```

**Example 2:**

```
Input: s = "abcd"
Output: "dcbabcd"
```

**Constraints:**

*   `0 <= s.length <= 5 * 10<sup>4</sup>`
*   `s` consists of lowercase English letters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const ds = s + '#' + s.split('').reverse().join('')
  const lps = Array(ds.length).fill(0)
  
  let k = 0
  for (let i = 1; i < ds.length; i += 1) {
    if (ds[i] === ds[k]) {
      k += 1
      lps[i] = k
    } else {
      if (k) {
        k = lps[k - 1]
        i -= 1
      }
    }
  }
  
  return s.slice(lps.pop()).split('').reverse().join('') + s
};
```