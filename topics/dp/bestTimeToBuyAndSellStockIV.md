### [188\. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

Difficulty: **Hard**


Say you have an array for which the _i<span style="font-size: 10.8333px; display: inline;">-</span>_<span style="font-size: 10.8333px; display: inline;">th</span> element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete at most **k** transactions.

**Note:**  
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

**Example 1:**

```
Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

**Example 2:**

```
Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k === 0) return 0
    if (k >= prices.length / 2) {
        let T_ik0 = 0, T_ik1 = -Infinity
        for (const price of prices) {
            T_ik0 = Math.max(T_ik0, T_ik1 + price)
            T_ik1 = Math.max(T_ik1, T_ik0 - price)
        }
        return T_ik0
    }
    
    let T_ik0 = Array(k).fill(0)
    let T_ik1 = Array(k).fill(-Infinity)
    
    for (const price of prices) {
        for (let i = k - 1; i >= 0; i -= 1) {
            T_ik0[i] = Math.max(T_ik0[i], T_ik1[i] + price)
            T_ik1[i] = Math.max(T_ik1[i], (i === 0 ? 0 : T_ik0[i - 1]) - price)
        }
    }
    
    return T_ik0[k - 1]
};
```