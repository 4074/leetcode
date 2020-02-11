### [1313\. Decompress Run-Length Encoded List](https://leetcode.com/problems/decompress-run-length-encoded-list/)

Difficulty: **Easy**


We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[a, b] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`).  For each such pair, there are `a` elements with value `b` in the decompressed list.

Return the decompressed list.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4,4] is [2,4,4,4].
```

**Constraints:**

*   `2 <= nums.length <= 100`
*   `nums.length % 2 == 0`
*   `<font face="monospace" style="display: inline;">1 <= nums[i] <= 100</font>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i += 2) {
        for (let j = 0; j < nums[i]; j += 1) {
            result.push(nums[i + 1])
        }
    }
    return result
};
```