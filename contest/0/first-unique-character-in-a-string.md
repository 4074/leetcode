### [387\. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

Difficulty: **Easy**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/)


Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

**Examples:**

```
s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
```

**Note:** You may assume the string contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    for (const c of s) {
        if (!map.has(c)) {
            map.set(c, 1)
        } else {
            map.set(c, 2)
        }
    }
    
    for (let i = 0; i < s.length; i += 1) {
        if (map.get(s[i]) === 1) return i
    }
    
    return -1
};
```