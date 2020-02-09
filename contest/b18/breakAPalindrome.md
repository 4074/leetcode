### [1328\. Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/)

Difficulty: **Medium**


Given a palindromic string `palindrome`, replace **exactly one** character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that **isn't** a palindrome.

After doing so, return the final string.  If there is no way to do so, return the empty string.

**Example 1:**

```
Input: palindrome = "abccba"
Output: "aaccba"
```

**Example 2:**

```
Input: palindrome = "a"
Output: ""
```

**Constraints:**

*   `1 <= palindrome.length <= 1000`
*   `palindrome` consists of only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    for (let i = 0; i < palindrome.length; i += 1) {
        if (
            (palindrome[i] !== 'a' || i === palindrome.length - 1)
            && palindrome.length - i - 1 !== i
           )
            return palindrome.substring(0, i)
                + (palindrome[i] !== 'a' ? 'a' : 'b')
                + palindrome.substring(i + 1, palindrome.length)
    }
    return ''
};
```