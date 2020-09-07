### [1576\. Replace All ?'s to Avoid Consecutive Repeating Characters](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/)


Given a string `s`<var style="display: inline;"> </var>containing only lower case English letters and the '?' character, convert **all** the '?' characters into lower case letters such that the final string does not contain any **consecutive repeating **characters. You **cannot** modify the non '?' characters.

It is **guaranteed** that there are no consecutive repeating characters in the given string **except** for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

**Example 1:**

```
Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
```

**Example 2:**

```
Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
```

**Example 3:**

```
Input: s = "j?qg??b"
Output: "jaqgacb"
```

**Example 4:**

```
Input: s = "??yw?ipkj?"
Output: "acywaipkja"
```

**Constraints:**

*   `1 <= s.length <= 100`

*   `s` contains only lower case English letters and `'?'`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const base = 'a'.charCodeAt(0)
    const ans = []
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '?') {
            for (let j = 0; j < 26; j += 1) {
                const c = String.fromCharCode(base + j)
                if (ans.length && ans[ans.length - 1] === c) continue
                if (i < s.length - 1 && s[i + 1] === c) continue
                ans.push(c)
                break
            }
        } else {
            ans.push(s[i])
        }
    }
    return ans.join('')
};
```