# [2259\. Remove Digit From Number to Maximize Result](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/)

## Description

Difficulty: **Easy**  

Related Topics: [String](https://leetcode.com/tag/string/), [Greedy](https://leetcode.com/tag/greedy/), [Enumeration](https://leetcode.com/tag/enumeration/)


You are given a string `number` representing a **positive integer** and a character `digit`.

Return _the resulting string after removing **exactly one occurrence** of_ `digit` _from_ `number` _such that the value of the resulting string in **decimal** form is **maximized**_. The test cases are generated such that `digit` occurs at least once in `number`.

**Example 1:**

```
Input: number = "123", digit = "3"
Output: "12"
Explanation: There is only one '3' in "123". After removing '3', the result is "12".
```

**Example 2:**

```
Input: number = "1231", digit = "1"
Output: "231"
Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
Since 231 > 123, we return "231".
```

**Example 3:**

```
Input: number = "551", digit = "5"
Output: "51"
Explanation: We can remove either the first or second '5' from "551".
Both result in the string "51".
```

**Constraints:**

*   `2 <= number.length <= 100`
*   `number` consists of digits from `'1'` to `'9'`.
*   `digit` is a digit from `'1'` to `'9'`.
*   `digit` occurs at least once in `number`.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  let ans = ''
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === digit) {
      const str = number.slice(0, i) + number.slice(i + 1)
      if (str > ans) ans = str
    }
  }
  return ans
};
```