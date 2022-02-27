### [2188\. Minimum Time to Finish the Race](https://leetcode.com/problems/minimum-time-to-finish-the-race/)

Difficulty: **Hard**


You are given a **0-indexed** 2D integer array `tires` where `tires[i] = [f<sub style="display: inline;">i</sub>, r<sub style="display: inline;">i</sub>]` indicates that the `i<sup>th</sup>` tire can finish its `x<sup>th</sup>` successive lap in `f<sub style="display: inline;">i</sub> * r<sub style="display: inline;">i</sub><sup>(x-1)</sup>` seconds.

*   For example, if `f<sub style="display: inline;">i</sub> = 3` and `r<sub style="display: inline;">i</sub> = 2`, then the tire would finish its `1<sup>st</sup>` lap in `3` seconds, its `2<sup>nd</sup>` lap in `3 * 2 = 6` seconds, its `3<sup>rd</sup>` lap in `3 * 2<sup>2</sup> = 12` seconds, etc.

You are also given an integer `changeTime` and an integer `numLaps`.

The race consists of `numLaps` laps and you may start the race with **any** tire. You have an **unlimited** supply of each tire and after every lap, you may **change** to any given tire (including the current tire type) if you wait `changeTime` seconds.

Return _the **minimum** time to finish the race._

**Example 1:**

```
Input: tires = [[2,3],[3,4]], changeTime = 5, numLaps = 4
Output: 21
Explanation: 
Lap 1: Start with tire 0 and finish the lap in 2 seconds.
Lap 2: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.
Lap 3: Change tires to a new tire 0 for 5 seconds and then finish the lap in another 2 seconds.
Lap 4: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.
Total time = 2 + 6 + 5 + 2 + 6 = 21 seconds.
The minimum time to complete the race is 21 seconds.
```

**Example 2:**

```
Input: tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5
Output: 25
Explanation: 
Lap 1: Start with tire 1 and finish the lap in 2 seconds.
Lap 2: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.
Lap 3: Change tires to a new tire 1 for 6 seconds and then finish the lap in another 2 seconds.
Lap 4: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.
Lap 5: Change tires to tire 0 for 6 seconds then finish the lap in another 1 second.
Total time = 2 + 4 + 6 + 2 + 4 + 6 + 1 = 25 seconds.
The minimum time to complete the race is 25 seconds. 
```

**Constraints:**

*   `1 <= tires.length <= 10<sup>5</sup>`
*   `tires[i].length == 2`
*   `1 <= f<sub style="display: inline;">i</sub>, changeTime <= 10<sup>5</sup>`
*   `2 <= r<sub style="display: inline;">i</sub> <= 10<sup>5</sup>`
*   `1 <= numLaps <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
var minimumFinishTime = function(tires, changeTime, numLaps) {
  // minOneTire[i] is min seconds run i laps with one tire
  const minOneTire = Array(20).fill(Infinity)
  for (const [f, r] of tires) {
    let sum = 0, seconds = f
    for (let i = 1; i < minOneTire.length; i += 1) {
      sum += seconds
      // Faster than f * r ** (i - 1)
      seconds *= r
      minOneTire[i] = Math.min(minOneTire[i], sum)
    }
  }
  
  // dp[i] is min seconds run i laps
  const dp = Array(numLaps + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= numLaps; i += 1) {
    for (let j = 1; j < minOneTire.length; j += 1) {
      if (j > i) break
      dp[i] = Math.min(
        dp[i],
        // Add changeTime if tire changed
        dp[i - j] + minOneTire[j] + (j === i ? 0 : changeTime)
      )
    }
  }
  
  return dp[numLaps]
};
```