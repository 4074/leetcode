### [1585\. Check If String Is Transformable With Substring Sort Operations](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Greedy](https://leetcode.com/tag/greedy/)


Given two strings `s` and `t`, you want to transform string `s` into string `t` using the following operation any number of times:

*   Choose a **non-empty** substring in `s` and sort it in-place so the characters are in **ascending order**.

For example, applying the operation on the underlined substring in `"1<u style="display: inline;">4234</u>"` results in `"1<u style="display: inline;">2344</u>"`.

Return `true` if _it is possible to transform string `s` into string `t`_. Otherwise, return `false`.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "84532", t = "34852"
Output: true
Explanation: You can transform s into t using the following sort operations:
"84532" (from index 2 to 3) -> "84352"
"84352" (from index 0 to 2) -> "34852"
```

**Example 2:**

```
Input: s = "34521", t = "23415"
Output: true
Explanation: You can transform s into t using the following sort operations:
"34521" -> "23451"
"23451" -> "23415"
```

**Example 3:**

```
Input: s = "12345", t = "12435"
Output: false
```

**Example 4:**

```
Input: s = "1", t = "2"
Output: false
```

**Constraints:**

*   `s.length == t.length`
*   `1 <= s.length <= 10<sup>5</sup>`
*   `s` and `t` only contain digits from `'0'` to `'9'`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function(s, t) {
    const indexes = Array(10).fill().map(() => [])
    for (let i = 0; i < s.length; i += 1) {
        indexes[s[i]].push(i)
    }
    
    for (let i = 0; i < t.length; i += 1) {
        const num = parseInt(t[i], 10)
        if (!indexes[num].length) return false
        for (let j = 0; j < num; j += 1) {
            if (indexes[j].length && indexes[j][0] < indexes[num][0]) return false
        }
        indexes[num].shift()
    }
    return true
};
```