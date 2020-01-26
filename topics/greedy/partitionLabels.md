### [763\. Partition Labels](https://leetcode.com/problems/partition-labels/)

Difficulty: **Medium**


A string `S` of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

**Example 1:**  

```
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
```

**Note:**  

1.  `S` will have length in range `[1, 500]`.
2.  `S` will consist of lowercase letters (`'a'` to `'z'`) only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const letterMaxIndex = {}
    for (let i = 0; i < S.length; i += 1) {
        letterMaxIndex[S[i]] = Math.max(i, letterMaxIndex[S[i]] || 0)
    }
    
    let maxIndex = 0
    let offsetIndex = -1
    const result = []
    for (let i = 0; i < S.length; i += 1) {
        const index = letterMaxIndex[S[i]]
        if (i === maxIndex && index <= maxIndex) {
            result.push(i - offsetIndex)
            offsetIndex = i
            maxIndex = index + 1
        } else {
            maxIndex = Math.max(maxIndex, index)
        }
    }
    
    return result
};
```