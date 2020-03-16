### [1147\. Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)

Difficulty: **Hard**


Return the largest possible `k` such that there exists `a_1, a_2, ..., a_k` such that:

*   Each `a_i` is a non-empty string;
*   Their concatenation `a_1 + a_2 + ... + a_k` is equal to `text`;
*   For all `1 <= i <= k`,  `a_i = a_{k+1 - i}`.

**Example 1:**

```
Input: text = "ghiabcdefhelloadamhelloabcdefghi"
Output: 7
Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
```

**Example 2:**

```
Input: text = "merchant"
Output: 1
Explanation: We can split the string on "(merchant)".
```

**Example 3:**

```
Input: text = "antaprezatepzapreanta"
Output: 11
Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".
```

**Example 4:**

```
Input: text = "aaa"
Output: 3
Explanation: We can split the string on "(a)(a)(a)".
```

**Constraints:**

*   `text` consists only of lowercase English characters.
*   `1 <= text.length <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let left = 0, right = text.length - 1
    let leftStr = '', rightStr = ''
    let count = 0
    
    while (left < right) {
        leftStr += text[left]
        rightStr = text[right] + rightStr
        
        if (leftStr === rightStr) {
            leftStr = ''
            rightStr = ''
            count += 2
        }
        
        left += 1
        right -= 1
    }
    
    if (leftStr || left === right) count += 1
    
    return count
};
```