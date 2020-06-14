### [5454\. Least Number of Unique Integers after K Removals](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/)

Difficulty: **Medium**


Given an array of integers `arr` and an integer `k`. Find the _least number of unique integers_ after removing **exactly** `k` elements**.**

**Example 1:**

```
Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
```

**Example 2:**

```
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
```

**Constraints:**

*   `1 <= arr.length <= 10^5`
*   `1 <= arr[i] <= 10^9`
*   `0 <= k <= arr.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = new Map()
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const count = Array.from(map.values()).sort((a, b) => a - b)
​
    while (count.length && count[0] <= k) {
        k -= count[0]
        count.shift()
    }
    
    return count.length
};
```