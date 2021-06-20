### [282\. Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)

Difficulty: **Hard**  

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/)


Given a string `num` that contains only digits and an integer `target`, return _all possibilities to add the binary operators_ `'+'`, `'-'`, _or_ `'*'` _between the digits of_ `num` _so that the resultant expression evaluates to the_ `target` _value_.

**Example 1:**

```
Input: num = "123", target = 6
Output: ["1*2*3","1+2+3"]
```

**Example 2:**

```
Input: num = "232", target = 8
Output: ["2*3+2","2+3*2"]
```

**Example 3:**

```
Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
```

**Example 4:**

```
Input: num = "00", target = 0
Output: ["0*0","0+0","0-0"]
```

**Example 5:**

```
Input: num = "3456237490", target = 9191
Output: []
```

**Constraints:**

*   `1 <= num.length <= 10`
*   `num` consists of only digits.
*   `-2<sup>31</sup> <= target <= 2<sup>31</sup> - 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const ans = []
  
  function dfs(i, str, pre, cur, res) {
    if (i === num.length) {
      if (res + pre * cur === target) ans.push(str)
      return
    }
    
    const digit = parseInt(num[i])
    if (cur) dfs(i + 1, str + num[i], pre, cur * 10 + digit, res)
    dfs(i + 1, str + '*' + num[i], pre * cur, digit, res)
    dfs(i + 1, str + '+' + num[i], 1, digit, res + pre * cur)
    dfs(i + 1, str + '-' + num[i], -1, digit, res + pre * cur)
  }
  dfs(1, num[0], 1, parseInt(num[0]), 0)
  
  return ans
};
```