### [168\. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)

Difficulty: **Easy**  

Related Topics: [Math](https://leetcode.com/tag/math/)


Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

```
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
```

**Example 1:**

```
Input: 1
Output: "A"
```

**Example 2:**

```
Input: 28
Output: "AB"
```

**Example 3:**

```
Input: 701
Output: "ZY"
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const base = 'A'.charCodeAt(0)
    const chars = Array(26).fill().map((v, i) => String.fromCharCode(base + i))
    
    let ans = ''
    while (n) {
        n -= 1
        ans = chars[n % 26] + ans
        n = Math.floor(n / 26)
    }
    
    return ans
};
```