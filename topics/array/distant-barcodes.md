### [1054\. Distant Barcodes](https://leetcode.com/problems/distant-barcodes/)

Difficulty: **Medium**


In a warehouse, there is a row of barcodes, where the `i`-th barcode is `barcodes[i]`.

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

**Example 1:**

```
Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
```


**Example 2:**

```
Input: [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,2,1,2,1]
```


**Note:**

1.  `1 <= barcodes.length <= 10000`
2.  `1 <= barcodes[i] <= 10000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const n = barcodes.length
    const map = new Map()
    const arr = []
    
    for (let i = 0; i < n; i += 1) {
        const k = barcodes[i]
        if (map.has(k)) {
            map.set(k, map.get(k) + 1)
        } else {
            map.set(k, 1)
            arr.push(k)
        }
    }
    
    arr.sort((a, b) => map.get(b) - map.get(a))
    
    let index = 0
    for (let i = 0; i < arr.length; i += 1) {
        let count = map.get(arr[i])
        for (let j = 0; j < count; j += 1) {
            if (index >= n) index = 1
            barcodes[index] = arr[i]
            index += 2
        }   
    }
    
    return barcodes
};
```