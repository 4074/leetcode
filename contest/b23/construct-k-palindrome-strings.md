### [1400\. Construct K Palindrome Strings](https://leetcode.com/problems/construct-k-palindrome-strings/)

Difficulty: **Medium**


Given a string `s` and an integer `k`. You should construct `k` non-empty **palindrome** strings using **all the characters** in `s`.

Return _**True**_ if you can use all the characters in `s` to construct `k` palindrome strings or _**False**_ otherwise.

**Example 1:**

```
Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
```

**Example 2:**

```
Input: s = "leetcode", k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.
```

**Example 3:**

```
Input: s = "true", k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.
```

**Example 4:**

```
Input: s = "yzyzyzyzyzyzyzy", k = 2
Output: true
Explanation: Simply you can put all z's in one string and all y's in the other string. Both strings will be palindrome.
```

**Example 5:**

```
Input: s = "cr", k = 7
Output: false
Explanation: We don't have enough characters in s to construct 7 palindromes.
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   All characters in `s` are lower-case English letters.
*   `1 <= k <= 10^5`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false
    const count = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)
    
    for (let i = 0; i < s.length; i += 1) {
        count[s.charCodeAt(i) - base] += 1
    }
    
    let oddCount = 0
    for (let i = 0; i < count.length; i += 1) {
        oddCount += count[i] % 2
    }
    
    return oddCount <= k
};
```