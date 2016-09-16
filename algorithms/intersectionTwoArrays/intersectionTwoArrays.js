/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    nums1.forEach(function(num) {
        if (result.indexOf(num) >= 0) return;
        if (nums2.indexOf(num) >= 0) result.push(num); 
    });
    return result;
};