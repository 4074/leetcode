### [438\. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Difficulty: **Medium**


Given a string **s** and a **non-empty** string **p**, find all the start indices of **p**'s anagrams in **s**.

Strings consists of lowercase English letters only and the length of both strings **s** and **p** will not be larger than 20,100.

The order of output does not matter.

**Example 1:**

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

**Example 2:**

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pArr = Array(26).fill(0)
    for (const char of p) {
        pArr[char.charCodeAt(0) - 97] += 1
    }
    const pString = pArr.join(',')
    
    const result = [], count = Array(26).fill(0)
    let left = 0
    
    for (let right=0; right<s.length; right++) {
        count[s[right].charCodeAt(0) - 97] += 1
        
        while(right - left + 1 > p.length) {
            count[s[left].charCodeAt(0) - 97] -= 1
            left += 1
        }
        
        if (pString === count.join(',')) {
            result.push(left)
        }
    }
    
    return result
};
```