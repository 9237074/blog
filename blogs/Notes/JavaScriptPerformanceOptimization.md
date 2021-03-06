

### 内存管理
+ 内存：由可读写单元组成，表示一片可操作空间
+ 管理：人为的去操作一片空间的申请、使用和释放
+ 内存管理：开发者主动申请空间、使用空间、释放空间
+ 管理流程：申请-使用-释放

### JavaScript中的内存管理
+ 申请内存空间
+ 使用内存空间
+ 释放内存空间

### JavaScript中的垃圾
+ JavaScript中内存管理是自动的
+ 对象不再被引用时是垃圾
+ 对象不能从根上访问到时是垃圾

### JavaScript中的可达对象
+ 可以访问到的对象就是可达对象（引用、作用域）
+ 可达的标准就是从根出发是否能够被找到
+ JavaScript中的根就可以理解为是全局变量对象

### GC算法是什么
+ GC是一种机制，垃圾回收器完成具体的工作
+ 工作的内容就是查找垃圾释放空间、回收空间
+ 算法就是工作时查找和回收所遵循的规则

### 常见GC算法
+ 引用计数
+ 标记清除
+ 标记整理
+ 分代回收

#### 引用计数算法实现原理
+ 核心思想：设置引用数，判断当前引用数是否为0
+ 引用计数器
+ 引用关系改变是修改引用数字
+ 引用数字为0时立即回收
```js
const user1 = {age: 11}
const user2 = {age: 22}
const user3 = {age: 33}

const nameList = [user1.age, user2.age, user3.age, ]

function fn(){
    // 全局作用域
    // num1 = 1
    // num2 = 2

    // 局部作用域
    const num1 = 1
    const num2 = 2
}

fn()

```
##### 优点
+ 发现垃圾立即回收
+ 最大限度减少程序暂停

##### 缺点
+ 无法回收循环引用的对象
+ 资源消耗大

#### 标记清除算法实现原理
+ 核心思想：分标记和清除二个阶段完成
+ 遍历所有对象找标记活动对象
+ 遍历所有对象清除没有标记对象
+ 回收相应的空间

##### 优点
+ 解决循环引用不能回收问题

##### 缺点
+ 空间碎片化

#### 标记整理算法实现原理
+ 标记整理可以看作是标记清除的增强
+ 标记阶段的操作和标记清除一致
+ 清除阶段会先执行整理，移动对象位置

##### 优点
+ 减少碎片化空间

##### 缺点
+ 不会立即回收垃圾对象

#### 认识V8
+ V8是一款主流的JavaScript执行引擎
+ V8采用即时编译
+ V8内存设限

#### V8垃圾回收策略
+ 采用分代回收的思想
+ 内存分为新生代、老生代
##### V8中常用GC算法
+ 分代回收
+ 空间复制
+ 标记清除
+ 标记整理
+ 标记增量

#### V8内存分配
+ V8内存空间一分为二
+ 小空间用于存储新生代对象（32M｜16M）
+ 新生代指的是存活时间较短的对象

##### 新生代对象回收实现
+ 回收过程采用复制算法 + 标记整理
+ 新生代内存区分为二个等大小空间
+ 使用空间为From，空闲空间为To
+ 活动对象存储与From空间
+ 标记整理后将活动对象拷贝至To
+ From与To交换空间完成释放

###### 回收细节说明
+ 拷贝过程中可能出现晋升
+ 晋升就是将新生代对象移动至老生代
+ 一轮GC还存活的新生代需要晋升
+ To空间的使用率超过25%

##### 老年代对象说明
+ 老年代对象存放在右侧老生代区域
+ 64位操作系统1.4G，32位擦操作系统700M
+ 老年代对象就是指存活时间较长的对象

##### 老年代对象回收实现
+ 主要采用标记清除、标记整理、增量标记算法
+ 首先使用标记清除完成垃圾空间的回收
+ 采用标记整理进行空间优化
+ 采用增量标记进行效率优化

##### 细节对比
+ 新生代区域垃圾回收使用空间换时间
+ 老生代区域垃圾回收不适合复制算法

### 使用Performance
+ GC的目的是为了实现内存空间的良性循环
+ 良性循环的基石是合理使用
+ 时刻关注才能确定是否合理
+ Performance时刻监控内存

#### Performance 使用步骤
+ 打开浏览器输入目标地址
+ 进入开发人员工具面板，选择Performance
+ 开启录制功能，访问具体界面
+ 执行界面中记录的内存信息

#### 内存问题的外在表现
+ 页面出现延迟加载或经常性暂停
+ 页面持续性出现糟糕的性能
+ 页面的性能随时间延长越来越差

#### 监控内存的几种方式