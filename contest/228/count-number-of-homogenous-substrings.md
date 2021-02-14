### [1759\. Count Number of Homogenous Substrings](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

Difficulty: **Medium**  

Related Topics: [String](https://leetcode.com/tag/string/), [Greedy](https://leetcode.com/tag/greedy/)


Given a string `s`, return _the number of **homogenous** substrings of_ `s`_._ Since the answer may be too large, return it **modulo** `10<sup>9</sup> + 7`.

A string is **homogenous** if all the characters of the string are the same.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "abbcccaa"
Output: 13
Explanation: The homogenous substrings are listed as below:
"a"   appears 3 times.
"aa"  appears 1 time.
"b"   appears 2 times.
"bb"  appears 1 time.
"c"   appears 3 times.
"cc"  appears 2 times.
"ccc" appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.
```

**Example 2:**

```
Input: s = "xy"
Output: 2
Explanation: The homogenous substrings are "x" and "y".
```

**Example 3:**

```
Input: s = "zzzzz"
Output: 15
```

**Constraints:**

*   `1 <= s.length <= 10<sup>5</sup>`
*   `s` consists of lowercase letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    if (!s) return 0
    let ans = 1
    const mod = 10 ** 9 + 7
    
    let lastCount = 1
    for (let i = 1; i < s.length; i += 1) {
        if (s[i] === s[i - 1]) {
            lastCount += 1
        } else {
            lastCount = 1
        }
        ans = (ans + lastCount) % mod
    }
    
    return ans
};
```