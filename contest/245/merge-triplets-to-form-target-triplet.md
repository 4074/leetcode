### [1899\. Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


A **triplet** is an array of three integers. You are given a 2D integer array `triplets`, where `triplets[i] = [a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub>, c<sub style="display: inline;">i</sub>]` describes the `i<sup>th</sup>` **triplet**. You are also given an integer array `target = [x, y, z]` that describes the **triplet** you want to obtain.

To obtain `target`, you may apply the following operation on `triplets` **any number** of times (possibly **zero**):

*   Choose two indices (**0-indexed**) `i` and `j` (`i != j`) and **update** `triplets[j]` to become `[max(a<sub style="display: inline;">i</sub>, a<sub style="display: inline;">j</sub>), max(b<sub style="display: inline;">i</sub>, b<sub style="display: inline;">j</sub>), max(c<sub style="display: inline;">i</sub>, c<sub style="display: inline;">j</sub>)]`.
    *   For example, if `triplets[i] = [2, 5, 3]` and `triplets[j] = [1, 7, 5]`, `triplets[j]` will be updated to `[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]`.

Return `true` _if it is possible to obtain the_ `target` _**triplet**_ `[x, y, z]` _as an **element** of_ `triplets`_, or_ `false` _otherwise_.

**Example 1:**

```
Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
The target triplet [2,7,5] is now an element of triplets.
```

**Example 2:**

```
Input: triplets = [[1,3,4],[2,5,8]], target = [2,5,8]
Output: true
Explanation: The target triplet [2,5,8] is already an element of triplets.
```

**Example 3:**

```
Input: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].
- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].
The target triplet [5,5,5] is now an element of triplets.
```

**Example 4:**

```
Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]
Output: false
Explanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.
```

**Constraints:**

*   `1 <= triplets.length <= 10<sup>5</sup>`
*   `triplets[i].length == target.length == 3`
*   `1 <= a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub>, c<sub style="display: inline;">i</sub>, x, y, z <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  const possible = [0, 0, 0]
  const [tf, ts, tt] = target
  
  for (const [f, s, t] of triplets) {
    if (f === tf && s <= ts && t <= tt) possible[0] = 1
    if (f <= tf && s === ts && t <= tt) possible[1] = 1
    if (f <= tf && s <= ts && t === tt) possible[2] = 1
  }
  
  return possible[0] && possible[1] && possible[2]
};
```