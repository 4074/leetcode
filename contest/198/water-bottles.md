### [1518\. Water Bottles](https://leetcode.com/problems/water-bottles/)

Difficulty: **Easy**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


Given `numBottles` full water bottles, you can exchange `numExchange` empty water bottles for one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Return the **maximum** number of water bottles you can drink.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/07/01/sample_1_1875.png)**

```
Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/07/01/sample_2_1875.png)

```
Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.
```

**Example 3:**

```
Input: numBottles = 5, numExchange = 5
Output: 6
```

**Example 4:**

```
Input: numBottles = 2, numExchange = 3
Output: 2
```

**Constraints:**

*   `1 <= numBottles <= 100`
*   `2 <= numExchange <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = 0
    let n = numBottles, m = 0
    while (n) {
        count += n
        const t = Math.floor((n + m) / numExchange)
        m += n - t * numExchange
        n = t
    }
    return count
};
```