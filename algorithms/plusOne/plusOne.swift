class Solution {
    func plusOne(digits: [Int]) -> [Int] {
        var result = [Int]()
        var hasCarry = 1
        var count = digits.count
        
        for index in 1...count {
            var value = digits[count-index] + hasCarry
            if value > 9 {
                result.insert(0, atIndex: 0)
                hasCarry = 1
            }else{
                result.insert(value, atIndex: 0)
                hasCarry = 0
            }
        }
        
        if hasCarry == 1 {
            result.insert(1, atIndex: 0)
        }
        
        return result
    }
}