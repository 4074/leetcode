### [215\. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Difficulty: **Medium**  

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Heap](https://leetcode.com/tag/heap/)


Find the **k**th largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

**Example 1:**

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

**Example 2:**

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

**Note:**  
You may assume k is always valid, 1 ≤ k ≤ array's length.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const n = nums.length
    
    function swap(i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    
    function partition(p, r) {
        let i = p - 1
        
        for (let j = p; j < r; j += 1) {
            if (nums[j] < nums[r]) {
                i += 1
                swap(i, j)
            }
        }
        i += 1
        swap(i, r)
        return i
    }
    
    let low = 0
    let high = n - 1
    while (low < high) {
        const p = partition(low, high)
​
        if (n - p === k) return nums[p]
        if (n - p < k) {
            high = p - 1
        } else {
            low = p + 1
        }
    }
    
    return nums[low]
};
```