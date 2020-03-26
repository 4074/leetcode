### [1089\. Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)

Difficulty: **Easy**


Given a fixed length array `arr` of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array **in place**, do not return anything from your function.

**Example 1:**

```
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
```

**Example 2:**

```
Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
```

**Note:**

1.  `1 <= arr.length <= 10000`
2.  `0 <= arr[i] <= 9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 0) {
            i += 1
            let last = 0
            for (let j = i; j < arr.length; j += 1) {
                const current = arr[j]
                arr[j] = last
                last = current
            }
            
        }
    }
};
```