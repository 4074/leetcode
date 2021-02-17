### [128\. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Union Find](https://leetcode.com/tag/union-find/)


Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence._

**Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Example 2:**

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

**Constraints:**

*   `0 <= nums.length <= 10<sup>4</sup>`
*   `-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>`

**Follow up:** Could you implement the `O(n)` solution?

#### Solution

Language: **JavaScript**

**Union Find**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const parents = new Map()
    
    function find(num) {
        if (parents.get(num) === num) return num
        if (!parents.has(num - 1) && !parents.has(num + 1)) return num
        let p = num
        if (parents.has(num - 1)) {
            p = find(num - 1)
            parents.set(num - 1, p)
        }
        if (parents.has(num + 1)) parents.set(num + 1, p)
        return p
    }
    
    for (const num of nums) {
        if (parents.has(num)) continue
        parents.set(num, find(num))
    }
    
    const count = new Map()
    let ans = 0
    for (const [num] of parents) {
        const p = find(num)
        count.set(p, (count.get(p) || 0) + 1)
        ans = Math.max(ans, count.get(p))
    }
    
    return ans
};
```

**Hash Table**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    
    let ans = 0
    for (let num of nums) {
        if (set.has(num - 1)) continue
        let count = 0
        while (set.has(num)) {
            count += 1
            num += 1
        }
        ans = Math.max(ans, count)
    }
    
    return ans
};
```