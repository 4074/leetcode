// Train Problem I
function TrainProblemI(ins, outs) {
    const stack = []
    const action = []
    for (let i=0; i<ins.length; i++) {
        stack.push(ins[i])
        action.push('in ' + ins[i])
        for (let j=0; j<outs.length;) {
            if (stack.length && outs[j] === stack[stack.length - 1]) {
                outs.shift()
                const n = stack.pop()
                action.push('out ' + n)
            } else {
                break
            }
        }
    }

    for (let k=0; k<outs.length; k++) {
        if (stack.length && outs[k] === stack[stack.length - 1]) {
            const m = stack.pop()
            action.push('out ' + m)
        } else {
            break
        }
    }
    
    if (stack.length) {
        console.log(false)
    } else {
        console.log(true, action)
    }
}

// TrainProblemI([1,2,3], [2,3,1])

var permute = function(nums) {
    var store = {}
    
    function f(rest) {
        const key = rest.join(',')
        if (store[key]) return store[key]

        var r = [], l = rest.length
        for (var i=0; i<l; i++) {
            var surfix = f(
                rest.slice(0, i).concat(
                    rest.slice(i+1, l+1)
                )
            )
            
            if (surfix.length) {
                for (var j=0; j<surfix.length; j++) {
                    r.push([rest[i]].concat(surfix[j]))
                }
            } else {
                r.push([rest[i]])
            }
            
        }

        store[key] = r

        return r
    }
    
    return f(nums)
};

console.log(permute([1,2,3]))