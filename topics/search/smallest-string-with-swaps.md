### [1202\. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)

Difficulty: **Medium**


You are given a string `s`, and an array of pairs of indices in the string `pairs` where `pairs[i] = [a, b]` indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given `pairs` **any number of times**.

Return the lexicographically smallest string that `s` can be changed to after using the swaps.

**Example 1:**

```
Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
```

**Example 2:**

```
Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
```

**Example 3:**

```
Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   `0 <= pairs.length <= 10^5`
*   `0 <= pairs[i][0], pairs[i][1] < s.length`
*   `s` only contains lower case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    function Node(i, v){
        this.i = i
        this.v = v
        this.rank = 0
    }
    
    // Make
    const nodes = []
    for (let i = 0; i < s.length; i += 1) {
        const node = new Node(i, s[i])
        node.p = node
        nodes.push(node)
    }
    
    // Find
    function find(node) {
        if (node.p === node) return node
        node.p = find(node.p)
        return node.p
    }
    
    // Union by rank
    for (const pair of pairs) {
        const a = find(nodes[pair[0]])
        const b = find(nodes[pair[1]])
        if (a.rank > b) {
            b.p = a
            a.rank += 1
        } else {
            a.p = b
            a.rank += 1
        }
    }
    
    // Collect all values
    const map = new Map()
    for (let i = 0; i < s.length; i += 1) {
        const parent = find(nodes[i])
        if (map.has(parent.i)) {
            map.get(parent.i).push(nodes[i].v)
        } else {
            map.set(parent.i, [nodes[i].v])
        }
    }
    
    // Sort
    for (const arr of map.values()) {
        arr.sort((a, b) => a > b ? -1 : 1)
    }
    
    // Generate result
    let result = []
    for (let i = 0; i < s.length; i += 1) {
        result.push(map.get(find(nodes[i]).i).pop())
    }
    
    return result.join('')
};
```

```javascript
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const p = new Array(s.length).fill().map((v, i) => i)
    
    // Find
    function find(index) {
        if (p[index] === index) return index
        p[index] = find(p[index])
        return p[index]
    }
    
    // Union
    for (const pair of pairs) {
        p[find(pair[0])] = find(pair[1])
    }
    
    // Collect
    const map = new Map()
    for (let i = 0; i < p.length; i += 1) {
        const n = find(i)
        if (map.has(n)) {
            map.get(n).push(i)
        } else {
            map.set(n, [i])
        }
    }
    
    // Sort
    for (const arr of map.values()) {
        arr.sort((a, b) => s[a] >= s[b] ? -1 : 1)
    }
    
    const result = []
    for (let i = 0; i < p.length; i += 1) {
        result.push(s[map.get(p[i]).pop()])
    }
    
    return result.join('')
};
```