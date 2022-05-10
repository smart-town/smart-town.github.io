# 柯里化 curry

curry 的概念很简单：**只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数**。

你可以一次性地调用`curry`函数，也可以每次只传一个参数，分多次调用。

```js
var add = function(x) {
    return function(y) {
        return x+y
    }
}
var increment = add(1)
var addTen = add(10)

increment(2)
addTen(2)
```

这里定义了一个`add`函数，它接受一个参数并返回一个新的函数，调用`add`之后，返回的函数就通过闭包的形式记住了`add`的第一个参数。一次性调用它实在繁琐，但是可以使用特殊的`curry`帮助函数来使得这类函数的定义和调用更加容易。

来创建一些`curry`函数试试看

```js
var curry = require('lodash').curry
var match = curry(function(what, str) {
    return str.match(what)
})
var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement)
})
var filter = curry(function(f, ary) {
    return ary.filter(f)
})
var map = curry(function(f, ary) {
    return ary.map(f)
})
```

这里遵循的是一种简单，但是也是非常重要的模式。即策略性地把要操作地数据（String,Array）放到最后一个参数里。到使用它们地时候你就知道为什么这样做了。

```js
match(/\s+/g, 'hello world')
match('\s+'/g)('hello world')
var hasSpace = match(/\s+/g)
hasSpaces('hello worlld')

hasSpaces('spaceless')

filter(hasSpaces, ["tori_spelling", "tori amos"])

var findSpaces = filter(hasSpaces)
findSpaces(["Tori_spelling", "tori amos"])

var noVowels = replace(/[aeiou]/ig)
var censored = noVowels("*)
censored("Chocolate Rain")
```

这里表明的是一种“预加载”函数的能力，通过传递一到两个参数调用函数，就能得到一个记住了这些参数的新函数。

`curry`的用处非常广泛，就像在`hasSpaces`、`findSpaces`中看到的那样，只需要给函数一些参数，就能得到一个新函数。用`map`将参数是单个元素的函数包裹一下，就能把它转化为参数为数组的函数。

```js
var getChildren = function(x) {return x.childNodes}
var allTheChildren = map(getChildren)
```

只传给函数一部分参数通常也叫做**局部调用**，能够大量减少样板代码，如上面的`allTheChildren`函数，如果用普通的 `map` 函数：

```js
var allTheChildren = function(elements) {
    return _.map(elements, getChildren)
}
```

通常我们不定义直接操作数组的函数，因为只需要内联调用`map(getChildren)`就能够达到目的。这一点同样适用于`sort`、`filter`等其他高阶函数（即参数或返回值为函数的函数）

当我们谈论纯函数的时候，我们说它接受一个输入返回一个输出。curry 做的正是这样：每传递一个参数调用函数，就返回一个新函数处理剩余的参数。这就是一个输入对应一个输出。

哪怕输出是另一个函数，它也是纯函数。当然 curry 函数也允许一次传递多个参数，但是这只是出于减少`()`的方便

