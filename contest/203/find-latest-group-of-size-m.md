### [1562\. Find Latest Group of Size M](https://leetcode.com/problems/find-latest-group-of-size-m/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/)


Given an array `arr` that represents a permutation of numbers from `1` to `n`. You have a binary string of size `n` that initially has all its bits set to zero.

At each step `i` (assuming both the binary string and `arr` are 1-indexed) from `1` to `n`, the bit at position `arr[i]` is set to `1`. You are given an integer `m` and you need to find the latest step at which there exists a group of ones of length `m`. A group of ones is a contiguous substring of 1s such that it cannot be extended in either direction.

Return _the latest step at which there exists a group of ones of length **exactly**_ `m`. _If no such group exists, return_ `-1`.

**Example 1:**

```
Input: arr = [3,5,1,2,4], m = 1
Output: 4
Explanation:
Step 1: "00100", groups: ["1"]
Step 2: "00101", groups: ["1", "1"]
Step 3: "10101", groups: ["1", "1", "1"]
Step 4: "11101", groups: ["111", "1"]
Step 5: "11111", groups: ["11111"]
The latest step at which there exists a group of size 1 is step 4.
```

**Example 2:**

```
Input: arr = [3,1,5,4,2], m = 2
Output: -1
Explanation:
Step 1: "00100", groups: ["1"]
Step 2: "10100", groups: ["1", "1"]
Step 3: "10101", groups: ["1", "1", "1"]
Step 4: "10111", groups: ["1", "111"]
Step 5: "11111", groups: ["11111"]
No group of size 2 exists during any step.
```

**Example 3:**

```
Input: arr = [1], m = 1
Output: 1
```

**Example 4:**

```
Input: arr = [2,1], m = 2
Output: 2
```

**Constraints:**

*   `n == arr.length`
*   `1 <= n <= 10^5`
*   `1 <= arr[i] <= n`
*   All integers in `arr` are **distinct**.
*   `1 <= m <= arr.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function(arr, m) {
    const n = arr.length
    let ans = -1
    const length = Array(n + 2).fill(0)
    const count = Array(n + 1).fill(0)
    
    for (let i = 0; i < n; i += 1) {
        const num = arr[i]
        const left = length[num - 1], right = length[num + 1]
        length[num] = length[num - left] = length[num + right] = left + right + 1
        count[left] -= 1
        count[right] -= 1
        count[length[num]] += 1
        if (count[m]) ans = i + 1
    }
    return ans
};
```