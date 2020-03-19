### [1125\. Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)

Difficulty: **Hard**


In a project, you have a list of required skills `req_skills`, and a list of `people`.  The i-th person `people[i]` contains a list of skills that person has.

Consider a _sufficient team_: a set of people such that for every required skill in `req_skills`, there is at least one person in the team who has that skill.  We can represent these teams by the index of each person: for example, `team = [0, 1, 3]` represents the people with skills `people[0]`, `people[1]`, and `people[3]`.

Return **any** sufficient team of the smallest possible size, represented by the index of each person.

You may return the answer in any order.  It is guaranteed an answer exists.

**Example 1:**

```
Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
Output: [0,2]
```

**Example 2:**

```
Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
Output: [1,2]
```

**Constraints:**

*   `1 <= req_skills.length <= 16`
*   `1 <= people.length <= 60`
*   `1 <= people[i].length, req_skills[i].length, people[i][j].length <= 16`
*   Elements of `req_skills` and `people[i]` are (respectively) distinct.
*   `req_skills[i][j], people[i][j][k]` are lowercase English letters.
*   Every skill in `people[i]` is a skill in `req_skills`.
*   It is guaranteed a sufficient team exists.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillIndex = new Map()
    let target = 0
    for (let i = 0; i < req_skills.length; i += 1) {
        skillIndex.set(req_skills[i], i)
        target |= 1 << i
    }
    
    const peopleValue = []
    for (const skills of people) {
        let v = 0
        for (const k of skills) {
           if (skillIndex.has(k)) {
               v |= 1 << skillIndex.get(k)
           } 
        }
        peopleValue.push(v)
    }
    
    let ans
    function dfs(start, selected, value) {
        if (ans && selected.length >= ans.length) return
        if (value === target) {
            if (!ans || ans.length > selected.length) {
                ans = [...selected]
                return
            }
        }
        
        for (let i = start; i < peopleValue.length; i += 1) {
            if ((value | peopleValue[i]) === value) continue
            selected.push(i)
            dfs(i + 1, selected, value | peopleValue[i])
            selected.pop()
        }
    }
    
    dfs(0, [], 0)
    
    return ans
};
```

DP Recursive
```javascript
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillIndex = new Map()
    let target = 0
    for (let i = 0; i < req_skills.length; i += 1) {
        skillIndex.set(req_skills[i], i)
        target |= 1 << i
    }
    
    const peopleValue = []
    for (const skills of people) {
        let v = 0
        for (const k of skills) {
           if (skillIndex.has(k)) {
               v |= 1 << skillIndex.get(k)
           } 
        }
        peopleValue.push(v)
    }
    
    const mem = Array(target).fill(0)
    function dp(value) {
        if (value === target) return []
        if (!mem[value]) {
            let min
            for (let i = 0; i < peopleValue.length; i += 1) {
                const p = peopleValue[i]
                if ((p | value) !== value) {
                    const r = dp(p | value)
                    if (!min || r.length < min.length) {
                        min = [i, ...r]
                    }
                }
            }
            mem[value] = min
        }
        return mem[value]
    }
    
    return dp(0)
};
```

DP Loop
```javascript
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillIndex = new Map()
    let target = 0
    for (let i = 0; i < req_skills.length; i += 1) {
        skillIndex.set(req_skills[i], i)
        target |= 1 << i
    }
    
    const peopleValue = []
    for (const skills of people) {
        let v = 0
        for (const k of skills) {
           if (skillIndex.has(k)) {
               v |= 1 << skillIndex.get(k)
           } 
        }
        peopleValue.push(v)
    }
    
    const dp = Array(target + 1).fill()
    dp[0] = []
    for (let i = 0; i < peopleValue.length; i += 1) {
        for (let j = 0; j <= target; j += 1) {
            if (dp[j]) {
                const n = peopleValue[i] | j
                if (!dp[n] || dp[j].length + 1 < dp[n].length) {
                    dp[n] = [...dp[j], i]
                }
            }
        }
    }
    
    return dp[target]
};
```

ES6 Improved
```javascript
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillIndex = new Map()
    const target = (1 << req_skills.length) - 1
    
    for (const [i, skill] of req_skills.entries()) {
        skillIndex.set(skill, i)
    }
    
    const peopleValue = people.map((skills) => {
        let v = 0
        for (const k of skills) {
           if (skillIndex.has(k)) v |= 1 << skillIndex.get(k)
        }
        return v
    })
    
    const dp = Array(target + 1).fill()
    
    dp[0] = []
    for (const [i, pv] of peopleValue.entries()) {
        for (let j = 0; j <= target; j += 1) {
            if (dp[j]) {
                const v = pv | j
                if (!dp[v] || dp[j].length + 1 < dp[v].length) {
                    dp[v] = [...dp[j], i]
                }
            }
        }
    }
    
    return dp[target]
};
```