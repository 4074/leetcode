# [2276\. Count Integers in Intervals](https://leetcode.com/problems/count-integers-in-intervals/)

## Description

Difficulty: **Hard**  

Related Topics:


Given an **empty** set of intervals, implement a data structure that can:

*   **Add** an interval to the set of intervals.
*   **Count** the number of integers that are present in **at least one** interval.

Implement the `CountIntervals` class:

*   `CountIntervals()` Initializes the object with an empty set of intervals.
*   `void add(int left, int right)` Adds the interval `[left, right]` to the set of intervals.
*   `int count()` Returns the number of integers that are present in **at least one** interval.

**Note** that an interval `[left, right]` denotes all the integers `x` where `left <= x <= right`.

**Example 1:**

```
Input
["CountIntervals", "add", "add", "count", "add", "count"]
[[], [2, 3], [7, 10], [], [5, 8], []]
Output
[null, null, null, 6, null, 8]

Explanation
CountIntervals countIntervals = new CountIntervals(); // initialize the object with an empty set of intervals. 
countIntervals.add(2, 3);  // add [2, 3] to the set of intervals.
countIntervals.add(7, 10); // add [7, 10] to the set of intervals.
countIntervals.count();    // return 6
                           // the integers 2 and 3 are present in the interval [2, 3].
                           // the integers 7, 8, 9, and 10 are present in the interval [7, 10].
countIntervals.add(5, 8);  // add [5, 8] to the set of intervals.
countIntervals.count();    // return 8
                           // the integers 2 and 3 are present in the interval [2, 3].
                           // the integers 5 and 6 are present in the interval [5, 8].
                           // the integers 7 and 8 are present in the intervals [5, 8] and [7, 10].
                           // the integers 9 and 10 are present in the interval [7, 10].
```

**Constraints:**

*   1 <= left <= right <= 10<sup>9</sup>
*   At most 10<sup>5</sup> calls **in total** will be made to `add` and `count`.
*   At least **one** call will be made to `count`.


## Solution

Language: **JavaScript**

```javascript

var CountIntervals = function() {
  this.intervals = []
  this.cache = -1
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
  this.cache = -1
  if (!this.intervals.length) {
    this.intervals.push([left, right])
  } else if (this.intervals[this.intervals.length - 1][1] < left) {
    this.intervals.push([left, right])
  } else if (this.intervals[0][0] > right) {
    this.intervals.unshift([left, right])
  } else {
    let l = 0, r = this.intervals.length - 1
    while (l < r) {
      const m = Math.floor((l + r) / 2)
      if (this.intervals[m][1] >= left) {
        r = m
      } else {
        l = m + 1
      }
    }
    const lr = l

    l = 0, r = this.intervals.length - 1
    while (l < r) {
      const m = Math.ceil((l + r) / 2)
      if (this.intervals[m][0] <= right) {
        l = m
      } else {
        r = m - 1
      }
    }

    const rl = l
    this.intervals.splice(lr, rl - lr + 1, [Math.min(this.intervals[lr][0], left), Math.max(this.intervals[rl][1], right)])
  }
};


/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
  if (this.cache > -1) return this.cache
  let count = 0
  for (const [l, r] of this.intervals) {
    count += r - l + 1
  }
  this.cache = count
  return count
};

/** 
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */
```

https://leetcode.cn/problems/count-integers-in-intervals/solution/by-tsreaper-fc7p/
```javascript

var CountIntervals = function() {
  this.intervals = []
  this.ans = 0
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
  let l = 0, r = this.intervals.length
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    if (this.intervals[m][1] >= left) {
      r = m
    } else {
      l = m + 1
    }
  }
  
  let index = l
  while (index < this.intervals.length && this.intervals[index][0] <= right) {
    left = Math.min(left, this.intervals[index][0])
    right = Math.max(right, this.intervals[index][1])
    this.ans -= this.intervals[index][1] - this.intervals[index][0] + 1
    index += 1
  }
  this.ans += right - left + 1
  this.intervals.splice(l, index - l, [left, right])
};


/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
  return this.ans
};

/** 
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */
```