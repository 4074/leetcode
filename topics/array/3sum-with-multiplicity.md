### [923\. 3Sum With Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/)

Difficulty: **Medium**  

Related Topics: [Two Pointers](https://leetcode.com/tag/two-pointers/)


Given an integer array `arr`, and an integer `target`, return the number of tuples `i, j, k` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`.

As the answer can be very large, return it **modulo** `10<sup>9</sup> + 7`.

**Example 1:**

```
Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
```

**Example 2:**

```
Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
```

**Constraints:**

*   `3 <= arr.length <= 3000`
*   `0 <= arr[i] <= 100`
*   `0 <= target <= 300`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
  const count = Array(101).fill(0)
  for (const num of arr) {
    count[num] += 1
  }
  
  const mod = 10 ** 9 + 7
  let ans = 0
  for (let i = 0; i <= target; i += 1) {
    for (let j = i; j <= target; j += 1) {
      if (!count[i] || !count[j]) continue
      const k = target - i - j
      if (k < j || !count[k]) continue
      if (i === j && i === k) {
        ans += count[i] * (count[i] - 1) * (count[i] - 2) / 6
      } else if (i === j && i !== k) {
        ans += (count[i] * (count[i] - 1) / 2) * count[k]
      } else if (j === k) {
        ans += (count[j] * (count[j] - 1) / 2) * count[i]
      } else {
        ans += count[i] * count[j] * count[k]
      }
    }
    ans = ans % mod
  }
  
  return ans
};
```