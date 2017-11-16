### [178\. Rank Scores](https://leetcode.com/problems/rank-scores/description/)

Difficulty: **Medium**

Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.

```
+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
```

For example, given the above `Scores` table, your query should generate the following report (order by highest score):

```
+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
```

#### My Solution
```
# Write your MySQL query statement below
SET @row_num = 0;
​
SELECT
    s1.Score,
    s2.Rank
FROM
    scores s1
LEFT JOIN (
    SELECT
        Score,
        @row_num := @row_num + 1 AS Rank
    FROM
        (
            SELECT DISTINCT
                Score
            FROM
                scores
            ORDER BY
                Score DESC
        ) AS t1
) s2 ON s1.Score = s2.Score
ORDER BY
    Score DESC
```