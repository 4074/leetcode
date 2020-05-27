### [1433\. Check If a String Can Break Another String](https://leetcode.com/problems/check-if-a-string-can-break-another-string/)

Difficulty: **Medium**


Given two strings: `s1` and `s2` with the same size, check if some permutation of string `s1` can break some permutation of string `s2` or vice-versa (in other words `s2` can break `s1`).

A string `x` can break string `y` (both of size `n`) if `x[i] >= y[i]` (in alphabetical order) for all `i` between `0` and `n-1`.

**Example 1:**

```
Input: s1 = "abc", s2 = "xya"
Output: true
Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".
```

**Example 2:**

```
Input: s1 = "abe", s2 = "acd"
Output: false 
Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.
```

**Example 3:**

```
Input: s1 = "leetcodee", s2 = "interview"
Output: true
```

**Constraints:**

*   `s1.length == n`
*   `s2.length == n`
*   `1 <= n <= 10^5`
*   All strings consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    const base = 'a'.charCodeAt(0)
    const n = s1.length
    const chars1 = Array(26).fill(0)
    const chars2 = Array(26).fill(0)
    
    for (let i = 0; i < n; i += 1) {
        chars1[s1.charCodeAt(i) - base] += 1
        chars2[s2.charCodeAt(i) - base] += 1
    }
    let s1Lower = true
    let s2Lower = true
    let count1 = 0
    let count2 = 0
    for (let i = 25; i >= 0; i -= 1) {
        count1 += chars1[i]
        count2 += chars2[i]
        s1Lower &= count1 <= count2
        s2Lower &= count2 <= count1
    }
    return s1Lower || s2Lower
};
```