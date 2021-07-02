class SegmentTree {
  constructor(start, end, values) {
    this.root = this.createNode(start, end, values)
  }
 
  createNode(start, end, values) {
    const node = new SegmentTreeNode(start, end)
    if (start < end) {
      const mid = Math.floor((start + end) / 2)
      node.left = this.createNode(start, mid, values)
      node.right = this.createNode(mid + 1, end, values)
      node.val = node.left.val + node.right.val
    } else {
      node.val = values ? values[start] : 0
    }
    return node
  }

  update(index, val, node = this.root) {
    if (index < node.start || index > node.end) return
    if (node.start === node.end) {
      node.val = val
    } else {
      this.update(index, val, node.left)
      this.update(index, val, node.right)
      node.val = node.left.val + node.right.val
    }
  }

  sum(start, end, node = this.root) {
    if (start > node.end || end < node.start) return 0
    if (start <= node.start && end >= node.end) return node.val
    return this.sum(start, end, node.left) + this.sum(start, end, node.right)
  }
}

class SegmentTreeNode {
  constructor(start, end) {
    this.start = start
    this.end = end
    this.left = null
    this.right = null
    this.val = 0
  }
}