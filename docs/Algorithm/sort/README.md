---
sidebar: auto
---
# 排序

## 选择排序
```js
selectSort(arr){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[minIndex];){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}
```
## 插入排序
```js
insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let t = arr[i];
        let j;
        for(j=i; j-1>=0 && arr[j-1] > 0; j--){
            arr[j] = arr[j-1];
        }
        arr[j] = t
    }
}
```
## 归并排序

```js
merge(left, right){
    let temp=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            temp.push(left.shift());
        }else{
            temp.push(right.shift());
        }
    }
    console.log(temp.concat(left,right))
    //left和right长度不一样时，直接连接剩下的长的部分（本身有序）
    return temp.concat(left,right);
}
mergeSort(arr){
    if(arr.length<=1)return arr;
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right));
}
```

# 快速排序

```js

```