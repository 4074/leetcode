function findLongestString(source) {
    let start = 0, end = 0
    for (let i=1; i<source.length; i++) {
        if (end === i-1) {
            if (start > 0) {
                if (source[start - 1] === source[i]) {
                    start -= 1
                    end = i
                }
            }
        } else {
            let has = false
            for (let j=0; j < i; j++) {
                let s = 0
                while(s <= i-j-s) {
                    if (source[s+j] !== source[i-s]) {
                        break
                    } else if (s+j === i-s) {
                        has = true
                        break
                    }
                    s++
                }
                if (has) {
                    if (i-j > end-start) {
                        start = j
                        end = i
                    }
                    break
                }
            }
        }
    }

    return [start, end]
}

function findLongestString2(source) {
    let status = {}, start, end

    function f(i, j) {
        const key = i + '-' + j
        if (typeof status[key] === "boolean") {
            return status[key]
        }

        if (i >= j) {
            status[key] = true
            return true
        }

        if (source[i] === source[j]) {
            return f(i+1, j-1)
        } else {
            status[key] = false
            return false
        }
    }

    for (let i=0; i<source.length; i++) {
        if (source.length - i <= end - start) break;
        for(let j=source.length-1; j>=i; j--) {
            if (j - i <= end - start) break;
            if (f(i, j)) {
                start = i
                end = j
                break
            }
        }
    }

    return [start, end]
}

console.log(
    findLongestString2('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
)