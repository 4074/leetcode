# [2325\. Decode the Message](https://leetcode.com/problems/decode-the-message/)

## Description

Difficulty: **Easy**  

Related Topics:


You are given the strings `key` and `message`, which represent a cipher key and a secret message, respectively. The steps to decode `message` are as follows:

1.  Use the **first** appearance of all 26 lowercase English letters in `key` as the **order** of the substitution table.
2.  Align the substitution table with the regular English alphabet.
3.  Each letter in `message` is then **substituted** using the table.
4.  Spaces `' '` are transformed to themselves.

*   For example, given `key = "<u>**hap**</u>p<u>**y**</u> <u>**bo**</u>y"` (actual key would have **at least one** instance of each letter in the alphabet), we have the partial substitution table of (`'h' -> 'a'`, `'a' -> 'b'`, `'p' -> 'c'`, `'y' -> 'd'`, `'b' -> 'e'`, `'o' -> 'f'`).

Return _the decoded message_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg)

```
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg)

```
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
```

**Constraints:**

*   `26 <= key.length <= 2000`
*   `key` consists of lowercase English letters and `' '`.
*   `key` contains every letter in the English alphabet (`'a'` to `'z'`) **at least once**.
*   `1 <= message.length <= 2000`
*   `message` consists of lowercase English letters and `' '`.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const map = {}
  let c = 'a'.charCodeAt(0)
  for (const char of key) {
    if (char === ' ' || map[char]) continue
    map[char] = String.fromCharCode(c)
    c += 1
  }
  return message.split('').map((c) => map[c] || c).join('')
};
```