class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    insert(val) {
        const node = new LinkedListNode(val)
        if (this.head) {
            node.next = this.head
            this.head.prev = node
        } else {
            this.tail = node
        }
        this.head = node
        this.length += 1
        return node
    }
    
    moveToHead(node) {
        if (this.head === node) return
        if (this.tail === node) this.tail = node.prev
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    pop() {
        if (!this.tail) return
        const node = this.tail
        this.tail = this.tail.prev
        if (this.tail) this.tail.next = null
        this.length -= 1
        return node
    }
}

class LinkedListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

const addCache = Array(1001).fill(-1)
function add(num) {
    if (addCache[num] < 0) {
        let sum = 0
        for (let i = 1; i <= num; i += 1) {
            sum += i
        }
        addCache[num] = sum
    }
    
    return addCache[num]
}

const computeCache = Array(1001).fill().map(() => Array(1001).fill(-1))
function compute(a, b) {
    if (a * b === 0) return 1
    if (a < b) [a, b] = [b, a]

    if (computeCache[a][b] < 0) {
        let dp = Array(a + 1).fill(1)
    
        for (let i = 2; i <= b; i += 1) {
            const dp1 = Array(a + 1).fill(0)
            let sum = 0
            for (let j = 0; j < dp.length; j += 1) {
                sum += dp[j]
                dp1[j] = sum
            }
            dp = dp1
        }

        computeCache[a][b] = dp.reduce((sum, v) => sum + v, 0)
    }
    
    return computeCache[a][b]
}

// console.log(compute(2,3))
const a = BigInt(925074517)
const b = BigInt(288)
const c = BigInt(900295583)

console.log((a * b * c) % BigInt(10 ** 9 + 7))