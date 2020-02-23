### [1360\. Number of Days Between Two Dates](https://leetcode.com/problems/number-of-days-between-two-dates/)

Difficulty: **Easy**


Write a program to count the number of days between two dates.

The two dates are given as strings, their format is `YYYY-MM-DD` as shown in the examples.

**Example 1:**

```
Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
```

**Example 2:**

```
Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
```

**Constraints:**

*   The given dates are valid dates between the years `1971` and `2100`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    return Math.abs(new Date(date2).getTime() - new Date(date1).getTime()) / (3600000 * 24)
};
```