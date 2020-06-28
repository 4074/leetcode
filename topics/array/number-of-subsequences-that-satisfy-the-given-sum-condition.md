### [1498\. Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)

Difficulty: **Medium**


Given an array of integers `nums` and an integer `target`.

Return the number of **non-empty** subsequences of `nums` such that the sum of the minimum and maximum element on it is less or equal than `target`.

Since the answer may be too large, return it modulo 10^9 + 7.

**Example 1:**

```
Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
```

**Example 2:**

```
Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
```

**Example 3:**

```
Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them don't satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).
```

**Example 4:**

```
Input: nums = [5,2,4,1,7,6,8], target = 16
Output: 127
Explanation: All non-empty subset satisfy the condition (2^7 - 1) = 127
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `1 <= nums[i] <= 10^6`
*   `1 <= target <= 10^6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const n = nums.length
    const mod = 10 ** 9 + 7
    nums.sort((a, b) => a - b)
    
    const pow2 = [1]
    for (let i = 1; i < n; i += 1) {
        pow2.push(pow2[i - 1] * 2 % mod)
    }
    
    let ans = 0
    let right = n - 1
    for (let i = 0; i < n; i += 1) {
        while (nums[i] + nums[right] > target) {
            right -= 1
        }
        if (right < i) break
        ans += pow2[right - i]
    }
​
    return ans % mod
};
```