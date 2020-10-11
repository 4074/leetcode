### [1616\. Split Two Strings to Make Palindrome](https://leetcode.com/problems/split-two-strings-to-make-palindrome/)

Difficulty: **Medium**  

Related Topics: [String](https://leetcode.com/tag/string/)


You are given two strings `a` and `b` of the same length. Choose an index and split both strings **at the same index**, splitting `a` into two strings: `a<sub style="display: inline;">prefix</sub>` and `a<sub style="display: inline;">suffix</sub>` where `a = a<sub style="display: inline;">prefix</sub> + a<sub style="display: inline;">suffix</sub>`, and splitting `b` into two strings: `b<sub style="display: inline;">prefix</sub>` and `b<sub style="display: inline;">suffix</sub>` where `b = b<sub style="display: inline;">prefix</sub> + b<sub style="display: inline;">suffix</sub>`. Check if `a<sub style="display: inline;">prefix</sub> + b<sub style="display: inline;">suffix</sub>` or `b<sub style="display: inline;">prefix</sub> + a<sub style="display: inline;">suffix</sub>` forms a palindrome.

When you split a string `s` into `s<sub style="display: inline;">prefix</sub>` and `s<sub style="display: inline;">suffix</sub>`, either `s<sub style="display: inline;">suffix</sub>` or `s<sub style="display: inline;">prefix</sub>` is allowed to be empty. For example, if `s = "abc"`, then `"" + "abc"`, `"a" + "bc"`, `"ab" + "c"` , and `"abc" + ""` are valid splits.

Return `true` _if it is possible to form_ _a palindrome string, otherwise return_ `false`.

**Notice** that `x + y` denotes the concatenation of strings `x` and `y`.

**Example 1:**

```
Input: a = "x", b = "y"
Output: true
Explaination: If either a or b are palindromes the answer is true since you can split in the following way:
aprefix = "", asuffix = "x"
bprefix = "", bsuffix = "y"
Then, aprefix + bsuffix = "" + "y" = "y", which is a palindrome.
```

**Example 2:**

```
Input: a = "abdef", b = "fecab"
Output: true
```

**Example 3:**

```
Input: a = "ulacfd", b = "jizalu"
Output: true
Explaination: Split them at index 3:
aprefix = "ula", asuffix = "cfd"
bprefix = "jiz", bsuffix = "alu"
Then, aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.
```

**Example 4:**

```
Input: a = "xbdef", b = "xecab"
Output: false
```

**Constraints:**

*   `1 <= a.length, b.length <= 10<sup>5</sup>`
*   `a.length == b.length`
*   `a` and `b` consist of lowercase English letters


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    const n = a.length
    if (n === 1) return true
    
    function getMinIndex(str) {
        let left = Math.ceil(n / 2 - 1)
        let right = (n & 1) ? left : left + 1
        while (str[left] === str[right]) {
            left -= 1
            right += 1
        }
        return str[left] === str[right] ? left : left += 1
    }
    
    const aMinIndex = getMinIndex(a)
    const bMinIndex = getMinIndex(b)
    
    let ab = true
    let ba = true
    for (let i = 0; i < n; i += 1) {
        if (ab) ab = a[i] === b[n - i - 1]
        if (ba) ba = b[i] === a[n - i - 1]
        if (!ab && !ba) break
        if (ab && i === bMinIndex - 1) return true
        if (ba && i === aMinIndex - 1) return true
    }
    
    ab = true
    ba = true
    for (let i = n - 1; i >= 0; i -= 1) {
        if (ab) ab = b[i] === a[n - i - 1]
        if (ba) ba = a[i] === b[n - i - 1]
        if (!ab && !ba) break
        if (ab && i === n - aMinIndex) return true
        if (ba && i === n - bMinIndex) return true
    }
    
    return false
};
```