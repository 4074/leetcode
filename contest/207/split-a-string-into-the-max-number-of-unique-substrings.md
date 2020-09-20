### [1593\. Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)

Difficulty: **Medium**  

Related Topics: [Backtracking](https://leetcode.com/tag/backtracking/)


Given a string `s`<var style="display: inline;">,</var> return _the maximum number of unique substrings that the given string can be split into_.

You can split string `s` into any list of **non-empty substrings**, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are **unique**.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "ababccc"
Output: 5
Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
```

**Example 2:**

```
Input: s = "aba"
Output: 2
Explanation: One way to split maximally is ['a', 'ba'].
```

**Example 3:**

```
Input: s = "aa"
Output: 1
Explanation: It is impossible to split the string any further.
```

**Constraints:**

*   `1 <= s.length <= 16`

*   `s` contains only lower case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) { 
    const n = s.length
    
    function dfs(index, set) {
        if (index === n) return 0
        
        let str = ''
        let count = 0
        
        for (let i = index; i < n; i += 1) {
            str += s[i]
            if (set.has(str)) continue
            set.add(str)
            count = Math.max(count, dfs(i + 1, set) + 1)
            set.delete(str)
        }
        
        return count
    }
    
    return dfs(0, new Set())
};
```