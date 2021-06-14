### [1897\. Redistribute Characters to Make All Strings Equal](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/), [Greedy](https://leetcode.com/tag/greedy/)


You are given an array of strings `words` (**0-indexed**).

In one operation, pick two **distinct** indices `i` and `j`, where `words[i]` is a non-empty string, and move **any** character from `words[i]` to **any** position in `words[j]`.

Return `true` _if you can make **every** string in_ `words` _**equal** using **any** number of operations_, _and_ `false` _otherwise_.

**Example 1:**

```
Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.
```

**Example 2:**

```
Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.
```

**Constraints:**

*   `1 <= words.length <= 100`
*   `1 <= words[i].length <= 100`
*   `words[i]` consists of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const counts = Array(26).fill(0)
  const base = 'a'.charCodeAt(0)
  
  for (const w of words) {
    for (let c of w) {
      counts[c.charCodeAt(0) - base] += 1
    }
  }
  
  for (const m of counts) {
    if (m % words.length) return false
  }
  
  return true
};
```