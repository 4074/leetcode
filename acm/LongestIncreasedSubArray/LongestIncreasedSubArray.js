function solution(arr) {
    var store = [], max
    for (var i=0; i<arr.length; i++) {
        max = 1
        for (var j=0; j<i; j++) {
            if (arr[i] > arr[j]) {
                max = Math.max(max, store[j] + 1)
            }
        }
        store[i] = max
    }

    max = 0
    for (var m=0; m<store.length; m++) {
        max = Math.max(max, store[m])
    }

    return max
}

console.log(
    solution(
        [1,2,3,3,5,0,1]
    )
)