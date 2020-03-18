### [1128\. Number of Equivalent Domino Pairs](https://leetcode.com/problems/number-of-equivalent-domino-pairs/)

Difficulty: **Easy**


Given a list of `dominoes`, `dominoes[i] = [a, b]` is _equivalent_ to `dominoes[j] = [c, d]` if and only if either (`a==c` and `b==d`), or (`a==d` and `b==c`) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs `(i, j)` for which `0 <= i < j < dominoes.length`, and `dominoes[i]` is equivalent to `dominoes[j]`.

**Example 1:**

```
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
```

**Constraints:**

*   `1 <= dominoes.length <= 40000`
*   `1 <= dominoes[i][j] <= 9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    var store = {}, result = 0
    
    for (var i=0; i<dominoes.length; i++) {
        var key = '' + Math.min(dominoes[i][0], dominoes[i][1]) + Math.max(dominoes[i][0], dominoes[i][1])
        if (store[key]) {
            store[key] += 1
        } else {
            store[key] = 1
        }
    }
    
    for (var key in store) {
        result += store[key] * (store[key] - 1) / 2
    }
    
    return result
};
```