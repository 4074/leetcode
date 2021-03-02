### [229\. Majority Element II](https://leetcode.com/problems/majority-element-ii/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

**Follow-up:** Could you solve the problem in linear time and in O(1) space?

**Example 1:**

```
Input: nums = [3,2,3]
Output: [3]
```

**Example 2:**

```
Input: nums = [1]
Output: [1]
```

**Example 3:**

```
Input: nums = [1,2]
Output: [1,2]
```

**Constraints:**

*   `1 <= nums.length <= 5 * 10<sup>4</sup>`
*   `-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length    
    let num1, count1 = 0
    let num2, count2 = 0
    
    for (let i = 0; i < n; i += 1) {
        if (nums[i] === num1) {
            count1 += 1
        } else if (nums[i] === num2) {
            count2 += 1
        } else if (count1 === 0) {
            num1 = nums[i]
            count1 = 1
        } else if (count2 === 0) {
            num2 = nums[i]
            count2 = 1
        } else {
            count1 -= 1
            count2 -= 1
        }
    }
    
    count1 = 0
    count2 = 0
    
    for (const num of nums) {
        if (num === num1) count1 += 1
        if (num === num2) count2 += 1
    }
    
    const ans = []
    if (count1 > n / 3) ans.push(num1)
    if (count2 > n / 3 && num1 !== num2) ans.push(num2)
    
    return ans
};
```