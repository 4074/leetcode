### [746\. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

Difficulty: **Easy**


On a staircase, the `i`-th step has some non-negative cost `cost[i]` assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

**Example 1:**  

```
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
```

**Example 2:**  

```
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
```

**Note:**  

1.  `cost` will have a length in the range `[2, 1000]`.
2.  Every `cost[i]` will be an integer in the range `[0, 999]`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp[i] is min cost before leaving i-th stair
    const dp = [cost[0], cost[1]]
    
    for (let i = 2; i < cost.length; i += 1) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    
    return Math.min(dp[dp.length - 1], dp[dp.length - 2])
};
```

```javascript
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp[i] is min cost to climb to i-th stair
    let dp1 = 0
    let dp2 = 0
    
    for (let i = 2; i <= cost.length; i += 1) {
        const dp = Math.min(
            dp1 + cost[i - 1],
            dp2 + cost[i - 2]
        )
        dp2 = dp1
        dp1 = dp
    }
    
    return dp1
};
```