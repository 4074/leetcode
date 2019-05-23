/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const length = height.length
    let water = 0

    let i = 0
    while (i < length - 1) {
        let w = 0
        let max_index = i + 1
        for (let j = i+1; j < length; j++) {
            
            if (height[j] >= height[i]) {
                water += w
                i = j
                break
            } else {
                w += height[i] - height[j]

                if (height[max_index] < height[j]) {
                    max_index = j
                }
                if (j === length - 1) {
                    w = 0
                    for (var n = i+1; n < max_index; n++) {
                        w += height[max_index] - height[n]
                    }
                    water += w
                    i = max_index
                }
            }
        }
    }

    return water
 };

const source = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(source))