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