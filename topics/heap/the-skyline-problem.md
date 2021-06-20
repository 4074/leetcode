### [218\. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)

Difficulty: **Hard**  

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Heap](https://leetcode.com/tag/heap/), [Binary Indexed Tree](https://leetcode.com/tag/binary-indexed-tree/), [Segment Tree](https://leetcode.com/tag/segment-tree/), [Line Sweep](https://leetcode.com/tag/line-sweep/)


A city's **skyline** is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return _the **skyline** formed by these buildings collectively_.

The geometric information of each building is given in the array `buildings` where `buildings[i] = [left<sub style="display: inline;">i</sub>, right<sub style="display: inline;">i</sub>, height<sub style="display: inline;">i</sub>]`:

*   `left<sub style="display: inline;">i</sub>` is the x coordinate of the left edge of the `i<sup>th</sup>` building.
*   `right<sub style="display: inline;">i</sub>` is the x coordinate of the right edge of the `i<sup>th</sup>` building.
*   `height<sub style="display: inline;">i</sub>` is the height of the `i<sup>th</sup>` building.

You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height `0`.

The **skyline** should be represented as a list of "key points" **sorted by their x-coordinate** in the form `[[x<sub style="display: inline;">1</sub>,y<sub style="display: inline;">1</sub>],[x<sub style="display: inline;">2</sub>,y<sub style="display: inline;">2</sub>],...]`. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate `0` and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.

**Note:** There must be no consecutive horizontal lines of equal height in the output skyline. For instance, `[...,[2 3],[4 5],[7 5],[11 5],[12 7],...]` is not acceptable; the three lines of height 5 should be merged into one in the final output as such: `[...,[2 3],[4 5],[12 7],...]`

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/12/01/merged.jpg)

```
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
```

**Example 2:**

```
Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
```

**Constraints:**

*   `1 <= buildings.length <= 10<sup>4</sup>`
*   `0 <= left<sub style="display: inline;">i</sub> < right<sub style="display: inline;">i</sub> <= 2<sup>31</sup> - 1`
*   `1 <= height<sub style="display: inline;">i</sub> <= 2<sup>31</sup> - 1`
*   `buildings` is sorted by `left<sub style="display: inline;">i</sub>` in non-decreasing order.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const events = []
  for (let i = 0; i < buildings.length; i += 1) {
    const [left, right, h] = buildings[i]
    events.push({
      id: i,
      x: left,
      h,
      type: 1
    })
    events.push({
      id: i,
      x: right,
      h,
      type: -1
    })
  }
  
  events.sort((a, b) => {
    if (a.x === b.x) {
      return a.h * a.type < b.h * b.type ? 1 : -1
    }
    return a.x - b.x
  })
  
  const heap = new Heap((a, b) => b.h - a.h)
  heap.push({id: -1, x: 0, h: 0})
  // console.log(events)
  const ans = []
  
  for (const event of events) {
    const {id, x, h, type} = event
    if (type === 1) {
      if (h > heap.peek().h) ans.push([x, h])
      heap.push({id, x, h})
    } else {
      heap.removeById(id)
      // console.log(id, heap.arr)
      if (h > heap.peek().h) {
        ans.push([x, heap.peek().h])
      }
    }
  }
  
  return ans
};

class Heap {
  arr = []
  size = 0

  left = index => index * 2 + 1
  right = index => index * 2 + 2
  parent = index => Math.floor((index - 1) / 2)
  swap = (i, j) => {
    const tmp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = tmp
    this.setId(this.arr[i], i)
    this.setId(this.arr[j], j)
  }
  indexMap = new Map()

  constructor(comparator, arr = []) {
    this.arr = arr 
    this.comparator = comparator
    this.size = this.arr.length

    for (let i = 0; i < this.arr.length; i += 1) {
      this.setId(this.arr[i], i)
    }
    
    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i -= 1) {
      this.heapify(i)
    }
  }

  heapify(index) {
    let largest = index
    const l = this.left(index)
    const r = this.right(index)

    if (l < this.size && this.comparator(this.arr[largest], this.arr[l]) > 0)
      largest = l
    if (r < this.size && this.comparator(this.arr[largest], this.arr[r]) > 0)
      largest = r

    if (index !== largest) {
      this.swap(index, largest)
      this.heapify(largest)
    }
  }

  push(item) {
    this.arr.push(item)
    this.setId(item, this.size)
    this.size += 1

    let c = this.size - 1
    let p = this.parent(c)
    while (p >= 0 && this.comparator(this.arr[p], this.arr[c]) > 0) {
      this.swap(c, p)
      c = p
      p = this.parent(p)
    }

    return this
  }

  pop() {
    if (this.size === 0) return
    this.swap(0, this.size - 1)
    this.size -= 1
    this.heapify(0)
    return this.arr.pop()
  }

  peek() {
    return this.arr[0]
  }

  sort() {
    while (this.size > 1) {
      this.swap(0, this.size - 1)
      this.size -= 1
      this.heapify(0)
    }
    this.size = this.arr.length
    return [...this.arr]
  }

  remove(index) {
    this.swap(index, this.size - 1)
    this.size -= 1
    this.heapify(index)
    return this.arr.pop()
  }

  setId(item, index) {
    if (typeof item === 'object' && item.id !== undefined) {
      this.indexMap.set(item.id, index)
    }
  }

  removeById(id) {
    if (!this.indexMap.has(id)) return
    const index = this.indexMap.get(id)
    this.indexMap.delete(id)
    return this.remove(index)
  }
}
```