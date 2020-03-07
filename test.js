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
        if (this.root) return
        let node = this.root
        while (node.right) {
            node = node.right
        }
        return node.val
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