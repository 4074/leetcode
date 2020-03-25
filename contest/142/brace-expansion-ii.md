### [1096\. Brace Expansion II](https://leetcode.com/problems/brace-expansion-ii/)

Difficulty: **Hard**


Under a grammar given below, strings can represent a set of lowercase words.  Let's use `R(expr)` to denote the **set** of words the expression represents.

Grammar can best be understood through simple examples:

*   Single letters represent a singleton set containing that word.
    *   `R("a") = {"a"}`
    *   `R("w") = {"w"}`
*   When we take a comma delimited list of 2 or more expressions, we take the union of possibilities.
    *   `R("{a,b,c}") = {"a","b","c"}`
    *   `R("{{a,b},{b,c}}") = {"a","b","c"}` (notice the final set only contains each word at most once)
*   When we concatenate two expressions, we take the set of possible concatenations between two words where the first word comes from the first expression and the second word comes from the second expression.
    *   `R("{a,b}{c,d}") = {"ac","ad","bc","bd"}`
    *   `R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"}`

Formally, the 3 rules for our grammar:

*   For every lowercase letter `x`, we have `R(x) = {x}`
*   For expressions `e_1, e_2, ... , e_k` with `k >= 2`, we have `R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...`
*   For expressions `e_1` and `e_2`, we have `R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}`, where + denotes concatenation, and × denotes the cartesian product.

Given an `expression` representing a set of words under the given grammar, return the sorted list of words that the expression represents.


**Example 1:**

```
Input: "{a,b}{c,{d,e}}"
Output: ["ac","ad","ae","bc","bd","be"]
```


**Example 2:**

```
Input: "{{a,z},a{b,c},{ab,z}}"
Output: ["a","ab","ac","z"]
Explanation: Each distinct word is written only once in the final answer.
```

**Constraints:**

1.  `1 <= expression.length <= 60`
2.  `expression[i]` consists of `'{'`, `'}'`, `','`or lowercase English letters.
3.  The given `expression` represents a set of words based on the grammar given in the description.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let stack = []
    
    for (let i = 0; i < expression.length; i += 1) {
        const char = expression[i]
        if (char === '}') {
            // Add
            let chars = []
            while (stack.length) {
                const c = stack.pop()
                if (c === '{') {
                    pushToStack(chars)
                    break
                } else {
                    if (typeof c === 'string') {
                        if (c !== ',') chars.push(c)
                    } else {
                        chars = chars.concat(c)
                    }
                }
            }
        } else {
            pushToStack(char)
        }
    }
    
    function pushToStack(chars) {
        if (!stack.length) {
            stack.push(chars)
        } else {
            if (chars === ',' || chars === '{') {
                stack.push(chars)
            } else if (stack[stack.length - 1] !== ',' && stack[stack.length - 1] !== '{') {
                // Multiple
                const r = mutiple([stack.pop(), chars])
                stack.push(r)
            } else {
                stack.push(chars)
            }
        }
    }
    
    function mutiple(arr) {
        const set = new Set()
        
        function dfs(index, chars) {
            if (chars.length === arr.length) set.add(chars.join(''))
            if (index >= arr.length) return
            if (typeof arr[index] === 'string') {
                chars.push(arr[index])
                dfs(index + 1, chars)
                chars.pop()
            } else {
                for (let i = 0; i < arr[index].length; i += 1) {
                    chars.push(arr[index][i])
                    dfs(index + 1, chars)
                    chars.pop()
                }
            }
        }
​
        dfs(0, [])
        return [...set]
    }
    
    const ans = typeof stack[0] === 'string' ? stack : [...new Set(stack[0])]
    return ans.sort()
};
```