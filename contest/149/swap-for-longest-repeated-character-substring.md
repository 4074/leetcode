### [1156\. Swap For Longest Repeated Character Substring](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/)

Difficulty: **Medium**


Given a string `text`, we are allowed to swap two of the characters in the string. Find the length of the longest substring with repeated characters.

**Example 1:**

```
Input: text = "ababa"
Output: 3
Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa", which its length is 3.
```

**Example 2:**

```
Input: text = "aaabaaa"
Output: 6
Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa", which its length is 6.
```

**Example 3:**

```
Input: text = "aaabbaaa"
Output: 4
```

**Example 4:**

```
Input: text = "aaaaa"
Output: 5
Explanation: No need to swap, longest repeated character substring is "aaaaa", length is 5.
```

**Example 5:**

```
Input: text = "abcdef"
Output: 1
```

**Constraints:**

*   `1 <= text.length <= 20000`
*   `text` consist of lowercase English characters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    var counts = [], chars = [], charsIndexCount = {}, count = 0, char, result = 0
    for (var i=0; i<text.length; i++) {
        if (text[i] === char) {
            count += 1
        } else {
            if (count) {
                counts.push(count)
                chars.push(char)
                
                if (!charsIndexCount[char]) charsIndexCount[char] = 0;
                charsIndexCount[char] += 1
            }
            count = 1
            char = text[i]
        }
        
        if (i === text.length - 1){
            counts.push(count)
            chars.push(char)
​
            if (!charsIndexCount[char]) charsIndexCount[char] = 0;
            charsIndexCount[char] += 1
        }
    }
    
    for (var j=0; j<counts.length; j++) {
        var n = counts[j]
        
        if (charsIndexCount[chars[j]] > 1) {
            n += 1
        }
        
        if (charsIndexCount[chars[j]] > 1) {
            if (j-2 >= 0 && counts[j-1] === 1 && chars[j-2] === chars[j]) {
                n = counts[j] + counts[j-2] + (charsIndexCount[chars[j]] > 2 ? 1 : 0)
            }
            if (j+2 < counts.length && counts[j+1] === 1 && chars[j+2] === chars[j]) {
                n = Math.max(n, counts[j] + counts[j+2] + (charsIndexCount[chars[j]] > 2 ? 1 : 0))
            }
        }
        
        result = Math.max(n, result)
    }
    
    return result
};
```