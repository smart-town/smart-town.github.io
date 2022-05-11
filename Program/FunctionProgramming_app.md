# 示例应用

## 声明式代码

转变观念，不再指示计算机如何工作，而是指出我们明确希望得到的结果。这种做法与那种需要时刻关心所有细节的命令式编程相比，会让你轻松很多。

与命令式不同，声明式需要我们写表达式，而不是一步一步的指示。

以 SQL 为例，它就没有“先做这个，再做那个”的命令。有的只是一个指明我们想要从数据库取什么数据的表达式。至于如何取数据则是由它自己决定的。以后数据库升级也好，SQL 引擎优化也好，根本不需要更改查询语句。这是因为，有多种方式解析一个表达式并得到相同的结果。

大多数人一开始是不太容易理解“声明式”这个概念的，看看例子：
```js
// 命令式
var makes = []
for (i = 0; i < cars.length; i++) {
    makes.push(cars[i].make)
}

// 声明式
var makes = cars.map((car) => car.make)
```

命令式的循环要求你必须先实例化一个数组，而且执行完这个实例化语句之后，解释器才继续执行后面的代码。然后再直接迭代`cars`列表。手动增加计数器，把各种零散的东西都展示出来。

使用`map`的版本是一个表达式，它对执行顺序没有要求，而且`map`函数如何迭代，返回的数组如何收集，都有很大的自由度。它指明的是**做什么**，不是**怎么做**，因此它是**声明式代码**

除了更加清晰和简洁之外，`map`函数还可以进一步优化，这样一来我们的应用代码就无需改动了。

再看一个例子：
```js
// 命令式
var authenticate = function(form) {
    var user = toUser(form)
    return logIn(user)
}
// 声明式
var authenticate = compose(logIn, toUser)
```

虽然命令式版本不一定是错的，但是还是硬编码了那种一步接一步的执行方式，而`compose`表达式只是简单地指出了这样一个事实：用户验证是`toUser`和`logIn`两个行为的组合。再次说明，**声明式为潜在的代码更新提供了支持，使得我们的应用代码成为了一种高级规范**。

因为声明式代码不指定执行顺序，因此它天然适合并行运算。它与纯函数一起解释了为何函数式编程是未来并行计算的一个不错选择——我们不需要做什么就能实现一个并行/并发系统

### 一个函数式的 flickr

下面以一种声明式的、可组合的方式创建一个应用。暂时还是会使用一点副作用，但是会将副作用降到最低，让它们与纯函数式代码分离开来。
```
// flickr.js
requirejs.config({
    paths: {
        ramda: 'http:...',
        jquery: 'https:...',
    }
})
require(['ramda', 'jquery'], 
    function (_, $) {
        var trace = _.curry(function(tag, x) {
            console.log(tag, x)
            return x
        })

        var Impure = {
            getJSON: _.curry(function(callback, url) {
                $.getJSON(url, callback)
            }),
            setHtml: _.curry(function(sel, html) {
                $(sel).html(html)
            }),
        }
        var url = function (term) {
            return `https://api.com/services/do?tags=${term}`
        }
        var app = _.compose(Impure.getJSON(trace("response")), url)
        app("cats")
    }
)
```