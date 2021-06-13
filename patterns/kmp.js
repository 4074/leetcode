function lps(s) {
  const res = Array(s.length).fill(0)

  let k = 0
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[k]) {
      k += 1
      res[i] = k
    } else {
      if (k) {
        k = res[k - 1]
        i -= 1
      } else {
        res[i] = 0
      }
    }
  }

  return res
}

function match(s, p) {
  if (s.length < p.length) return -1
  if (s === p || !p) return 0
  const next = lps(p)
  let k = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === p[k]) {
      k += 1
    } else {
      if (k) {
        k = next[k - 1]
        i -= 1
      } else {
        k = 0
      }
    }

    if (k === p.length) return i - k + 1
  }

  return -1
}

console.log(match('aabaaac', 'aac'))
console.log(match('hello', 'll'))