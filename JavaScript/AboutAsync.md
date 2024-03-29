# 事件循环

JavaScript 是单线程的，非阻塞的。

JS 最初主要是用于与用户互动及操作 DOM。如果是多线程则会有很多复杂问题需要处理。为了避免多线程操作 DOM 带来的复杂性，JS 采用**单线程**。`web worker`也受主线程控制。

JS 通过**事件循环**`event loop`实现**非阻塞**。

## 浏览器事件循环

执行栈和事件队列。

- 执行栈：同步代码执行，按照顺序添加到**执行栈**中。
- 事件队列： 异步代码执行，遇到异步事件不会等待到它返回结果，而是将事件挂起，继续执行执行栈中的其他任务。当异步事件返回结果，将它放入事件队列中。被放入的事件队列不会立刻执行回调，而是等待当前执行栈中所有任务执行完毕，主线程空闲状态，主线程会去查找事件队列中是否有任务，如果有，则取出排在第一位的事件，将事件对应的回调放入执行栈，执行其中的同步代码。

### 宏任务和微任务

页面渲染事件，各种 IO 的完成事件等随时被添加到任务队列中，一直会保持先进先出的原则执行。我们不能准确地控制这些事件被添加到任务队列中地位置，但是这个时候如果突然有高优先级地任务需要尽快执行，那么一种类型的任务就不合适了。因此引入了**微任务**

宏任务主要有：

- script(整体代码)
- `setTimeout()` / `setInterval()`
- `postMessage`
- `I/O`
- UI 交互

微任务

- `new Promise().then()`
- `MutationObserver`(html5新特性)


### 运行机制
异步任务的返回结果会被放到一个任务队列中，根据异步事件的类型，这个事件实际上会被放到对应的宏任务和微任务队列中。

当当前执行栈为空时，主线程会查看微任务队列是否为空

- 不为空，依次执行队列中对应的回调，直到微任务队列为空，然后去宏任务队列中取最前面的事件，把当前的回调加到当前指向栈
- 为空，取宏任务队列中一个事件并将对应的回调加入当前栈

当前栈中执行完毕后会立刻处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

在事件循环中，每进行一次循环操作称为`tick`，每一次`tick`的任务处理模型是比较复杂的。关键步骤如下：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，将其添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中所有的微任务
- 当前宏任务执行完毕，立刻开始渲染
- 渲染完毕，JS 线程继续接管，然后开始下一个宏任务，从事件队列中获取。

## Node 下的事件循环

### 与浏览器的不同

node 与浏览器大致相同，不同的是 node 中有自己的一套模型。node 中事件循环的实现依赖`libuv`引擎，其存在几个阶段：如果是`node10`及之前的版本，`microtask`会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行`microtask`队列中的任务。`node`更新到 11 之后，`Event Loop`运行原理发生了变化，一旦执行一个阶段的宏任务，就会立刻执行微任务，和浏览器趋于一致。

