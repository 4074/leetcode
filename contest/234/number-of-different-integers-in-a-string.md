### [1805\. Number of Different Integers in a String](https://leetcode.com/problems/number-of-different-integers-in-a-string/)

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/)


You are given a string `word` that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, `"a123bc34d8ef34"` will become `" 123  34 8  34"`. Notice that you are left with some integers that are separated by at least one space: `"123"`, `"34"`, `"8"`, and `"34"`.

Return _the number of **different** integers after performing the replacement operations on_ `word`.

Two integers are considered different if their decimal representations **without any leading zeros** are different.

**Example 1:**

```
Input: word = "a123bc34d8ef34"
Output: 3
Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
```

**Example 2:**

```
Input: word = "leet1234code234"
Output: 2
```

**Example 3:**

```
Input: word = "a1b01c001"
Output: 1
Explanation: The three integers "1", "01", and "001" all represent the same integer because
the leading zeros are ignored when comparing their decimal values.
```

**Constraints:**

*   `1 <= word.length <= 1000`
*   `word` consists of digits and lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const arr = Array(10).fill().map((_, i) => i)
  const set = new Set()
  let stack = []
  for (let i = 0; i < word.length; i += 1) {
    if (arr[word[i]] === undefined) {
      if (stack.length) {
        set.add(parseInt(stack.join(''), 10))
        stack = []
      }
      continue
    }
    stack.push(word[i])
  }
  if (stack.length) {
    set.add(parseInt(stack.join(''), 10))
  }
  return set.size
};
```