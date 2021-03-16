### [1793\. Maximum Score of a Good Subarray](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)

Difficulty: **Hard**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


You are given an array of integers `nums` **(0-indexed)** and an integer `k`.

The **score** of a subarray `(i, j)` is defined as `min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)`. A **good** subarray is a subarray where `i <= k <= j`.

Return _the maximum possible **score** of a **good** subarray._

**Example 1:**

```
Input: nums = [1,4,3,7,4,5], k = 3
Output: 15
Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15\. 
```

**Example 2:**

```
Input: nums = [5,5,4,5,4,1,1,1], k = 0
Output: 20
Explanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>5</sup>`
*   `1 <= nums[i] <= 2 * 10<sup>4</sup>`
*   `0 <= k < nums.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  const n = nums.length
  if (n === 1) return nums[0]
  
  const walls = Array(n).fill(Infinity)
  walls[k] = nums[k]
  
  for (let i = k - 1; i >= 0; i -= 1) {
    walls[i] = Math.min(walls[i + 1], nums[i])
  }
  for (let i = k + 1; i < n; i += 1) {
    walls[i] = Math.min(walls[i - 1], nums[i])
  }
  
  let left = 0, right = n - 1
  let ans = 0
  while (left < right) {
    ans = Math.max(ans, Math.min(walls[left], walls[right]) * (right - left + 1))
    if (left === k || walls[right] < walls[left]) {
      right -= 1
    } else {
      left += 1
    }
  }
  
  return ans
};
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  const n = nums.length
  let left = k, right = k
  
  let ans = 0, min = Infinity
  while (left >= 0 && right < n) {
    min = Math.min(min, nums[left], nums[right])
    ans = Math.max(ans, min * (right - left + 1))
    if (left === 0 || nums[left - 1] < nums[right + 1]) {
      right += 1
    } else {
      left -= 1
    }
  }
  
  return ans
};
```