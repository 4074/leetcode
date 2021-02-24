### [204\. Count Primes](https://leetcode.com/problems/count-primes/)

Difficulty: **Easy**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [Math](https://leetcode.com/tag/math/)


Count the number of prime numbers less than a non-negative number, `n`.

**Example 1:**

```
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

**Example 2:**

```
Input: n = 0
Output: 0
```

**Example 3:**

```
Input: n = 1
Output: 0
```

**Constraints:**

*   `0 <= n <= 5 * 10<sup>6</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime = Array(n).fill(1)
    isPrime[0] = 0
    isPrime[1] = 0
    
    for (let i = 0; i <= Math.sqrt(n); i += 1) {
        if (!isPrime[i]) continue
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = 0
        }
    }
    
    return isPrime.reduce((count, v) => count + v, 0)
};
```