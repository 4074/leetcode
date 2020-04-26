### [1073\. Adding Two Negabinary Numbers](https://leetcode.com/problems/adding-two-negabinary-numbers/)

Difficulty: **Medium**


Given two numbers `arr1` and `arr2` in base **-2**, return the result of adding them together.

Each number is given in _array format_:  as an array of 0s and 1s, from most significant bit to least significant bit.  For example, `arr = [1,1,0,1]` represents the number `(-2)^3 + (-2)^2 + (-2)^0 = -3`.  A number `arr` in _array format_ is also guaranteed to have no leading zeros: either `arr == [0]` or `arr[0] == 1`.

Return the result of adding `arr1` and `arr2` in the same format: as an array of 0s and 1s with no leading zeros.

**Example 1:**

```
Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
Output: [1,0,0,0,0]
Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.
```

**Note:**

1.  `1 <= arr1.length <= 1000`
2.  `1 <= arr2.length <= 1000`
3.  `arr1` and `arr2` have no leading zeros
4.  `arr1[i]` is `0` or `1`
5.  `arr2[i]` is `0` or `1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
    let i = 0, n = 0
    const result = []
    while (i < arr1.length || i < arr2.length || n != 0) {
        if (i < arr1.length) n += arr1[arr1.length - 1 - i]
        if (i < arr2.length) n += arr2[arr2.length - 1 - i]
        let r = n % -2
        n = (n - r) / -2
        if (r < 0) {
            r += 2
            n += 1
        }
        result.unshift(r)
        i += 1
    }
    
    while(result.length > 1 && result[0] === 0) {
        result.shift()
    }
    
    return result
};
```