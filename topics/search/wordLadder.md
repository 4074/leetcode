### [127\. Word Ladder](https://leetcode.com/problems/word-ladder/)

Difficulty: **Medium**


Given two words (_beginWord_ and _endWord_), and a dictionary's word list, find the length of shortest transformation sequence from _beginWord_ to _endWord_, such that:

1.  Only one letter can be changed at a time.
2.  Each transformed word must exist in the word list. Note that _beginWord_ is _not_ a transformed word.

**Note:**

*   Return 0 if there is no such transformation sequence.
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

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let queue = [beginWord], step = 1
    
    if (!wordSet.has(endWord)) return 0
    
    while (queue.length) {
        const next = []
        
        for (const q of queue) {
            if (q === endWord) return step
            
            for (let i=0; i<q.length; i++) {
                for (let j=0; j<letters.length; j++) {
                    const word = q.substr(0, i) + letters[j] + q.substr(i+1, q.length)
                    if (wordSet.has(word)) {
                        next.push(word)
                        wordSet.delete(word)
                    }
                }
            }
        }
        
        step += 1
        queue = next
    }
    
    return 0
};
```