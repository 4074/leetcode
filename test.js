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
        
    }

    min() {
        let node = this.root
        if (!node) return
        while (node.left) {
            node = node.left
        }
        return node.val
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
tree.add(3).add(1).add(2).add(4)
console.log(tree)
console.log(tree.min())
console.log(tree.max())