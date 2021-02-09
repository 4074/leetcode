### [1712\. Ways to Split Array Into Three Subarrays](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/)

Difficulty: **Medium**  

Related Topics: [Two Pointers](https://leetcode.com/tag/two-pointers/), [Binary Search](https://leetcode.com/tag/binary-search/)


A split of an integer array is **good** if:

*   The array is split into three **non-empty** contiguous subarrays - named `left`, `mid`, `right` respectively from left to right.
*   The sum of the elements in `left` is less than or equal to the sum of the elements in `mid`, and the sum of the elements in `mid` is less than or equal to the sum of the elements in `right`.

Given `nums`, an array of **non-negative** integers, return _the number of **good** ways to split_ `nums`. As the number may be too large, return it **modulo** `10<sup>9</sup> + 7`.

**Example 1:**

```
Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].
```

**Example 2:**

```
Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]
```

**Example 3:**

```
Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.
```

**Constraints:**

*   `3 <= nums.length <= 10<sup>5</sup>`
*   `0 <= nums[i] <= 10<sup>4</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    const n = nums.length
    const mod = 10 ** 9 + 7
    const sum = [nums[0]]
    
    for (let i = 1; i < n; i += 1) {
        sum.push(sum[sum.length - 1] + nums[i])
    }
    
    function findJ(i) {
        let left = i + 1
        let right = n - 2
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (sum[mid] - sum[i] < sum[i]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (sum[left] - sum[i] >= sum[i]) return left
    }
    
    function findK(i) {
        let left = i + 1
        let right = n - 2
        while (left < right) {
            const mid = Math.ceil((left + right) / 2)
            if (sum[mid] - sum[i] > sum[n - 1] - sum[mid]) {
                right = mid - 1
            } else {
                left = mid
            }
        }
        
        if (sum[left] - sum[i] <= sum[n - 1] - sum[left]) return left
    }
    
    let ans = 0
    for (let i = 0; i < n - 2; i += 1) {
        const j = findJ(i)
        const k = findK(i)
        if (j && k && k >= j) {
            ans = (ans + (k - j + 1)) % mod
        }
    }
    
    return ans
};
```