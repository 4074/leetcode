function solution(source) {
    function Node(id, l, r) {
        this.id = id
        this.l = l
        this.r = r
    }

    Node.prototype.updateFromSon = function() {
        this.max = nodes[getLeftSonId(this.id)].max
        this.mergeQuery(getRightSonId(this.id))
    }

    Node.prototype.reset = function(id, l, r) {
        this.id = id
        this.max = source[l - 1]
    }

    Node.prototype.mergeQuery = function(id) {
        this.max = Math.max(this.max, nodes[id].max)
    }

    const nodes = {}

    function getLeftSonId(id) {
        return id * 2
    }

    function getRightSonId(id) {
        return id * 2 + 1
    }

    function build(id, l, r) {
        const node = new Node(id, l, r)
        nodes[id] = node
        node.reset(id, l, r)
        if (l < r) {
            const mid = Math.floor((l + r) / 2)
            build(getLeftSonId(id), l, mid)
            build(getRightSonId(id), mid + 1, r)
            node.updateFromSon()
        }
    }

    function insert(id, l, r, x, y, value) {

    }

    function query(id, x, y, answer) {
        const l = nodes[id].l, r = nodes[id].r
        if (l > y || r < x) return;
        if (x <= l && y >= r) {
            return answer.mergeQuery(id)
        }
        query(getLeftSonId(id), x, y, answer)
        query(getRightSonId(id), x, y, answer)

        return answer
        // nodes[id].updateFromSon()
    }

    build(1, 1, source.length)

    const answer = new Node(1, 1, 6)
    answer.max = 0

    console.log(nodes)

    return query(1, 2, 5, answer).max
}

console.log(
    solution([1,2,3,4,5,6])
)