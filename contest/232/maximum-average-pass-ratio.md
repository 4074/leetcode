### [1792\. Maximum Average Pass Ratio](https://leetcode.com/problems/maximum-average-pass-ratio/)

Difficulty: **Medium**  

Related Topics: [Heap](https://leetcode.com/tag/heap/)


There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array `classes`, where `classes[i] = [pass<sub style="display: inline;">i</sub>, total<sub style="display: inline;">i</sub>]`. You know beforehand that in the `i<sup>th</sup>` class, there are `total<sub style="display: inline;">i</sub>` total students, but only `pass<sub style="display: inline;">i</sub>` number of students will pass the exam.

You are also given an integer `extraStudents`. There are another `extraStudents` brilliant students that are **guaranteed** to pass the exam of any class they are assigned to. You want to assign each of the `extraStudents` students to a class in a way that **maximizes** the **average** pass ratio across **all** the classes.

The **pass ratio** of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The **average pass ratio** is the sum of pass ratios of all the classes divided by the number of the classes.

Return _the **maximum** possible average pass ratio after assigning the_ `extraStudents` _students._ Answers within `10<sup>-5</sup>` of the actual answer will be accepted.

**Example 1:**

```
Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
Output: 0.78333
Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
```

**Example 2:**

```
Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
Output: 0.53485
```

**Constraints:**

*   `1 <= classes.length <= 10<sup>5</sup>`
*   `classes[i].length == 2`
*   `1 <= pass<sub style="display: inline;">i</sub> <= total<sub style="display: inline;">i</sub> <= 10<sup>5</sup>`
*   `1 <= extraStudents <= 10<sup>5</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
  const gains = []
  for (let i = 0; i < classes.length; i += 1) {
    const [p, t] = classes[i]
    gains.push([(p + 1) / (t + 1) - p/t, i])
  }
  const heap = new Heap(gains, false, (a, b) => a[0] > b[0] ? -1 : 1)
  
  while (extraStudents) {
    const [g, i] = heap.pop()
    if (!g) break
    classes[i][0] += 1
    classes[i][1] += 1
    heap.push([
      (classes[i][0] + 1) / (classes[i][1] + 1) - classes[i][0]/classes[i][1],
      i
    ])
    extraStudents -= 1
  }
  
  let sum = 0
  for (const [p, t] of classes) {
    sum += p/t
  }
  
  return sum / classes.length
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