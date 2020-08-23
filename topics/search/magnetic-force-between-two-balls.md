### [1552\. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/)


In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has `n` empty baskets, the `i<sup>th</sup>` basket is at `position[i]`, Morty has `m` balls and needs to distribute the balls into the baskets such that the **minimum magnetic force** between any two balls is **maximum**.

Rick stated that magnetic force between two different balls at positions `x` and `y` is `|x - y|`.

Given the integer array `position` and the integer `m`. Return _the required force_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/08/11/q3v1.jpg)

```
Input: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3\. We cannot achieve a larger minimum magnetic force than 3.
```

**Example 2:**

```
Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
Explanation: We can use baskets 1 and 1000000000.
```

**Constraints:**

*   `n == position.length`
*   `2 <= n <= 10^5`
*   `1 <= position[i] <= 10^9`
*   All integers in `position` are **distinct**.
*   `2 <= m <= position.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b)
    const n = position.length
    let left = 1, right = 10 ** 9 + 1
    
    function isAvailable(d) {
        let count = 0, prev = -Infinity
        for (const current of position) {
            if (current - prev >= d) {
                count += 1
                prev = current
            }
            if (count >= m) return true
        }
        return false
    }
    
    while (left < right) {
        const middle = Math.ceil((right + left) / 2)
        if (isAvailable(middle)) {
            left = middle
        } else {
            right = middle - 1
        }
    }
    
    return left
};
```