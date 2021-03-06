### [1048\. Longest String Chain](https://leetcode.com/problems/longest-string-chain/)

Difficulty: **Medium**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given a list of words, each word consists of English lowercase letters.

Let's say `word1` is a predecessor of `word2` if and only if we can add exactly one letter anywhere in `word1` to make it equal to `word2`.  For example, `"abc"` is a predecessor of `"abac"`.

A _word chain _is a sequence of words `[word_1, word_2, ..., word_k]` with `k >= 1`, where `word_1` is a predecessor of `word_2`, `word_2` is a predecessor of `word_3`, and so on.

Return the longest possible length of a word chain with words chosen from the given list of `words`.

**Example 1:**

```
Input: ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: one of the longest word chain is "a","ba","bda","bdca".
```

**Note:**

1.  `1 <= words.length <= 1000`
2.  `1 <= words[i].length <= 16`
3.  `words[i]` only consists of English lowercase letters.


#### Solution

Language: **JavaScript**

Bottom Up
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const dp = new Map()
    let result = 0
    words.sort((a, b) => a.length <= b.length ? -1 : 1)
    
    for (let i = 0; i < words.length; i += 1) {
        let count = 1
        for (let j = 0; j < words[i].length; j += 1) {
            const pre = words[i].substr(0, j)
                + words[i].substr(j + 1, words[i].length - 1)
            if (dp.has(pre)) {
                count = dp.get(pre) + 1
            }
        }
        dp.set(words[i], count)
        result = Math.max(result, count)
    }
    
    return result
};
```

Top Down
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const n = words.length
    const map = new Map()
    for (let i = 0; i < n; i += 1) {
        map.set(words[i], i)
    }
    
    const cache = Array(n).fill()
    
    function dfs(index) {
        if (!cache[index]) {
            const chars = words[index].split('')
            let count = 1
            for (let i = 0; i < chars.length; i += 1) {
                const next = chars.filter((_, j) => j !== i).join('')
                if (map.has(next)) {
                    count = Math.max(count, dfs(map.get(next)) + 1)
                }
            }
            cache[index] = count
        }
        return cache[index]
    }
    
    let ans = 0
    for (let i = 0; i < n; i += 1) {
        ans = Math.max(ans, dfs(i))
    }
    
    return ans
};
```