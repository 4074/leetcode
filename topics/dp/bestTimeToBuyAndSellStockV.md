### [309\. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

Difficulty: **Medium**


Say you have an array for which the _i_<sup>th</sup> element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

*   You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*   After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

**Example:**

```
Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let T_ik0 = 0, T_ik0_pre = 0, T_ik1 = -Infinity
    
    for (const price of prices) {
        const T_ik0_old = T_ik0
        T_ik0 = Math.max(T_ik0, T_ik1 + price)
        T_ik1 = Math.max(T_ik1, T_ik0_pre - price)
        T_ik0_pre = T_ik0_old
    }
    
    return T_ik0
};
```