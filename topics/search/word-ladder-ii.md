### [126\. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [String](https://leetcode.com/tag/string/), [Backtracking](https://leetcode.com/tag/backtracking/), [Breadth-first Search](https://leetcode.com/tag/breadth-first-search/)


Given two words (_beginWord_ and _endWord_), and a dictionary's word list, find all shortest transformation sequence(s) from _beginWord_ to _endWord_, such that:

1.  Only one letter can be changed at a time
2.  Each transformed word must exist in the word list. Note that _beginWord_ is _not_ a transformed word.

**Note:**

*   Return an empty list if there is no such transformation sequence.
*   All words have the same length.
*   All words contain only lowercase alphabetic characters.
*   You may assume no duplicates in the word list.
*   You may assume _beginWord_ and _endWord_ are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let queue = [beginWord]
    
    if (!wordSet.has(endWord)) return []
    const parents = new Map()
    wordSet.delete(beginWord)
    
    while (queue.length) {
        let next = new Set()
        
        for (const q of queue) {
            if (q === endWord) {
                next = []
                break
            }
            
            for (let i=0; i<q.length; i++) {
                for (let j=0; j<letters.length; j++) {
                    const word = q.substr(0, i) + letters[j] + q.substr(i+1, q.length)
                    if (wordSet.has(word)) {
                        
                        if (parents.has(word)) {
                            parents.get(word).push(q)
                        } else {
                            parents.set(word, [q])
                        }
                        
                        next.add(word)
                    }
                }
            }
        }
        for (const w of next) {
            wordSet.delete(w)
        }
        
        queue = [...next]
    }
    
    const ans = []
    function dfs(arr) {
        if (arr[0] === beginWord) return ans.push([...arr])
        if (!parents.has(arr[0])) return
        for (const p of parents.get(arr[0])) {
            arr.unshift(p)
            dfs(arr)
            arr.shift()
        }
    }
    dfs([endWord])
    
    return ans
};
```