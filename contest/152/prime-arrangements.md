### [1175\. Prime Arrangements](https://leetcode.com/problems/prime-arrangements/)

Difficulty: **Easy**


Return the number of permutations of 1 to `n` so that prime numbers are at prime indices (1-indexed.)

_(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)_

Since the answer may be large, return the answer **modulo `10^9 + 7`**.

**Example 1:**

```
Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
```

**Example 2:**

```
Input: n = 100
Output: 682289015
```

**Constraints:**

*   `1 <= n <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const mod = 10 ** 9 + 7
    let notPrimeCount = 1
    for (let i = 2; i <= n; i += 1) {
        for (let j = 2; j < i; j += 1) {
            if (i % j === 0) {
                notPrimeCount += 1
                break
            }
        }
    }
    
    let ans = 1
    for (let i = 1; i <= n - notPrimeCount; i += 1) {
        ans = (ans * i) % mod 
    }
    for (let i = 1; i <= notPrimeCount; i += 1) {
        ans = (ans * i) % mod
    }
    
    return ans
};
```