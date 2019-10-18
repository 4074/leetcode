### [69\. Sqrt(x)](https://leetcode.com/problems/sqrtx/)

Difficulty: **Easy**


Implement `int sqrt(int x)`.

Compute and return the square root of _x_, where _x_ is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let left = 1, right = parseInt(x/2)
    
    while (left < right) {
        const mid = left + parseInt((right - left)/2)
        if (mid > x / mid) {
            right = mid - 1
        } else if (mid === x / mid) {
            return mid
        } else {
            if (mid + 1 > x/(mid+1)) {
                return mid
            }
            left = mid + 1
        }
    }
    
    return left
};
```