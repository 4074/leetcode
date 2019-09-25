var gcd = function(a, b) {
    var t
    if(a < b) t = b, b = a, a = t; 
    while(b !== 0) t = b, b = a%b, a = t;
    return a
}

var lcm = function(a, b) {
    return a * b / gcd(a, b)
}

var nthUglyNumber = function(n, a, b, c) {
    var l = 1, r = Math.pow(10, 9) * 2
    var ab = lcm(a, b), ac = lcm(a, c), bc = lcm(b, c), abc = lcm(ab, c)

    while (l < r) {
        var m = Math.floor((r - l) / 2) + l
        var k = Math.floor(m/a) + Math.floor(m/b) + Math.floor(m/c) - Math.floor(m/ab) - Math.floor(m/ac) - Math.floor(m/bc) + Math.floor(m/abc)
        if (k >= n) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l
}

console.log(
    nthUglyNumber(3, 2, 3, 5),
    nthUglyNumber(5, 2, 11, 13),
    nthUglyNumber(1000000000, 2, 217983653, 336916467),
)