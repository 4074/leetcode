### [6\. ZigZag ConversionCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode.com/problems/zigzag-conversion/)

Difficulty: **Medium**


The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);```

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length < 3 || numRows === 1) return s
    var result = []
    
    var index = 0, step = 1
    for (var i=0; i<s.length; i++) {
        if (index === numRows-1) {
            step = -1
        } else if (index === 0) {
            step = 1
        }
        
        if (!result[index]) {
            result[index] = s[i]
        } else {
            result[index] = result[index] + s[i]
        }
            
        index += step
    }
    
    
    return result.join('')
};
```