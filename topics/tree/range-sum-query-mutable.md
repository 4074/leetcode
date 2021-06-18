### [307\. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)

Difficulty: **Medium**  

Related Topics: [Binary Indexed Tree](https://leetcode.com/tag/binary-indexed-tree/), [Segment Tree](https://leetcode.com/tag/segment-tree/)


Given an integer array `nums`, handle multiple queries of the following types:

1.  **Update** the value of an element in `nums`.
2.  Calculate the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** where `left <= right`.

Implement the `NumArray` class:

*   `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
*   `void update(int index, int val)` **Updates** the value of `nums[index]` to be `val`.
*   `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).

**Example 1:**

```
Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
```

**Constraints:**

*   `1 <= nums.length <= 3 * 10<sup>4</sup>`
*   `-100 <= nums[i] <= 100`
*   `0 <= index < nums.length`
*   `-100 <= val <= 100`
*   `0 <= left <= right < nums.length`
*   At most `3 * 10<sup>4</sup>` calls will be made to `update` and `sumRange`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.tree = new SegmentTree(nums)
};
​
/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  this.tree.update(index, val)
};
​
/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.tree.sum(left, right)
};
​
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
​
class SegmentTree {
  constructor(arr) {
    this.arr = arr
    this.root = this.createNode(0, arr.length - 1)
  }
 
  createNode(start, end) {
    const node = new SegmentTreeNode(start, end)
    if (start < end) {
      const mid = Math.floor((start + end) / 2)
      node.left = this.createNode(start, mid)
      node.right = this.createNode(mid + 1, end)
      node.val = node.left.val + node.right.val
    } else {
      node.val = this.arr[start]
    }
    return node
  }
​
  update(index, val, node = this.root) {
    if (index < node.start || index > node.end) return
    if (node.start === node.end) {
      node.val = val
    } else {
      this.update(index, val, node.left)
      this.update(index, val, node.right)
    if (start > node.end || end < node.start) return 0
```