### [1090\. Largest Values From Labels](https://leetcode.com/problems/largest-values-from-labels/)

Difficulty: **Medium**


We have a set of items: the `i`-th item has value `values[i]` and label `labels[i]`.

Then, we choose a subset `S` of these items, such that:

*   `|S| <= num_wanted`
*   For every label `L`, the number of items in `S` with label `L` is `<= use_limit`.

Return the largest possible sum of the subset `S`.


**Example 1:**

```
Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1
Output: 9
Explanation: The subset chosen is the first, third, and fifth item.
```


**Example 2:**

```
Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], num_wanted = 3, use_limit = 2
Output: 12
Explanation: The subset chosen is the first, second, and third item.
```


**Example 3:**

```
Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 1
Output: 16
Explanation: The subset chosen is the first and fourth item.
```


**Example 4:**

```
Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 2
Output: 24
Explanation: The subset chosen is the first, second, and fourth item.
```

**Note:**

1.  `1 <= values.length == labels.length <= 20000`
2.  `0 <= values[i], labels[i] <= 20000`
3.  `1 <= num_wanted, use_limit <= values.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    const indexs = Array(values.length).fill().map((_, i) => i)
    indexs.sort((a, b) => values[b] - values[a])
    
    const labelCounts = Array(20001).fill(0)
    let itemCount = 0
    let sum = 0
    for (let i = 0; i < indexs.length; i += 1) {
        const index = indexs[i]
        if (labelCounts[labels[index]] < use_limit) {
            labelCounts[labels[index]] += 1
            itemCount += 1
            sum += values[index]
            if (itemCount === num_wanted) return sum
        }
    }
    return sum
};
```