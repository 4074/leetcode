# [907\. Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Stack](https://leetcode.com/tag/stack/), [Monotonic Stack](https://leetcode.com/tag/monotonic-stack/)


Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer **modulo** 10<sup>9</sup> + 7.

**Example 1:**

```
Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

**Example 2:**

```
Input: arr = [11,81,94,43,3]
Output: 444
```

**Constraints:**

*   1 <= arr.length <= 3 * 10<sup>4</sup>
*   1 <= arr[i] <= 3 * 10<sup>4</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const n = arr.length
  const leftMin = []
  let stack = []
  for (let i = 0; i < n; i += 1) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop()
    }
    leftMin.push(stack.length ? stack[stack.length - 1] : -1)
    stack.push(i)
  }
  
  const rightMin = []
  stack = []
  for (let i = n - 1; i >= 0; i -= 1) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop()
    }
    rightMin.unshift(stack.length ? stack[stack.length - 1] : n)
    stack.push(i)
  }
  
  const mod = 10 ** 9 + 7
  let ans = 0
  for (let i = 0; i < n; i += 1) {
    ans = (ans + arr[i] * (i - leftMin[i]) * (rightMin[i] - i)) % mod
  }
  
  return ans
};
```