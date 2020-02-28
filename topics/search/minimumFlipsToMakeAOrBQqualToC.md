### [1318\. Minimum Flips to Make a OR b Equal to c](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/)

Difficulty: **Medium**


Given 3 positives numbers `a`, `b` and `c`. Return the minimum flips required in some bits of `a` and `b` to make ( `a` OR `b` == `c` ). (bitwise OR operation).  
Flip operation consists of change **any** single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png)

```
Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
```

**Example 2:**

```
Input: a = 4, b = 2, c = 7
Output: 1
```

**Example 3:**

```
Input: a = 1, b = 2, c = 3
Output: 0
```

**Constraints:**

*   `1 <= a <= 10^9`
*   `1 <= b <= 10^9`
*   `1 <= c <= 10^9`


#### Solution

Language: **JavaScript**

**DFS**
```javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    a = a.toString(2)
    b = b.toString(2)
    c = c.toString(2)
    
    let len = Math.max(a.length, b.length, c.length)
    let count = 0
    
    for (let i = 0; i < len; i += 1) {
        const aBit = a[a.length - len + i] || '0'
        const bBit = b[b.length - len + i] || '0'
        const cBit = c[c.length - len + i] || '0'
        
        if (cBit === '1') {
            if (aBit === '0' && bBit === '0') count += 1
        } else {
            if (aBit === '1') count += 1
            if (bBit === '1') count += 1
        }
    }
    
    return count
};
```

**Union Find**
```javascript
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1
    
    const parents = {}
    for (let i = 0; i < n; i += 1) {
        parents[i] = i
    }
    
    function find(x) {
        if (parents[x] === x) return x
        const p = find(parents[x])
        parents[x] = p
        return p
    }
    
    for (const connection of connections) {
        parents[find(connection[0])] = find(connection[1])
    }
                                        
    const roots = new Set()
    for (let i = 0; i < n; i += 1) {
        roots.add(find(i))
    }
    
    return roots.size - 1
};
```