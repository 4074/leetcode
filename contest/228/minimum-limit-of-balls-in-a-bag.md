### [1760\. Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Heap](https://leetcode.com/tag/heap/)


You are given an integer array `nums` where the `i<sup>th</sup>` bag contains `nums[i]` balls. You are also given an integer `maxOperations`.

You can perform the following operation at most `maxOperations` times:

*   Take any bag of balls and divide it into two new bags with a **positive** number of balls.
    *   For example, a bag of `5` balls can become two new bags of `1` and `4` balls, or two new bags of `2` and `3` balls.

Your penalty is the **maximum** number of balls in a bag. You want to **minimize** your penalty after the operations.

Return _the minimum possible penalty after performing the operations_.

**Example 1:**

```
Input: nums = [9], maxOperations = 2
Output: 3
Explanation: 
- Divide the bag with 9 balls into two bags of sizes 6 and 3\. [9] -> [6,3].
- Divide the bag with 6 balls into two bags of sizes 3 and 3\. [6,3] -> [3,3,3].
The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.
```

**Example 2:**

```
Input: nums = [2,4,8,2], maxOperations = 4
Output: 2
Explanation:
- Divide the bag with 8 balls into two bags of sizes 4 and 4\. [2,4,8,2] -> [2,4,4,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2\. [2,4,4,4,2] -> [2,2,2,4,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2\. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2\. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
The bag with the most number of balls has 2 balls, so your penalty is 2 an you should return 2.
```

**Example 3:**

```
Input: nums = [7,17], maxOperations = 2
Output: 7
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>5</sup>`
*   `1 <= maxOperations, nums[i] <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let l = 1, r = 10 ** 9
    
    while (l < r) {
        const m = Math.floor((l + r) / 2)
        let sum = 0
        for (const num of nums) {
            if (num <= m) continue
            sum += Math.ceil(num / m) - 1
        }
        if (sum <= maxOperations) {
            r = m
        } else {
            l = m + 1
        }
    }
    
    return l
};
```