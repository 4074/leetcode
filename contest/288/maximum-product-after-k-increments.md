# [2233\. Maximum Product After K Increments](https://leetcode.com/problems/maximum-product-after-k-increments/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Greedy](https://leetcode.com/tag/greedy/), [Heap (Priority Queue)](https://leetcode.com/tag/heap-priority-queue/)


You are given an array of non-negative integers `nums` and an integer `k`. In one operation, you may choose **any** element from `nums` and **increment** it by `1`.

Return _the **maximum** **product** of_ `nums` _after **at most**_ `k` _operations._ Since the answer may be very large, return it **modulo** 10<sup>9</sup> + 7. Note that you should maximize the product before taking the modulo. 

**Example 1:**

```
Input: nums = [0,4], k = 5
Output: 20
Explanation: Increment the first number 5 times.
Now nums = [5, 4], with a product of 5 * 4 = 20.
It can be shown that 20 is maximum product possible, so we return 20.
Note that there may be other ways to increment nums to have the maximum product.
```

**Example 2:**

```
Input: nums = [6,3,3,2], k = 2
Output: 216
Explanation: Increment the second number 1 time and increment the fourth number 1 time.
Now nums = [6, 4, 3, 3], with a product of 6 * 4 * 3 * 3 = 216.
It can be shown that 216 is maximum product possible, so we return 216.
Note that there may be other ways to increment nums to have the maximum product.
```

**Constraints:**

*   1 <= nums.length, k <= 10<sup>5</sup>
*   0 <= nums[i] <= 10<sup>6</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
  const mod = BigInt(1e9 + 7)
  nums.sort((a, b) => a - b)
  
  let index = 1
  while (k) {
    while (index < nums.length && nums[index] === nums[index - 1]) {
      index += 1
    }
    let add = Math.max(1, Math.floor(k / index))
    if (index < nums.length) add = Math.min(add, nums[index] - nums[index - 1])
    
    for (let i = 0; i < index; i += 1) {
      if (!k) break
      nums[i] += add
      k -= add
    }
  }
  
  return nums.reduce((product, num) => (BigInt(num) * product) % mod, 1n)
};
```

**Pre Sum**
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
  const mod = BigInt(1e9 + 7)
  const n = nums.length
  nums.sort((a, b) => a - b)
  
  const sums = Array(n).fill(0)
  for (let i = 0; i < n; i += 1) {
    sums[i] = (sums[i - 1] || 0) + nums[i]
  }
  
  let left = 0, right = n - 1
  while (left < right) {
    const mid = Math.ceil((left + right) / 2)
    if ((sums[mid] + k) / (mid + 1) > nums[mid]) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  
  const target = Math.floor((sums[left] + k) / (left + 1))
  let ones = sums[left] + k - target * (left + 1)
  
  let ans = 1n
  for (let i = 0; i < n; i += 1) {
    let num = i <= left ? target : nums[i]
    if (ones) {
      num += 1
      ones -= 1
    }
    ans = BigInt(num) * ans % mod
  }
  
  return ans
};
```