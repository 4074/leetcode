### [1642\. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Heap](https://leetcode.com/tag/heap/)


You are given an integer array `heights` representing the heights of buildings, some `bricks`, and some `ladders`.

You start your journey from building `0` and move to the next building by possibly using bricks or ladders.

While moving from building `i` to building `i+1` (**0-indexed**),

*   If the current building's height is **greater than or equal** to the next building's height, you do **not** need a ladder or bricks.
*   If the current building's height is **less than** the next building's height, you can either use **one ladder** or `(h[i+1] - h[i])` **bricks**.

_Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally._

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/27/q4.gif)

```
Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders.
```

**Example 2:**

```
Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
Output: 7
```

**Example 3:**

```
Input: heights = [14,3,19,3], bricks = 17, ladders = 0
Output: 3
```

**Constraints:**

*   `1 <= heights.length <= 10<sup>5</sup>`
*   `1 <= heights[i] <= 10<sup>6</sup>`
*   `0 <= bricks <= 10<sup>9</sup>`
*   `0 <= ladders <= heights.length`


#### Solution

Language: **JavaScript**

Binary-Search

```javascript
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length
    let left = 0, right = n - 1
    const needs = Array(n).fill(0)
    
    for (let i = 1; i < n; i += 1) {
        needs[i] = Math.max(0, heights[i] - heights[i - 1])
    }
    
    const canReach = (index) => {
        if (ladders > index) return true
        const arr = needs.slice(0, index + 1).sort((a, b) => a - b)
        
        let needBricks = bricks
        let i = 0
        while (needBricks >= 0 & i < arr.length - ladders) {
            needBricks -= arr[i]
            i += 1
        }
        return needBricks >= 0
    }
    
    while (left < right) {
        const middle = Math.ceil((left + right) / 2)
        if (canReach(middle)) {
            left = middle
        } else {
            right = middle - 1
        }
    }
    
    return left
};
```

Max-Heap
```javascript
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length
    const heap = new Heap([], true)
    for (let i = 0; i < n - 1; i += 1) {
        const diff = heights[i + 1] - heights[i]
        
        if (diff <= 0) continue
        heap.push(diff)
        
        if (ladders) {
            ladders -= 1
        } else {
            bricks -= heap.pop()
            if (bricks < 0) return i
        }
    }
    return n - 1
};

class Heap {
  arr = []
  size = 0

  constructor(arr, isMinHeap) {
    this.arr = arr || []
    this.size = this.arr.length
    this.compare = this.comparea(isMinHeap)

    // Build the heap.
    // Call the heapify by bottom-up.
    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i -= 1) {
      this.heapify(i)
    }
  }

  comparea(isMinHeap) {
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