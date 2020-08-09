### [1546\. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given an array `nums` and an integer `<font face="monospace" style="display: inline;">target</font>`.

Return the maximum number of **non-empty** **non-overlapping** subarrays such that the sum of values in each subarray is equal to `<font face="monospace" style="display: inline;">target</font>`.

**Example 1:**

```
Input: nums = [1,1,1,1,1], target = 2
Output: 2
Explanation: There are 2 non-overlapping subarrays [1,1,1,1,1] with sum equals to target(2).
```

**Example 2:**

```
Input: nums = [-1,3,5,1,4,2,-9], target = 6
Output: 2
Explanation: There are 3 subarrays with sum equal to 6.
([5,1], [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping.
```

**Example 3:**

```
Input: nums = [-2,6,6,3,5,4,1,2,8], target = 10
Output: 3
```

**Example 4:**

```
Input: nums = [0,0,0], target = 0
Output: 3
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `-10^4 <= nums[i] <= 10^4`
*   `0 <= target <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
    const set = new Set()
    set.add(0)
    
    let sum = 0, ans = 0
    for (let i = 0; i < nums.length; i += 1) {
        sum += nums[i]
        if (set.has(sum - target)) {
            ans += 1
            sum = 0
            set.clear()
            set.add(0)
            continue
        }
        set.add(sum)
    }
    
    return ans
};
```