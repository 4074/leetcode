### [1424\. Diagonal Traverse II](https://leetcode.com/problems/diagonal-traverse-ii/)

Difficulty: **Medium**

Given a list of lists of integers, `nums`, return all elements of `nums` in diagonal order as shown in the below images.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/04/08/sample_1_1784.png)**

```
Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/04/08/sample_2_1784.png)**

```
Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
```

**Example 3:**

```
Input: nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
Output: [1,4,2,5,3,8,6,9,7,10,11]
```

**Example 4:**

```
Input: nums = [[1,2,3,4,5,6]]
Output: [1,2,3,4,5,6]
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `1 <= nums[i].length <= 10^5`
*   `1 <= nums[i][j] <= 10^9`
*   There at most `10^5` elements in `nums`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let rows = nums.length
    let maxKey = 0
    
    const map = new Map()
    for (let i = 0; i < rows; i += 1) {
        const k = nums[i].length
        for (let j = 0; j < k; j += 1) {
            const key = i + j
            maxKey = Math.max(maxKey, key)
            if (!map.has(key)) {
                map.set(key, [nums[i][j]])
            } else {
                map.get(key).unshift(nums[i][j])
            }
        }
    }
    
    const result = []
    for (let i = 0; i <= maxKey; i += 1) {
        if (map.has(i)) {
            for (const num of map.get(i)) {
                result.push(num)
            }
        }
    }
    
    return result
};
```

```javascript
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let rows = nums.length
    const list = []
    
    for (let i = 0; i < rows; i += 1) {
        const k = nums[i].length
        for (let j = 0; j < k; j += 1) {
            list.push([i + j, i, nums[i][j]])
        }
    }
    
    return list.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    }).map(item => item[2])
};
```