# [2244\. Minimum Rounds to Complete All Tasks](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Greedy](https://leetcode.com/tag/greedy/), [Counting](https://leetcode.com/tag/counting/)


You are given a **0-indexed** integer array `tasks`, where `tasks[i]` represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the **same difficulty level**.

Return _the **minimum** rounds required to complete all the tasks, or_ `-1` _if it is not possible to complete all the tasks._

**Example 1:**

```
Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2\. 
- In the second round, you complete 2 tasks of difficulty level 3\. 
- In the third round, you complete 3 tasks of difficulty level 4\. 
- In the fourth round, you complete 2 tasks of difficulty level 4\.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.
```

**Example 2:**

```
Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.
```

**Constraints:**

*   1 <= tasks.length <= 10<sup>5</sup>
*   1 <= tasks[i] <= 10<sup>9</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const counts = {}
  for (const task of tasks) {
    if (!counts[task]) counts[task] = 0
    counts[task] += 1
  }
  
  let ans = 0
  for (const count of Object.values(counts)) {
    if (count === 1) return -1
    const remainder = count % 3
    if (remainder === 0) {
      ans += count / 3
    } else if (remainder === 1) {
      ans += 2 + (count - 4) / 3
    } else {
      ans += 1 + (count - 2) / 3
    }
  }
  return ans
};
```