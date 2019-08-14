# [Sparse Table算法（RMQ问题）](http://www.cppblog.com/menjitianya/archive/2014/06/26/207420.html)

## 背景

Sparse Table算法（简称ST算法）是针对RMQ问题的，什么是RMQ？

RMQ（Range Minimum/Maximum Query），即区间最值查询，是指这样一个问题：对于长度为n的数组arry[]，回答若干询问RMQ（A , i , j ）( 0<=i , j<=n-1 )，返回数列arry中下标在i，j之间的最小/大值。

这两个问题是在实际应用中经常遇到的问题，下面介绍一下解决这两种问题的比较高效的算法。当然，该问题也可以用线段树（也叫区间树）解决，算法复杂度为O(N)~O(logN)，这里我们暂不介绍。

其实想想，找一个区间最值，最简单的直接比较，复杂度也是O(n)，所以如果查找次数很少，用ST没有意义。ST的应用场景就是要对一个数串查询多次的情况。基本思想是对串中所有可能的区间组合的最值用二维数组保存，也就是所谓的预处理，查询时直接数组下标获取，O(1)的时间。下面采用动态规划来对数串进行预处理，也就是填充二维数组。

## 算法分析

算法分两步：1、预处理  2、询问


### 预处理

f[i][j] 表示 [i, i + 2j - 1]这个区间内的最小值所在数的下标。

1. 当j = 0，显然f[i][0] = i;

2. 当 j > 0, 由于这个区间长度必定是2的倍数，所以它一定能够拆成两个长度一样的子区间，即[i, i + 2j-1 - 1]和[i + 2j-1, i + 2j - 1]，仔细观察可以发现：

    f[i][j-1] 表示的区间是 [i, i + 2j-1 - 1]

    f[i + 2j-1][j-1] 表示的区间是 [i, i + 2j-1 - 1]

为了方便阅读，令x = f[i][j-1],   y = f[i + 2j-1][j-1]，所以f[i][j] = A[x] < A[y] ? x : y;


### 询问

询问的时候可以把原区间[l, r]拆成两个长度为2k的区间(区间之间允许有交集)，分别用f[l][k] 和 f[r-2k+1][k]表示两个区间内最小值所在的下标。并且k的取值要求能够使得 [l, l+2k-1] 和 [r-2k+1,r] 的并集 为 [l, r]。

于是 k为满足l+2k-1 <= r并且值最大，即2k <= r-l+1，则k <= log2(r-l+1), 又k为整数，所以k为log2(r-l+1)的下取整，由于1 <= r-l+1 <= n。

令x = f[l][k],   y = f[r-2k+1][k]，询问结果为：A[x] < A[y] ? x : y;

## 代码

```c++
#include<iostream>
#include<algorithm>
#include<cmath>
 
using namespace std;
 
//假设数组元素不超过1000个，则DP所用的数组大小为：
const int ROW = 1000 + 10;
const int COLUMN = 10 + 5;//log(1000)/log(2.0)~9.96
 
int maxArry[ROW][COLUMN];
int minArry[ROW][COLUMN];
 
void RMQ(int arry[], int arryLen)
{
	for (int i = 0; i < arryLen; i++)
	{
		maxArry[i][0] = arry[i];
		minArry[i][0] = arry[i];
	}
 
	int k = log(arryLen) / log(2.0);
 
	for (int j = 1; j <= k; j++)
	{
		for (int i = 0; i < arryLen; i++)
		{
			if (i + (1 << j) - 1 < arryLen)
			{
				maxArry[i][j] = max(maxArry[i][j - 1], maxArry[i + (1 << (j - 1))][j - 1]);
				minArry[i][j] = min(minArry[i][j - 1], minArry[i + (1 << (j - 1))][j - 1]);
			}
		}
	}
}
 
 
int main()
{
	int arry[] = { 3,2,4,5,6,8,1,2,9,7 };
	int len = sizeof(arry) / sizeof(int);
 
	RMQ(arry, len);
 
	cout << "数组的下标范围为：0 -- " << len - 1 << endl;
	cout << "请输入需要查询的下标范围（0 <= src <= des <= 9）: \n";
	int src, des;
	while (cin >> src >> des)
	{
		int k = log(des - src + 1.0) / log(2.0);
 
		int maxAns = max(maxArry[src][k], maxArry[des - (1 << k) + 1][k]);
		int minAns = min(minArry[src][k], minArry[des - (1 << k) + 1][k]);
 
		cout << "最大值是： " << maxAns << ", 最小值是： " << minAns << endl;
	}
 
	return 0;
}
```