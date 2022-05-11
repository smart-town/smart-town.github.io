# 代码组合

```js
var compose = function(f, g) {
    return function(x) {
        return f(g(x))
    }
}
```
这就是**组合**，`f`和`g`都是函数，`x`是它们之间通过“管道”传输的值。

**组合**看起来是在饲养函数，你就是饲养员，选择两个有特点又被你喜欢的函数，让他们结合，产下一个崭新的函数：

```js
var toUpperCase = function(x) {return x.toUpperCase()}
var exclaim = function(x) {return x + '!'}
var shout = compose(exclaim, toUpperCase)
shout("send in clowns")
// => SEND IN CLOWNS!
```
两个函数组合之后返回了一个新的函数是完全合理的：**组合某种类型的两个元素本来就应该生成一个该类型的新元素**。

在`compose`的定义中，`g`将先于`f`执行。因此就创建了一个从右到左的数据流。这样做的可读性远远高于嵌套一大堆的函数调用。如果不用组合，可能是这样：`var shout = function(x) {return exclaim(toUpperCase(x))}`

**让代码从右向左运行，而不是由内而外**。来看一个顺序很重要的例子：
```js
var head = function(x) {return x[0]}
var reverse = reduce(function(acc,x) {return [x].concat(acc)}, []) 
var last = compose(head, reverse)
last(['jump', 'round', 'upper'])
// upper
```

`reverse`反转列表。`head`取列表中的第一个元素。所以结果就得到了一个`last`函数。虽然它的性能不高，但是这个组合函数的执行顺序是显而易见的。尽管我们可以自定义一个自左向右的版本，但是从右向左更能反映数学上的含义，是的，组合的概念直接来自于数学课本。实际上，现在是时候去看看所有组合都有的一个特性了:`/*结合律*/ var associative = compose(f, compose(g, h)) == compose(compose(f, g), h)`

这个特性就是**结合律**，符合结合律意味着不管你是把`g`和`f`分到一组，还是`f`和`h`分到一组，都不重要，所以可以这样：
```js
compose(toUpperCase, compose(head, reverse))
// 或者
compose(compose(toUpperCase, head), compose(reverse))
```