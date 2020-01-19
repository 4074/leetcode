### [1317\. Convert Integer to the Sum of Two No-Zero Integers](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/)

Difficulty: **Easy**


Given an integer `n`. No-Zero integer is a positive integer which **doesn't contain any 0** in its decimal representation.

Return _a list of two integers_ `[A, B]` where:

*   `A` and `B` are No-Zero integers.
*   `A + B = n`

It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

**Example 1:**

```
Input: n = 2
Output: [1,1]
Explanation: A = 1, B = 1\. A + B = n and both A and B don't contain any 0 in their decimal representation.
```

**Example 2:**

```
Input: n = 11
Output: [2,9]
```

**Example 3:**

```
Input: n = 10000
Output: [1,9999]
```

**Example 4:**

```
Input: n = 69
Output: [1,68]
```

**Example 5:**

```
Input: n = 1010
Output: [11,999]
```

**Constraints:**

*   `2 <= n <= 10^4`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i <= n/2; i += 1) {
        if (!(i + '').includes('0')) {
            const j = n - i
            if (!(j + '').includes('0')) return [i, j]
        }
    }
};
```