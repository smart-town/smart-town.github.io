# 常用命令

此处主要是日常遇到的 Linux 上的一些命令记录，如字符串处理命令，防火墙命令等等。

## 将命令结果作为参数

- 使用反引号 \` \`:    
    反引号括起来的字符串被 shell 解释为命令行，在执行时， shell 首先执行该命令，并以它的标准输出作为结果取代整个反引号部分。
- 使用 `$()`： 效果与反引号相同\` \`
- 使用命令 `xargs`

使用示例：
```shell
# echo $(date)
echo `date`
# Thu Dec 9 17:02:10 CST 2021

# 同时创建多个文件
echo "one two three" | xargs touch
```

## 变量

- `$0` 脚本名
- `$1 ~ $9` 脚本的参数
- `$@` 所有参数
- `$#` 参数个数
- `$?` 前一个命令返回值
- `$$` 当前脚本进程的识别码
- `!!` 完整的上一条命令，包括参数。常见应用：权限不足执行失败时，使用`sudo !!`再尝试一次
- `$_` 上条命令的最后一个参数，应用：如`mkdir test_dir`后，使用`cd $_`即可进入对应目录

## 多个命令

命令可以使用`&&`或`||`联合使用，进行条件判断，决定是否执行其他命令。同一行的多个命令使用`;`分隔，以使其均可以执行。

## 通配

执行脚本时，经常需要提供形式类似的参数。bash 使我们可以轻松实现这一操作

- 通配符，可以使用`?`和`*`分别匹配一个或任意个字符。例如，对于`foo, foo1, foo2, foo10, bar`，`rm foo?`会删除`foo1, foo2`，而`rm foo*`则会删除除了`bar`之外的其余文件
- 花括号`{}`，当你有一系列指令，其中包含一段公共子程序时，可以用花括号展开这些命令，这在批量移动或转换文件时非常方便
    ```shell
    convert image.{png,jpg} # 会展开为 convert image.png image.jpg
    cp /path/to/{foo,bar,baz}.sh /newpath # 展开为 cp /path/to/foo.sh /path/to/bar.sh /path/to/baz.sh /newpath
    mv *{.py, .sh} folder # 结合通配符使用，会移动所有 *.py 和 *.sh 文件
    touch {foo,bar}/{a..h} # 创建 foo/a, foo/b, ... foo/h, bar/a, bar/b, bar/...h
    ```