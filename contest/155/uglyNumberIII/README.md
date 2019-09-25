### [1201\. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)

Difficulty: **Medium**


Write a program to find the `n`-th ugly number.

Ugly numbers are** positive integers** which are divisible by `a` **or** `b` **or** `c`.

**Example 1:**

```
Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
```

**Example 2:**

```
Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
```

**Example 3:**

```
Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
```

**Example 4:**

```
Input: n = 1000000000, a = 2, b = 217983653, c = 336916467
Output: 1999999984
```

**Constraints:**

*   `1 <= n, a, b, c <= 10^9`
*   `1 <= a * b * c <= 10^18`
*   It's guaranteed that the result will be in range `[1, 2 * 10^9]`


#### Solution

Language: **JavaScript**

```javascript
var gcd = function(a, b) {
    var t
    if(a < b) t = b, b = a, a = t; 
    while(b !== 0) t = b, b = a%b, a = t;
    return a
}
​
var lcm = function(a, b) {
    return a * b / gcd(a, b)
}
​
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    var l = 1, r = Math.pow(10, 9) * 2
    var ab = lcm(a, b), ac = lcm(a, c), bc = lcm(b, c), abc = lcm(ab, c)
​
    while (l < r) {
        var m = Math.floor((r - l) / 2) + l
        var k = Math.floor(m/a) + Math.floor(m/b) + Math.floor(m/c) - Math.floor(m/ab) - Math.floor(m/ac) - Math.floor(m/bc) + Math.floor(m/abc)
        if (k >= n) {
            r = m
        } else {
            l = m + 1
        }
    }
​
    return l
}
```