### [1534\. Count Good Triplets](https://leetcode.com/problems/count-good-triplets/)

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given an array of integers `arr`, and three integers `a`, `b` and `c`. You need to find the number of good triplets.

A triplet `(arr[i], arr[j], arr[k])` is **good** if the following conditions are true:

*   `0 <= i < j < k < arr.length`
*   `|arr[i] - arr[j]| <= a`
*   `|arr[j] - arr[k]| <= b`
*   `|arr[i] - arr[k]| <= c`

Where `|x|` denotes the absolute value of `x`.

Return _the number of good triplets_.

**Example 1:**

```
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
```

**Example 2:**

```
Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
Output: 0
Explanation: No triplet satisfies all conditions.
```

**Constraints:**

*   `3 <= arr.length <= 100`
*   `0 <= arr[i] <= 1000`
*   `0 <= a, b, c <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0
    function dfs(nums, index) {
        if (nums.length === 3) {
            const [i, j, k] = nums
            if (Math.abs(i - j) <= a && Math.abs(j - k) <= b && Math.abs(i - k) <= c) {
                ans += 1
            }
            return
        }
        if (index >= arr.length) return
        
        for (let i = index; i < arr.length; i += 1) {
            nums.push(arr[i])
            dfs(nums, i + 1)
            nums.pop()
        }
    }
    dfs([], 0)
    return ans
};
```