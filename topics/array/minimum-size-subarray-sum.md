### [209\. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

Difficulty: **Medium**

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Binary Search](https://leetcode.com/tag/binary-search/)

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a **contiguous subarray** `[nums<sub style="display: inline;">l</sub>, nums<sub style="display: inline;">l+1</sub>, ..., nums<sub style="display: inline;">r-1</sub>, nums<sub style="display: inline;">r</sub>]` of which the sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

**Example 1:**

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

**Example 2:**

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

**Example 3:**

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

**Constraints:**

- `1 <= target <= 10<sup>9</sup>`
- `1 <= nums.length <= 10<sup>5</sup>`
- `1 <= nums[i] <= 10<sup>5</sup>`

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the time complexity is `O(n log(n))`.

#### Solution

Language: **JavaScript**

**Two Pointers**

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  let left = 0,
    right = -1;
  let sum = 0;
  while (right < n - 1) {
    if (sum < target) {
      right += 1;
      sum += nums[right];
      continue;
    } else {
      break;
    }
  }
  if (sum < target) return 0;
  while (right < n - 1) {
    sum += nums[right + 1] - nums[left];
    right += 1;
    left += 1;
    if (sum >= target) {
      while (sum - nums[right] >= target) {
        sum -= nums[right];
        right -= 1;
      }
    }
  }
  while (sum - nums[left] >= target) {
    sum -= nums[left];
    left += 1;
  }
  return right - left + 1;
};
```

**Binary Search**

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  const sums = Array(n + 1).fill(0);

  for (let i = 0; i < n; i += 1) {
    sums[i + 1] = nums[i] + sums[i];
  }

  if (sums[n] < target) return 0;

  let ans = n;
  for (let i = 0; i < n; i += 1) {
    if (sums[n] - sums[i] < target) continue;
    if (sums[n] - sums[i] === target) {
      ans = Math.min(ans, n - i);
      continue;
    }

    let l = i + 1,
      r = n;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (sums[m] - sums[i] < target) {
        l = m + 1;
      } else {
        r = m;
      }
    }

    ans = Math.min(ans, l - i);
  }

  return ans;
};
```
