### [241\. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)

Difficulty: **Medium**  

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/)


Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are `+`, `-` and `*`.

**Example 1:**

```
Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2
```

**Example 2:**

```
Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const arr = []
  for (let i = 0; i < input.length; i += 1) {
    const c = input[i]
    if (c === '*' || c === '+' || c === '-') {
      const left = diffWaysToCompute(input.substr(0, i))
      const right = diffWaysToCompute(input.substr(i + 1))
      
      for (const l of left) {
        for (const r of right) {
          let res
          if (c === '*') res = l * r
          if (c === '+') res = l + r
          if (c === '-') res = l - r
          arr.push(res)
        }
      }
    }
  }
  
  return arr.length ? arr : [Number(input)]
};
```