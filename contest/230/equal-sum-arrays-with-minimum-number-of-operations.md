### [1775\. Equal Sum Arrays With Minimum Number of Operations](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


You are given two arrays of integers `nums1` and `<font face="monospace" style="display: inline;">nums2</font>`, possibly of different lengths. The values in the arrays are between `1` and `6`, inclusive.

In one operation, you can change any integer's value in **any** of the arrays to **any** value between `1` and `6`, inclusive.

Return _the minimum number of operations required to make the sum of values in_ `nums1` _equal to the sum of values in_ `nums2`_._ Return `-1`​​​​​ if it is not possible to make the sum of the two arrays equal.

**Example 1:**

```
Input: nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
Output: 3
Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed.
- Change nums2[0] to 6\. nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2].
- Change nums1[5] to 1\. nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2].
- Change nums1[2] to 2\. nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2].
```

**Example 2:**

```
Input: nums1 = [1,1,1,1,1,1,1], nums2 = [6]
Output: -1
Explanation: There is no way to decrease the sum of nums1 or to increase the sum of nums2 to make them equal.
```

**Example 3:**

```
Input: nums1 = [6,6], nums2 = [1]
Output: 3
Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed. 
- Change nums1[0] to 2\. nums1 = [2,6], nums2 = [1].
- Change nums1[1] to 2\. nums1 = [2,2], nums2 = [1].
- Change nums2[0] to 4\. nums1 = [2,2], nums2 = [4].
```

**Constraints:**

*   `1 <= nums1.length, nums2.length <= 10<sup>5</sup>`
*   `1 <= nums1[i], nums2[i] <= 6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
    const l1 = nums1.length
    const l2 = nums2.length
    
    let sum1 = 0
    let count1 = Array(7).fill(0)
    for (const num of nums1) {
        count1[num] += 1
        sum1 += num
    }
    
    let sum2 = 0
    let count2 = Array(7).fill(0)
    for (const num of nums2) {
        count2[num] += 1
        sum2 += num
    }
    
    if (l1 * 6 < l2 || l1 > l2 * 6) return -1
    if (sum1 === sum2) return 0
    
    if (sum1 > sum2) {
        const temp = sum1
        sum1 = sum2
        sum2 = temp
        
        const temp2 = count1
        count1 = count2
        count2 = temp2
    }
    
    let diff = sum2 - sum1
    let ans = 0
    for (let i = 1; i < 6; i += 1) {
        const step = 6 - i
        const count = count1[i] + count2[7 - i]
        const used = Math.min(count, Math.ceil(diff / step))
        diff -= used * step
        ans += used
        if (diff <= 0) break
    }
    
    return ans
};
```