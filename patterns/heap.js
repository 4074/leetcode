class Heap {
    arr = []
    
    constructor(arr) {
        this.arr = arr || []
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

        if (leftIndex >= this.arr.length) return
        if (this.arr[leftIndex] > this.arr[largestIndex]) largestIndex = leftIndex

        if (rightIndex >= this.arr.length) return
        if (this.arr[rightIndex] > this.arr[largestIndex]) largestIndex = rightIndex

        if (index === largestIndex) return
        this.swap(index, largestIndex)
        this.heapify(largestIndex)
    }

    add(item) {
        this.arr.push(item)
        let currentIndex = this.arr.length - 1
        let parentIndex = this.getParentIndex(currentIndex)
        while (parentIndex >= 0 && this.arr[currentIndex] > this.arr[parentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParentIndex(currentIndex)
        }
    }
}

const heap = new Heap([1,2,3])
heap.heapify(0)
heap.add(4)
console.log(heap.arr)