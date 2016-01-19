class Solution {
    func isPowerOfTwo(n: Int) -> Bool {
        var m = n
        while m != 0 && m % 2 == 0 {
            m =  m / 2
        }
        return m == 1
    }
}