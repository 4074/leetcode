### [136\. Single Number](https://leetcode.com/problems/single-number/)

Difficulty: **Easy**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)


Given a **non-empty** array of integers `nums`, every element appears _twice_ except for one. Find that single one.

**Follow up:** Could you implement a solution with a linear runtime complexity and without using extra memory?

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```
Input: nums = [1]
Output: 1
```

**Constraints:**

*   `1 <= nums.length <= 3 * 10<sup>4</sup>`
*   `-3 * 10<sup>4</sup> <= nums[i] <= 3 * 10<sup>4</sup>`
*   Each element in the array appears twice except for one element which appears only once.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((ans, v) => ans ^ v, 0)
};
```