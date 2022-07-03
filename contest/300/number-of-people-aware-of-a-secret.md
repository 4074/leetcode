# [2327\. Number of People Aware of a Secret](https://leetcode.com/problems/number-of-people-aware-of-a-secret/)

## Description

Difficulty: **Medium**  

Related Topics:


On day `1`, one person discovers a secret.

You are given an integer `delay`, which means that each person will **share** the secret with a new person **every day**, starting from `delay` days after discovering the secret. You are also given an integer `forget`, which means that each person will **forget** the secret `forget` days after discovering it. A person **cannot** share the secret on the same day they forgot it, or on any day afterwards.

Given an integer `n`, return _the number of people who know the secret at the end of day_ `n`. Since the answer may be very large, return it **modulo** 10<sup>9</sup> + 7.

**Example 1:**

```
Input: n = 6, delay = 2, forget = 4
Output: 5
Explanation:
Day 1: Suppose the first person is named A. (1 person)
Day 2: A is the only person who knows the secret. (1 person)
Day 3: A shares the secret with a new person, B. (2 people)
Day 4: A shares the secret with a new person, C. (3 people)
Day 5: A forgets the secret, and B shares the secret with a new person, D. (3 people)
Day 6: B shares the secret with E, and C shares the secret with F. (5 people)
```

**Example 2:**

```
Input: n = 4, delay = 1, forget = 3
Output: 6
Explanation:
Day 1: The first person is named A. (1 person)
Day 2: A shares the secret with B. (2 people)
Day 3: A and B share the secret with 2 new people, C and D. (4 people)
Day 4: A forgets the secret. B, C, and D share the secret with 3 new people. (6 people)
```

**Constraints:**

*   `2 <= n <= 1000`
*   `1 <= delay < forget <= n`


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  const mod = 10 ** 9 + 7
  const dp = Array(n).fill()
  dp[0] = 1
  
  for (let i = 1; i < n; i += 1) {
    let s = 0
    for (let j = i - delay; j > i - forget; j -= 1) {
      if (j < 0) break
      s = (s + dp[j]) % mod
    }
    dp[i] = s
  }
  let ans = 0
  for (let i = n - 1; i >= n - forget; i -= 1) {
    ans = (ans + dp[i]) % mod
  }
  
  return ans
};
```


```javascript
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  const mod = 1e9 + 7
  const sum = Array(n + 1).fill(0)

  sum[1] = 1
  for (let i = 2; i <= n; i += 1) {
    sum[i] = (sum[i - 1] + sum[Math.max(0, i - delay)] - sum[Math.max(0, i - forget)]) % mod
  }
  
  return (sum[n] - sum[Math.max(0, n - forget)] + mod * 2) % mod
};
```