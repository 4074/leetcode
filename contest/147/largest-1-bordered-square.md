### [1139\. Largest 1-Bordered Square](https://leetcode.com/problems/largest-1-bordered-square/)

Difficulty: **Medium**


Given a 2D `grid` of `0`s and `1`s, return the number of elements in the largest **square** subgrid that has all `1`s on its **border**, or `0` if such a subgrid doesn't exist in the `grid`.

**Example 1:**

```
Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 9
```

**Example 2:**

```
Input: grid = [[1,1,0,0]]
Output: 1
```

**Constraints:**

*   `1 <= grid.length <= 100`
*   `1 <= grid[0].length <= 100`
*   `grid[i][j]` is `0` or `1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const ones = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill())
    
    for (let i = 0; i < grid.length; i += 1) {
        let leftOneCount = 0
        for (let j = 0; j < grid[0].length; j += 1){
            if (grid[i][j] === 1) {
                leftOneCount += 1
            } else {
                leftOneCount = 0
            }
            ones[i][j] = {left: leftOneCount}
        }
    }
    
    for (let j = 0; j < grid[0].length; j += 1){
        let upOneCount = 0
        for (let i = 0; i < grid.length; i += 1) {
            if (grid[i][j] === 1) {
                upOneCount += 1
            } else {
                upOneCount = 0
            }
            ones[i][j].up = upOneCount
        }
    }
    
    let ans = 0
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1){
            let distance = Math.min(ones[i][j].left, ones[i][j].up)
            while (distance > 0) {
                if (
                    ones[i - distance + 1][j].left >= distance
                    && ones[i][j - distance + 1].up >= distance
                ) {
                    ans = Math.max(ans, distance)
                    break
                }
                distance -= 1
            }
        }
    }
    
    return ans * ans
};
```