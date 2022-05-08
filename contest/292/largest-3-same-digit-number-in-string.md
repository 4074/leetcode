# [2264\. Largest 3-Same-Digit Number in String](https://leetcode.com/problems/largest-3-same-digit-number-in-string/)

## Description

Difficulty: **Easy**  

Related Topics:


You are given a string `num` representing a large integer. An integer is **good** if it meets the following conditions:

*   It is a **substring** of `num` with length `3`.
*   It consists of only one unique digit.

Return _the **maximum good** integer as a **string** or an empty string_ `""` _if no such integer exists_.

Note:

*   A **substring** is a contiguous sequence of characters within a string.
*   There may be **leading zeroes** in `num` or a good integer.

**Example 1:**

```
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
```

**Example 2:**

```
Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.
```

**Example 3:**

```
Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
```

**Constraints:**

*   `3 <= num.length <= 1000`
*   `num` only consists of digits.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let ans = ''
  for (let i = 2; i < num.length; i += 1) {
    if (num[i - 2] === num[i - 1] && num[i - 1] === num[i]) {
      const str = num.slice(i - 2, i + 1)
      if (str > ans) ans = str
    }
  }
  return ans
};
```