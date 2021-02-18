### [137\. Single Number II](https://leetcode.com/problems/single-number-ii/)

Difficulty: **Medium**  

Related Topics: [Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)


Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. _Find the single element and return it_.

**Example 1:**

```
Input: nums = [2,2,3,2]
Output: 3
```

**Example 2:**

```
Input: nums = [0,1,0,1,0,1,99]
Output: 99
```

**Constraints:**

*   `1 <= nums.length <= 3 * 10<sup>4</sup>`
*   `-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1`
*   Each element in `nums` appears exactly **three times** except for one element which appears **once**.

**Follow up:** Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0
    for (let i = 0; i < 32; i += 1) {
        let count = 0
        const b = 1 << i
        for (const num of nums) {
            count += (num & b)
        }
        if (count % 3) ans |= b
    }
    return ans
};
```