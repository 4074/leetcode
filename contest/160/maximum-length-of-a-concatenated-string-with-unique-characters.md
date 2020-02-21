### [1239\. Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

Difficulty: **Medium**


Given an array of strings `arr`. String `s` is a concatenation of a sub-sequence of `arr` which have **unique characters**.

Return _the maximum possible length_ of `s`.

**Example 1:**

```
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
```

**Example 2:**

```
Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
```

**Example 3:**

```
Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
```

**Constraints:**

*   `1 <= arr.length <= 16`
*   `1 <= arr[i].length <= 26`
*   `arr[i]` contains only lower case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const nums = []
    for (const str of arr) {
        const chars = Array(26).fill(0)
        let valid = true
        for (let i = 0; i < str.length; i += 1) {
            const c = str.charCodeAt(i) - 97
            if (chars[c]) {
                valid = false
                break
            }
            chars[c] = 1
        }
        if (valid) {
            nums.push(parseInt(chars.join(''), 2))
        } else {
            nums.push(0)
        }
    }
    
    let max = 0
    function dfs(index, num, length) {
        if (length > max) max = length
        for (let i = index; i < nums.length; i += 1) {
            if (nums[i] && (num & nums[i]) === 0) {
                dfs(i + 1, num | nums[i], length + arr[i].length)
            }
        }
    }
    dfs(0, 0, 0)
    
    return max
};
        if (length > max) max = length
```