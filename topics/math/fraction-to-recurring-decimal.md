### [166\. Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)

Difficulty: **Medium**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [Math](https://leetcode.com/tag/math/)


Given two integers representing the `numerator` and `denominator` of a fraction, return _the fraction in string format_.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return **any of them**.

It is **guaranteed** that the length of the answer string is less than `10<sup>4</sup>` for all the given inputs.

**Example 1:**

```
Input: numerator = 1, denominator = 2
Output: "0.5"
```

**Example 2:**

```
Input: numerator = 2, denominator = 1
Output: "2"
```

**Example 3:**

```
Input: numerator = 2, denominator = 3
Output: "0.(6)"
```

**Example 4:**

```
Input: numerator = 4, denominator = 333
Output: "0.(012)"
```

**Example 5:**

```
Input: numerator = 1, denominator = 5
Output: "0.2"
```

**Constraints:**

*   `-2<sup>31</sup> <= numerator, denominator <= 2<sup>31</sup> - 1`
*   `denominator != 0`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (!numerator) return '0'
    const map = new Map()
    const flag = numerator * denominator > 0 ? '' : '-'
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    
    const arr = []
    let hasPoint = false
    while (numerator) {
        if (numerator < denominator) {
            numerator *= 10
            if (!hasPoint) {
                if (!arr.length) arr.push(0)
                arr.push('.')
                hasPoint = true
            }
        }
        
        if (hasPoint && map.has(numerator)) {
            return flag + arr.slice(0, map.get(numerator) - 1).join('') + '(' + arr.slice(map.get(numerator) - 1).join('') + ')'
        }
        
        arr.push(Math.floor(numerator / denominator))
        
        if (hasPoint) map.set(numerator, arr.length)
        numerator %= denominator
    }
    
    return flag + arr.join('')
};
```