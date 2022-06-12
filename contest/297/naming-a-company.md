# [2306\. Naming a Company](https://leetcode.com/problems/naming-a-company/)

## Description

Difficulty: **Hard**  

Related Topics:


You are given an array of strings `ideas` that represents a list of names to be used in the process of naming a company. The process of naming a company is as follows:

1.  Choose 2 **distinct** names from `ideas`, call them idea<sub>A</sub> and idea<sub>B</sub>.
2.  Swap the first letters of idea<sub>A</sub> and idea<sub>B</sub> with each other.
3.  If **both** of the new names are not found in the original `ideas`, then the name idea<sub>A</sub> idea<sub>B</sub> (the **concatenation** of idea<sub>A</sub> and idea<sub>B</sub>, separated by a space) is a valid company name.
4.  Otherwise, it is not a valid name.

Return _the number of **distinct** valid names for the company_.

**Example 1:**

```
Input: ideas = ["coffee","donuts","time","toffee"]
Output: 6
Explanation: The following selections are valid:
- ("coffee", "donuts"): The company name created is "doffee conuts".
- ("donuts", "coffee"): The company name created is "conuts doffee".
- ("donuts", "time"): The company name created is "tonuts dime".
- ("donuts", "toffee"): The company name created is "tonuts doffee".
- ("time", "donuts"): The company name created is "dime tonuts".
- ("toffee", "donuts"): The company name created is "doffee tonuts".
Therefore, there are a total of 6 distinct company names.

The following are some examples of invalid selections:
- ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
- ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
- ("coffee", "toffee"): Both names formed after swapping already exist in the original array.
```

**Example 2:**

```
Input: ideas = ["lack","back"]
Output: 0
Explanation: There are no valid selections. Therefore, 0 is returned.
```

**Constraints:**

*   2 <= ideas.length <= 5 * 10<sup>4</sup>
*   `1 <= ideas[i].length <= 10`
*   `ideas[i]` consists of lowercase English letters.
*   All the strings in `ideas` are **unique**.


## Solution
[https://www.bilibili.com/video/BV1aT41157bh?vd_source=6b3d69c685ac35809fb85a833c101e4c](https://www.bilibili.com/video/BV1aT41157bh?vd_source=6b3d69c685ac35809fb85a833c101e4c)
Language: **JavaScript**

```javascript
/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  const groups = new Map()
  const base = 'a'.charCodeAt(0)
  
  for (const idea of ideas) {
    const code = idea.charCodeAt(0) - base
    const sur = idea.slice(1)
    groups.set(sur, (groups.get(sur) || 0) | (1 << code))
  }
  
  const counts = Array(26).fill().map(() => Array(26).fill(0))
  let ans = 0
  for (const mask of groups.values()) {
    for (let i = 0; i < 26; i += 1) {
      if (mask & (1 << i)) {
        for (let j = 0; j < 26; j += 1) {
          if (mask & (1 << j)) continue
          ans += counts[i][j]
        }
      } else {
        for (let j = 0; j < 26; j += 1) {
          if (mask & (1 << j)) counts[i][j] += 1
        }
      }
    }
  }
  
  return ans * 2
};
```