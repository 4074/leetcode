### [1137\. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

Difficulty: **Easy**


The Tribonacci sequence T<sub style="display: inline;">n</sub> is defined as follows: 

T<sub style="display: inline;">0</sub> = 0, T<sub style="display: inline;">1</sub> = 1, T<sub style="display: inline;">2</sub> = 1, and T<sub style="display: inline;">n+3</sub> = T<sub style="display: inline;">n</sub> + T<sub style="display: inline;">n+1</sub> + T<sub style="display: inline;">n+2</sub> for n >= 0.

Given `n`, return the value of T<sub style="display: inline;">n</sub>.

**Example 1:**

```
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

**Example 2:**

```
Input: n = 25
Output: 1389537
```

**Constraints:**

*   `0 <= n <= 37`
*   The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    var first = 0, second = 1, third = 1, bridge
    if (n < 2) return n;
    
    for (var i=3; i<=n; i++) {
        bridge = first + second + third
        first = second
        second = third
        third = bridge
    }
    return third
};
```