# [2299\. Strong Password Checker II](https://leetcode.com/problems/strong-password-checker-ii/)

## Description

Difficulty: **Easy**  

Related Topics:


A password is said to be **strong** if it satisfies all the following criteria:

*   It has at least `8` characters.
*   It contains at least **one lowercase** letter.
*   It contains at least **one uppercase** letter.
*   It contains at least **one digit**.
*   It contains at least **one special character**. The special characters are the characters in the following string: `"!@#$%^&*()-+"`.
*   It does **not** contain `2` of the same character in adjacent positions (i.e., `"aab"` violates this condition, but `"aba"` does not).

Given a string `password`, return `true` _if it is a **strong** password_. Otherwise, return `false`.

**Example 1:**

```
Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.
```

**Example 2:**

```
Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
```

**Example 3:**

```
Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.
```

**Constraints:**

*   `1 <= password.length <= 100`
*   `password` consists of letters, digits, and special characters: `"!@#$%^&*()-+"`.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  let d = false, u = false, l = false, s = false
  if (password.length < 8) return false
  for (let i = 0; i < password.length; i += 1) {
    const c = password[i]
     if (c === password[i - 1]) return false
    
    if ('!@#$%^&*()-+'.includes(c)) s = true
    if (/\d/.test(c)) d = true
    if (/[a-z]/.test(c)) l = true
    if (/[A-Z]/.test(c)) u = true
  }
  return d && u && l && s
};
```