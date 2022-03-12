# 关于New

`new`运算符创建一个“实例”

## 实际操作

1. 创建一个空对象`{}`
2. 为步骤一的对象添加`__proto__`，将该属性链接至构造函数的原型对象
3. 将步骤一创建的对象作为`this`上下文
4. 如果该函数没有返回对象，返回`this`

```js
// An example 
function Obj() {
    this.attr1 = 'ok'
}

// New process
function newFunc(Func, *args) {
    let a = {}
    let r = Func.apply(a, args)
    a.__proto__ = Obj.prototype
    if (r !== undefined) {
        a = r;
    }
    return a;
}

let newO = newFunc(Obj)
```


