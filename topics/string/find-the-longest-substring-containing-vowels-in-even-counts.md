### [1371\. Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

Difficulty: **Medium**


Given the string `s`, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

**Example 1:**

```
Input: s = "eleetminicoworoep"
Output: 13
Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.
```

**Example 2:**

```
Input: s = "leetcodeisgreat"
Output: 5
Explanation: The longest substring is "leetc" which contains two e's.
```

**Example 3:**

```
Input: s = "bcbcbc"
Output: 6
Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.
```

**Constraints:**

*   `1 <= s.length <= 5 x 10^5`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const index = {a: 0, e: 1, i: 2, o: 3, u: 4}
    const count = Array(s.length + 1).fill(0)
    
    for (let i = 1; i <= s.length; i += 1) {
        const char = s[i - 1]
        if (index[char] !== undefined) {
            count[i] = count[i - 1] ^ (1 << index[char])
        } else {
            count[i] = count[i - 1]
        }
    }
    
    for (let l = s.length; l > 0; l -= 1) {
        for (let i = 0; i <= s.length - l; i += 1) {
            if (!(count[i + l] ^ count[i])) {
                return l
            }
        }
    }
    
    return 0
};
```