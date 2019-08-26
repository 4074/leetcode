### [1170\. Compare Strings by Frequency of the Smallest Character](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)

Difficulty: **Easy**


Let's define a function `f(s)` over a non-empty string `s`, which calculates the frequency of the smallest character in `s`. For example, if `s = "dcce"` then `f(s) = 2` because the smallest character is `"c"` and its frequency is 2.

Now, given string arrays `queries` and `words`, return an integer array `answer`, where each `answer[i]` is the number of words such that `f(queries[i])` < `f(W)`, where `W` is a word in `words`.

**Example 1:**

```
Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
```

**Example 2:**

```
Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
```

**Constraints:**

*   `1 <= queries.length <= 2000`
*   `1 <= words.length <= 2000`
*   `1 <= queries[i].length, words[i].length <= 10`
*   `queries[i][j]`, `words[i][j]` are English lowercase letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    function getFrequency(s) {
        var charaterNumbers = {}
        var smallest
        for (var i=0; i<s.length; i++) {
            if (!smallest || s[i] < smallest) {
                smallest = s[i]
            }
            if (!charaterNumbers[s[i]]) {
                charaterNumbers[s[i]] = 1
            } else {
                charaterNumbers[s[i]] += 1
            }
        }
        return charaterNumbers[smallest]
    }
    
    var wordMax = 0, wordFrequency = {}
    for (var i=0; i<words.length; i++) {
        var w = getFrequency(words[i])
        if (w > wordMax) {
            wordMax = w
        }
        if (!wordFrequency[w]) {
            wordFrequency[w] = 1
        } else {
            wordFrequency[w] += 1
        }
    }
    
    var frequencyMap = {}
    for (var i=1; i<wordMax; i++) {
        var f = 0
        for (j=i+1; j<=wordMax; j++) {
            if (wordFrequency[j]) {
                f += wordFrequency[j]
            }
        }
        frequencyMap[i] = f
    }
    
    var result = []
    for (var i=0; i<queries.length; i++) {
        var q = getFrequency(queries[i])
        result.push(frequencyMap[q] || 0)
    }
    
    return result
};
```