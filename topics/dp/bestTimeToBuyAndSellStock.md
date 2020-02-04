### [121\. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

Difficulty: **Easy**


Say you have an array for which the _i_<sup>th</sup> element is the price of a given stock on day _i_.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```

**Example 2:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp[i] is max profit if sell on day i
    const dp = [0]
    let profit = 0
    
    for (let i = 1; i < prices.length; i += 1) {
        dp[i] = Math.max(dp[i - 1], 0) + prices[i] - prices[i - 1]
        profit = Math.max(profit, dp[i])
    }
    
    return profit
};
```

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp[i] is max profit if sell on at most day i
    const dp = [0]
    let min = prices[0]

    for (let i = 1; i < prices.length; i += 1) {
        dp[i] = Math.max(dp[i - 1], prices[i] - min)
        min = Math.min(min, prices[i])
    }
    
    return dp[dp.length - 1]
};
```

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let T_i10 = 0, T_i11 = -Infinity
    for (const price of prices) {
        T_i10 = Math.max(T_i10, T_i11 + price)
        T_i11 = Math.max(T_i11, -price)
    }
    return T_i10
};
```