### [17\. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

Difficulty: **Medium**


Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

**Example:**

```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Note:**

Although the above answer is in lexicographical order, your answer could be in any order you want.


#### Solution

Language: **JavaScript**

**DFS**
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    const chars = digits.split('').map(c => map[c])
    const result = []
    
    function get(prefix, index) {
        if (index < chars.length) {
            for (const c of chars[index]) {
                const char = prefix + c
                get(char, index + 1)
            }
        } else {
            result.push(prefix)
        }
    }
    
    get('', 0)
    
    return digits ? result : []
};
```

**BFS**
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    const chars = digits.split('').map(c => map[c])
    const result = ['']
    
    for (let i=0; i<chars.length; i++) {
        while(result[0].length === i) {
            const prefix = result.shift()
            for (const c of chars[i]) {
                result.push(prefix + c)
            }
        }
    }
    
    return digits ? result : []
};
```