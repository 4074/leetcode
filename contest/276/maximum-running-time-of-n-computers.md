### [2141\. Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)

Difficulty: **Hard**


You have `n` computers. You are given the integer `n` and a **0-indexed** integer array `batteries` where the `i<sup>th</sup>` battery can **run** a computer for `batteries[i]` minutes. You are interested in running **all** `n` computers **simultaneously** using the given batteries.

Initially, you can insert **at most one battery** into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery **any number of times**. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.

Note that the batteries cannot be recharged.

Return _the **maximum** number of minutes you can run all the_ `n` _computers simultaneously._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/01/06/example1-fit.png)

```
Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation: 
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4.

```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/01/06/example2.png)

```
Input: n = 2, batteries = [1,1,1,1]
Output: 2
Explanation: 
Initially, insert battery 0 into the first computer and battery 2 into the second computer. 
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer. 
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2.
```

**Constraints:**

*   `1 <= n <= batteries.length <= 10<sup>5</sup>`
*   `1 <= batteries[i] <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  const bs = batteries.sort((a, b) => b - a)
  
  const canRun = (t) => {
    let l = 0, r = bs.length - 1, rv = bs[r]
    let count = 0
    
    while (count < n) {
      let b = bs[l]
      
      while (l < r && b < t) {
        b += rv
        if (b > t) {
          rv = b - t
        } else {
          r -= 1
          rv = bs[r]
        }
      }
      
      if (b < t) break
      
      l += 1
      count += 1
    }
    
    return count === n
  }
  
  let l = 0, r = 10**14
  while (l < r) {
    const t = Math.ceil((l + r) / 2)
    if (canRun(t)) {
      l = t
    } else {
      r = t - 1
    }
  }
  
  return l
};
```