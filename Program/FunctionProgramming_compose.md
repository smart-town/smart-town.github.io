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
p1 = function(x) {
        head(reverse(x))
    }
function(toUpperCase, p1) {
    return function(x) {
        toUpperCase(p1(x))
    }
}
// 或者
compose(compose(toUpperCase, head), reverse)
p1 = function(x) {
    return toUpperCase(head(x))
}
function(p1, reverse) {
    return function(x) {
        toUppserCase(head(reverse(x)))
    }
}
```
因为如何为`compose`的调用分组不重要，所以结果都是一样的。这也让我们有能力写一个可变的组合`variadic compose`：
```js
var lastUpper = compose(toUpperCase, head, reverse)
lastUpper(['jump', 'round', 'upper') // 'UPPER'
```

结合律的一大好处是任何一个函数分组都可以被拆分开来，然后再以它们自己的组合方式打包在一起：

```js
var loudLastUpper = compose(exclaim, toUpperCase, head, reverse)
//或
var last = compose(head, reverse)
var loudLastUpper = compose(exclaim, toUpperCase, last)
// 或
var last = compose(head, reverse)
var angry = compose(exclaim, toUpperCase)
var loudLastUpper = compose(angry, last)
```
关于如何组合并没有标准答案。通常来说，最佳实践是让组合可重用。就像`last`和`angry`一样。如果熟悉《重构》的话，你可能会认识到这个过程叫做`extract method`，只不过不需要关心对象的状态。

## pointfree

`pointfree`模式指的是，永远不必说出你的数据。函数无需提及将要操作的数据是什么样的，一等公民的函数，柯里化以及组合协作起来非常有助于实现这种模式：
```js
// 非 pointfree，提及到了 word 数据
var snakeCase = function(word) {
    return word.toLowerCase().replace(/\s+/ig, '_')
}
// pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase)
```
看到`replace`被局部调用了吗？这里所做的事情就是通过管道把数据在接受单个参数的函数间传递。利用`curry`，我们能够做到让每个函数都先接收数据，然后操作数据，最后再把数据传递到下一个函数那里去。另外注意在`pointfree`版本中，不需要`word`参数就能构造函数；在非`pointfree`的版本中，必须要有`word`才能进行一切操作：
```js
// 非 pointfree
var initials = function (name) {
    return name.split(' ').map(compose(toUpperCase, head)).join(". ")
}
// pointfree
var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '))
```
此外，`pointfree`模式能够帮助我们减少不必要的命名，让代码保持简洁和通用。对函数式代码来说，`pointfree`是非常好的石蕊试验，因为它能告诉我们一个函数是否接受输入返回输出的小函数。比如`while`循环是不能组合的，不过你也要警惕，`pointfree`就像是一把双刃剑，有时候也能混淆视听，并非所有的函数式代码都是`pointfree`的，**不过也没有关系，可以使用它时就用，不能使用时使用普通函数。**

## debug

组合的一个常见错误是，在没有局部调用之前，就组合类似`map`这样接受两个参数的函数
```js
// 错误做法
var latin = compose(map, angry, reverse)
latin(["forge", "eyes"]) // 我们传给了`angry`一个数组，根本不知道最后传给 map 的是什么

// 正确做法
var latin = compose(map(angry), reverse)
latin(['frog', 'eyes'])
```

如果在`debug`时遇到了困难，可以使用下面这个实用但是不纯的`trace`函数来追踪代码执行情况：
```js
var trace = curry(function(tag, x) {
    console.log(tag, x)
    return x
})
var dasherize = compose(join('-'), toLower, split(' '), replace(/\s{2,}/ig, ' ')
dashrize('The word is a vampire')
// TypeError: Can not find 'apply' of undefined

// trace 一下
var dasherize = compose(join('-'), toLower, trace("after split"), split(' '), replace(/\s{2,}/ig, ' '))
// after split ['The', 'world', 'is', 'a', 'vampire']

```

## 范畴学

范畴学`category theory`是数学中的一个抽象分支，能够形式化注入集合论，类型论，逻辑学等数学分支中的一些概念。范畴学主要处理对象、态射（morphism）、变化式，而这些概念与编程联系紧密。

在范畴学中，有一个概念叫做**范畴**。有着以下这些组件`component`的搜集`collection`就构成了一个范畴：
- 对象的搜集
- 态射的搜集
- 态射的组合
- identity 这个独特的态射

范畴学抽象到足以模拟任何事物，不过目前我们最关心的还是类型和函数。所以将范畴学运用到它们身上看看：

### 对象的搜集
对象就是数据类型，例如`String`，`Boolean`等，通常我们将数据类型视作所有可能的值的一个集合。像`Boolean`可以看作`[true, false]`的集合。`Number`可以看作实数的集合。将类型当作集合对待是有好处的，因为可以利用集合论处理类型
### 态射的搜集
态射是标准的、普通的纯函数
### 态射的组合
这就是这里介绍的**组合**，上面讨论过`compose`是符合结合律的，这并非巧合，结合律是范畴学中对任何组合都适用的一个特性。
### identity 独特态射
介绍一个名为`id`的实用函数，这个函数接受随便什么输入然后原封不动地返回：`var id = function(x) {return x}`

这有什么用？暂时先将它当作一个可以替代给定值地函数——一个假装自己是普通数据的函数。

`id`函数和组合在一起使用简直完美，西安面这个特性对所有一元函数`f`都成立：`compose(id, f) == compose(f, id) == f`

这就是实数的单位元。如果这还不清楚明白，别着急，慢慢理解它的无用性。很快就会到处使用`id`了。不过暂时将其当作一个替代给定值的函数。这对写`pointfree`的代码非常有用。

以上就是类型和函数的范畴。如果是第一次接触这些概念，可能会有些迷糊。不知道它是什么，为什么用。不过，就现在，在本章，你至少可以认为它向我们提供了有关组合的知识——比如结合律和单位律。

除了类型和函数，还有什么范畴呢？比如可以定义一个有向图，以节点为对象，以边为态射，以路径链接为组合，还可以定义一个实数类型，以所有实数为对象，以`=>`为态射。范畴的总数是无限的。

## 总结
组合像一系列管道那样将不同的函数联系在一起，数据就可以也必须在其中流动。毕竟纯函数就是输入对输出。所以打破这个链条就是不尊重输出。就会让应用一无是处。

我们认为组合是高于其他所有原则的设计原则，因为组合让我们的的代码简单而富有可读性。另外范畴学在应用架构、模拟副作用和保证正确性方面扮演重要角色。

