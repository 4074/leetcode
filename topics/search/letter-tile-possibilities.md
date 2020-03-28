### [1079\. Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/)

Difficulty: **Medium**


You have a set of `tiles`, where each tile has one letter `tiles[i]` printed on it.  Return the number of possible non-empty sequences of letters you can make.

**Example 1:**

```
Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
```


**Example 2:**

```
Input: "AAABBC"
Output: 188
```


**Note:**

1.  `1 <= tiles.length <= 7`
2.  `tiles` consists of uppercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const set = new Set()
    
    function dfs(index, selected, chars) {
        if (chars.length) set.add(chars.join(''))
        if (index >= tiles.length) return
        
        for (let i = 0; i < tiles.length; i += 1) {
            const k = 1 << i
            if ((selected & k) === 0) {
                selected |= k
                chars.push(tiles[i])
                dfs(index + 1, selected, chars)
                selected ^= k
                chars.pop()
            }
        }
    }
    dfs(0, 0, [])
    
    return set.size
};
```