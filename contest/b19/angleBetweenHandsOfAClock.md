### [1344\. Angle Between Hands of a Clock](https://leetcode.com/problems/angle-between-hands-of-a-clock/)

Difficulty: **Medium**


Given two numbers, `hour` and `minutes`. Return the smaller angle (in sexagesimal units) formed between the `hour` and the `minute` hand.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/12/26/sample_1_1673.png)

```
Input: hour = 12, minutes = 30
Output: 165
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/12/26/sample_2_1673.png)

```
Input: hour = 3, minutes = 30
Output: 75
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2019/12/26/sample_3_1673.png)**

```
Input: hour = 3, minutes = 15
Output: 7.5
```

**Example 4:**

```
Input: hour = 4, minutes = 50
Output: 155
```

**Example 5:**

```
Input: hour = 12, minutes = 0
Output: 0
```

**Constraints:**

*   `1 <= hour <= 12`
*   `0 <= minutes <= 59`
*   Answers within `10^-5` of the actual value will be accepted as correct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const diff = Math.abs((hour + minutes / 60) * 30 - minutes * 6)
    return diff > 180 ? 360 - diff : diff
};
```