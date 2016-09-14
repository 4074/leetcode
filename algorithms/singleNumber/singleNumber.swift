class Solution {
    func singleNumber(nums: [Int]) -> Int {
        var result = 0
        for num in nums {
            result = num ^ result
        }
        return result
    }
}
