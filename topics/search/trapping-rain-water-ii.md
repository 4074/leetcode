### [407\. Trapping Rain Water II](https://leetcode.com/problems/trapping-rain-water-ii/)

Difficulty: **Hard**  

Related Topics: [Heap](https://leetcode.com/tag/heap/), [Breadth-first Search](https://leetcode.com/tag/breadth-first-search/)


Given an `m x n` matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

**Example:**

```
Given the following 3x6 height map:
[
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

Return 4.
```

![](https://assets.leetcode.com/uploads/2018/10/13/rainwater_empty.png)

The above image represents the elevation map `[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]` before the rain.

![](https://assets.leetcode.com/uploads/2018/10/13/rainwater_fill.png)

After the rain, water is trapped between the blocks. The total volume of water trapped is 4.

**Constraints:**

*   `1 <= m, n <= 110`
*   `0 <= heightMap[i][j] <= 20000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  const m = heightMap.length
  const n = heightMap[0].length
  
  const seen = Array(m).fill().map(() => Array(n).fill(0))
  
  const heap = new Heap([], true, (a, b) => a[0] <= b[0] ? -1 : 1)
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        heap.push([heightMap[i][j], i, j])
        seen[i][j] = 1
      }
    }
  }
  
  
  const dirs = [0, 1, 0, -1, 0]
  let ans = 0
  while (heap.size) {
    const [h, i, j] = heap.pop()
    for (let d = 0; d < dirs.length - 1; d += 1) {
      const ni = i + dirs[d]
      const nj = j + dirs[d + 1]
      if (ni <= 0 || ni >= m - 1) continue
      if (nj <= 0 || nj >= n - 1) continue
      if (seen[ni][nj]) continue
      seen[ni][nj] = 1
      if (heightMap[ni][nj] < h) {
        ans += h - heightMap[ni][nj]
        heightMap[ni][nj] = h
      }
      heap.push([heightMap[ni][nj], ni, nj])
    }
  }
  
  return ans
};

class Heap {
  arr = []
  size = 0

  constructor(arr, isMinHeap, compare) {
    this.arr = arr || []
    this.size = this.arr.length
    this.compare = compare || this.compare(isMinHeap)

    // Build the heap.
    // Call the heapify by bottom-up.
    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i -= 1) {
      this.heapify(i)
    }
  }

  compare(isMinHeap) {
    return (parent, child) => {
      if (parent === child) return -1
      return (parent > child ? -1 : 1) * (isMinHeap ? -1 : 1)
    }
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  swap(i, j) {
    const tmp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = tmp
  }

  heapify(index) {
    let largestIndex = index

    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)

    if (leftIndex < this.size && this.compare(this.arr[largestIndex], this.arr[leftIndex]) > 0)
      largestIndex = leftIndex

    if (rightIndex < this.size && this.compare(this.arr[largestIndex], this.arr[rightIndex]) > 0)
      largestIndex = rightIndex

    if (index === largestIndex) return
    this.swap(index, largestIndex)
    this.heapify(largestIndex)
  }

  push(item) {
    this.arr.push(item)
    this.size += 1
    let childIndex = this.size - 1
    let parentIndex = this.getParentIndex(childIndex)

    while (parentIndex >= 0 && this.compare(this.arr[parentIndex], this.arr[childIndex]) > 0) {
      this.swap(childIndex, parentIndex)
      childIndex = parentIndex
      parentIndex = this.getParentIndex(childIndex)
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

  sort() {
    while (this.size > 1) {
      this.swap(0, this.size - 1)
      this.size -= 1
      this.heapify(0)
    }
    this.size = this.arr.length
  }
}
```