### [1131\. Maximum of Absolute Value Expression](https://leetcode.com/problems/maximum-of-absolute-value-expression/)

Difficulty: **Medium**


Given two arrays of integers with equal lengths, return the maximum value of:

`|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|`

where the maximum is taken over all `0 <= i, j < arr1.length`.

**Example 1:**

```
Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13
```

**Example 2:**

```
Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20
```

**Constraints:**

*   `2 <= arr1.length == arr2.length <= 40000`
*   `-10^6 <= arr1[i], arr2[i] <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    const a1 = [], a2 = [], a3 = [], a4 = []
    
    for (let i = 0; i < arr1.length; i += 1) {
        a1.push(arr1[i] + arr2[i] + i)
        a2.push(arr1[i] + arr2[i] - i)
        a3.push(arr1[i] - arr2[i] - i)
        a4.push(arr1[i] - arr2[i] + i)
    }
    
    const r1 = Math.max.apply(null, a1) - Math.min.apply(null, a1)
    const r2 = Math.max.apply(null, a2) - Math.min.apply(null, a2)
    const r3 = Math.max.apply(null, a3) - Math.min.apply(null, a3)
    const r4 = Math.max.apply(null, a4) - Math.min.apply(null, a4)
    
    return Math.max(r1, r2, r3, r4)
};
```