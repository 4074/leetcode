### [1172\. Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks/)

Difficulty: **Hard**


You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum `capacity`.

Implement the `DinnerPlates` class:

*   `DinnerPlates(int capacity)` Initializes the object with the maximum `capacity` of the stacks.
*   `void push(int val)` pushes the given positive integer `val` into the leftmost stack with size less than `capacity`.
*   `int pop()` returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns `-1` if all stacks are empty.
*   `int popAtStack(int index)` returns the value at the top of the stack with the given `index` and removes it from that stack, and returns -1 if the stack with that given `index` is empty.

**Example:**

```
Input: 
["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]
[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]
Output: 
[null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]

Explanation: 
DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);         // The stacks are now:  2  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 2\.  The stacks are now:     4
                                                       1  3  5
                                                       ﹈ ﹈ ﹈
D.push(20);        // The stacks are now: 20  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.push(21);        // The stacks are now: 20  4 21
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 20\.  The stacks are now:     4 21
                                                        1  3  5
                                                        ﹈ ﹈ ﹈
D.popAtStack(2);   // Returns 21\.  The stacks are now:     4
                                                        1  3  5
                                                        ﹈ ﹈ ﹈ 
D.pop()            // Returns 5\.  The stacks are now:      4
                                                        1  3 
                                                        ﹈ ﹈  
D.pop()            // Returns 4\.  The stacks are now:   1  3 
                                                        ﹈ ﹈   
D.pop()            // Returns 3\.  The stacks are now:   1 
                                                        ﹈   
D.pop()            // Returns 1\.  There are no stacks.
D.pop()            // Returns -1\.  There are still no stacks.
```

**Constraints:**

*   `1 <= capacity <= 20000`
*   `1 <= val <= 20000`
*   `0 <= index <= 100000`
*   At most `200000` calls will be made to `push`, `pop`, and `popAtStack`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.capacity = capacity
    this.stacks = []
    this.pushTree = new BST()
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    let pushIndex = this.pushTree.min()
    if (pushIndex === undefined) pushIndex = this.stacks.length - 1
    if (pushIndex < 0 || this.stacks[pushIndex].length === this.capacity) {
        pushIndex += 1
        this.stacks.push([])
    }
    this.stacks[pushIndex].push(val)
    if (this.stacks[pushIndex].length === this.capacity) {
        this.pushTree.remove(pushIndex)
    }  
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    return this.popAtStack(this.stacks.length - 1)
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if (index < 0 || index >= this.stacks.length || !this.stacks[index].length) {
        return -1
    }
        
    const val = this.stacks[index].pop()
    
    let l = this.stacks.length - 1
    while (l >= 0 && !this.stacks[l].length) {
        this.stacks.pop()
        this.pushTree.remove(l)
        l -= 1
    }
    if (index < l) {
        this.pushTree.add(index)
    }
    return val
};

class BST {
    constructor() {
        this.root = null
    }

    add(val) {
        if (this.has(val)) return
        const current = new BSTNode(val)
        let parent = null
        let node = this.root

        while (node) {
            parent = node
            if (val < node.val) {
                node = node.left
            } else {
                node = node.right
            }
        }

        if (parent) {
            if (val < parent.val) {
                parent.left = current
            } else {
                parent.right = current
            }
        } else {
            this.root = current
        }

        return this
    }

    remove(val) {
        const current = this.fincChild(this.root, val)
        if (current) {
            let { parent, node } = current
            let child = null
            if (!node.left) {
                child = node.right
            } else if (!node.right) {
                child = node.left
            } else {
                const minChildOfRight = this.findMinChild(node.right)
                if (!minChildOfRight.parent) {
                    child = minChildOfRight.node
                } else {
                    minChildOfRight.parent.left = minChildOfRight.node.right
                    child = minChildOfRight.node
                    child.right = node.right
                }
                child.left = node.left
            }

            if (parent) {
                parent[parent.val < node.val ? 'right' : 'left'] = child
            } else {
                this.root = child
            }
        }
    }

    min() {
        const minChild = this.findMinChild(this.root)
        return minChild && minChild.node && minChild.node.val
    }

    has(val) {
        return !!this.fincChild(this.root, val)
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

    max() {
        let node = this.root
        if (!node) return
        while (node.right) {
            node = node.right
        }
        return node.val
    }
}

class BSTNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
```