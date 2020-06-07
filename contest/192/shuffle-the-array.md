### [1470\. Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/)

Difficulty: **Easy**


Given the array `nums` consisting of `2n` elements in the form `[x<sub style="display: inline;">1</sub>,x<sub style="display: inline;">2</sub>,...,x<sub style="display: inline;">n</sub>,y<sub style="display: inline;">1</sub>,y<sub style="display: inline;">2</sub>,...,y<sub style="display: inline;">n</sub>]`.

_Return the array in the form_ `[x<sub style="display: inline;">1</sub>,y<sub style="display: inline;">1</sub>,x<sub style="display: inline;">2</sub>,y<sub style="display: inline;">2</sub>,...,x<sub style="display: inline;">n</sub>,y<sub style="display: inline;">n</sub>]`.

**Example 1:**

```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
```

**Example 2:**

```
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
```

**Example 3:**

```
Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
```

**Constraints:**

*   `1 <= n <= 500`
*   `nums.length == 2n`
*   `1 <= nums[i] <= 10^3`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = []
    for (let i = 0; i < n; i += 1) {
        result.push(nums[i], nums[i + n])
    }
    return result
};
```