### [1296\. Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/)

Difficulty: **Medium**


Given an array of integers `nums` and a positive integer `k`, find whether it's possible to divide this array into sets of `k` consecutive numbers  
Return `True` if its possibleotherwise return `False`.

**Example 1:**

```
Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].
```

**Example 2:**

```
Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
Output: true
Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].
```

**Example 3:**

```
Input: nums = [3,3,2,2,1,1], k = 3
Output: true
```

**Example 4:**

```
Input: nums = [1,2,3,4], k = 3
Output: false
Explanation: Each array should be divided in subarrays of size 3.
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `1 <= nums[i] <= 10^9`
*   `1 <= k <= nums.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k) return false
    nums.sort((a, b) => a - b)
    const used = Array(nums.length).fill(0)
    
    let start = 0
    let count
    while (start < nums.length) {
        count = 1
        let n = nums[start]
        let i = start + 1
        used[start] = 1
        
        let newStart
        while (count < k && i < nums.length) {
            if (!used[i]) {
                if (nums[i] === n) {
                    if (!newStart) newStart = i
                } else if (nums[i] === n + 1) {
                    used[i] = 1
                    n += 1
                    count += 1
                } else {
                    return false
                }
            }
            i += 1
        }
        
        start = newStart || i
    }
    
    return count === k
};
```

Use freq
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k) return false
    
    const freq = new Map()
    for (const n of nums) {
        freq.set(n, freq.has(n) ? (freq.get(n) + 1) : 1)
    }
    
    nums.sort((a, b) => a - b)
    
    let index = 0
    while (index < nums.length) {
        const count = freq.get(nums[index])
        if (!count) {
            index += 1
            continue
        }
        
        let n = nums[index] + 1
        freq.set(nums[index], 0)
        for (let i = 1; i < k; i += 1) {
            const c = freq.get(n) || 0
            if (c < count) return false
            freq.set(n, c - count)
            console.log(n)
            n += 1
        }
        
        index += 1
    }
    
    return true
};
```