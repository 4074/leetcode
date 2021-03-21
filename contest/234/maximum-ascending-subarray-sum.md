### [1800\. Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/)

Difficulty: **Easy**  

Related Topics: [Two Pointers](https://leetcode.com/tag/two-pointers/)


Given an array of positive integers `nums`, return the _maximum possible sum of an **ascending** subarray in_ `nums`.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray `[nums<sub style="display: inline;">l</sub>, nums<sub style="display: inline;">l+1</sub>, ..., nums<sub style="display: inline;">r-1</sub>, nums<sub style="display: inline;">r</sub>]` is **ascending** if for all `i` where `l <= i < r`, `nums<sub style="display: inline;">i</sub> < nums<sub style="display: inline;">i+1</sub>`. Note that a subarray of size `1` is **ascending**.

**Example 1:**

```
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
```

**Example 2:**

```
Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
```

**Example 3:**

```
Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
```

**Example 4:**

```
Input: nums = [100,10,1]
Output: 100
```

**Constraints:**

*   `1 <= nums.length <= 100`
*   `1 <= nums[i] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let max = 0
  let sum = nums[0]
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i]
    } else {
      max = Math.max(max, sum)
      sum = nums[i]
    }
  }
  return Math.max(max, sum)
};
```