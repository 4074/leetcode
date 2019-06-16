/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O((m+n)/2)
var findMedianSortedArrays = function(nums1, nums2) {
       var length = nums1.length + nums2.length
       var isOdd = length % 2 === 1
       var index = 0, max = !isOdd ? (length / 2) : (length - 1) / 2
       var i = 0, j = 0, medians = 0
       while (index <= max) {
           var num
           if (i >= nums1.length) {
               num = [nums2[j]]
               j++
           } else if (j >= nums2.length) {
               num = [nums1[i]]
               i++
           } else {
               if (nums1[i] > nums2[j]) {
                   num = [nums2[j]]
                   j++
               } else {
                   num = [nums1[i]]
                   i++
               }
           }
           
           if (index === max || (!isOdd && index === max - 1)) {
               medians += parseFloat(num)
           }
           
           index++
       }
       
       return isOdd ? medians : medians/2
   };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O(log(min(m,n)))
var findMedianSortedArrays2 = function(nums1, nums2) {
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

const r = findMedianSortedArrays2([4,5], [1,2,3])
console.log(r)