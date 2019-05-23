/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return step(0, height.length - 1)
    function step(start, end) {
        let water = 0, left_max = 0, max = 0, right_max = 0

        if (end - start <= 1) return 0;

        for (let i = start; i <= end; i++) {
            if (height[i] > height[max]) {
                left_max = max
                max = i
                right_max = max
            } else {
                if (height[i] >= height[right_max] || right_max == max) {
                    right_max = i
                }
            }
        }

        for (let l = left_max + 1; l < max; l++) {
            water += height[left_max] - height[l]
        }
        for (let r = max + 1; r < right_max; r++) {
            water += height[right_max] - height[r]
        }

        water += trap(height.slice(start, left_max + 1))
        water += trap(height.slice(right_max, end + 1))

        return water
    }
 };

const source = [4,2,3]
console.log(trap(source))