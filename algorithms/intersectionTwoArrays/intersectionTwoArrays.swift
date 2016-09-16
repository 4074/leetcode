class Solution {
    func intersection(nums1: [Int], _ nums2: [Int]) -> [Int] {
        var result = [Int]()
        for num in nums1 {
            if result.indexOf(num) != nil {
                continue
            } else if nums2.indexOf(num) != nil {
                result.append(num)
            }
        }
        return result
    }
}