### Rising Temperature

Difficulty: **Easy**

Given a `Weather` table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

```
+---------+------------+------------------+
| Id(INT) | Date(DATE) | Temperature(INT) |
+---------+------------+------------------+
|       1 | 2015-01-01 |               10 |
|       2 | 2015-01-02 |               25 |
|       3 | 2015-01-03 |               20 |
|       4 | 2015-01-04 |               30 |
+---------+------------+------------------+
```

For example, return the following Ids for the above Weather table:

```
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
```


#### My MySQL query

```
select a.Id
from Weather as a
inner join Weather as b
on to_days(b.Date) + 1 = to_days(a.Date)
where a.Temperature > b.Temperature
```

Runtime: 1030 ms
Beats 92.29% of mysql submissions.