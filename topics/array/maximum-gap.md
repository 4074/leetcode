### [164\. Maximum Gap](https://leetcode.com/problems/maximum-gap/)

Difficulty: **Hard**

Related Topics: [Sort](https://leetcode.com/tag/sort/)

Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

**Example 1:**

```
Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.
```

**Example 2:**

```
Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
```

**Note:**

- You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
- Try to solve it in linear time/space.

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;
  if (n === 2) return Math.abs(nums[0] - nums[1]);
  let min = nums[0],
    max = nums[0];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  const size = Math.ceil(max - min) / (n - 1);
  const buckets = Array(n).fill();
  for (const num of nums) {
    const index = Math.floor((num - min) / size);
    if (index === n) continue;
    if (!buckets[index]) {
      buckets[index] = [num, num];
    } else {
      buckets[index][0] = Math.min(buckets[index][0], num);
      buckets[index][1] = Math.max(buckets[index][1], num);
    }
  }
  let prev = min;
  let ans = 0;
  for (const bucket of buckets) {
    if (!bucket) continue;
    ans = Math.max(ans, bucket[0] - prev);
    prev = bucket[1];
  }
  return ans;
};
```
