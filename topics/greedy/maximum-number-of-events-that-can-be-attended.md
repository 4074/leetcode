### [1353\. Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)

Difficulty: **Medium**


Given an array of `events` where `events[i] = [startDay<sub style="display: inline;">i</sub>, endDay<sub style="display: inline;">i</sub>]`. Every event `i` starts at `startDay<sub style="display: inline;">i</sub>`and ends at `endDay<sub style="display: inline;">i</sub>`.

You can attend an event `i` at any day `d` where `startTime<sub style="display: inline;">i</sub> <= d <= endTime<sub style="display: inline;">i</sub>`. Notice that you can only attend one event at any time `d`.

Return _the maximum number of events _you can attend.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/02/05/e1.png)

```
Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.
```

**Example 2:**

```
Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4
```

**Example 3:**

```
Input: events = [[1,4],[4,4],[2,2],[3,4],[1,1]]
Output: 4
```

**Example 4:**

```
Input: events = [[1,100000]]
Output: 1
```

**Example 5:**

```
Input: events = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
Output: 7
```

**Constraints:**

*   `1 <= events.length <= 10^5`
*   `events[i].length == 2`
*   `1 <= events[i][0] <= events[i][1] <= dxdszeQ!!!!   

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    events.sort((a, b) => a[1] - b[1])
    const days = new Set()
    for (let i = 0; i < events.length; i += 1) {
        for (let j = events[i][0]; j <= events[i][1]; j += 1) {
            if (!days.has(j)) {
                days.add(j)
                break
            }
        }
    }
    return days.size
};
```

Array
```javascript
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    events.sort((a, b) => a[1] - b[1])
    const days = Array(10 ** 5).fill(0)
    let count = 0
    for (let i = 0; i < events.length; i += 1) {
        for (let j = events[i][0]; j <= events[i][1]; j += 1) {
            if (!days[j]) {
                count += 1
                days[j] = 1
                break
            }
        }
    }
    return count
};
```