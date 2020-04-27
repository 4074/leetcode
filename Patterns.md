# Patterns for algorithm

## List
### Priority Queue
```javascript
class PriorityQueue {
    constructor() {
        this.arr = []
    }

    push(val) {
        const index = this.findInsertIndex(val)
        this.arr.splice(index, 0, val)
        return this
    }

    pop() {
        if (this.size()) return this.arr.pop()
    }
    
    shift() {
        if (this.size()) return this.arr.shift()
    }
    
    remove(val) {
        const index = this.findInsertIndex(val)
        if (this.arr[index] === val) {
            this.arr.splice(index, 1)
            this.length -= 1
            return val
        }
    }
    
    min() {
        return this.size() && this.arr[this.length - 1]
    }
    
    max() {
        return this.size() && this.arr[0]
    }
    
    size() {
        return this.arr.length
    }

    findInsertIndex(val) {
        let left = 0, right = this.size()
        while (left < right) {
            const mid = Math.floor(left + right / 2)
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
queue.push(3).push(4).push(2).push(6).push(5).push(1)
```

### Linked List
```javascript
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
```

## Graph
### Topological Sort
```javascript
/**
 * Topological sort
 * @param number[][] graph by linked list 
 */
function topoSort(graph) {
    const n = graph.length

    // Initial indegree
    // indegree[i] represent how many pre items the i-th item has 
    const indegree = Array(n).fill(0)
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < graph[i].length; j += 1) {
            indegree[graph[i][j]] += 1
        }
    }

    const sorted = []
    // Push all items in sorted
    while (sorted.length < n) {

        // Find a item with zero indegree
        let j = 0
        while (j < n && indegree[j] != 0) {
            j += 1
        }

        // If no such item, the graph is cyclic, return empty array
        if (j === n) return []

        // Push item in sorted
        // And set indegree to -1, mark it pushed
        indegree[j] -= 1
        sorted.push(j)

        // Minus 1 the indegree of the items next to this item 
        for (let k = 0; k < graph[j].length; k += 1) {
            indegree[graph[j][k]] -= 1
        }
    }

    return sorted
}
topoSort([[], [0], [1], [2]]) // [3, 2, 1, 0]
```

## Tree

### Binary Search Tree
```javascript
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        this.root = this.insertNode(this.root, val)
        return this
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val)
        return this
    }

    min() {
        const minChild = this.findMinChild(this.root)
        return minChild && minChild.node && minChild.node.val
    }

    max() {
        if (!this.root) return
        let node = this.root
        let current
        while (node) {
            current = node
            node = node.right
        }
        return current.val
    }

    has(val) {
        return !!this.fincChild(this.root, val)
    }

    insertNode(root, val) {
        const node = new Node(val)
        if (!root) return node

        // Find the null node with val
        // Parent will store the null node's parent
        let parent = null
        let current = this.root

        while (current) {
            parent = current
            if (node.val <= current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }

        // Insert the node into the tree.
        if (node.val < parent.val) {
            parent.left = node
        } else {
            parent.right = node
        }

        return root
    }

    deleteNode(root, val) {
        const current = this.fincChild(root, val)
        if (!current) return
        
        let { parent, node } = current
        let child = null
        
        if (!node.left) {
            // 1. No left child, the right child take the current place.
            child = node.right
        } else if (!node.right) {
            // 2. No right child, the left child take the current place.
            child = node.left
        } else {
            // 3. Has two children, find the min node of right child.
            // Remove it from tree, and then insert it into current place.
            const minChildOfRight = this.findMinChild(node.right)

            if (minChildOfRight.node === node.right) {
                // 3.1 If the min node is current's right child, the same as 1
                child = minChildOfRight.node
            } else {
                // The min child has no left child, and has right child.
                // So remove it using a shorthand impletement, but not use this.remove
                minChildOfRight.parent.left = minChildOfRight.node.right
                child = minChildOfRight.node
                child.right = node.right
            }

            // Link current left child to the new current
            child.left = node.left
        }

        // If no parent, the deleted node is root.
        // Let the child be the new root
        if (!parent) return child

        // Link the new current node to the parent
        parent[parent.val < node.val ? 'right' : 'left'] = child

        return root
    }

    fincChild(root, val) {
        let parent = null
        let node = root
        while (node) {
            if (node.val === val) {
                return {
                    parent,
                    node
                }
            }
            parent = node
            if (val < node.val) {
                node = node.left
            } else {
                node = node.right
            }
        }
    }

    findMinChild(root) {
        if (!root) return
        let parent = null
        let node = root
        while (node.left) {
            parent = node
            node = node.left
        }
        return {
            parent,
            node
        }
    }

    preorder() {
        return this.walk(this.root, 'pre', [])
    }

    inorder() {
        return this.walk(this.root, 'in', [])
    }

    postorder() {
        return this.walk(this.root, 'post', [])
    }

    walk(node, order, result) {
        if (!node) return result
        if (order === 'pre') {
            result.push(node.val)
            this.walk(node.left, order, result)
            this.walk(node.right, order, result)
        } else if (order === 'in') {
            this.walk(node.left, order, result)
            result.push(node.val)
            this.walk(node.right, order, result)
        } else {
            this.walk(node.left, order, result)
            this.walk(node.right, order, result)
            result.push(node.val)
        }
        return result
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const tree = new BinarySearchTree()
tree.insert(5).insert(2).insert(4).insert(3).insert(6).insert(7)
console.log(tree)
console.log(tree.preorder())
console.log(tree.inorder())
console.log(tree.postorder())
```

## Math
### Convert To Base K
```javascript
function convertToBaseK(n, k, chars) {
    if (n === 0) return '0'
    const result = []
    while (n != 0) {
        let r = n % k
        n = (n - r) / k

        // r is negative
        if (r < 0) {
            r -= k
            n += 1
        }

        result.unshift(chars ? chars[r] : r)
    }
    return result.join('')
}

console.log(
    convertToBaseK(18, 2) === '10010'
)
console.log(
    convertToBaseK(18, 16, [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']) === '12'
)
console.log(
    convertToBaseK(18, -2) === '10110'
)
```