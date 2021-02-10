### [1755\. Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum/)

Difficulty: **Hard**

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Meet in the Middle](https://leetcode.com/tag/meet-in-the-middle/)

You are given an integer array `nums` and an integer `goal`.

You want to choose a subsequence of `nums` such that the sum of its elements is the closest possible to `goal`. That is, if the sum of the subsequence's elements is `sum`, then you want to **minimize the absolute difference** `abs(sum - goal)`.

Return _the **minimum** possible value of_ `abs(sum - goal)`.

Note that a subsequence of an array is an array formed by removing some elements **(possibly all or none)** of the original array.

**Example 1:**

```
Input: nums = [5,-7,3,5], goal = 6
Output: 0
Explanation: Choose the whole array as a subsequence, with a sum of 6.
This is equal to the goal, so the absolute difference is 0.
```

**Example 2:**

```
Input: nums = [7,-9,15,-2], goal = -5
Output: 1
Explanation: Choose the subsequence [7,-9,-2], with a sum of -4.
The absolute difference is abs(-4 - (-5)) = abs(1) = 1, which is the minimum.
```

**Example 3:**

```
Input: nums = [1,2,3], goal = -7
Output: 7
```

**Constraints:**

- `1 <= nums.length <= 40`
- `-10<sup>7</sup> <= nums[i] <= 10<sup>7</sup>`
- `-10<sup>9</sup> <= goal <= 10<sup>9</sup>`

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function (nums, goal) {
  const getSums = (arr) => {
    // console.log(arr)
    let set = new Set();
    set.add(0);
    for (const num of arr) {
      const newSet = new Set(set);
      for (const item of set) {
        newSet.add(item + num);
      }
      set = newSet;
    }
    return [...set].sort((a, b) => a - b);
  };
  const bts = (arr, x) => {
    let l = 0,
      r = arr.length - 1;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] >= x) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    if (l > 0 && Math.abs(arr[l - 1] - x) < Math.abs(arr[l] - x)) l -= 1;
    return arr[l];
  };
  let ans = Infinity;
  const twoSum = (a, b) => {
    for (const i of a) {
      const x = goal - i;
      ans = Math.min(ans, Math.abs(x - bts(b, x)));
    }
  };
  const mid = Math.floor(nums.length / 2);
  const sums1 = getSums(nums.slice(0, mid));
  const sums2 = getSums(nums.slice(mid));
  twoSum(sums1, sums2);
  return ans;
};
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function (nums, goal) {
  const getSums = (arr) => {
    let set = new Set();
    set.add(0);
    for (const num of arr) {
      const newSet = new Set(set);
      for (const item of set) {
        newSet.add(item + num);
      }
      set = newSet;
    }
    return [...set].sort((a, b) => a - b);
  };

  const findClosest = (a, b) => {
    let ans = Infinity;
    let r = b.length - 1;
    for (let i = 0; i < a.length; i += 1) {
      while (a[i] + b[r] > goal && r > 0) {
        ans = Math.min(ans, Math.abs(a[i] + b[r] - goal));
        r -= 1;
      }
      ans = Math.min(ans, Math.abs(a[i] + b[r] - goal));
    }
    return ans;
  };

  const mid = Math.floor(nums.length / 2);
  const sums1 = getSums(nums.slice(0, mid));
  const sums2 = getSums(nums.slice(mid));

  return findClosest(sums1, sums2);
};
```
