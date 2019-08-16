
function Node(id, l, r) {
    this.id = id
    this.l = l
    this.r = r
}

Node.prototype.updateFromSon = function() {
    this.max =this.nodes[getLeftSonId(this.id)].max
    this.mergeQuery(getRightSonId(this.id))
}

Node.prototype.reset = function(id, l, r, v) {
    this.id = id
    this.max = v
}

Node.prototype.mergeQuery = function(id) {
    this.max = Math.max(this.max, nodes[id].max)
}

function MaximumComputer(source){
    this.source = source
    this.nodes = {}
    this.build(1, 1, source.length)
}

function getLeftSonId(id) {
    return id * 2 + 1
}

function getRightSonId(id) {
    return id * 2
}


MaximumComputer.prototype.build = function (id, l, r) {
    const node = new Node(id, l, r)
    this.nodes[id] = node
    node.reset(id, l, r, this.source[l - 1])
    if (l < r) {
        const mid = Math.floor((l + r) / 2)
        this.build(getLeftSonId(id), l, mid)
        this.build(getRightSonId(id), mid + 1, r)
        node.updateFromSon()
    }
}

MaximumComputer.prototype.insert = function (id, l, r, x, y, value) {}

MaximumComputer.prototype.innerQuery = function (id, x, y, answer) {
    const l = nodes[id].l, r = nodes[id].r
    if (l > y || r < x) return;
    if (x <= l && y >= r) {
        return answer.mergeQuery(id)
    }
    this.innerQuery(getLeftSonId(id), x, y, answer)
    this.innerQuery(getRightSonId(id), x, y, answer)

    return answer
    // nodes[id].updateFromSon()
}

MaximumComputer.prototype.query = function (){
    const answer = new Node(1, 1, 6)
    answer.max = 0
    return this.innerQuery(1, 2, 5, answer).max
}


const c = new MaximumComputer([1,2,3,4,5,6])
console.log(
    c.query()
)