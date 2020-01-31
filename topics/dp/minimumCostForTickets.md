### [983\. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)

Difficulty: **Medium**


In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array `days`.  Each day is an integer from `1` to `365`.

Train tickets are sold in 3 different ways:

*   a 1-day pass is sold for `costs[0]` dollars;
*   a 7-day pass is sold for `costs[1]` dollars;
*   a 30-day pass is sold for `costs[2]` dollars.

The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of `days`.

**Example 1:**

```
Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: 
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.
```


**Example 2:**

```
Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation: 
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.
```


**Note:**

1.  `1 <= days.length <= 365`
2.  `1 <= days[i] <= 365`
3.  `days` is in strictly increasing order.
4.  `costs.length == 3`
5.  `1 <= costs[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp
    
    const ticketDays = [1, 7, 30]
    for (let i = 0; i < days.length; i += 1) {
        const group = []
        if (i === 0) {
            for (let j = 0; j < costs.length; j += 1) {
                group.push([costs[j], ticketDays[j]])
            }
        } else {
            const diff = days[i] - days[i-1]
            let minNoCover = Infinity
            for (let j = 0; j < dp.length; j += 1) {
                if (dp[j][1] > diff) {
                    group.push(
                        [dp[j][0], dp[j][1] - diff]
                    )
                } else {
                    minNoCover = Math.min(minNoCover, dp[j][0])
                }
            }
            if (minNoCover < Infinity) {
                for (let m = 0; m < costs.length; m += 1) {
                    group.push(
                        [minNoCover + costs[m], ticketDays[m]]
                    )
                }
            }
        }
            
        dp = group
    }
    
    return dp.reduce((m, v) => Math.min(m, v[0]), Infinity)
};
```

```javascript
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const travel = {}
    for (const d of days) {
        travel[d] = true
    }
    const dp = Array(366).fill(0)
    
    for (let i = 1; i < dp.length; i += 1) {
        if (!travel[i]) {
            dp[i] = dp[i - 1]
            continue
        }
        dp[i] = Math.min(
            dp[i - 1] + costs[0],
            dp[Math.max(0, i - 7)] + costs[1],
            dp[Math.max(0, i - 30)] + costs[2]
        )
    }
    
    return dp[dp.length - 1]
};
```