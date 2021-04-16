(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{376:function(a,t,s){"use strict";s.r(t);var v=s(42),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[a._v("#")]),a._v(" 内存管理")]),a._v(" "),s("ul",[s("li",[a._v("内存：由可读写单元组成，表示一片可操作空间")]),a._v(" "),s("li",[a._v("管理：人为的去操作一片空间的申请、使用和释放")]),a._v(" "),s("li",[a._v("内存管理：开发者主动申请空间、使用空间、释放空间")]),a._v(" "),s("li",[a._v("管理流程：申请-使用-释放")])]),a._v(" "),s("h3",{attrs:{id:"javascript中的内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的内存管理"}},[a._v("#")]),a._v(" JavaScript中的内存管理")]),a._v(" "),s("ul",[s("li",[a._v("申请内存空间")]),a._v(" "),s("li",[a._v("使用内存空间")]),a._v(" "),s("li",[a._v("释放内存空间")])]),a._v(" "),s("h3",{attrs:{id:"javascript中的垃圾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的垃圾"}},[a._v("#")]),a._v(" JavaScript中的垃圾")]),a._v(" "),s("ul",[s("li",[a._v("JavaScript中内存管理是自动的")]),a._v(" "),s("li",[a._v("对象不再被引用时是垃圾")]),a._v(" "),s("li",[a._v("对象不能从根上访问到时是垃圾")])]),a._v(" "),s("h3",{attrs:{id:"javascript中的可达对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的可达对象"}},[a._v("#")]),a._v(" JavaScript中的可达对象")]),a._v(" "),s("ul",[s("li",[a._v("可以访问到的对象就是可达对象（引用、作用域）")]),a._v(" "),s("li",[a._v("可达的标准就是从根出发是否能够被找到")]),a._v(" "),s("li",[a._v("JavaScript中的根就可以理解为是全局变量对象")])]),a._v(" "),s("h3",{attrs:{id:"gc算法是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc算法是什么"}},[a._v("#")]),a._v(" GC算法是什么")]),a._v(" "),s("ul",[s("li",[a._v("GC是一种机制，垃圾回收器完成具体的工作")]),a._v(" "),s("li",[a._v("工作的内容就是查找垃圾释放空间、回收空间")]),a._v(" "),s("li",[a._v("算法就是工作时查找和回收所遵循的规则")])]),a._v(" "),s("h3",{attrs:{id:"常见gc算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见gc算法"}},[a._v("#")]),a._v(" 常见GC算法")]),a._v(" "),s("ul",[s("li",[a._v("引用计数")]),a._v(" "),s("li",[a._v("标记清除")]),a._v(" "),s("li",[a._v("标记整理")]),a._v(" "),s("li",[a._v("分代回收")])]),a._v(" "),s("h4",{attrs:{id:"引用计数算法实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法实现原理"}},[a._v("#")]),a._v(" 引用计数算法实现原理")]),a._v(" "),s("ul",[s("li",[a._v("核心思想：设置引用数，判断当前引用数是否为0")]),a._v(" "),s("li",[a._v("引用计数器")]),a._v(" "),s("li",[a._v("引用关系改变是修改引用数字")]),a._v(" "),s("li",[a._v("引用数字为0时立即回收")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" user1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" user2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" user3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" nameList "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 全局作用域")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// num1 = 1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// num2 = 2")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 局部作用域")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" num2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h5",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),s("ul",[s("li",[a._v("发现垃圾立即回收")]),a._v(" "),s("li",[a._v("最大限度减少程序暂停")])]),a._v(" "),s("h5",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("ul",[s("li",[a._v("无法回收循环引用的对象")]),a._v(" "),s("li",[a._v("资源消耗大")])]),a._v(" "),s("h4",{attrs:{id:"标记清除算法实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法实现原理"}},[a._v("#")]),a._v(" 标记清除算法实现原理")]),a._v(" "),s("ul",[s("li",[a._v("核心思想：分标记和清除二个阶段完成")]),a._v(" "),s("li",[a._v("遍历所有对象找标记活动对象")]),a._v(" "),s("li",[a._v("遍历所有对象清除没有标记对象")]),a._v(" "),s("li",[a._v("回收相应的空间")])]),a._v(" "),s("h5",{attrs:{id:"优点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),s("ul",[s("li",[a._v("解决循环引用不能回收问题")])]),a._v(" "),s("h5",{attrs:{id:"缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("ul",[s("li",[a._v("空间碎片化")])]),a._v(" "),s("h4",{attrs:{id:"标记整理算法实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记整理算法实现原理"}},[a._v("#")]),a._v(" 标记整理算法实现原理")]),a._v(" "),s("ul",[s("li",[a._v("标记整理可以看作是标记清除的增强")]),a._v(" "),s("li",[a._v("标记阶段的操作和标记清除一致")]),a._v(" "),s("li",[a._v("清除阶段会先执行整理，移动对象位置")])]),a._v(" "),s("h5",{attrs:{id:"优点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),s("ul",[s("li",[a._v("减少碎片化空间")])]),a._v(" "),s("h5",{attrs:{id:"缺点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("ul",[s("li",[a._v("不会立即回收垃圾对象")])]),a._v(" "),s("h4",{attrs:{id:"认识v8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识v8"}},[a._v("#")]),a._v(" 认识V8")]),a._v(" "),s("ul",[s("li",[a._v("V8是一款主流的JavaScript执行引擎")]),a._v(" "),s("li",[a._v("V8采用即时编译")]),a._v(" "),s("li",[a._v("V8内存设限")])]),a._v(" "),s("h4",{attrs:{id:"v8垃圾回收策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8垃圾回收策略"}},[a._v("#")]),a._v(" V8垃圾回收策略")]),a._v(" "),s("ul",[s("li",[a._v("采用分代回收的思想")]),a._v(" "),s("li",[a._v("内存分为新生代、老生代")])]),a._v(" "),s("h5",{attrs:{id:"v8中常用gc算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8中常用gc算法"}},[a._v("#")]),a._v(" V8中常用GC算法")]),a._v(" "),s("ul",[s("li",[a._v("分代回收")]),a._v(" "),s("li",[a._v("空间复制")]),a._v(" "),s("li",[a._v("标记清除")]),a._v(" "),s("li",[a._v("标记整理")]),a._v(" "),s("li",[a._v("标记增量")])]),a._v(" "),s("h4",{attrs:{id:"v8内存分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8内存分配"}},[a._v("#")]),a._v(" V8内存分配")]),a._v(" "),s("ul",[s("li",[a._v("V8内存空间一分为二")]),a._v(" "),s("li",[a._v("小空间用于存储新生代对象（32M｜16M）")]),a._v(" "),s("li",[a._v("新生代指的是存活时间较短的对象")])]),a._v(" "),s("h5",{attrs:{id:"新生代对象回收实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新生代对象回收实现"}},[a._v("#")]),a._v(" 新生代对象回收实现")]),a._v(" "),s("ul",[s("li",[a._v("回收过程采用复制算法 + 标记整理")]),a._v(" "),s("li",[a._v("新生代内存区分为二个等大小空间")]),a._v(" "),s("li",[a._v("使用空间为From，空闲空间为To")]),a._v(" "),s("li",[a._v("活动对象存储与From空间")]),a._v(" "),s("li",[a._v("标记整理后将活动对象拷贝至To")]),a._v(" "),s("li",[a._v("From与To交换空间完成释放")])]),a._v(" "),s("h6",{attrs:{id:"回收细节说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回收细节说明"}},[a._v("#")]),a._v(" 回收细节说明")]),a._v(" "),s("ul",[s("li",[a._v("拷贝过程中可能出现晋升")]),a._v(" "),s("li",[a._v("晋升就是将新生代对象移动至老生代")]),a._v(" "),s("li",[a._v("一轮GC还存活的新生代需要晋升")]),a._v(" "),s("li",[a._v("To空间的使用率超过25%")])]),a._v(" "),s("h5",{attrs:{id:"老年代对象说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#老年代对象说明"}},[a._v("#")]),a._v(" 老年代对象说明")]),a._v(" "),s("ul",[s("li",[a._v("老年代对象存放在右侧老生代区域")]),a._v(" "),s("li",[a._v("64位操作系统1.4G，32位擦操作系统700M")]),a._v(" "),s("li",[a._v("老年代对象就是指存活时间较长的对象")])]),a._v(" "),s("h5",{attrs:{id:"老年代对象回收实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#老年代对象回收实现"}},[a._v("#")]),a._v(" 老年代对象回收实现")]),a._v(" "),s("ul",[s("li",[a._v("主要采用标记清除、标记整理、增量标记算法")]),a._v(" "),s("li",[a._v("首先使用标记清除完成垃圾空间的回收")]),a._v(" "),s("li",[a._v("采用标记整理进行空间优化")]),a._v(" "),s("li",[a._v("采用增量标记进行效率优化")])]),a._v(" "),s("h5",{attrs:{id:"细节对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#细节对比"}},[a._v("#")]),a._v(" 细节对比")]),a._v(" "),s("ul",[s("li",[a._v("新生代区域垃圾回收使用空间换时间")]),a._v(" "),s("li",[a._v("老生代区域垃圾回收不适合复制算法")])]),a._v(" "),s("h3",{attrs:{id:"使用performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用performance"}},[a._v("#")]),a._v(" 使用Performance")]),a._v(" "),s("ul",[s("li",[a._v("GC的目的是为了实现内存空间的良性循环")]),a._v(" "),s("li",[a._v("良性循环的基石是合理使用")]),a._v(" "),s("li",[a._v("时刻关注才能确定是否合理")]),a._v(" "),s("li",[a._v("Performance时刻监控内存")])]),a._v(" "),s("h4",{attrs:{id:"performance-使用步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-使用步骤"}},[a._v("#")]),a._v(" Performance 使用步骤")]),a._v(" "),s("ul",[s("li",[a._v("打开浏览器输入目标地址")]),a._v(" "),s("li",[a._v("进入开发人员工具面板，选择Performance")]),a._v(" "),s("li",[a._v("开启录制功能，访问具体界面")]),a._v(" "),s("li",[a._v("执行界面中记录的内存信息")])]),a._v(" "),s("h4",{attrs:{id:"内存问题的外在表现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存问题的外在表现"}},[a._v("#")]),a._v(" 内存问题的外在表现")]),a._v(" "),s("ul",[s("li",[a._v("页面出现延迟加载或经常性暂停")]),a._v(" "),s("li",[a._v("页面持续性出现糟糕的性能")]),a._v(" "),s("li",[a._v("页面的性能随时间延长越来越差")])]),a._v(" "),s("h4",{attrs:{id:"监控内存的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控内存的几种方式"}},[a._v("#")]),a._v(" 监控内存的几种方式")])])}),[],!1,null,null,null);t.default=_.exports}}]);