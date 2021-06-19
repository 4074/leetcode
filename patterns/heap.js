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

const heap = new Heap([16, 22])
heap.heapify(0)
console.log(heap.arr)

// Test sort
function testSort() {
  const randomArr = Array(1000).fill().map(() => Math.round(Math.random() * 10000))
  const randomArrSorted = [...randomArr].sort((a, b) => b - a)
  const sortHeap = new Heap(randomArr)
  sortHeap.sort()
  // console.log(sortHeap.arr)
  // console.log(randomArrSorted)
  console.log(sortHeap.arr.join(',') === randomArrSorted.join(',')) 
}

for (let i = 0; i < 10; i += 1) {
  testSort()
}

// Test push/pop
const minHeap = new Heap([])
minHeap.push(8).push(5).push(15)
console.log(minHeap.pop())
