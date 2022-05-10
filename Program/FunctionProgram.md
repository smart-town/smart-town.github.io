# 函数式编程

## 关于副作用

> 副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互。

副作用可能包含，但不限于：
- 更改文件系统
- 向数据库插入记录
- 发送 http 请求
- 打印 / log
- 获取用户输入
- DOM 查询
- 访问系统状态

**概括来讲，只要是跟函数外部环境发生的交互就都是副作用**——这一点可能会让你怀疑无副作用编程的可行性。函数式编程的哲学就是假定副作用是造成不正当行为的主要原因。

这并不是说要禁止一切副作用。而是说，要让他们在可控的范围内发生。

副作用让一个函数变得不纯是有道理的：从定义上来说，纯函数必须能够根据相同的输入返回相同的输出。如果函数要跟外部事物打交道，那么就无法保证这一点了。

## 追求“纯”的理由

### 可缓存性

首先，纯函数总是能够根据输入来做缓存。实现缓存的一种典型方式是`memoize`技术：
```js
var squareNumber = memoize(funcition(x) {return x*x})
squareNumber(4)
squareNumber(4) // 从缓存中读取输入值为 4 的结果

var memoize = function(f) {
    var cache = {}
    return function() {
        var arg_str = JSON.stringify(arguments)
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments)
        return cache[arg_str]
    }
}
```

值得注意的是，可以通过延迟执行的方式将不纯的函数转换为纯函数：

```js
var pureHttpCall = memoize(function(url, params) {
    return function() {return $.getJSON(url, params)}
})
```
这里有趣的地方在于并没有真正发送 http 请求，只是返回了一个函数，该函数之所以有资格成为纯函数，是因为它总是能够根据相同的输入返回相同的输出。即给定了`url`和`params`之后，它就只会返回同一个发送`http`请求的函数。这里的`memoize`函数没有问题，虽然它缓存的并不是 http 请求所返回的结果，而是生成的函数。

现在的重点是我们可以缓存任意一个函数，不管它看起来多么具有破坏性。

### 可移植/自文档化

纯函数完全是自给自足的，它需要的所有东西都能轻易获得。自给自足的好处是什么呢？首先，纯函数的依赖很明确，因此更易于观察和理解，没有偷偷摸摸的小动作。

纯函数对于其依赖必须诚实，这样我们就能知道它的目的。

相比不纯的函数，纯函数能够提供多得多的信息。其次，通过强迫“注入”依赖，或者将它们当作参数传递，我们的应用也更灵活。

命令式编程中“典型”的方法和过程都深深地根植于它们所在的环境中，通过状态、依赖和有效作用达成。传函数与此相反，它与环境无关，只要我们愿意，可以在任何地方运行它。

> 面向对象语言的问题是，它永远都要随身携带那些隐式的环境。你在只需要一个香蕉，但是却得到一个拿着香蕉的大猩猩，以及整个丛林

### 可测试性

纯函数让测试更加容易。我们不需要伪造一个“真实的”支付网关，或者每一次测试之前都要配置、之后都要断言，只需要简单地给函数一个输入，然后断言输出就好了。

### 合理性

很多人相信使用纯函数最大地好处是**引用透明性**`referential transparency`。如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么就可以说这段代码是引用透明的。

由于纯函数总是能够根据相同的输入返回相同的输出。所以它们就能够保证总是返回同一个结果，这也就保证了引用透明性。

### 并行代码

最后一点也是决定性的一点：我们可以并行运行任意纯函数。因为纯函数根本不需要访问共享的内存，而且根据其定义纯函数也不会因为副作用而进入竞争态。

并行代码在服务端 js 环境以及使用了 web worker 的浏览器中是非常容易实现的。
