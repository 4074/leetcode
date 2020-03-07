### [1177\. Can Make Palindrome from Substring](https://leetcode.com/problems/can-make-palindrome-from-substring/)

Difficulty: **Medium**


Given a string `s`, we make queries on substrings of `s`.

For each query `queries[i] = [left, right, k]`, we may **rearrange** the substring `s[left], ..., s[right]`, and then choose **up to** `k` of them to replace with any lowercase English letter. 

If the substring is possible to be a palindrome string after the operations above, the result of the query is `true`. Otherwise, the result is `false`.

Return an array `answer[]`, where `answer[i]` is the result of the `i`-th query `queries[i]`.

Note that: Each letter is counted **individually** for replacement so if for example `s[left..right] = "aaa"`, and `k = 2`, we can only replace two of the letters.  (Also, note that the initial string `s` is never modified by any query.)

**Example :**

```
Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0] : substring = "d", is palidrome.
queries[1] : substring = "bc", is not palidrome.
queries[2] : substring = "abcd", is not palidrome after replacing only 1 character.
queries[3] : substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4] : substring = "abcda", could be changed to "abcba" which is palidrome.
```

**Constraints:**

*   `1 <= s.length, queries.length <= 10^5`
*   `0 <= queries[i][0] <= queries[i][1] < s.length`
*   `0 <= queries[i][2] <= s.length`
*   `s` only contains lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
    const count = Array(s.length + 1).fill()
        .map(() => Array(26).fill(0))
    const base = 'a'.charCodeAt(0)
    
    for (let i = 1; i <= s.length; i += 1) {
        const index = s.charCodeAt(i - 1) - base
        for (let j = 0; j < 26; j += 1) {
            count[i][j] = count[i - 1][j]
        }
        count[i][index] += 1
    }
    
    const ans = []
    for (const [i, j, k] of queries) {
        let diff = 0
        for (let r = 0; r < 26; r += 1) {
            diff += (count[j + 1][r] - count[i][r]) % 2
        }
        ans.push(k >= Math.floor(diff / 2))
    }
    return ans
};
```

Bit
```javascript
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
    const nums = Array(s.length + 1).fill(0)
    const base = 'a'.charCodeAt(0)
    
    for (let i = 1; i <= s.length; i += 1) {
        const index = s.charCodeAt(i - 1) - base
        nums[i] = nums[i - 1] ^ (1 << index)
    }
    
    const ans = []
    for (const [i, j, k] of queries) {
        let diff = 0
        let n = nums[j + 1] ^ nums[i]
        while (n != 0) {
            if (n & 1 !== 0) diff += 1
            n >>= 1
        }
        ans.push(k >= Math.floor(diff / 2))
    }
    return ans
};
```