# [2227\. Encrypt and Decrypt Strings](https://leetcode.com/problems/encrypt-and-decrypt-strings/)

## Description

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Design](https://leetcode.com/tag/design/), [Trie](https://leetcode.com/tag/trie/)


You are given a character array `keys` containing **unique** characters and a string array `values` containing strings of length 2\. You are also given another string array `dictionary` that contains all permitted original strings after decryption. You should implement a data structure that can encrypt or decrypt a **0-indexed** string.

A string is **encrypted** with the following process:

1.  For each character `c` in the string, we find the index `i` satisfying `keys[i] == c` in `keys`.
2.  Replace `c` with `values[i]` in the string.

Note that in case a character of the string is **not present** in `keys`, the encryption process cannot be carried out, and an empty string `""` is returned.

A string is **decrypted** with the following process:

1.  For each substring `s` of length 2 occurring at an even index in the string, we find an `i` such that `values[i] == s`. If there are multiple valid `i`, we choose **any** one of them. This means a string could have multiple possible strings it can decrypt to.
2.  Replace `s` with `keys[i]` in the string.

Implement the `Encrypter` class:

*   `Encrypter(char[] keys, String[] values, String[] dictionary)` Initializes the `Encrypter` class with `keys, values`, and `dictionary`.
*   `String encrypt(String word1)` Encrypts `word1` with the encryption process described above and returns the encrypted string.
*   `int decrypt(String word2)` Returns the number of possible strings `word2` could decrypt to that also appear in `dictionary`.

**Example 1:**

```
Input
["Encrypter", "encrypt", "decrypt"]
[[['a', 'b', 'c', 'd'], ["ei", "zf", "ei", "am"], ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]], ["abcd"], ["eizfeiam"]]
Output
[null, "eizfeiam", 2]

Explanation
Encrypter encrypter = new Encrypter([['a', 'b', 'c', 'd'], ["ei", "zf", "ei", "am"], ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]);
encrypter.encrypt("abcd"); // return "eizfeiam". 
                           // 'a' maps to "ei", 'b' maps to "zf", 'c' maps to "ei", and 'd' maps to "am".
encrypter.decrypt("eizfeiam"); // return 2\. 
                              // "ei" can map to 'a' or 'c', "zf" maps to 'b', and "am" maps to 'd'. 
                              // Thus, the possible strings after decryption are "abad", "cbad", "abcd", and "cbcd". 
                              // 2 of those strings, "abad" and "abcd", appear in dictionary, so the answer is 2.
```

**Constraints:**

*   `1 <= keys.length == values.length <= 26`
*   `values[i].length == 2`
*   `1 <= dictionary.length <= 100`
*   `1 <= dictionary[i].length <= 100`
*   All `keys[i]` and `dictionary[i]` are **unique**.
*   `1 <= word1.length <= 2000`
*   `1 <= word2.length <= 200`
*   All `word1[i]` appear in `keys`.
*   `word2.length` is even.
*   `keys`, `values[i]`, `dictionary[i]`, `word1`, and `word2` only contain lowercase English letters.
*   At most `200` calls will be made to `encrypt` and `decrypt` **in total**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
  this.keys = keys
  this.keyMap = {}
  for (let i = 0; i < keys.length; i += 1) {
    this.keyMap[keys[i]] = i
  }
  
  this.values = values
  this.valuesMap = {}
  for (let i = 0; i < values.length; i += 1) {
    const v = values[i]
    if (!this.valuesMap[v]) this.valuesMap[v] = new Set()
    this.valuesMap[v].add(i)
  }
  
  this.dictionary = dictionary
  this.dictionaryTree = {}
  for (const d of dictionary) {
    let current = this.dictionaryTree
    for (const c of d) {
      if (!current[c]) current[c] = {}
      current = current[c]
    }
    current.end = true
  }
  // console.log(this.dictionaryTree)
};
​
/** 
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
  const arr = []
  for (let i = 0; i < word1.length; i += 1) {
    if (this.keyMap[word1[i]] !== undefined) {
      arr.push(this.values[this.keyMap[word1[i]] ])
    } else {
      arr.push(word1[i])
    }
  }
  return arr.join('')
};
​
​
/** 
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
  const set = new Set()
  const dfs = (prefix, index, node) => {
    if (index === word2.length) {
      if (node.end) set.add(prefix)
      return
    }
    if (index === word2.length - 1) {
      if (node[word2[index]] && node[word2[index]].end) {
        set.add(prefix + word2[index])
      }
      return
    }
    
    const str = word2[index] + word2[index + 1]
    if (this.valuesMap[str]) {
      for (const s of this.valuesMap[str]) {
        if (node[this.keys[s]]) {
          dfs(prefix + this.keys[s], index + 2, node[this.keys[s]])
        }
      }
    } else {
      if (node[word2[index]]) {
        dfs(prefix + word2[index], index + 1, node[word2[index]])
      }
    }
  }
  
  dfs('', 0, this.dictionaryTree)
  return set.size
};
​
/** 
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
```