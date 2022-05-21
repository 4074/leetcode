# [2248\. Intersection of Multiple Arrays](https://leetcode.com/problems/intersection-of-multiple-arrays/)

## Description

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Counting](https://leetcode.com/tag/counting/)

Given a 2D integer array `nums` where `nums[i]` is a non-empty array of **distinct** positive integers, return _the list of integers that are present in **each array** of_ `nums` _sorted in **ascending order**_.

**Example 1:**

```
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
```

**Example 2:**

```
Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
```

**Constraints:**

*   `1 <= nums.length <= 1000`
*   `1 <= sum(nums[i].length) <= 1000`
*   `1 <= nums[i][j] <= 1000`
*   All the values of `nums[i]` are **unique**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const presents = Array(1001).fill(0)
  for (const group of nums) {
    for (const num of group) {
      presents[num] += 1
    }
  }
  const ans = []
  for (let i = 0; i < presents.length; i += 1) {
    if (presents[i] === nums.length) ans.push(i)
  }
  return ans
};
```