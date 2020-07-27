
## 快速排序

快速排序最坏情况下事件复杂度为O(n * n)， 平均情况下为O(logn)

快速排序采用分治的思路，也就是将大的问题，转为几个小的问题处理

- [ 8, 7, 3, 4, 5, 1] 取一个哨兵 4 
- 将数组转为3个部分  [3, 1] [4] [8, 7, 5]
- 再将每个部分重复之前的操作，将每个部分的数组只剩下一个元素时，排序结束

```javascript

    function quickSort(q) {
        let lessList = [], greaterList = [], pivotList = []
        if (q.length == 0 || q.length == 1) {
            return q
        }
        let len = q.length
        let pivot = Math.floor(len / 2) 
        for (let i = 0; i < len; i ++) {
            if (q[i] < q[pivot]) {
                lessList.push(q[i])
            } else if (q[i] > q[pivot]) {
                greaterList.push(q[i])
            } else {
                pivotList.push(q[pivot])
            }
        }
        return [...quickSort(lessList), ...[pivotList], ...quickSort(greaterList)]
    }
```

