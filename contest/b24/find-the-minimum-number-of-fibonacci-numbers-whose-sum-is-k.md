### [1414\. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/)

Difficulty: **Medium**


Given the number `k`, _return the minimum number of Fibonacci numbers whose sum is equal to_ `k`, whether a Fibonacci number could be used multiple times.

The Fibonacci numbers are defined as:

*   F<sub style="display: inline;">1</sub> = 1
*   F<sub style="display: inline;">2</sub> = 1
*   F<sub style="display: inline;">n</sub> = F<sub style="display: inline;">n-1</sub> + F<sub style="display: inline;">n-2</sub> , for n > 2.

It is guaranteed that for the given constraints we can always find such fibonacci numbers that sum `k`.

**Example 1:**

```
Input: k = 7
Output: 2 
Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
For k = 7 we can use 2 + 5 = 7.
```

**Example 2:**

```
Input: k = 10
Output: 2 
Explanation: For k = 10 we can use 2 + 8 = 10.
```

**Example 3:**

```
Input: k = 19
Output: 3 
Explanation: For k = 19 we can use 1 + 5 + 13 = 19.
```

**Constraints:**

*   `1 <= k <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const nums = [1, 1]
    while (nums[nums.length - 1] < k) {
        nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    }
    
    let count = 0
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        if (nums[i] <= k) {
            k -= nums[i]
            count += 1
        }
        if (k === 0) break
    }
    return count
};
```