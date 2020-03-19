### [1124\. Longest Well-Performing Interval](https://leetcode.com/problems/longest-well-performing-interval/)

Difficulty: **Medium**


We are given `hours`, a list of the number of hours worked per day for a given employee.

A day is considered to be a _tiring day_ if and only if the number of hours worked is (strictly) greater than `8`.

A _well-performing interval_ is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.

Return the length of the longest well-performing interval.

**Example 1:**

```
Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].
```

**Constraints:**

*   `1 <= hours.length <= 10000`
*   `0 <= hours[i] <= 16`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    var max = 0, score = 0, seen = {}
    for (var i=0; i<hours.length; i++) {
        score += hours[i] > 8 ? 1 : -1
        if (score > 0) {
            max = i + 1
        } else {
            if (typeof seen[score] === 'undefined') seen[score] = i;
            if (typeof seen[score-1] !== 'undefined') {
                max = Math.max(max, i - seen[score-1])
            }
        }
    }
    
    return max
};
```