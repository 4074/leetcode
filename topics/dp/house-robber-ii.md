### [213\. House Robber II](https://leetcode.com/problems/house-robber-ii/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle.** That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers `nums` representing the amount of money of each house, return _the maximum amount of money you can rob tonight **without alerting the police**_.

**Example 1:**

```
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```

**Example 2:**

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

**Example 3:**

```
Input: nums = [0]
Output: 0
```

**Constraints:**

*   `1 <= nums.length <= 100`
*   `0 <= nums[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (n === 1) return nums[0]
    if (n === 2) return Math.max(...nums)
    
    const dpWithFirst = Array(n).fill(0)
    const dpWithLast = Array(n).fill(0)
    
    dpWithFirst[0] = nums[0]
    for (let i = 1; i < n; i += 1) {
        dpWithFirst[i] = Math.max(dpWithFirst[i - 1], nums[i] + (i < 2 ? 0 : dpWithFirst[i - 2]))
        dpWithLast[i] = Math.max(dpWithLast[i - 1], nums[i] + (i < 2 ? 0 : dpWithLast[i - 2]))
    }
    
    return Math.max(dpWithFirst[n - 2], dpWithLast[n - 1])
};
```