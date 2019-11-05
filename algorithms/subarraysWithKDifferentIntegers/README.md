### [992\. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

Difficulty: **Hard**


Given an array `A` of positive integers, call a (contiguous, not necessarily distinct) subarray of `A` _good_ if the number of different integers in that subarray is exactly `K`.

(For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.)

Return the number of good subarrays of `A`.

**Example 1:**

```
Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
```

**Example 2:**

```
Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```

**Note:**

1.  `1 <= A.length <= 20000`
2.  `1 <= A[i] <= A.length`
3.  `1 <= K <= A.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    // Using sliding window and reduction(reduce a problem to two easier implement problems).
    return atMost(A, K) - atMost(A, K - 1)
};
​
function atMost(A, K) {
    // Using array as a counter, is more efficiently than object.
    const store = Array(A.length + 1).fill(0)
    let i = 0, count = 0, result = 0
    
    // Move `right` pointer to right
    for (let j=0; j<A.length; j++) {
        // If the element is a new one, count add 1.
        if (store[A[j]] === 0) count += 1
        
        // The element times add 1.
        store[A[j]] += 1
        
        // If count > K, move `left` pointer to right.
        while (count > K) {
            // The element minus 1.
            store[A[i]] -= 1
            
            // If the element is disappearing of subarray(i to j), count minus 1.
            if (store[A[i]] === 0) count -= 1
            i += 1
        }
        
        // Now count <= K.
        // The count of subarrays ends with j start with i
        // or start more than i is `j - i + 1`.
        // Add it to result, not add 1.
        result += j - i + 1
    }
    
    return result
}
```