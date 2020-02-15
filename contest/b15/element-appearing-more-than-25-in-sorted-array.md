### [1287\. Element Appearing More Than 25% In Sorted Array](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/)

Difficulty: **Easy**


Given an integer array **sorted** in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

**Example 1:**

```
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
```

**Constraints:**

*   `1 <= arr.length <= 10^4`
*   `0 <= arr[i] <= 10^5`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const l = arr.length / 4
    let i = 0
    while (i < arr.length) {
        const n = arr[i]
        let times = 0
        while (i < arr.length && arr[i] === n) {
            times += 1
            i += 1
        }
        if (times > l) return n
    }
};
​
```