### [11\. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/)


Given `n` non-negative integers `a<sub style="display: inline;">1</sub>, a<sub style="display: inline;">2</sub>, ..., a<sub style="display: inline;">n</sub>`, where each represents a point at coordinate `(i, a<sub style="display: inline;">i</sub>)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, a<sub style="display: inline;">i</sub>)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

**Notice** that you may not slant the container.

**Example 1:**

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Example 3:**

```
Input: height = [4,3,2,1,4]
Output: 16
```

**Example 4:**

```
Input: height = [1,2,1]
Output: 2
```

**Constraints:**

*   `n = height.length`
*   `2 <= n <= 3 * 10<sup>4</sup>`
*   `0 <= height[i] <= 3 * 10<sup>4</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let ans = 0
    while (left < right) {
        const water = Math.min(height[left], height[right]) * (right - left)
        if (water > ans) ans = water
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return ans
};
```