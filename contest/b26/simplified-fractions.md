### [1447\. Simplified Fractions](https://leetcode.com/problems/simplified-fractions/)

Difficulty: **Medium**


Given an integer `n`, return a list of all **simplified** fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to `n`. The fractions can be in **any** order.

**Example 1:**

```
Input: n = 2
Output: ["1/2"]
Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
```

**Example 2:**

```
Input: n = 3
Output: ["1/2","1/3","2/3"]
```

**Example 3:**

```
Input: n = 4
Output: ["1/2","1/3","1/4","2/3","3/4"]
Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
```

**Example 4:**

```
Input: n = 1
Output: []
```

**Constraints:**

*   `1 <= n <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    const result = []
    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; j < i; j += 1) {
            let isSimple = true
            for (let k = 2; k <= j; k += 1) {
                if (i % k === 0 && j % k === 0) {
                    isSimple = false
                    break
                }
            }
            if (isSimple) result.push(`${j}/${i}`)
        }
    }
    return result
};
```