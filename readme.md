
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

# 原地分割的快速排序, 减少空间复杂度

伪代码

```javascript
 procedure quicksort(a, left, right)
     if right > left
         select a pivot value a[pivotIndex]
         pivotNewIndex := partition(a, left, right, pivotIndex)
         quicksort(a, left, pivotNewIndex-1)
         quicksort(a, pivotNewIndex+1, right)
 

function partition(a, left, right, pivotIndex)
 {
     pivotValue = a[pivotIndex]
     swap(a[pivotIndex], a[right]) // 把pivot移到結尾
     storeIndex = left
     for i from left to right-1
     {
         if a[i] <= pivotValue
          {
             swap(a[storeIndex], a[i])
             storeIndex = storeIndex + 1
          }
     }
     swap(a[right], a[storeIndex]) // 把pivot移到它最後的地方
     return storeIndex
 }

```

# 最大子序列和

## 分治算法
- 将大问题拆分为多个子问题，这道题目可以拆分为求中点左边序列的最大值，求中点右边序列的最大值，求包括中点的中间序列的最大值，比较这三者，取最大值
- 左边两边序列的最大值，分别再次重复拆分，直到只有一个元素
- 中间序列的最大值，l,m,r  求 m -> l  的最大值  + m + m -> r 的最大值

## 线性
- _._

