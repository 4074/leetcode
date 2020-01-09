### [1310\. XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)

Difficulty: **Medium**

Given the array `arr` of positive integers and the array `queries` where `queries[i] = [L<sub style="display: inline;">i, </sub>R<sub style="display: inline;">i</sub>]`, for each query `i` compute the **XOR** of elements from `L<sub style="display: inline;">i</sub>` to `Ri` (that is, `arr[L<sub style="display: inline;">i</sub>] **xor** arr[L<sub style="display: inline;">i+1</sub>] **xor** ... **xor** arr[R<sub style="display: inline;">i</sub>]` ). Return an array containing the result for the given `queries`.

**Example 1:**

```
Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8] 
Explanation: 
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8
```

**Example 2:**

```
Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
Output: [8,0,4,4]
```

**Constraints:**

*   `1 <= arr.length <= 3 * 10^4`
*   `1 <= arr[i] <= 10^9`
*   `1 <= queries.length <= 3 * 10^4`
*   `queries[i].length == 2`
*   `0 <= queries[i][0] <= queries[i][1] < arr.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const xors = []
    const answer = []
    
    for (const n of arr) {
        xors.push((xors.length ? xors[xors.length - 1] : 0) ^ n)
    }
    
    for (const query of queries) {
        answer.push(
            (xors[query[0] - 1] || 0) ^ (xors[query[1]])
        )
    }
    
    return answer
};
```