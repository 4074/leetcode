### [123\. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

Difficulty: **Hard**


Say you have an array for which the _i_<sup>th</sup> element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete at most _two_ transactions.

**Note: **You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**

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
    
    function dp(start, end) {
        let min = prices[start]
        let max = 0
        for (let i = start; i < end; i += 1) {
            max = Math.max(max, prices[i] - min)
            min = Math.min(min, prices[i])
        }
        return max
    }
    
    let result = 0
    for (let i = 0; i < prices.length; i += 1) {
        result = Math.max(
            dp(0, i) + dp(i, prices.length),
            result
        )
    }
    
    return result
};
```

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/most-consistent-ways-of-dealing-with-the-series-of-stock-problems](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/most-consistent-ways-of-dealing-with-the-series-of-stock-problems)
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let T_i10 = 0, T_i11 = -Infinity
    let T_i20 = 0, T_i21 = -Infinity
    
    for (const price of prices) {
        T_i20 = Math.max(T_i20, T_i21 + price)
        T_i21 = Math.max(T_i21, T_i10 - price)
        T_i10 = Math.max(T_i10, T_i11 + price)
        T_i11 = Math.max(T_i11, -price)
    }
    
    return T_i20
};
```