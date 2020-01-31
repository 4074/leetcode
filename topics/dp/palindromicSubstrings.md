### [647\. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

Difficulty: **Medium**


Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

**Example 1:**

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

**Example 2:**

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

**Note:**

1.  The input string length won't exceed 1000.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    function count(left, right) {
        let sum = 0
        while (
            left >= 0 && right < s.length
            && s[left] === s[right]
        ) {
            sum += 1
            left -= 1
            right += 1
        }
        return sum
    }
    
    let result = 0
    for (let i = 0; i < s.length; i += 1) {
        result += count(i, i) + count(i, i + 1)
    }
    
    return result
};
```