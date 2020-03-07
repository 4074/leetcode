### [1178\. Number of Valid Words for Each Puzzle](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/)

Difficulty: **Hard**

With respect to a given `puzzle` string, a `word` is _valid_ if both the following conditions are satisfied:

*   `word` contains the first letter of `puzzle`.
*   For each letter in `word`, that letter is in `puzzle`.  
    For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).

Return an array `answer`, where `answer[i]` is the number of words in the given word list `words` that are valid with respect to the puzzle `puzzles[i]`.

**Example :**

```
Input: 
words = ["aaaa","asas","able","ability","actt","actor","access"], 
puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
Output: [1,1,3,2,4,0]
Explanation:
1 valid word for "aboveyz" : "aaaa" 
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
```

**Constraints:**

*   `1 <= words.length <= 10^5`
*   `4 <= words[i].length <= 50`
*   `1 <= puzzles.length <= 10^4`
*   `puzzles[i].length == 7`
*   `words[i][j]`, `puzzles[i][j]` are English lowercase letters.
*   Each `puzzles[i]` doesn't contain repeated characters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const wordMap = new Map()
    const base = 'a'.charCodeAt(0)
    
    for (const word of words) {
        const chars = Array(26).fill(0)
        for (let i = 0; i < word.length; i += 1) {
            const index = word.charCodeAt(i) - base
            chars[index] = 1
        }
        const key = chars.join('')
        wordMap.set(key, (wordMap.get(key) || 0) + 1)
    }
    
    function dfs(index, chars, puzzle, result) {
        result.push(chars.join(''))
        for (let i = index; i < puzzle.length; i += 1) {
            const c = puzzle.charCodeAt(i) - base
            const old = chars[c]
            chars[c] = 1
            dfs(i + 1, chars, puzzle, result)
            chars[c] = old
        }
        return result
    }
    
    const ans = []
    for (const puzzle of puzzles) {
        const chars = Array(26).fill(0)
        chars[puzzle.charCodeAt(0) - base] = 1
        const keys = dfs(1, chars, puzzle, [])
        let count = 0
        for (const key of keys) {
            count += wordMap.get(key) || 0
        }
        ans.push(count)
    }
    return ans
};
```

Bit
```javascript
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const wordMap = new Map()
    const base = 'a'.charCodeAt(0)
    
    for (const word of words) {
        let num = 0
        for (let i = 0; i < word.length; i += 1) {
            const index = word.charCodeAt(i) - base
            num |= (1 << index)
        }
        wordMap.set(num, (wordMap.get(num) || 0) + 1)
    }
    
    function dfs(index, num, puzzle, result) {
        result.push(num)
        for (let i = index; i < puzzle.length; i += 1) {
            dfs(i + 1, num | (1 << puzzle.charCodeAt(i) - base), puzzle, result)
        }
        return result
    }
    
    const ans = []
    for (const puzzle of puzzles) {
        const keys = dfs(1, 1 << (puzzle.charCodeAt(0) - base), puzzle, [])
        let count = 0
        for (const key of keys) {
            count += wordMap.get(key) || 0
        }
        ans.push(count)
    }
    return ans
};
```