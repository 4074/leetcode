### [1248\. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)

Difficulty: **Medium**


Given an array of integers `nums` and an integer `k`. Asubarray is called **nice** if there are `k` odd numbers on it.

Return the number of **nice** sub-arrays.

**Example 1:**

```
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
```

**Example 2:**

```
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.
```

**Example 3:**

```
Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
```

**Constraints:**

*   `1 <= nums.length <= 50000`
*   `1 <= nums[i] <= 10^5`
*   `1 <= k <= nums.length`


#### Solution

Language: **JavaScript**

**Sliding window + Reduction solution**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1)
};
​
function atMost(nums, k) {
    let left = 0, count = 0, result = 0
    
    for (let right=0; right<nums.length; right++) {
        count += nums[right] % 2
        
        while (count > k) {
            count -= nums[left] % 2
            left += 1
        }
        
        result += right - left + 1
    }
    
    return result
}
```

**Magic solution**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let evens = 0, result = 0
    const list = []
    
    for (const n of nums) {
        if (n%2 === 0) {
            evens += 1
        } else {
            list.push(evens + 1)
            evens = 0
        }
    }
    
    list.push(evens + 1)
    
    for (let i=0; i<list.length; i++) {
        const j = i + k
        if (j < list.length) {
            result += list[i] * list[j]
        }
    }
    
    return result
};
```