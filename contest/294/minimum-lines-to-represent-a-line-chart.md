# [2280\. Minimum Lines to Represent a Line Chart](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/)

## Description

Difficulty: **Medium**  

Related Topics:


You are given a 2D integer array `stockPrices` where stockPrices[i] = [day<sub>i</sub>, price<sub>i</sub>] indicates the price of the stock on day day<sub>i</sub> is price<sub>i</sub>. A **line chart** is created from the array by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price and connecting adjacent points. One such example is shown below:

![](https://assets.leetcode.com/uploads/2022/03/30/1920px-pushkin_population_historysvg.png)

Return _the **minimum number of lines** needed to represent the line chart_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/30/ex0.png)

```
Input: stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
Output: 3
Explanation:
The diagram above represents the input, with the X-axis representing the day and Y-axis representing the price.
The following 3 lines can be drawn to represent the line chart:
- Line 1 (in red) from (1,7) to (4,4) passing through (1,7), (2,6), (3,5), and (4,4).
- Line 2 (in blue) from (4,4) to (5,4).
- Line 3 (in green) from (5,4) to (8,1) passing through (5,4), (6,3), (7,2), and (8,1).
It can be shown that it is not possible to represent the line chart using less than 3 lines.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/30/ex1.png)

```
Input: stockPrices = [[3,4],[1,2],[7,8],[2,3]]
Output: 1
Explanation:
As shown in the diagram above, the line chart can be represented with a single line.
```

**Constraints:**

*   1 <= stockPrices.length <= 10<sup>5</sup>
*   `stockPrices[i].length == 2`
*   1 <= day<sub>i</sub>, price<sub>i</sub> <= 10<sup>9</sup>
*   All day<sub>i</sub> are **distinct**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  if (stockPrices.length <= 1) return 0
  stockPrices.sort((a, b) => a[0] - b[0])
  let ans = 1
  for (let i = 2; i < stockPrices.length; i += 1) {
    const [x3, y3] = stockPrices[i]
    const [x2, y2] = stockPrices[i - 1]
    const [x1, y1] = stockPrices[i - 2]
    if (
      BigInt(y3 - y2) * BigInt(x2 - x1) !== BigInt(y2 - y1) * BigInt(x3 - x2) 
    ) {
      ans += 1
    }
  }
  return ans
};
```