### [1802\. Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Greedy](https://leetcode.com/tag/greedy/)


You are given three positive integers `n`, `index` and `maxSum`. You want to construct an array `nums` **(0-indexed)** that satisfies the following conditions:

*   `nums.length == n`
*   `nums[i]` is a **positive** integer where `0 <= i < n`.
*   `abs(nums[i] - nums[i+1]) <= 1` where `0 <= i < n-1`.
*   The sum of all the elements of `nums` does not exceed `maxSum`.
*   `nums[index]` is **maximized**.

Return `nums[index]` of the constructed array.

Note that `abs(x)` equals `x` if `x >= 0`, and `-x` otherwise.

**Example 1:**

```
Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: The arrays [1,1,2,1] and [1,2,2,1] satisfy all the conditions. There are no other valid arrays with a larger value at the given index.
```

**Example 2:**

```
Input: n = 6, index = 1,  maxSum = 10
Output: 3
```

**Constraints:**

*   `1 <= n <= maxSum <= 10<sup>9</sup>`
*   `0 <= index < n`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  if (maxSum < n) return 0
  let left = 1, right = maxSum
  
  const valid = (num) => {
    const leftIndex = Math.max(index - num + 1, 0)
    const rightIndex = Math.min(index + num - 1, n - 1)
    const leftNum = num - (index - leftIndex)
    const rightNum = num - (rightIndex - index)
    
    const sum = (leftNum + num) * (index - leftIndex + 1) / 2
      + (rightNum + num - 1) * (rightIndex - index) / 2
      + (leftIndex > 0 ? leftIndex : 0)
      + (rightIndex < n - 1 ? n - rightIndex - 1 : 0)
    
    return sum <= maxSum
  }
  
  while (left < right) {
    const mid = Math.ceil((left + right) / 2)
    if (valid(mid)) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  
  return left
};
```