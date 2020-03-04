class BST {
    constructor() {
        this.root = null
    }

    add(val) {
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
                if (node === minChildOfRight.parent) {
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

    inorder() {}

    preorder() {}

    postorder() {}
}

class BSTNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const tree = new BST()
tree.add(5).add(4).add(8).add(6).add(7)
console.log(tree)
console.log(tree.min())
console.log(tree.max())
tree.remove(5)
console.log(tree)