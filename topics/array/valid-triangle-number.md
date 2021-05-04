### [611\. Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given an integer array `nums`, return _the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle_.

**Example 1:**

```
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
```

**Example 2:**

```
Input: nums = [4,2,3,4]
Output: 4
```

**Constraints:**

*   `1 <= nums.length <= 1000`
*   `0 <= nums[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  let ans = 0
  for (let i = nums.length - 1; i >= 2; i -= 1) {
    let l = 0, r = i - 1
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        ans += r - l
        r -= 1
      } else {
        l += 1
      }
    }
  }
  return ans
};
```