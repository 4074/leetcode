### [1209\. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

Difficulty: **Medium**


Given a string `s`, a _k_ _duplicate removal_ consists of choosing `k` adjacent and equal letters from `s` and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make `k` duplicate removals on `s` until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

**Example 1:**

```
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
```

**Example 2:**

```
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
```

**Example 3:**

```
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   `2 <= k <= 10^4`
*   `s` only contains lower case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [], length = s.length
    let last
    
    for (let i=0; i<length; i++) {
        last = stack.length - 1
        if (last >= 0 && stack[last].char === s[i]) {
            stack[last].count += 1
            if (stack[last].count >= k) {
                stack.pop()
            }
        } else {
            stack.push({char: s[i], count: 1})
        }
    }
    
    return stack.reduce((result, item) => result + item.char.repeat(item.count), '')
};
```

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const n = s.length, count = []
    let i = 0
    s = s.split('')
    
    for (let j=0; j<n; i++, j++) {
        s[i] = s[j]
        count[i] = i > 0 && s[i-1] === s[j] ? count[i-1] + 1 : 1
        if (count[i] >= k) i -= k
    }
    
    return s.slice(0, i).join('')
};
```