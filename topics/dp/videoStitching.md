### [1024\. Video Stitching](https://leetcode.com/problems/video-stitching/)

Difficulty: **Medium**


You are given a series of video clips from a sporting event that lasted `T` seconds.  These video clips can be overlapping with each other and have varied lengths.

Each video clip `clips[i]` is an interval: it starts at time `clips[i][0]` and ends at time `clips[i][1]`.  We can cut these clips into segments freely: for example, a clip `[0, 7]` can be cut into segments `[0, 1] + [1, 3] + [3, 7]`.

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event (`[0, T]`).  If the task is impossible, return `-1`.

**Example 1:**

```
Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
Output: 3
Explanation: 
We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
```

**Example 2:**

```
Input: clips = [[0,1],[1,2]], T = 5
Output: -1
Explanation: 
We can't cover [0,5] with only [0,1] and [0,2].
```

**Example 3:**

```
Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
Output: 3
Explanation: 
We can take clips [0,4], [4,7], and [6,9].
```

**Example 4:**

```
Input: clips = [[0,4],[2,8]], T = 5
Output: 2
Explanation: 
Notice you can have extra video after the event ends.
```

**Note:**

1.  `1 <= clips.length <= 100`
2.  `0 <= clips[i][0], clips[i][1] <= 100`
3.  `0 <= T <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    const dp = Array(T + 1).fill(-1)
    clips.sort((a, b) => a[0] <= b[0] ? -1 : 1)
    
    dp[0] = 0
    for (let i = 1; i <= T; i += 1) {
        for (const clip of clips) {
            if (clip[1] >= i && dp[clip[0]] >= 0) {
                if (dp[i] < 0 || dp[clip[0]] + 1 < dp[i]) {
                    dp[i] = dp[clip[0]] + 1
                }
            }
        }
    }
    
    return dp[T]
};
```

greedly
```javascript
/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    const dp = Array(T + 1).fill(-1)
    clips.sort((a, b) => a[0] <= b[0] ? -1 : 1)
    
    let count = 0, start = 0, end = 0, i = 0
    
    while (end < T) {
        while (i < clips.length && clips[i][0] <= start) {
            end = Math.max(end, clips[i][1])
            i += 1
        }
        if (start === end) return -1
        start = end
        count += 1
    }
    
    return count
};
```