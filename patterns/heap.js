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

const heap = new Heap([16, 22])
heap.heapify(0)
console.log(heap.arr)

// Test sort
function testSort() {
  const randomArr = Array(1000).fill().map(() => Math.round(Math.random() * 10000))
  const randomArrSorted = [...randomArr].sort((a, b) => b - a)
  const sortHeap = new Heap(randomArr, true)
  sortHeap.sort()
  // console.log(sortHeap.arr)
  // console.log(randomArrSorted)
  console.log(sortHeap.arr.join(',') === randomArrSorted.join(',')) 
}

for (let i = 0; i < 10; i += 1) {
  testSort()
}

// Test push/pop
const minHeap = new Heap([], true)
minHeap.push(8).push(5).push(15)
console.log(minHeap.pop())
