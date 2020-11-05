### [15\. 3Sum](https://leetcode.com/problems/3sum/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/)


Given an array `nums` of _n_ integers, are there elements _a_, _b_, _c_ in `nums` such that _a_ + _b_ + _c_ = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

**Example 2:**

```
Input: nums = []
Output: []
```

**Example 3:**

```
Input: nums = [0]
Output: []
```

**Constraints:**

*   `0 <= nums.length <= 3000`
*   `-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const ans = []
    
    for (let i = 0; i < n - 2; i += 1) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        const target = 0 - nums[i]
        let left = i + 1, right = n - 1
        while (left < right) {
            const sum = nums[left] + nums[right]
            if (sum === target) {
                ans.push([nums[i], nums[left], nums[right]])
            }
            if (sum < target) {
                left += 1
                while (left < right && nums[left] === nums[left - 1]) left += 1
            } else {
                right -= 1
                while (right > left && nums[right] === nums[right + 1]) right -= 1
            }
        }
    }
    
    return ans
};
```