### [386\. Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers/)

Difficulty: **Medium**


Given an integer _n_, return 1 - _n_ in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const ans = []
    
    function dfs(current) {
        if (current > n) return
        ans.push(current)
        
        const next = current * 10
        for (let i = 0; i <= 9; i += 1) {
            dfs(next + i)
        }
    }
    
    for (let i = 1; i <= 9; i += 1) {
        dfs(i)
    }
    
    return ans
};
```