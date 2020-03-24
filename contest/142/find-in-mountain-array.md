### [1095\. Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/)

Difficulty: **Hard**


_(This problem is an **interactive problem**.)_

You may recall that an array `A` is a _mountain array_ if and only if:

*   `A.length >= 3`
*   There exists some `i` with `0 < i < A.length - 1` such that:
    *   `A[0] < A[1] < ... A[i-1] < A[i]`
    *   `A[i] > A[i+1] > ... > A[A.length - 1]`

Given a mountain array `mountainArr`, return the **minimum** `index` such that `mountainArr.get(index) == target`.  If such an `index` doesn't exist, return `-1`.

**You can't access the mountain array directly.**  You may only access the array using a `MountainArray` interface:

*   `MountainArray.get(k)` returns the element of the array at index `k` (0-indexed).
*   `MountainArray.length()` returns the length of the array.

Submissions making more than `100` calls to `MountainArray.get` will be judged _Wrong Answer_.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

**Example 1:**

```
Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5\. Return the minimum index, which is 2.
```

**Example 2:**

```
Input: array = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.
```

**Constraints:**

1.  `3 <= mountain_arr.length() <= 10000`
2.  `0 <= target <= 10^9`
3.  `0 <= mountain_arr.get(index) <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    function findPeakIndex() {
        let left = 0, right = mountainArr.length() - 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const arr = [mountainArr.get(mid - 1) || -1, mountainArr.get(mid), mountainArr.get(mid + 1) || -1]
            if (arr[0] < arr[1]) {
                if (arr[1] > arr[2]) {
                    return mid
                } else {
                    left = mid + 1
                }
            } else {
                right = mid - 1
            }
        }
        return left
    }
    
    function findTargetIndex(left, right, side) {
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const v = mountainArr.get(mid)
            if (v === target) return mid
            if (v < target) {
                if (side === 'left') {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            } else {
                if (side === 'left') {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
        return mountainArr.get(left) === target ? left : Infinity
    }
    
    const peakIndex = findPeakIndex()
    const ans = Math.min(
        findTargetIndex(0, peakIndex, 'left'),
        findTargetIndex(peakIndex, mountainArr.length() - 1, 'right')
    )
    return ans === Infinity ? -1 : ans
};
```