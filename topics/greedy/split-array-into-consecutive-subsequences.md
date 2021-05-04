### [659\. Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/)

Difficulty: **Medium**  

Related Topics: [Heap](https://leetcode.com/tag/heap/), [Greedy](https://leetcode.com/tag/greedy/)


Given an integer array `nums` that is **sorted in ascending order**, return `true` if and only if you can split it into **one or more** subsequences such that each subsequence consists of consecutive integers and has a length of at least `3`.

**Example 1:**

```
Input: nums = [1,2,3,3,4,5]
Output: true
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5
```

**Example 2:**

```
Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5
```

**Example 3:**

```
Input: nums = [1,2,3,4,4,5]
Output: false
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>4</sup>`
*   `-1000 <= nums[i] <= 1000`
*   `nums` is sorted in an **ascending** order.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const counts = Array(2003).fill(0)
  const ends = Array(2003).fill(0)
  for (const num of nums) {
    counts[num + 1000] += 1
  }
  
  for (let origin of nums) {
    const num = origin + 1000
    if (!counts[num]) continue
    
    counts[num] -= 1
    if (ends[num - 1]) {
      ends[num - 1] -= 1
      ends[num] += 1
    } else if (counts[num + 1] && counts[num + 2]) {
      counts[num + 1] -= 1
      counts[num + 2] -= 1
      ends[num + 2] += 1
    } else {
      return false
    }
  }
  
  return true
};
```