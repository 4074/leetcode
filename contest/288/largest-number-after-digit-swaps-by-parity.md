# [2231\. Largest Number After Digit Swaps by Parity](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/)

## Description

Difficulty: **Easy**  

Related Topics: [Sorting](https://leetcode.com/tag/sorting/), [Heap (Priority Queue)](https://leetcode.com/tag/heap-priority-queue/)


You are given a positive integer `num`. You may swap any two digits of `num` that have the same **parity** (i.e. both odd digits or both even digits).

Return _the **largest** possible value of_ `num` _after **any** number of swaps._

**Example 1:**

```
Input: num = 1234
Output: 3412
Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
```

**Example 2:**

```
Input: num = 65875
Output: 87655
Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
Swap the first digit 5 with the digit 7, this results in the number 87655.
Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
```

**Constraints:**

*   1 <= num <= 10<sup>9</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
  const evens = []
  const odds = []
  const types = []
  
  while (num) {
    types.push(num % 2)
    
    if (num % 2) {
      odds.push(num % 10)
    } else {
      evens.push(num % 10)
    }
    num = Math.floor(num / 10)
  }
  
  evens.sort((a, b) => a - b)
  odds.sort((a, b) => a - b)
  
  let ans = ''
  while (types.length) {
    const t = types.pop()
    ans += t ? odds.pop() : evens.pop()
  }
  
  return parseInt(ans, 10)
};
```

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
  const digits = num.toString().split('').map(s => parseInt(s, 10))
  
  for (let i = 0; i < digits.length; i += 1) {
    for (let j = i + 1; j < digits.length; j += 1) {
      if (digits[i] % 2 === digits[j] % 2 && digits[i] < digits[j]) {
        const d = digits[i]
        digits[i] = digits[j]
        digits[j] = d
      }
    }
  }
  
  return digits.join('')
};
```