### [1566\. Detect Pattern of Length M Repeated K or More Times](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/)

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given an array of positive integers `arr`,  find a pattern of length `m` that is repeated `k` or more times.

A **pattern** is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times **consecutively** without overlapping. A pattern is defined by its length and the number of repetitions.

Return `true` _if there exists a pattern of length_ `m` _that is repeated_ `k` _or more times, otherwise return_ `false`.

**Example 1:**

```
Input: arr = [1,2,4,4,4,4], m = 1, k = 3
Output: true
Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
```

**Example 2:**

```
Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
Output: true
Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times. Another valid pattern (2,1) is also repeated 2 times.
```

**Example 3:**

```
Input: arr = [1,2,1,2,1,3], m = 2, k = 3
Output: false
Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.
```

**Example 4:**

```
Input: arr = [1,2,3,1,2], m = 2, k = 2
Output: false
Explanation: Notice that the pattern (1,2) exists twice but not consecutively, so it doesn't count.
```

**Example 5:**

```
Input: arr = [2,2,2,2], m = 2, k = 3
Output: false
Explanation: The only pattern of length 2 is (2,2) however it's repeated only twice. Notice that we do not count overlapping repetitions.
```

**Constraints:**

*   `2 <= arr.length <= 100`
*   `1 <= arr[i] <= 100`
*   `1 <= m <= 100`
*   `2 <= k <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    const n = arr.length
    if (m * k > n) return false
    
    for (let i = 0; i < n; i += 1) {
        const j = i + m - 1
        let count = 1
        let start = j + 1
        
        while (start < n) {
            let matched = true
            for (let q = 0; q < m; q += 1) {
                if (arr[start + q] !== arr[i + q]) {
                    matched = false
                    break
                }
            }
            if (!matched) break
            
            count += 1
            start += m
            if (count >= k) return true
        }
    }
    return false
};
```