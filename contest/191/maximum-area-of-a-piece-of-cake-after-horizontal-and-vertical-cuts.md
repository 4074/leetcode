### [1465\. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)

Difficulty: **Medium**


Given a rectangular cake with height `h` and width `w`, and two arrays of integers `horizontalCuts` and `verticalCuts` where `horizontalCuts[i]` is the distance from the top of the rectangular cake to the `ith` horizontal cut and similarly, `verticalCuts[j]` is the distance from the left of the rectangular cake to the `jth` vertical cut.

_Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays `horizontalCuts` and `verticalCuts`. _Since the answer can be a huge number, return this modulo 10^9 + 7.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/05/14/leetcode_max_area_2.png)

```
Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
Output: 4 
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/05/14/leetcode_max_area_3.png)**

```
Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
Output: 6
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.
```

**Example 3:**

```
Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
Output: 9
```

**Constraints:**

*   `2 <= h, w <= 10^9`
*   `1 <= horizontalCuts.length < min(h, 10^5)`
*   `1 <= verticalCuts.length < min(w, 10^5)`
*   `1 <= horizontalCuts[i] < h`
*   `1 <= verticalCuts[i] < w`
*   It is guaranteed that all elements in `horizontalCuts` are distinct.
*   It is guaranteed that all elements in `verticalCuts` are distinct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b)
    verticalCuts.sort((a, b) => a - b)
    
    horizontalCuts.unshift(0)
    horizontalCuts.push(h)
​
    verticalCuts.unshift(0)
    verticalCuts.push(w)
    
    const mod = 10 ** 9 + 7
    let maxWidth = 0, maxHeight = 0
    
    for (let i = 1; i < horizontalCuts.length; i += 1) {
        maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1])
    }
    
    for (let i = 1; i < verticalCuts.length; i += 1) {
        maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1])
    }
    
    return ((maxWidth % mod) * (maxHeight % mod)) % mod
};
```