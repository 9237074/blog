
## 函数柯里化   
1. 当一个函数有多个参数的时候，先传递一部分参数调用它。（这部分参数以后永远不变）
2. 然后返回一个新的函数接收剩余的参数，返回结果
```js
    let checkAge =  min => (age => age>= min);
    let checkAge18 = checkAge(18);
    let checkAge20 = checkAge(20);
    checkAge18(24);
    checkAge18(20);
```

## 