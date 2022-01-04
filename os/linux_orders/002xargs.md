# xargs 命令

> [原文链接](https://ruanyifeng.com/blog/2019/08/xargs-tutorial.html)

## 标准输入和管道

管道将前面的输出`stdout`作为后面的输入`stdin`。Unix 中的命令都带有参数，有的命令可以接收**标准输入**作为参数，如`cat /etc/passwd | grep root`。但是大多数命令**不接受**标准输入作为参数，只能在命令行输入参数，这会导致无法使用管道命令传递参数。

而`xargs`的作用就是将标准输入转换为命令行参数。

## xargs 使用

语法规则： `xargs [-options] [command]`

真正执行的命令，紧跟在`xargs`的后面，接受`xargs`传递的参数。

## xargs 单独使用

大多数使用，`xargs`都是与管道一起使用，但是其也可以单独使用。`xargs`背后默认的命令为`echo`即：`xargs`相当于`xargs echo`

## xargs 选项

- `-d`: 分隔符。默认`xargs`以空格作为分隔符。使用`-d`可以更改分隔符
- `-p`和`-t`: 使用`xargs`后，由于存在参数的转换，有时候需要确认执行的是什么命令，此时使用`-p`可以打印要执行的命令，并询问用户是否执行，输入`y`后可执行；`-t`则直接打印要执行的命令并执行
- `-L`: 如果标准输入包含多行，使用该参数指定多少行作为一个命令行参数
- `-n`: `-L`解决多行问题，但是有时候用户会在一行输入多项，`-n`指定每次将多少项作为命令行参数。

## 常用示例
