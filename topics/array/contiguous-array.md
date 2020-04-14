### [525\. Contiguous Array](https://leetcode.com/problems/contiguous-array/)

Difficulty: **Medium**


Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1\.

**Example 1:**  

```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```

**Example 2:**  

```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

**Note:** The length of the given binary array will not exceed 50,000.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map()
    map.set(0, 0)
    
    let ans = 0
    let count = 0
    for (let i = 1; i <= nums.length; i += 1) {
        count += nums[i - 1] ? 1 : -1
        if (!map.has(count)) {
            map.set(count, i)
        } else {
            ans = Math.max(ans, i - map.get(count))
        }
    }
​
    return ans
};
```