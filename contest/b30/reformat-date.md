### [1507\. Reformat Date](https://leetcode.com/problems/reformat-date/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/)


Given a `date` string in the form `Day Month Year`, where:

*   `Day` is in the set `{"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}`.
*   `Month` is in the set `{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}`.
*   `Year` is in the range `[1900, 2100]`.

Convert the date string to the format `YYYY-MM-DD`, where:

*   `YYYY` denotes the 4 digit year.
*   `MM` denotes the 2 digit month.
*   `DD` denotes the 2 digit day.

**Example 1:**

```
Input: date = "20th Oct 2052"
Output: "2052-10-20"
```

**Example 2:**

```
Input: date = "6th Jun 1933"
Output: "1933-06-06"
```

**Example 3:**

```
Input: date = "26th May 1960"
Output: "1960-05-26"
```

**Constraints:**

*   The given dates are guaranteed to be valid, so no error handling is necessary.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const monthes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [day, month, year] = date.split(' ')
    
    let d = day.match(/\d+/)[0]
    if (d.length === 1) d = '0' + d
    
    let m = (monthes.indexOf(month) + 1).toString()
    if (m.length === 1) m = '0' + m
    
    return `${year}-${m}-${d}`
};
```