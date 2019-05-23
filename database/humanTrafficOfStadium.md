### [601\. Human Traffic of Stadium](https://leetcode.com/problems/human-traffic-of-stadium/)

Difficulty: **Hard**


X city built a new stadium, each day many people visit it and the stats are saved as these columns: **id**, **visit_****date**, **people**

Please write a query to display the records which have 3 or more consecutive rows and the amount of people more than 100(inclusive).

For example, the table `stadium`:

```
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
```

For the sample data above, the output is:

```
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
```

**Note:**  
Each day only have one row record, and the dates are increasing with id increasing.


#### Solution

Language: **MySQL**

```mysql
# Write your MySQL query statement below
select distinct s1.*
from stadium s1, stadium s2, stadium s3
where s1.people >= 100 and s2.people >= 100 and s3.people >= 100
and (
    (s1.id = s2.id - 1 and s1.id = s3.id - 2)
    or
    (s1.id = s2.id + 1 and s1.id = s3.id - 1)
    or 
    (s1.id = s2.id + 2 and s1.id = s3.id + 1)
)
order by s1.id
```