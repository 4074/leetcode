# [Stock Exchange](http://poj.org/problem?id=3903)

**Problem Description**

The world financial crisis is quite a subject. Some people are more relaxed while others are quite anxious. John is one of them. He is very concerned about the evolution of the stock exchange. He follows stock prices every day looking for rising trends. Given a sequence of numbers p1, p2,...,pn representing stock prices, a rising trend is a subsequence pi1 < pi2 < ... < pik, with i1 < i2 < ... < ik. John’s problem is to find very quickly the longest rising trend.

**Input**

Each data set in the file stands for a particular set of stock prices. A data set starts with the length L (L ≤ 100000) of the sequence of numbers, followed by the numbers (a number fits a long integer). 
White spaces can occur freely in the input. The input data are correct and terminate with an end of file.

**Output**

The program prints the length of the longest rising trend. 
For each set of data the program prints the result to the standard output from the beginning of a line.

**Sample Input**

6 <br>
5 2 1 4 5 3 <br>
3  <br>
1 1 1 <br>
4 <br>
4 3 2 1

**Sample Output**

3<br>
1<br>
1

**Resolution**

```js
function solution(prices) {
    let list = [], start, end
    for (let i=0; i<prices.length; i++) {
        if (!list.length || prices[i] > list[list.length - 1]) {
            list.push(prices[i])
        } else {
            start = 0
            end = list.length - 1
            
            while(end > start) {
                const index = Math.ceil((end - start) / 2) + start
                if (list[index - 1] > prices[i]) {
                    end = index - 1
                } else if (list[index] < prices[i]) {
                    start = index
                } else {
                    start = index
                    end = index
                }
            }

            list[end] = prices[i]
        }
    }

    return list.length
}
```