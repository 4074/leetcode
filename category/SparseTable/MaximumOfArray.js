/**
 * @param {number[]} arr
 */
function MaximumOfArray(arr) {
    var store = [], log2 = [0, 0], n = arr.length
    
    for(var i=2; i<=arr.length; i++) {
        log2[i] = log2[i-1]
        if (1<<(log2[i] + 1) === i) {
            log2[i] += 1
        }
    }

    for (var i=0; i<n; i++) {
        store[i] = [i]
    }
    
    for (var j=1; j<31; j++) {
        for (var i=0; i<n; i++) {
            if (i + (1<<j) - 1 < n) {
                store[i][j] = store[i][j-1]
                var p = i + (1<<(j-1))
                if (arr[store[p][j-1]] > arr[store[i][j]]) {
                    store[i][j] = store[p][j-1]
                }
            }
        }
    }

    
    // console.log(log2)
    // console.log(store)

    this.log2 = log2
    this.store = store
    this.arr = arr
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @return {number}
 */
MaximumOfArray.prototype.query = function(left, right) {
    var k = Math.floor(this.log2[right - left + 1]), i2 = right - (1<<k) + 1
    var result = this.arr[this.store[left][k]]
    if (this.store[i2] && this.store[i2][k]) {
        result = Math.max(result, this.arr[this.store[i2][k]])
    }
    return result
};

var arr = String(Math.random()).replace('0.', '').split('').map(i => parseInt(i))
console.log(arr)
console.log(
    new MaximumOfArray(arr).query(0, 3)
)