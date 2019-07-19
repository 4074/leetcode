function solution(prices) {
    let list = [], start, end
    for (let i=0; i<prices.length; i++) {
        if (!list.length || prices[i] > list[list.length - 1]) {
            list.push(prices[i])
        } else {
            start = 0
            end = list.length - 1
            
            while(end > start) {
                const index = Math.ceil((end - start) / 2) + start
                if (list[index - 1] > prices[i]) {
                    end = index - 1
                } else if (list[index] < prices[i]) {
                    start = index
                } else {
                    start = index
                    end = index
                }
            }

            list[end] = prices[i]
        }
    }

    return list.length
}

console.log(
    solution([5, 2, 1, 4, 5, 3])
)