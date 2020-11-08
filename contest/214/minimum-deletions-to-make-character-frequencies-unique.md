### [1647\. Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/), [Sort](https://leetcode.com/tag/sort/)


A string `s` is called **good** if there are no two different characters in `s` that have the same **frequency**.

Given a string `s`, return _the **minimum** number of characters you need to delete to make_ `s` _**good**._

The **frequency** of a character in a string is the number of times it appears in the string. For example, in the string `"aab"`, the **frequency** of `'a'` is `2`, while the **frequency** of `'b'` is `1`.

**Example 1:**

```
Input: s = "aab"
Output: 0
Explanation: s is already good.
```

**Example 2:**

```
Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
```

**Example 3:**

```
Input: s = "ceabaacb"
Output: 2
Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
```

**Constraints:**

*   `1 <= s.length <= 10<sup>5</sup>`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const n = s.length
    const freqs = Array(26).fill(0)
    const base = 'a'.charCodeAt(0)
    
    for (let i = 0; i < n; i += 1) {
        const code = s.charCodeAt(i) - base
        freqs[code] += 1
    }
    const set = new Set()
    
    let ans = 0
    for (let f of freqs) {
        while (set.has(f) && f > 0) {
            f -= 1
            ans += 1
        }
        if (f) set.add(f)
    }
    
    return ans
};
```