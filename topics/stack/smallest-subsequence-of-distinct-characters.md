### [1081\. Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/)

Difficulty: **Medium**


Return the lexicographically smallest subsequence of `text` that contains all the distinct characters of `text` exactly once.

**Example 1:**

```
Input: "cdadabcc"
Output: "adbc"
```


**Example 2:**

```
Input: "abcd"
Output: "abcd"
```


**Example 3:**

```
Input: "ecbacba"
Output: "eacb"
```


**Example 4:**

```
Input: "leetcode"
Output: "letcod"
```

**Constraints:**

1.  `1 <= text.length <= 1000`
2.  `text` consists of lowercase English letters.

**Note:** This question is the same as 316: 


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
    const base = 'a'.charCodeAt(0)
    const counts = {}
    
    for (let i = 0; i < text.length; i += 1) {
        counts[text[i]] = (counts[text[i]] || 0) + 1
    }
    
    const ans = []
    const used = {}
    for (let i = 0; i < text.length; i += 1) {
        counts[text[i]] -= 1
        if (used[text[i]]) continue
        
        while (ans.length && text[i] < ans[ans.length - 1] && counts[ans[ans.length - 1]]) {
            const c = ans.pop()
            used[c] = false
        }
        
        used[text[i]] = true
        ans.push(text[i])
    }
    
    return ans.join('')
};
```