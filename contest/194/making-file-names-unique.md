### [1487\. Making File Names Unique](https://leetcode.com/problems/making-file-names-unique/)

Difficulty: **Medium**


Given an array of strings `names` of size `n`. You will create `n` folders in your file system **such that**, at the `ith` minute, you will create a folder with the name `names[i]`.

Since two files **cannot** have the same name, if you enter a folder name which is previously used, the system will have a suffix addition to its name in the form of `(k)`, where, `k` is the **smallest positive integer** such that the obtained name remains unique.

Return _an array of strings of length `n`_ where `ans[i]` is the actual name the system will assign to the `ith` folder when you create it.

**Example 1:**

```
Input: names = ["pes","fifa","gta","pes(2019)"]
Output: ["pes","fifa","gta","pes(2019)"]
Explanation: Let's see how the file system creates folder names:
"pes" --> not assigned before, remains "pes"
"fifa" --> not assigned before, remains "fifa"
"gta" --> not assigned before, remains "gta"
"pes(2019)" --> not assigned before, remains "pes(2019)"
```

**Example 2:**

```
Input: names = ["gta","gta(1)","gta","avalon"]
Output: ["gta","gta(1)","gta(2)","avalon"]
Explanation: Let's see how the file system creates folder names:
"gta" --> not assigned before, remains "gta"
"gta(1)" --> not assigned before, remains "gta(1)"
"gta" --> the name is reserved, system adds (k), since "gta(1)" is also reserved, systems put k = 2\. it becomes "gta(2)"
"avalon" --> not assigned before, remains "avalon"
```

**Example 3:**

```
Input: names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]
Output: ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
Explanation: When the last folder is created, the smallest positive valid k is 4, and it becomes "onepiece(4)".
```

**Example 4:**

```
Input: names = ["wano","wano","wano","wano"]
Output: ["wano","wano(1)","wano(2)","wano(3)"]
Explanation: Just increase the value of k each time you create folder "wano".
```

**Example 5:**

```
Input: names = ["kaido","kaido(1)","kaido","kaido(1)"]
Output: ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
Explanation: Please note that system adds the suffix (k) to current name even it contained the same suffix before.
```

**Constraints:**

*   `1 <= names.length <= 5 * 10^4`
*   `1 <= names[i].length <= 20`
*   `names[i]` consists of lower case English letters, digits and/or round brackets.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const set = new Set()
    const map = new Map()
    for (const name of names) {
        if (set.has(name)) {
            let i = map.get(name) || 1
            let str = name + `(${i})`
            while (set.has(str)) {
                i += 1
                str = name + `(${i})`
            }
            set.add(str)
            map.set(name, i + 1)
        } else {
            set.add(name)
            map.set(name, 1)
        }
    }
    return [...set]
};
```