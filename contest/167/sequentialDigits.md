### [1291\. Sequential Digits](https://leetcode.com/problems/sequential-digits/)

Difficulty: **Medium**


An integer has _sequential digits_ if and only if each digit in the number is one more than the previous digit.

Return a **sorted** list of all the integers in the range `[low, high]` inclusive that have sequential digits.

**Example 1:**

```
Input: low = 100, high = 300
Output: [123,234]
```

**Example 2:**

```
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
```

**Constraints:**

*   `10 <= low <= high <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const digits = '123456789'
    const result = []
    const lowLength = (low + '').length
    const highLength = (high + '').length
    
    for (let l = lowLength; l <= highLength; l += 1) {
        for (let i = 0; i <= 9 - l; i += 1) {
            const num = parseInt(digits.substr(i, l), 10)
            if (num >= low && num <= high) result.push(num)
        }
    }
    
    return result
};
```

```javascript
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = []
    const s = (low + '').length
    const e = (high + '').length
    
    for (let l = s; l <= e; l += 1) {
        for (let i = 1; i <= 10 - l; i += 1) {
            let n = 0
            for (let j = i; j <= i + l - 1; j += 1) {
                n = n * 10 + j
            }
            if (n >= low && n <= high) result.push(n)
        }
    }
    
    return result
};
```