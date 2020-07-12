### [1512\. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

Difficulty: **Easy**


Given an array of integers `nums`.

A pair `(i,j)` is called _good_ if `nums[i]` == `nums[j]` and `i` < `j`.

Return the number of _good_ pairs.

**Example 1:**

```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

**Example 2:**

```
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```

**Example 3:**

```
Input: nums = [1,2,3]
Output: 0
```

**Constraints:**

*   `1 <= nums.length <= 100`
*   `1 <= nums[i] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    const n = nums.length
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            if (nums[i] === nums[j]) {
                count += 1
            }
        }
    }
    return count
};
```

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map()
    
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    let count = 0
    for (const [, feq] of map.entries()) {
        count += (feq * (feq - 1)) / 2
    }
    
    return count
};
```