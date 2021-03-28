### [1807\. Evaluate the Bracket Pairs of a String](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/)

Difficulty: **Medium**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/)


You are given a string `s` that contains some bracket pairs, with each pair containing a **non-empty** key.

*   For example, in the string `"(name)is(age)yearsold"`, there are **two** bracket pairs that contain the keys `"name"` and `"age"`.

You know the values of a wide range of keys. This is represented by a 2D string array `knowledge` where each `knowledge[i] = [key<sub style="display: inline;">i</sub>, value<sub style="display: inline;">i</sub>]` indicates that key `key<sub style="display: inline;">i</sub>` has a value of `value<sub style="display: inline;">i</sub>`.

You are tasked to evaluate **all** of the bracket pairs. When you evaluate a bracket pair that contains some key `key<sub style="display: inline;">i</sub>`, you will:

*   Replace `key<sub style="display: inline;">i</sub>` and the bracket pair with the key's corresponding `value<sub style="display: inline;">i</sub>`.
*   If you do not know the value of the key, you will replace `key<sub style="display: inline;">i</sub>` and the bracket pair with a question mark `"?"` (without the quotation marks).

Each key will appear at most once in your `knowledge`. There will not be any nested brackets in `s`.

Return _the resulting string after evaluating **all** of the bracket pairs._

**Example 1:**

```
Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
Output: "bobistwoyearsold"
Explanation:
The key "name" has a value of "bob", so replace "(name)" with "bob".
The key "age" has a value of "two", so replace "(age)" with "two".
```

**Example 2:**

```
Input: s = "hi(name)", knowledge = [["a","b"]]
Output: "hi?"
Explanation: As you do not know the value of the key "name", replace "(name)" with "?".
```

**Example 3:**

```
Input: s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
Output: "yesyesyesaaa"
Explanation: The same key can appear multiple times.
The key "a" has a value of "yes", so replace all occurrences of "(a)" with "yes".
Notice that the "a"s not in a bracket pair are not evaluated.
```

**Example 4:**

```
Input: s = "(a)(b)", knowledge = [["a","b"],["b","a"]]
Output: "ba"
```

**Constraints:**

*   `1 <= s.length <= 10<sup>5</sup>`
*   `0 <= knowledge.length <= 10<sup>5</sup>`
*   `knowledge[i].length == 2`
*   `1 <= key<sub style="display: inline;">i</sub>.length, value<sub style="display: inline;">i</sub>.length <= 10`
*   `s` consists of lowercase English letters and round brackets `'('` and `')'`.
*   Every open bracket `'('` in `s` will have a corresponding close bracket `')'`.
*   The key in each bracket pair of `s` will be non-empty.
*   There will not be any nested bracket pairs in `s`.
*   `key<sub style="display: inline;">i</sub>` and `value<sub style="display: inline;">i</sub>` consist of lowercase English letters.
*   Each `key<sub style="display: inline;">i</sub>` in `knowledge` is unique.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map()
  for (const [k, v] of knowledge) {
    map.set(k, v)
  }
  
  let ans = ''
  let i = 0
  while (i < s.length) {
    if (s[i] !== '(') {
      ans += s[i]
      i += 1
      continue
    }
    
    let key = ''
    i += 1
    while (s[i] !== ')') {
      key += s[i]
      i += 1
    }
    
    i += 1
    ans += map.get(key) || '?'
  }
  
  return ans
};
```