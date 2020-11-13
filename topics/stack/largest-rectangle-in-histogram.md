### [84\. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Stack](https://leetcode.com/tag/stack/)


Given _n_ non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![](https://assets.leetcode.com/uploads/2018/10/12/histogram.png)  
<small style="display: inline;">Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.</small>

![](https://assets.leetcode.com/uploads/2018/10/12/histogram_area.png)  
<small style="display: inline;">The largest rectangle is shown in the shaded area, which has area = `10` unit.</small>

**Example:**

```
Input: [2,1,5,6,2,3]
Output: 10
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length
    let ans = 0
    const stack = []
    
    for (let i = 0; i <= n; i += 1) {
        if (i === 0) {
            stack.push(i)
            continue
        }
        
        const currentHeight = i === n ? 0 : heights[i]
        while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
            const j = stack.pop()
            const k = stack.length ? stack[stack.length - 1] : -1
            const area = (i - k - 1) * heights[j]
            if (area > ans) ans = area
            
        }
        stack.push(i)
    }
    
    return ans
};
```