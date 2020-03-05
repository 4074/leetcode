class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(val) {
        // Return the val exists
        if (this.has(val)) return

        // Find the null node with val
        // Parent will store the null node's parent
        const current = new Node(val)
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

        // Insert the node into the tree, or be the root.
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

            // Link the new current node to the parent
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

    max() {
        let node = this.root
        if (!node) return
        while (node.right) {
            node = node.right
        }
        return node.val
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

    inorder() {}

    preorder() {}

    postorder() {}
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const tree = new BinarySearchTree()
tree.add(1).add(2).add(0)
console.log(tree)
console.log(tree.min())
console.log(tree.max())
tree.remove(1)
console.log(tree)
tree.remove(0)
console.log(tree)