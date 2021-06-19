### [239\. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

Difficulty: **Hard**  

Related Topics: [Heap](https://leetcode.com/tag/heap/), [Sliding Window](https://leetcode.com/tag/sliding-window/), [Dequeue](https://leetcode.com/tag/dequeue/)


You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return _the max sliding window_.

**Example 1:**

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Example 3:**

```
Input: nums = [1,-1], k = 1
Output: [1,-1]
```

**Example 4:**

```
Input: nums = [9,11], k = 2
Output: [11]
```

**Example 5:**

```
Input: nums = [4,-2], k = 2
Output: [4]
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>5</sup>`
*   `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
*   `1 <= k <= nums.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums
  
  const stack = []
  const ans = []
  
  for (let i = 0; i < nums.length; i += 1) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop()
    }
    stack.push(i)
    if (i >= k - 1) {
      ans.push(nums[stack[0]])
    }
    if (stack[0] === i - k + 1) stack.shift()
  }
  
  return ans
};
```