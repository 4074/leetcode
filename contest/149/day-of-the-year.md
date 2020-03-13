### [1154\. Day of the Year](https://leetcode.com/problems/day-of-the-year/)

Difficulty: **Easy**


Given a string `date` representing a date formatted as `YYYY-MM-DD`, return the day number of the year.

**Example 1:**

```
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
```

**Example 2:**

```
Input: date = "2019-02-10"
Output: 41
```

**Example 3:**

```
Input: date = "2003-03-01"
Output: 60
```

**Example 4:**

```
Input: date = "2004-03-01"
Output: 61
```

**Constraints:**

*   `date.length == 10`
*   `date[4] == date[7] == '-'`, and all other `date[i]`'s are digits
*   `date` represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var arr = date.split('-')
    var year = parseInt(arr[0]), month = parseInt(arr[1]), days = parseInt(arr[2])
    for (var i=0; i<month - 1; i++) {
        if (i === 1 && year % 4 === 0 && year % 100 > 0) {
            days += 1
        }
        days += daysOfMonth[i]
    }
    return days
};
```