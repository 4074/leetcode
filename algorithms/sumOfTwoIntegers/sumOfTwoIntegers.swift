class Solution {
    func getSum(a: Int, _ b: Int) -> Int {
        return b == 0 ? a : getSum(a ^ b, (a & b) << 1)
    }
}
