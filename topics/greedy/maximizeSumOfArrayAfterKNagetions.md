### [1005\. Maximize Sum Of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)

Difficulty: **Easy**


Given an array `A` of integers, we **must** modify the array in the following way: we choose an `i` and replace `A[i]` with `-A[i]`, and we repeat this process `K` times in total.  (We may choose the same index `i` multiple times.)

Return the largest possible sum of the array after modifying it in this way.

**Example 1:**

```
Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].
```


**Example 2:**

```
Input: A = [3,-1,0,2], K = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
```


**Example 3:**

```
Input: A = [2,-3,-1,5,-4], K = 2
Output: 13
Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
```


**Note:**

1.  `1 <= A.length <= 10000`
2.  `1 <= K <= 10000`
3.  `-100 <= A[i] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a, b) => a < b ? -1 : 1)
​
    for (let i = 0; i < K; i += 1) {
        let n = -A.shift()
        if (n === 0) {
            break
        } else if (n < 0) {
            if ((K - i - 1) % 2) {
                n = -n
            }
            A.unshift(n)
            break
        }
        
        for (let j = 0; j < A.length; j++) {
            if (A[j] >= n || j === A.length - 1) {
                A.splice(j, 0, n)
                break
            }
        }
    }
​
    return A.reduce((sum, n) => sum + n, 0)
};
```