### [14\. Longest Common PrefixCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode.com/problems/longest-common-prefix/)

Difficulty: **Easy**


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    
    var prefix = strs[0]
    var index = 1
    while (prefix.length && index < strs.length) {
        var s = strs[index]
        for (var i=prefix.length; i>0; i--) {
            if (s.indexOf(prefix.substr(0, i)) === 0) {
                prefix = prefix.substr(0, i)
                break
            } else if (i === 1) {
                prefix = ''
            }
        }
        index ++
    }
    
    return prefix
};
```