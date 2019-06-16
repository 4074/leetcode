### [4\. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Difficulty: **Hard**


There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume **nums1** and **nums2** cannot be both empty.

**Example 1:**

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

**Example 2:**

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // find short/long array
    var shorts, longs
    if (nums1.length <= nums2.length) {
        shorts = nums1
        longs = nums2
    } else {
        shorts = nums2
        longs = nums1
    }
    
    var m = shorts.length, n = longs.length
    var imin = 0, imax = shorts.length, i, j
    while (imin <= imax) {
        i = parseInt((imin + imax) / 2)
        j = parseInt((m + n + 1) / 2 - i)
        if (i > 0 && j < n && shorts[i-1] > longs[j]) {
            imax = i - 1
        } else if (j > 0 && i < m && longs[j - 1] > shorts[i]) {
            imin = i + 1
        } else {
            var maxLeft
            if (i === 0) {
                maxLeft = longs[j - 1]
            } else if (j === 0) {
                maxLeft = shorts[i - 1]
            } else {
                maxLeft = shorts[i - 1] >= longs[j - 1] ? shorts[i - 1] : longs[j - 1]
            }
            
            if ((m + n) % 2) {
                return maxLeft
            } else {
                var minRight
                if (i === m) {
                    minRight = longs[j]
                } else if (j === n) {
                    minRight = shorts[i]
                } else {
                    minRight = shorts[i] >= longs[j] ? longs[j] : shorts[i]
                }
                
                return (maxLeft + minRight) / 2
            }
        }
    }
};
```