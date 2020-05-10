### [1442\. Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)

Difficulty: **Medium**


Given an array of integers `arr`.

We want to select three indices `i`, `j` and `k` where `(0 <= i < j <= k < arr.length)`.

Let's define `a` and `b` as follows:

*   `a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]`
*   `b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`

Note that **^** denotes the **bitwise-xor** operation.

Return _the number of triplets_ (`i`, `j` and `k`) Where `a == b`.

**Example 1:**

```
Input: arr = [2,3,1,6,7]
Output: 4
Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
```

**Example 2:**

```
Input: arr = [1,1,1,1,1]
Output: 10
```

**Example 3:**

```
Input: arr = [2,3]
Output: 0
```

**Example 4:**

```
Input: arr = [1,3,5,7,9]
Output: 3
```

**Example 5:**

```
Input: arr = [7,11,12,9,5,2,7,17,22]
Output: 8
```

**Constraints:**

*   `1 <= arr.length <= 300`
*   `1 <= arr[i] <= 10^8`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const xors = []
    for (let i = 0; i < arr.length; i += 1) {
        xors.push(i === 0 ? arr[i] : (xors[i - 1] ^ arr[i]))
    }
    
    let count = 0
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            for (let k = j; k < arr.length; k += 1) {
                const a = i === 0 ? xors[j - 1] : (xors[j - 1] ^ xors[i - 1])
                const b = xors[k] ^ xors[j - 1]
                if (a === b) count += 1
            }
        }
    }
    
    return count
};
```

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const xors = Array(arr.length + 1).fill(0)
    for (let i = 1; i <= arr.length; i += 1) {
        xors[i] = arr[i - 1] ^ xors[i - 1]
    }
    
    let count = 0
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if ((xors[j + 1] ^ xors[i]) === 0) count += j - i
        }
    }
    
    return count
};
```