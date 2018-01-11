/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

let sum = function (nums, target) {
    let result = []

    function find(nums, target, index, list) {
        if (target === 0) {
            result.push(list)
            return
        }

        if (nums.length === 0 || index >= nums.length) {
            return
        }

        find(
            nums,
            target - nums[index],
            index + 1,
            [...list, nums[index]]
        )
        find(nums, target, index + 1, list)
    }

    find(nums, target, 0, [])

    return result
}

console.log(sum([2, 7, 11, 15, 3, 4, 5, -1, 10], 9))