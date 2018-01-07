### [290\. Word Pattern](https://leetcode.com/problems/word-pattern/description/)

Difficulty: **Easy**

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Examples:**  

1.  pattern = `"abba"`, str = `"dog cat cat dog"` should return true.
2.  pattern = `"abba"`, str = `"dog cat cat fish"` should return false.
3.  pattern = `"aaaa"`, str = `"dog cat cat dog"` should return false.
4.  pattern = `"abba"`, str = `"dog dog dog dog"` should return false.

**Notes:**  
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters separated by a single space.



#### Solution
```
var wordPattern = function(pattern, str) {
    let index = 0
    let chars = {}
    let words = []
    str = str.split(' ')
    
    if (pattern.length !== str.length) return false;
​
    for (const c of pattern) {
        const s = str[index]
        if (chars[c]) {
            if (s !== chars[c]) {
                return false
            }
        } else {
            if (words.indexOf(s) >= 0) {
                return false
            } 
            chars[c] = s
            words.push(s)
        }
        index ++
    }
​
    return true
};
```