### [1078\. Occurrences After Bigram](https://leetcode.com/problems/occurrences-after-bigram/)

Difficulty: **Easy**


Given words `first` and `second`, consider occurrences in some `text` of the form "`first second third`", where `second` comes immediately after `first`, and `third` comes immediately after `second`.

For each such occurrence, add "`third`" to the answer, and return the answer.

**Example 1:**

```
Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
```


**Example 2:**

```
Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]
```

**Note:**

1.  `1 <= text.length <= 1000`
2.  `text` consists of space separated words, where each word consists of lowercase English letters.
3.  `1 <= first.length, second.length <= 10`
4.  `first` and `second` consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(' ')
    const ans = []
    for (let i = 2; i < words.length; i += 1) {
        if (words[i - 2] === first && words[i - 1] === second)
            ans.push(words[i])
    }
    return ans
};
```