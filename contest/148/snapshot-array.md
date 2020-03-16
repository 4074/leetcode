### [1146\. Snapshot Array](https://leetcode.com/problems/snapshot-array/)

Difficulty: **Medium**


Implement a SnapshotArray that supports the following interface:

*   `SnapshotArray(int length)` initializes an array-like data structure with the given length.  **Initially, each element equals 0**.
*   `void set(index, val)` sets the element at the given `index` to be equal to `val`.
*   `int snap()` takes a snapshot of the array and returns the `snap_id`: the total number of times we called `snap()` minus `1`.
*   `int get(index, snap_id)` returns the value at the given `index`, at the time we took the snapshot with the given `snap_id`

**Example 1:**

```
Input: ["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation: 
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
```

**Constraints:**

*   `1 <= length <= 50000`
*   At most `50000` calls will be made to `set`, `snap`, and `get`.
*   `0 <= index < length`
*   `0 <= snap_id < `(the total number of times we call `snap()`)
*   `0 <= val <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snap_id = 0
    this.data = Array(length).fill().map(() => {
        const map = new Map()
        map.set(this.snap_id, 0)
        return map
    })
};
​
/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.data[index].set(this.snap_id, val)
};
​
/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snap_id += 1
    return this.snap_id - 1
};
​
/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    for (let i = snap_id; i >= 0; i -= 1) {
        if (this.data[index].has(i)) return this.data[index].get(i)
    }
};
​
/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
/**
```