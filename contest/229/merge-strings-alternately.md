### [1768\. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/)


You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string._

**Example 1:**

```
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

**Example 2:**

```
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
```

**Example 3:**

```
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
```

**Constraints:**

*   `1 <= word1.length, word2.length <= 100`
*   `word1` and `word2` consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const n = word1.length
    const m = word2.length
    
    const l = Math.max(n, m)
    let ans = ''
    for (let i = 0; i < l; i += 1) {
        if (i < n) ans += word1[i]
        if (i < m) ans += word2[i]
    }
    
    return ans
};
```