### [45\. Jump Game II](https://leetcode.com/problems/jump-game-ii/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Greedy](https://leetcode.com/tag/greedy/)


Given an array of non-negative integers `nums`, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2\. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: nums = [2,3,0,1,4]
Output: 2
```

**Constraints:**

*   `1 <= nums.length <= 3 * 10<sup>4</sup>`
*   `0 <= nums[i] <= 10<sup>5</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length
    let current = 0
    let jumps = 0
    
    while (current < n - 1) {
        jumps += 1
        const maxReach = current + nums[current]
        if (maxReach >= n - 1) return jumps
        
        let nextMaxReach = -1
        for (let next = current + 1; next <= maxReach; next += 1) {
            if (next + nums[next] > nextMaxReach) {
                nextMaxReach = next + nums[next]
                current = next
            }
        }
    }
    
    return jumps
};
```