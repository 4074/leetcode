### [658\. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Binary Search](https://leetcode.com/tag/binary-search/), [Sorting](https://leetcode.com/tag/sorting/), [Heap (Priority Queue)](https://leetcode.com/tag/heap-priority-queue/)


Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

*   `|a - x| < |b - x|`, or
*   `|a - x| == |b - x|` and `a < b`

**Example 1:**

```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

**Example 2:**

```
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

**Constraints:**

*   `1 <= k <= arr.length`
*   `1 <= arr.length <= 10<sup>4</sup>`
*   `arr` is sorted in **ascending** order.
*   `-10<sup>4</sup> <= arr[i], x <= 10<sup>4</sup>`


#### Solution

Language: **JavaScript**

Sort
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  return arr.sort((a, b) => {
    const aDiff = Math.abs(a - x)
    const bDiff = Math.abs(b - x)
    return aDiff === bDiff ? a - b : aDiff - bDiff
  }).slice(0, k).sort((a, b) => a - b)
};
```

Binary Search + Two Pointers
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  const n = arr.length
  let left = 0
  let right = n - 1
  
  while (left < right) {
    const mid = Math.ceil((left + right) / 2)
    if (arr[mid] > x) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  
  if (left < n - 1 && arr[left + 1] - x < x - arr[left]) left += 1
  
  const ans = [arr[left]]
  right = left + 1
  left = left - 1
  
  while (ans.length < k) {
    const leftNum = left < 0 ? -Infinity : arr[left]
    const rightNum = right === n ? Infinity : arr[right]
    if (x - leftNum <= rightNum - x) {
      ans.unshift(leftNum)
      left -= 1
    } else {
      ans.push(rightNum)
      right += 1
    }
  }
  
  return ans
};
```

Binary Search for left
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let left = 0
  let right = arr.length - k
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  
  return arr.slice(left, left + k)
};
```