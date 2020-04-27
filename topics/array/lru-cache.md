### [146\. LRU Cache](https://leetcode.com/problems/lru-cache/)

Difficulty: **Medium**


Design and implement a data structure for . It should support the following operations: `get` and `put`.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.  
`put(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a **positive** capacity.

**Follow up:**  
Could you do both operations in **O(1)** time complexity?

**Example:**

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.list = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    // console.log('head', this.list.head.val)
    // console.log('move', node.val)
    this.list.moveToHead(node)
    // console.log('head', this.list.head.val)
    return node.val[1]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.val = [key, value]
        this.list.moveToHead(node)
        return
    }
    
    if (this.list.length === this.capacity) {
        const node = this.list.pop()
        // console.log(node.val)
        this.map.delete(node.val[0])
    }
    const node = this.list.insert([key, value])
    this.map.set(key, node)
    // console.log(this.list.length, this.map.size)
};

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

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};
​
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
};
​
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.map.delete(key)
    this.map.set(key, value)
    
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value)
    }
};
​
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```