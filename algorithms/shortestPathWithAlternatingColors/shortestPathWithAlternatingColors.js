/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
    var queue = [], graph = {}, seen = {red: [], blue: []}, answer = new Array(n).fill(-1)

    for (var i=0; i<red_edges.length; i++) {
        if (!graph[red_edges[i][0]]) {
            graph[red_edges[i][0]] = {red: [], blue: []}
        }
        if (graph[red_edges[i][0]].red.indexOf(red_edges[i][1]) < 0) {
            graph[red_edges[i][0]].red.push(red_edges[i][1])
        }
        
    }
    for (var i=0; i<blue_edges.length; i++) {
        if (!graph[blue_edges[i][0]]) {
            graph[blue_edges[i][0]] = {red: [], blue: []}
        }
        if (graph[blue_edges[i][0]].blue.indexOf(blue_edges[i][1]) < 0) {
            graph[blue_edges[i][0]].blue.push(blue_edges[i][1])
        }
    }

    queue.push({label: 0, color: 'red'}, {label: 0, color: 'blue'})
    seen.red.push(0)
    seen.blue.push(0)

    let step = 0
    while(queue.length) {
        let list = queue
        queue = []
        while(list.length) {
            const current = list.pop()
    
            if (answer[current.label] === -1) {
                answer[current.label] = step
            }
    
            if (!graph[current.label]) continue;
            const oppoColor = current.color === 'red' ? 'blue' : 'red'
            const next = graph[current.label][oppoColor]

            for (var i=0; i<next.length; i++) {
                if (seen[oppoColor].indexOf(next[i]) < 0) {
                    seen[oppoColor].push(next[i])
                    queue.push({label: next[i], color: oppoColor})
                }
            }
        }

        step += 1
    }
    return answer
};

console.log(
    shortestAlternatingPaths(
        3,
        [[0,1],[0,2]],
        [[1,0]]
    )
)