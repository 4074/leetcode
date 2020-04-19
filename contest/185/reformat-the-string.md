### [1417\. Reformat The String](https://leetcode.com/problems/reformat-the-string/)

Difficulty: **Easy**


Given alphanumeric string `s`. (**Alphanumeric string** is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return _the reformatted string_ or return **an empty string** if it is impossible to reformat the string.

**Example 1:**

```
Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
```

**Example 2:**

```
Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.
```

**Example 3:**

```
Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.
```

**Example 4:**

```
Input: s = "covid2019"
Output: "c2o0v1i9d"
```

**Example 5:**

```
Input: s = "ab123"
Output: "1a2b3"
```

**Constraints:**

*   `1 <= s.length <= 500`
*   `s` consists of only lowercase English letters and/or digits.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let digits = []
    let letters = []
    const low = 'a'.charCodeAt(0)
    const high = 'z'.charCodeAt(0)
    
    for (let i = 0; i < s.length; i += 1) {
        const code = s.charCodeAt(i)
        if (code >= low && code <= high) {
            letters.push(s[i])
        } else {
            digits.push(s[i])
        }
    }
    
    if (Math.abs(digits.length - letters.length) > 1) return ''
    
    if (digits.length > letters.length) {
        const temp = digits
        digits = letters
        letters = temp
    }
    
    const result = []
    let flag = 1
    while (letters.length || digits.length) {
        if (flag === 1) {
            result.push(letters.pop())
        } else {
            result.push(digits.pop())
        }
        
        flag = -flag
    }
    
    return result.join('')
};
```