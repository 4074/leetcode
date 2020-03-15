class PriorityQueue {
    constructor() {
        this.length = 0
        this.arr = []
    }

    push(val) {
        const index = this.findInsertIndex(val)
        this.arr.splice(index, 0, val)
        this.length += 1
        console.log(this.arr)
        return this
    }

    pop() {
        if (this.length) this.length -= 1
        return this.arr.pop()
    }

    findInsertIndex(val) {
        let left = 0, right = this.arr.length
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (val >= this.arr[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}

const queue = new PriorityQueue()
const arr = [10, 4, 9, 6, 3, 10, 1, 4]
for (const item of arr) {
    queue.push(item)
}